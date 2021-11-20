import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  bearer: Scalars['String'];
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isDeleted: Scalars['Boolean'];
  body: Scalars['String'];
  authorId: Scalars['String'];
  author: User;
  postId: Scalars['String'];
  post: Post;
};

export type CreateCommentInput = {
  body: Scalars['String'];
};

export type CreatePostInput = {
  title: Scalars['String'];
  body: Scalars['String'];
};

export type CreateTagInput = {
  name: Scalars['String'];
};


export type EditPostInput = {
  title: Scalars['String'];
  body: Scalars['String'];
  tagIds: Array<Scalars['String']>;
};

export type FileProgress = {
  __typename?: 'FileProgress';
  complete: Scalars['Float'];
  total: Scalars['Float'];
  percent: Scalars['Float'];
};

export type Image = {
  __typename?: 'Image';
  filename: Scalars['String'];
  mimetype: Scalars['String'];
  encoding: Scalars['String'];
  url: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login?: Maybe<AuthPayload>;
  uploadImage: Image;
  createPost: Post;
  publishPost: Post;
  likePost: Scalars['Boolean'];
  unlikePost: Scalars['Boolean'];
  editPost: Post;
  createTag: Tag;
  createComment: Comment;
  deleteComment: Scalars['Boolean'];
};


export type MutationLoginArgs = {
  code: Scalars['String'];
};


export type MutationUploadImageArgs = {
  file: Scalars['Upload'];
};


export type MutationCreatePostArgs = {
  input: CreatePostInput;
};


export type MutationPublishPostArgs = {
  postId: Scalars['ID'];
};


export type MutationLikePostArgs = {
  postId: Scalars['ID'];
};


export type MutationUnlikePostArgs = {
  postId: Scalars['ID'];
};


export type MutationEditPostArgs = {
  input: EditPostInput;
  postId: Scalars['ID'];
};


export type MutationCreateTagArgs = {
  input: CreateTagInput;
};


export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
  postId: Scalars['ID'];
};


export type MutationDeleteCommentArgs = {
  commentId: Scalars['ID'];
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isDeleted: Scalars['Boolean'];
  slug: Scalars['String'];
  title: Scalars['String'];
  body: Scalars['String'];
  published: Scalars['Boolean'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  views: Scalars['Float'];
  likes: Scalars['Float'];
  authorId: Scalars['String'];
  author: User;
  tags: Array<Scalars['String']>;
};

export type PostLikes = {
  __typename?: 'PostLikes';
  users: Array<User>;
  likes: Scalars['Float'];
};

export type PostViews = {
  __typename?: 'PostViews';
  users: Array<User>;
  views: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  me: User;
  allDrafts: Array<Post>;
  allPosts: Array<Post>;
  myPosts: Array<Post>;
  getPost?: Maybe<Post>;
  allTags: Array<Tag>;
  allComments: Array<Comment>;
};


export type QueryGetPostArgs = {
  slug?: Maybe<Scalars['String']>;
  postId?: Maybe<Scalars['ID']>;
};


export type QueryAllCommentsArgs = {
  postId: Scalars['ID'];
};

export type Role = {
  __typename?: 'Role';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  uploadStatus: FileProgress;
  postViews: PostViews;
  postLikes: PostLikes;
  newPostComments: Comment;
};


export type SubscriptionUploadStatusArgs = {
  fileName: Scalars['String'];
};


export type SubscriptionNewPostCommentsArgs = {
  postId: Scalars['String'];
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['String'];
  name: Scalars['String'];
  posts: Array<Post>;
};


export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  email: Scalars['String'];
  roleId: Scalars['ID'];
  role: Role;
  image: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  code: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'bearer'>
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'createdAt' | 'name' | 'email' | 'image'>
  ) }
);

export type AllPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPostsQuery = (
  { __typename?: 'Query' }
  & { allPosts: Array<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'slug' | 'title' | 'views' | 'likes' | 'tags' | 'publishedAt'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name' | 'createdAt' | 'image'>
    ) }
  )> }
);

export type MyPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyPostsQuery = (
  { __typename?: 'Query' }
  & { myPosts: Array<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'slug' | 'title' | 'views' | 'likes' | 'tags' | 'publishedAt'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name' | 'createdAt' | 'image'>
    ) }
  )> }
);


export const LoginDocument = gql`
    mutation login($code: String!) {
  login(code: $code) {
    bearer
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const MeDocument = gql`
    query me {
  me {
    id
    createdAt
    name
    email
    image
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const AllPostsDocument = gql`
    query allPosts {
  allPosts {
    id
    slug
    title
    views
    likes
    tags
    author {
      id
      name
      createdAt
      image
    }
    publishedAt
  }
}
    `;

/**
 * __useAllPostsQuery__
 *
 * To run a query within a React component, call `useAllPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllPostsQuery(baseOptions?: Apollo.QueryHookOptions<AllPostsQuery, AllPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllPostsQuery, AllPostsQueryVariables>(AllPostsDocument, options);
      }
export function useAllPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllPostsQuery, AllPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllPostsQuery, AllPostsQueryVariables>(AllPostsDocument, options);
        }
export type AllPostsQueryHookResult = ReturnType<typeof useAllPostsQuery>;
export type AllPostsLazyQueryHookResult = ReturnType<typeof useAllPostsLazyQuery>;
export type AllPostsQueryResult = Apollo.QueryResult<AllPostsQuery, AllPostsQueryVariables>;
export const MyPostsDocument = gql`
    query myPosts {
  myPosts {
    id
    slug
    title
    views
    likes
    tags
    author {
      id
      name
      createdAt
      image
    }
    publishedAt
  }
}
    `;

/**
 * __useMyPostsQuery__
 *
 * To run a query within a React component, call `useMyPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyPostsQuery(baseOptions?: Apollo.QueryHookOptions<MyPostsQuery, MyPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyPostsQuery, MyPostsQueryVariables>(MyPostsDocument, options);
      }
export function useMyPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyPostsQuery, MyPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyPostsQuery, MyPostsQueryVariables>(MyPostsDocument, options);
        }
export type MyPostsQueryHookResult = ReturnType<typeof useMyPostsQuery>;
export type MyPostsLazyQueryHookResult = ReturnType<typeof useMyPostsLazyQuery>;
export type MyPostsQueryResult = Apollo.QueryResult<MyPostsQuery, MyPostsQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    