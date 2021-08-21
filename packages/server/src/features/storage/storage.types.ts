import { ArgsType, Field, ObjectType } from 'type-graphql';

@ObjectType()
class UploadProgress {
  @Field()
  complete: number;
  @Field()
  total: number;
  fileName: string;
}

@ArgsType()
class UploadProgressArgs {
  @Field()
  fileName: string;
}

@ObjectType()
class FileProgress {
  @Field()
  complete: number;
  @Field()
  total: number;
  @Field()
  percent(): number {
    return (this.complete / this.total) * 100;
  }
  fileName: string;
}

export { UploadProgress, UploadProgressArgs, FileProgress };
