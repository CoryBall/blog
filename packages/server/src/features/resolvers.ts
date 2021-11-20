import { AuthResolver } from '@blog/server/features/auth';
import { StorageResolver } from '@blog/server/features/storage';
import { UserResolver } from '@blog/server/features/users';
import { PostResolver } from '@blog/server/features/posts';
import { CommentResolver } from '@blog/server/features/comments';
import { TagResolver } from '@blog/server/features/tags';

export {
  AuthResolver,
  UserResolver,
  PostResolver,
  CommentResolver,
  StorageResolver,
  TagResolver,
};
