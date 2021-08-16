import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any
  /** The `Upload` scalar type represents a file upload. */
  Upload: any
}

export type AuthPayload = {
  __typename?: 'AuthPayload'
  bearer: Scalars['String']
  id: Scalars['ID']
  firstName: Scalars['String']
  lastName: Scalars['String']
}

export type Credentials = {
  email: Scalars['String']
  password: Scalars['String']
}

export type FileProgress = {
  __typename?: 'FileProgress'
  complete: Scalars['Float']
  total: Scalars['Float']
}

export type Image = {
  __typename?: 'Image'
  filename: Scalars['String']
  mimetype: Scalars['String']
  encoding: Scalars['String']
  url: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  login?: Maybe<AuthPayload>
  uploadImage: Image
}

export type MutationLoginArgs = {
  credentials: Credentials
}

export type MutationUploadImageArgs = {
  file: Scalars['Upload']
}

export type Query = {
  __typename?: 'Query'
  me: User
}

export type Role = {
  __typename?: 'Role'
  name: Scalars['String']
}

export type Subscription = {
  __typename?: 'Subscription'
  uploadStatus: FileProgress
}

export type SubscriptionUploadStatusArgs = {
  fileName: Scalars['String']
}

export type User = {
  __typename?: 'User'
  id: Scalars['ID']
  created: Scalars['DateTime']
  modified: Scalars['DateTime']
  deleted?: Maybe<Scalars['DateTime']>
  firstName: Scalars['String']
  lastName: Scalars['String']
  fullName: Scalars['String']
  title: Scalars['String']
  phoneNumber: Scalars['String']
  isActive: Scalars['Boolean']
  roles: Array<Role>
}

export type LoginMutationVariables = Exact<{
  credentials: Credentials
}>

export type LoginMutation = { __typename?: 'Mutation' } & {
  login?: Maybe<
    { __typename?: 'AuthPayload' } & Pick<
      AuthPayload,
      'id' | 'firstName' | 'lastName' | 'bearer'
    >
  >
}

export type MeQueryVariables = Exact<{ [key: string]: never }>

export type MeQuery = { __typename?: 'Query' } & {
  me: { __typename?: 'User' } & Pick<User, 'id' | 'firstName' | 'lastName'>
}

export const LoginDocument = gql`
  mutation login($credentials: Credentials!) {
    login(credentials: $credentials) {
      id
      firstName
      lastName
      bearer
    }
  }
`
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>

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
 *      credentials: // value for 'credentials'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options
  )
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>
export const MeDocument = gql`
  query me {
    me {
      id
      firstName
      lastName
    }
  }
`

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
export function useMeQuery(
  baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options)
}
export function useMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options)
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[]
  }
}
const result: PossibleTypesResultData = {
  possibleTypes: {},
}
export default result
