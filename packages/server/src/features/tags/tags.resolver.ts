import { Arg, Authorized, Mutation, Query, Resolver } from 'type-graphql';
import { Inject, Service } from 'typedi';
import { Tag } from '@blog/prisma';
import {
  TagModel,
  CreateTagInput,
  TagService,
} from '@blog/server/features/tags';
import { RoleValues } from '@blog/server/config';
import { ApolloError } from 'apollo-server-errors';

@Service()
@Resolver()
class TagResolver {
  @Inject('TagService')
  private readonly tagService: TagService;

  @Authorized([RoleValues.Admin])
  @Mutation(() => TagModel)
  async createTag(
    @Arg('input', () => CreateTagInput, { nullable: false })
    input: CreateTagInput
  ): Promise<Tag> {
    if (await this.tagService.checkExists(input))
      throw new ApolloError('Tag already exists');
    return (await this.tagService.create(input)) as TagModel;
  }

  @Query(() => [TagModel])
  async allTags(): Promise<Tag[]> {
    return (await this.tagService.getAll()) as TagModel[];
  }
}

export default TagResolver;
