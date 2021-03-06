import {
  Arg,
  Args,
  Mutation,
  Publisher,
  PubSub,
  Resolver,
  ResolverFilterData,
  Root,
  Subscription,
} from 'type-graphql';
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { Inject, Service } from 'typedi';
import LoggerService from '@blog/server/features/logger';
import { Image } from '@blog/server/models';
import {
  UploadProgress,
  FileProgress,
  UploadProgressArgs,
  StorageService,
} from '@blog/server/features/storage';

const uploadProgressTopic = 'UPLOAD_PROGRESS';

@Service()
@Resolver()
class StorageResolver {
  @Inject() private storageService: StorageService;
  @Inject() private readonly loggerService: LoggerService;

  @Mutation(() => Image)
  async uploadImage(
    @Arg('file', () => GraphQLUpload, { nullable: false }) file: FileUpload,
    @PubSub(uploadProgressTopic)
    notifyAboutUploadProgress: Publisher<FileProgress>
  ): Promise<Image> {
    return await this.storageService.uploadImage(
      file,
      notifyAboutUploadProgress
    );
  }

  @Subscription(() => FileProgress, {
    topics: 'UPLOAD_PROGRESS',
    filter: ({
      payload,
      args,
    }: ResolverFilterData<FileProgress, UploadProgressArgs>) => {
      return payload.fileName === args.fileName;
    },
  })
  uploadStatus(
    @Root() progress: FileProgress,
    @Args(() => UploadProgressArgs) uploadArgs: UploadProgressArgs
  ): UploadProgress {
    const { fileName } = uploadArgs;
    this.loggerService.logger.info(`SUBSCRIPTION HIT. fileName: ${fileName}`);
    return progress;
  }
}

export default StorageResolver;
