
/**
 * Client
**/

import * as runtime from './runtime';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 */

export type User = {
  id: string
  createdAt: Date
  updatedAt: Date
  isDeleted: boolean
  name: string
  email: string
  roleId: string
}

/**
 * Model Role
 */

export type Role = {
  id: string
  name: string
}

/**
 * Model Social
 */

export type Social = {
  id: string
  userId: string
  type: string
  accountId: number
  accountUrl: string
  accountImage: string
}

/**
 * Model Post
 */

export type Post = {
  id: string
  createdAt: Date
  updatedAt: Date
  isDeleted: boolean
  slug: string
  title: string
  body: string
  published: boolean
  publishedAt: Date | null
  views: number
  viewsIps: string[]
  likes: number
  likedIps: string[]
  authorId: string
}

/**
 * Model Tag
 */

export type Tag = {
  id: string
  name: string
}

/**
 * Model PostTags
 */

export type PostTags = {
  tagId: string
  postId: string
}

/**
 * Model Comment
 */

export type Comment = {
  id: string
  createdAt: Date
  updatedAt: Date
  isDeleted: boolean
  body: string
  authorId: string
  postId: string
}

/**
 * Model PostsLikedByUsers
 */

export type PostsLikedByUsers = {
  postId: string
  userId: string
  likedAt: Date
}

/**
 * Model PostsViewedByUsers
 */

export type PostsViewedByUsers = {
  postId: string
  userId: string
  viewedAt: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a raw query and returns the number of affected rows
   * @example
   * ```
   * // With parameters use prisma.$executeRaw``, values will be escaped automatically
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.$executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $executeRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.$queryRaw``, values will be escaped automatically
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.$queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $queryRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<GlobalReject>;

  /**
   * `prisma.social`: Exposes CRUD operations for the **Social** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Socials
    * const socials = await prisma.social.findMany()
    * ```
    */
  get social(): Prisma.SocialDelegate<GlobalReject>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<GlobalReject>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<GlobalReject>;

  /**
   * `prisma.postTags`: Exposes CRUD operations for the **PostTags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostTags
    * const postTags = await prisma.postTags.findMany()
    * ```
    */
  get postTags(): Prisma.PostTagsDelegate<GlobalReject>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<GlobalReject>;

  /**
   * `prisma.postsLikedByUsers`: Exposes CRUD operations for the **PostsLikedByUsers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostsLikedByUsers
    * const postsLikedByUsers = await prisma.postsLikedByUsers.findMany()
    * ```
    */
  get postsLikedByUsers(): Prisma.PostsLikedByUsersDelegate<GlobalReject>;

  /**
   * `prisma.postsViewedByUsers`: Exposes CRUD operations for the **PostsViewedByUsers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostsViewedByUsers
    * const postsViewedByUsers = await prisma.postsViewedByUsers.findMany()
    * ```
    */
  get postsViewedByUsers(): Prisma.PostsViewedByUsersDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 2.29.1
   * Query Engine version: 1be4cd60b89afa04b192acb1ef47758a39810f3a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | null | JsonObject | JsonArray

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = undefined |  string | number | boolean | null | InputJsonObject | InputJsonArray
   type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Role: 'Role',
    Social: 'Social',
    Post: 'Post',
    Tag: 'Tag',
    PostTags: 'PostTags',
    Comment: 'Comment',
    PostsLikedByUsers: 'PostsLikedByUsers',
    PostsViewedByUsers: 'PostsViewedByUsers'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
    max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    name: string | null
    email: string | null
    roleId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    name: string | null
    email: string | null
    roleId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    isDeleted: number
    name: number
    email: number
    roleId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    name?: true
    email?: true
    roleId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    name?: true
    email?: true
    roleId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    name?: true
    email?: true
    roleId?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }


    
    
  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    name: string
    email: string
    roleId: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Promise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], UserGroupByOutputType[P]> 
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      > 
    >


  export type UserSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    name?: boolean
    email?: boolean
    roleId?: boolean
    role?: boolean | RoleArgs
    posts?: boolean | PostFindManyArgs
    socials?: boolean | SocialFindManyArgs
    likedPosts?: boolean | PostsLikedByUsersFindManyArgs
    viewedPosts?: boolean | PostsViewedByUsersFindManyArgs
    comments?: boolean | CommentFindManyArgs
  }

  export type UserInclude = {
    role?: boolean | RoleArgs
    posts?: boolean | PostFindManyArgs
    socials?: boolean | SocialFindManyArgs
    likedPosts?: boolean | PostsLikedByUsersFindManyArgs
    viewedPosts?: boolean | PostsViewedByUsersFindManyArgs
    comments?: boolean | CommentFindManyArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'role'
        ? RoleGetPayload<S['include'][P]> :
        P extends 'posts'
        ? Array < PostGetPayload<S['include'][P]>>  :
        P extends 'socials'
        ? Array < SocialGetPayload<S['include'][P]>>  :
        P extends 'likedPosts'
        ? Array < PostsLikedByUsersGetPayload<S['include'][P]>>  :
        P extends 'viewedPosts'
        ? Array < PostsViewedByUsersGetPayload<S['include'][P]>>  :
        P extends 'comments'
        ? Array < CommentGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof User ?User [P]
  : 
          P extends 'role'
        ? RoleGetPayload<S['select'][P]> :
        P extends 'posts'
        ? Array < PostGetPayload<S['select'][P]>>  :
        P extends 'socials'
        ? Array < SocialGetPayload<S['select'][P]>>  :
        P extends 'likedPosts'
        ? Array < PostsLikedByUsersGetPayload<S['select'][P]>>  :
        P extends 'viewedPosts'
        ? Array < PostsViewedByUsersGetPayload<S['select'][P]>>  :
        P extends 'comments'
        ? Array < CommentGetPayload<S['select'][P]>>  : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    role<T extends RoleArgs = {}>(args?: Subset<T, RoleArgs>): CheckSelect<T, Prisma__RoleClient<Role | null >, Prisma__RoleClient<RoleGetPayload<T> | null >>;

    posts<T extends PostFindManyArgs = {}>(args?: Subset<T, PostFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Post>>, PrismaPromise<Array<PostGetPayload<T>>>>;

    socials<T extends SocialFindManyArgs = {}>(args?: Subset<T, SocialFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Social>>, PrismaPromise<Array<SocialGetPayload<T>>>>;

    likedPosts<T extends PostsLikedByUsersFindManyArgs = {}>(args?: Subset<T, PostsLikedByUsersFindManyArgs>): CheckSelect<T, PrismaPromise<Array<PostsLikedByUsers>>, PrismaPromise<Array<PostsLikedByUsersGetPayload<T>>>>;

    viewedPosts<T extends PostsViewedByUsersFindManyArgs = {}>(args?: Subset<T, PostsViewedByUsersFindManyArgs>): CheckSelect<T, PrismaPromise<Array<PostsViewedByUsers>>, PrismaPromise<Array<PostsViewedByUsersGetPayload<T>>>>;

    comments<T extends CommentFindManyArgs = {}>(args?: Subset<T, CommentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Comment>>, PrismaPromise<Array<CommentGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Role
   */


  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
    max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RoleAggregateArgs = {
    /**
     * Filter which Role to aggregate.
     * 
    **/
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     * 
    **/
    orderBy?: Enumerable<RoleOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }


    
    
  export type RoleGroupByArgs = {
    where?: RoleWhereInput
    orderBy?: Enumerable<RoleOrderByInput>
    by: Array<RoleScalarFieldEnum>
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }


  export type RoleGroupByOutputType = {
    id: string
    name: string
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Promise<
    Array<
      PickArray<RoleGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], RoleGroupByOutputType[P]> 
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      > 
    >


  export type RoleSelect = {
    id?: boolean
    name?: boolean
    users?: boolean | UserFindManyArgs
  }

  export type RoleInclude = {
    users?: boolean | UserFindManyArgs
  }

  export type RoleGetPayload<
    S extends boolean | null | undefined | RoleArgs,
    U = keyof S
      > = S extends true
        ? Role
    : S extends undefined
    ? never
    : S extends RoleArgs | RoleFindManyArgs
    ?'include' extends U
    ? Role  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'users'
        ? Array < UserGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Role ?Role [P]
  : 
          P extends 'users'
        ? Array < UserGetPayload<S['select'][P]>>  : never
  } 
    : Role
  : Role


  type RoleCountArgs = Merge<
    Omit<RoleFindManyArgs, 'select' | 'include'> & {
      select?: RoleCountAggregateInputType | true
    }
  >

  export interface RoleDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoleFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RoleFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Role'> extends True ? CheckSelect<T, Prisma__RoleClient<Role>, Prisma__RoleClient<RoleGetPayload<T>>> : CheckSelect<T, Prisma__RoleClient<Role | null >, Prisma__RoleClient<RoleGetPayload<T> | null >>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoleFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RoleFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Role'> extends True ? CheckSelect<T, Prisma__RoleClient<Role>, Prisma__RoleClient<RoleGetPayload<T>>> : CheckSelect<T, Prisma__RoleClient<Role | null >, Prisma__RoleClient<RoleGetPayload<T> | null >>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RoleFindManyArgs>(
      args?: SelectSubset<T, RoleFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Role>>, PrismaPromise<Array<RoleGetPayload<T>>>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
    **/
    create<T extends RoleCreateArgs>(
      args: SelectSubset<T, RoleCreateArgs>
    ): CheckSelect<T, Prisma__RoleClient<Role>, Prisma__RoleClient<RoleGetPayload<T>>>

    /**
     * Create many Roles.
     *     @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     *     @example
     *     // Create many Roles
     *     const role = await prisma.role.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RoleCreateManyArgs>(
      args?: SelectSubset<T, RoleCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
    **/
    delete<T extends RoleDeleteArgs>(
      args: SelectSubset<T, RoleDeleteArgs>
    ): CheckSelect<T, Prisma__RoleClient<Role>, Prisma__RoleClient<RoleGetPayload<T>>>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoleUpdateArgs>(
      args: SelectSubset<T, RoleUpdateArgs>
    ): CheckSelect<T, Prisma__RoleClient<Role>, Prisma__RoleClient<RoleGetPayload<T>>>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoleDeleteManyArgs>(
      args?: SelectSubset<T, RoleDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoleUpdateManyArgs>(
      args: SelectSubset<T, RoleUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
    **/
    upsert<T extends RoleUpsertArgs>(
      args: SelectSubset<T, RoleUpsertArgs>
    ): CheckSelect<T, Prisma__RoleClient<Role>, Prisma__RoleClient<RoleGetPayload<T>>>

    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RoleClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    users<T extends UserFindManyArgs = {}>(args?: Subset<T, UserFindManyArgs>): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Role
     * 
    **/
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoleInclude | null
    /**
     * Throw an Error if a Role can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Role to fetch.
     * 
    **/
    where: RoleWhereUniqueInput
  }


  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Role
     * 
    **/
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoleInclude | null
    /**
     * Throw an Error if a Role can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Role to fetch.
     * 
    **/
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     * 
    **/
    orderBy?: Enumerable<RoleOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     * 
    **/
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     * 
    **/
    distinct?: Enumerable<RoleScalarFieldEnum>
  }


  /**
   * Role findMany
   */
  export type RoleFindManyArgs = {
    /**
     * Select specific fields to fetch from the Role
     * 
    **/
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoleInclude | null
    /**
     * Filter, which Roles to fetch.
     * 
    **/
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     * 
    **/
    orderBy?: Enumerable<RoleOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     * 
    **/
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RoleScalarFieldEnum>
  }


  /**
   * Role create
   */
  export type RoleCreateArgs = {
    /**
     * Select specific fields to fetch from the Role
     * 
    **/
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoleInclude | null
    /**
     * The data needed to create a Role.
     * 
    **/
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }


  /**
   * Role createMany
   */
  export type RoleCreateManyArgs = {
    data: Enumerable<RoleCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Role update
   */
  export type RoleUpdateArgs = {
    /**
     * Select specific fields to fetch from the Role
     * 
    **/
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoleInclude | null
    /**
     * The data needed to update a Role.
     * 
    **/
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     * 
    **/
    where: RoleWhereUniqueInput
  }


  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs = {
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    where?: RoleWhereInput
  }


  /**
   * Role upsert
   */
  export type RoleUpsertArgs = {
    /**
     * Select specific fields to fetch from the Role
     * 
    **/
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoleInclude | null
    /**
     * The filter to search for the Role to update in case it exists.
     * 
    **/
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     * 
    **/
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }


  /**
   * Role delete
   */
  export type RoleDeleteArgs = {
    /**
     * Select specific fields to fetch from the Role
     * 
    **/
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoleInclude | null
    /**
     * Filter which Role to delete.
     * 
    **/
    where: RoleWhereUniqueInput
  }


  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs = {
    where?: RoleWhereInput
  }


  /**
   * Role without action
   */
  export type RoleArgs = {
    /**
     * Select specific fields to fetch from the Role
     * 
    **/
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoleInclude | null
  }



  /**
   * Model Social
   */


  export type AggregateSocial = {
    _count: SocialCountAggregateOutputType | null
    count: SocialCountAggregateOutputType | null
    _avg: SocialAvgAggregateOutputType | null
    avg: SocialAvgAggregateOutputType | null
    _sum: SocialSumAggregateOutputType | null
    sum: SocialSumAggregateOutputType | null
    _min: SocialMinAggregateOutputType | null
    min: SocialMinAggregateOutputType | null
    _max: SocialMaxAggregateOutputType | null
    max: SocialMaxAggregateOutputType | null
  }

  export type SocialAvgAggregateOutputType = {
    accountId: number | null
  }

  export type SocialSumAggregateOutputType = {
    accountId: number | null
  }

  export type SocialMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    accountId: number | null
    accountUrl: string | null
    accountImage: string | null
  }

  export type SocialMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    accountId: number | null
    accountUrl: string | null
    accountImage: string | null
  }

  export type SocialCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    accountId: number
    accountUrl: number
    accountImage: number
    _all: number
  }


  export type SocialAvgAggregateInputType = {
    accountId?: true
  }

  export type SocialSumAggregateInputType = {
    accountId?: true
  }

  export type SocialMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    accountId?: true
    accountUrl?: true
    accountImage?: true
  }

  export type SocialMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    accountId?: true
    accountUrl?: true
    accountImage?: true
  }

  export type SocialCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    accountId?: true
    accountUrl?: true
    accountImage?: true
    _all?: true
  }

  export type SocialAggregateArgs = {
    /**
     * Filter which Social to aggregate.
     * 
    **/
    where?: SocialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socials to fetch.
     * 
    **/
    orderBy?: Enumerable<SocialOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SocialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socials from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socials.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Socials
    **/
    _count?: true | SocialCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | SocialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SocialAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: SocialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SocialSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: SocialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: SocialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: SocialMaxAggregateInputType
  }

  export type GetSocialAggregateType<T extends SocialAggregateArgs> = {
        [P in keyof T & keyof AggregateSocial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocial[P]>
      : GetScalarType<T[P], AggregateSocial[P]>
  }


    
    
  export type SocialGroupByArgs = {
    where?: SocialWhereInput
    orderBy?: Enumerable<SocialOrderByInput>
    by: Array<SocialScalarFieldEnum>
    having?: SocialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialCountAggregateInputType | true
    _avg?: SocialAvgAggregateInputType
    _sum?: SocialSumAggregateInputType
    _min?: SocialMinAggregateInputType
    _max?: SocialMaxAggregateInputType
  }


  export type SocialGroupByOutputType = {
    id: string
    userId: string
    type: string
    accountId: number
    accountUrl: string
    accountImage: string
    _count: SocialCountAggregateOutputType | null
    _avg: SocialAvgAggregateOutputType | null
    _sum: SocialSumAggregateOutputType | null
    _min: SocialMinAggregateOutputType | null
    _max: SocialMaxAggregateOutputType | null
  }

  type GetSocialGroupByPayload<T extends SocialGroupByArgs> = Promise<
    Array<
      PickArray<SocialGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof SocialGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], SocialGroupByOutputType[P]> 
            : GetScalarType<T[P], SocialGroupByOutputType[P]>
        }
      > 
    >


  export type SocialSelect = {
    id?: boolean
    userId?: boolean
    user?: boolean | UserArgs
    type?: boolean
    accountId?: boolean
    accountUrl?: boolean
    accountImage?: boolean
  }

  export type SocialInclude = {
    user?: boolean | UserArgs
  }

  export type SocialGetPayload<
    S extends boolean | null | undefined | SocialArgs,
    U = keyof S
      > = S extends true
        ? Social
    : S extends undefined
    ? never
    : S extends SocialArgs | SocialFindManyArgs
    ?'include' extends U
    ? Social  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'user'
        ? UserGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Social ?Social [P]
  : 
          P extends 'user'
        ? UserGetPayload<S['select'][P]> : never
  } 
    : Social
  : Social


  type SocialCountArgs = Merge<
    Omit<SocialFindManyArgs, 'select' | 'include'> & {
      select?: SocialCountAggregateInputType | true
    }
  >

  export interface SocialDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Social that matches the filter.
     * @param {SocialFindUniqueArgs} args - Arguments to find a Social
     * @example
     * // Get one Social
     * const social = await prisma.social.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SocialFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SocialFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Social'> extends True ? CheckSelect<T, Prisma__SocialClient<Social>, Prisma__SocialClient<SocialGetPayload<T>>> : CheckSelect<T, Prisma__SocialClient<Social | null >, Prisma__SocialClient<SocialGetPayload<T> | null >>

    /**
     * Find the first Social that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialFindFirstArgs} args - Arguments to find a Social
     * @example
     * // Get one Social
     * const social = await prisma.social.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SocialFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SocialFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Social'> extends True ? CheckSelect<T, Prisma__SocialClient<Social>, Prisma__SocialClient<SocialGetPayload<T>>> : CheckSelect<T, Prisma__SocialClient<Social | null >, Prisma__SocialClient<SocialGetPayload<T> | null >>

    /**
     * Find zero or more Socials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Socials
     * const socials = await prisma.social.findMany()
     * 
     * // Get first 10 Socials
     * const socials = await prisma.social.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialWithIdOnly = await prisma.social.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SocialFindManyArgs>(
      args?: SelectSubset<T, SocialFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Social>>, PrismaPromise<Array<SocialGetPayload<T>>>>

    /**
     * Create a Social.
     * @param {SocialCreateArgs} args - Arguments to create a Social.
     * @example
     * // Create one Social
     * const Social = await prisma.social.create({
     *   data: {
     *     // ... data to create a Social
     *   }
     * })
     * 
    **/
    create<T extends SocialCreateArgs>(
      args: SelectSubset<T, SocialCreateArgs>
    ): CheckSelect<T, Prisma__SocialClient<Social>, Prisma__SocialClient<SocialGetPayload<T>>>

    /**
     * Create many Socials.
     *     @param {SocialCreateManyArgs} args - Arguments to create many Socials.
     *     @example
     *     // Create many Socials
     *     const social = await prisma.social.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SocialCreateManyArgs>(
      args?: SelectSubset<T, SocialCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Social.
     * @param {SocialDeleteArgs} args - Arguments to delete one Social.
     * @example
     * // Delete one Social
     * const Social = await prisma.social.delete({
     *   where: {
     *     // ... filter to delete one Social
     *   }
     * })
     * 
    **/
    delete<T extends SocialDeleteArgs>(
      args: SelectSubset<T, SocialDeleteArgs>
    ): CheckSelect<T, Prisma__SocialClient<Social>, Prisma__SocialClient<SocialGetPayload<T>>>

    /**
     * Update one Social.
     * @param {SocialUpdateArgs} args - Arguments to update one Social.
     * @example
     * // Update one Social
     * const social = await prisma.social.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SocialUpdateArgs>(
      args: SelectSubset<T, SocialUpdateArgs>
    ): CheckSelect<T, Prisma__SocialClient<Social>, Prisma__SocialClient<SocialGetPayload<T>>>

    /**
     * Delete zero or more Socials.
     * @param {SocialDeleteManyArgs} args - Arguments to filter Socials to delete.
     * @example
     * // Delete a few Socials
     * const { count } = await prisma.social.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SocialDeleteManyArgs>(
      args?: SelectSubset<T, SocialDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Socials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Socials
     * const social = await prisma.social.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SocialUpdateManyArgs>(
      args: SelectSubset<T, SocialUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Social.
     * @param {SocialUpsertArgs} args - Arguments to update or create a Social.
     * @example
     * // Update or create a Social
     * const social = await prisma.social.upsert({
     *   create: {
     *     // ... data to create a Social
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Social we want to update
     *   }
     * })
    **/
    upsert<T extends SocialUpsertArgs>(
      args: SelectSubset<T, SocialUpsertArgs>
    ): CheckSelect<T, Prisma__SocialClient<Social>, Prisma__SocialClient<SocialGetPayload<T>>>

    /**
     * Count the number of Socials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialCountArgs} args - Arguments to filter Socials to count.
     * @example
     * // Count the number of Socials
     * const count = await prisma.social.count({
     *   where: {
     *     // ... the filter for the Socials we want to count
     *   }
     * })
    **/
    count<T extends SocialCountArgs>(
      args?: Subset<T, SocialCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Social.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SocialAggregateArgs>(args: Subset<T, SocialAggregateArgs>): PrismaPromise<GetSocialAggregateType<T>>

    /**
     * Group by Social.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SocialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialGroupByArgs['orderBy'] }
        : { orderBy?: SocialGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SocialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Social.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SocialClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Social findUnique
   */
  export type SocialFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Social
     * 
    **/
    select?: SocialSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SocialInclude | null
    /**
     * Throw an Error if a Social can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Social to fetch.
     * 
    **/
    where: SocialWhereUniqueInput
  }


  /**
   * Social findFirst
   */
  export type SocialFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Social
     * 
    **/
    select?: SocialSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SocialInclude | null
    /**
     * Throw an Error if a Social can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Social to fetch.
     * 
    **/
    where?: SocialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socials to fetch.
     * 
    **/
    orderBy?: Enumerable<SocialOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Socials.
     * 
    **/
    cursor?: SocialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socials from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socials.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Socials.
     * 
    **/
    distinct?: Enumerable<SocialScalarFieldEnum>
  }


  /**
   * Social findMany
   */
  export type SocialFindManyArgs = {
    /**
     * Select specific fields to fetch from the Social
     * 
    **/
    select?: SocialSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SocialInclude | null
    /**
     * Filter, which Socials to fetch.
     * 
    **/
    where?: SocialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socials to fetch.
     * 
    **/
    orderBy?: Enumerable<SocialOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Socials.
     * 
    **/
    cursor?: SocialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socials from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socials.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SocialScalarFieldEnum>
  }


  /**
   * Social create
   */
  export type SocialCreateArgs = {
    /**
     * Select specific fields to fetch from the Social
     * 
    **/
    select?: SocialSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SocialInclude | null
    /**
     * The data needed to create a Social.
     * 
    **/
    data: XOR<SocialCreateInput, SocialUncheckedCreateInput>
  }


  /**
   * Social createMany
   */
  export type SocialCreateManyArgs = {
    data: Enumerable<SocialCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Social update
   */
  export type SocialUpdateArgs = {
    /**
     * Select specific fields to fetch from the Social
     * 
    **/
    select?: SocialSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SocialInclude | null
    /**
     * The data needed to update a Social.
     * 
    **/
    data: XOR<SocialUpdateInput, SocialUncheckedUpdateInput>
    /**
     * Choose, which Social to update.
     * 
    **/
    where: SocialWhereUniqueInput
  }


  /**
   * Social updateMany
   */
  export type SocialUpdateManyArgs = {
    data: XOR<SocialUpdateManyMutationInput, SocialUncheckedUpdateManyInput>
    where?: SocialWhereInput
  }


  /**
   * Social upsert
   */
  export type SocialUpsertArgs = {
    /**
     * Select specific fields to fetch from the Social
     * 
    **/
    select?: SocialSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SocialInclude | null
    /**
     * The filter to search for the Social to update in case it exists.
     * 
    **/
    where: SocialWhereUniqueInput
    /**
     * In case the Social found by the `where` argument doesn't exist, create a new Social with this data.
     * 
    **/
    create: XOR<SocialCreateInput, SocialUncheckedCreateInput>
    /**
     * In case the Social was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SocialUpdateInput, SocialUncheckedUpdateInput>
  }


  /**
   * Social delete
   */
  export type SocialDeleteArgs = {
    /**
     * Select specific fields to fetch from the Social
     * 
    **/
    select?: SocialSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SocialInclude | null
    /**
     * Filter which Social to delete.
     * 
    **/
    where: SocialWhereUniqueInput
  }


  /**
   * Social deleteMany
   */
  export type SocialDeleteManyArgs = {
    where?: SocialWhereInput
  }


  /**
   * Social without action
   */
  export type SocialArgs = {
    /**
     * Select specific fields to fetch from the Social
     * 
    **/
    select?: SocialSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SocialInclude | null
  }



  /**
   * Model Post
   */


  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
    max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    views: number | null
    likes: number | null
  }

  export type PostSumAggregateOutputType = {
    views: number | null
    likes: number | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    slug: string | null
    title: string | null
    body: string | null
    published: boolean | null
    publishedAt: Date | null
    views: number | null
    likes: number | null
    authorId: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    slug: string | null
    title: string | null
    body: string | null
    published: boolean | null
    publishedAt: Date | null
    views: number | null
    likes: number | null
    authorId: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    isDeleted: number
    slug: number
    title: number
    body: number
    published: number
    publishedAt: number
    views: number
    viewsIps: number
    likes: number
    likedIps: number
    authorId: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    views?: true
    likes?: true
  }

  export type PostSumAggregateInputType = {
    views?: true
    likes?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    slug?: true
    title?: true
    body?: true
    published?: true
    publishedAt?: true
    views?: true
    likes?: true
    authorId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    slug?: true
    title?: true
    body?: true
    published?: true
    publishedAt?: true
    views?: true
    likes?: true
    authorId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    slug?: true
    title?: true
    body?: true
    published?: true
    publishedAt?: true
    views?: true
    viewsIps?: true
    likes?: true
    likedIps?: true
    authorId?: true
    _all?: true
  }

  export type PostAggregateArgs = {
    /**
     * Filter which Post to aggregate.
     * 
    **/
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     * 
    **/
    orderBy?: Enumerable<PostOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }


    
    
  export type PostGroupByArgs = {
    where?: PostWhereInput
    orderBy?: Enumerable<PostOrderByInput>
    by: Array<PostScalarFieldEnum>
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }


  export type PostGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    slug: string
    title: string
    body: string
    published: boolean
    publishedAt: Date | null
    views: number
    viewsIps: string[]
    likes: number
    likedIps: string[]
    authorId: string
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Promise<
    Array<
      PickArray<PostGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], PostGroupByOutputType[P]> 
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      > 
    >


  export type PostSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    slug?: boolean
    title?: boolean
    body?: boolean
    published?: boolean
    publishedAt?: boolean
    views?: boolean
    viewsIps?: boolean
    viewsUsers?: boolean | PostsViewedByUsersFindManyArgs
    likes?: boolean
    likedIps?: boolean
    likedUsers?: boolean | PostsLikedByUsersFindManyArgs
    author?: boolean | UserArgs
    authorId?: boolean
    comments?: boolean | CommentFindManyArgs
    tags?: boolean | PostTagsFindManyArgs
  }

  export type PostInclude = {
    viewsUsers?: boolean | PostsViewedByUsersFindManyArgs
    likedUsers?: boolean | PostsLikedByUsersFindManyArgs
    author?: boolean | UserArgs
    comments?: boolean | CommentFindManyArgs
    tags?: boolean | PostTagsFindManyArgs
  }

  export type PostGetPayload<
    S extends boolean | null | undefined | PostArgs,
    U = keyof S
      > = S extends true
        ? Post
    : S extends undefined
    ? never
    : S extends PostArgs | PostFindManyArgs
    ?'include' extends U
    ? Post  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'viewsUsers'
        ? Array < PostsViewedByUsersGetPayload<S['include'][P]>>  :
        P extends 'likedUsers'
        ? Array < PostsLikedByUsersGetPayload<S['include'][P]>>  :
        P extends 'author'
        ? UserGetPayload<S['include'][P]> :
        P extends 'comments'
        ? Array < CommentGetPayload<S['include'][P]>>  :
        P extends 'tags'
        ? Array < PostTagsGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Post ?Post [P]
  : 
          P extends 'viewsUsers'
        ? Array < PostsViewedByUsersGetPayload<S['select'][P]>>  :
        P extends 'likedUsers'
        ? Array < PostsLikedByUsersGetPayload<S['select'][P]>>  :
        P extends 'author'
        ? UserGetPayload<S['select'][P]> :
        P extends 'comments'
        ? Array < CommentGetPayload<S['select'][P]>>  :
        P extends 'tags'
        ? Array < PostTagsGetPayload<S['select'][P]>>  : never
  } 
    : Post
  : Post


  type PostCountArgs = Merge<
    Omit<PostFindManyArgs, 'select' | 'include'> & {
      select?: PostCountAggregateInputType | true
    }
  >

  export interface PostDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PostFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Post'> extends True ? CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>> : CheckSelect<T, Prisma__PostClient<Post | null >, Prisma__PostClient<PostGetPayload<T> | null >>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PostFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Post'> extends True ? CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>> : CheckSelect<T, Prisma__PostClient<Post | null >, Prisma__PostClient<PostGetPayload<T> | null >>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PostFindManyArgs>(
      args?: SelectSubset<T, PostFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Post>>, PrismaPromise<Array<PostGetPayload<T>>>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
    **/
    create<T extends PostCreateArgs>(
      args: SelectSubset<T, PostCreateArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>

    /**
     * Create many Posts.
     *     @param {PostCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const post = await prisma.post.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostCreateManyArgs>(
      args?: SelectSubset<T, PostCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
    **/
    delete<T extends PostDeleteArgs>(
      args: SelectSubset<T, PostDeleteArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostUpdateArgs>(
      args: SelectSubset<T, PostUpdateArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostDeleteManyArgs>(
      args?: SelectSubset<T, PostDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostUpdateManyArgs>(
      args: SelectSubset<T, PostUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
    **/
    upsert<T extends PostUpsertArgs>(
      args: SelectSubset<T, PostUpsertArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PostClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    viewsUsers<T extends PostsViewedByUsersFindManyArgs = {}>(args?: Subset<T, PostsViewedByUsersFindManyArgs>): CheckSelect<T, PrismaPromise<Array<PostsViewedByUsers>>, PrismaPromise<Array<PostsViewedByUsersGetPayload<T>>>>;

    likedUsers<T extends PostsLikedByUsersFindManyArgs = {}>(args?: Subset<T, PostsLikedByUsersFindManyArgs>): CheckSelect<T, PrismaPromise<Array<PostsLikedByUsers>>, PrismaPromise<Array<PostsLikedByUsersGetPayload<T>>>>;

    author<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    comments<T extends CommentFindManyArgs = {}>(args?: Subset<T, CommentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Comment>>, PrismaPromise<Array<CommentGetPayload<T>>>>;

    tags<T extends PostTagsFindManyArgs = {}>(args?: Subset<T, PostTagsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<PostTags>>, PrismaPromise<Array<PostTagsGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Throw an Error if a Post can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Post to fetch.
     * 
    **/
    where: PostWhereUniqueInput
  }


  /**
   * Post findFirst
   */
  export type PostFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Throw an Error if a Post can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Post to fetch.
     * 
    **/
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     * 
    **/
    orderBy?: Enumerable<PostOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     * 
    **/
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     * 
    **/
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * Post findMany
   */
  export type PostFindManyArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Filter, which Posts to fetch.
     * 
    **/
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     * 
    **/
    orderBy?: Enumerable<PostOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     * 
    **/
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * Post create
   */
  export type PostCreateArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * The data needed to create a Post.
     * 
    **/
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }


  /**
   * Post createMany
   */
  export type PostCreateManyArgs = {
    data: Enumerable<PostCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Post update
   */
  export type PostUpdateArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * The data needed to update a Post.
     * 
    **/
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     * 
    **/
    where: PostWhereUniqueInput
  }


  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs = {
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    where?: PostWhereInput
  }


  /**
   * Post upsert
   */
  export type PostUpsertArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * The filter to search for the Post to update in case it exists.
     * 
    **/
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     * 
    **/
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }


  /**
   * Post delete
   */
  export type PostDeleteArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Filter which Post to delete.
     * 
    **/
    where: PostWhereUniqueInput
  }


  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs = {
    where?: PostWhereInput
  }


  /**
   * Post without action
   */
  export type PostArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
  }



  /**
   * Model Tag
   */


  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
    max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TagAggregateArgs = {
    /**
     * Filter which Tag to aggregate.
     * 
    **/
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     * 
    **/
    orderBy?: Enumerable<TagOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }


    
    
  export type TagGroupByArgs = {
    where?: TagWhereInput
    orderBy?: Enumerable<TagOrderByInput>
    by: Array<TagScalarFieldEnum>
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }


  export type TagGroupByOutputType = {
    id: string
    name: string
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Promise<
    Array<
      PickArray<TagGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], TagGroupByOutputType[P]> 
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      > 
    >


  export type TagSelect = {
    id?: boolean
    name?: boolean
    posts?: boolean | PostTagsFindManyArgs
  }

  export type TagInclude = {
    posts?: boolean | PostTagsFindManyArgs
  }

  export type TagGetPayload<
    S extends boolean | null | undefined | TagArgs,
    U = keyof S
      > = S extends true
        ? Tag
    : S extends undefined
    ? never
    : S extends TagArgs | TagFindManyArgs
    ?'include' extends U
    ? Tag  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'posts'
        ? Array < PostTagsGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Tag ?Tag [P]
  : 
          P extends 'posts'
        ? Array < PostTagsGetPayload<S['select'][P]>>  : never
  } 
    : Tag
  : Tag


  type TagCountArgs = Merge<
    Omit<TagFindManyArgs, 'select' | 'include'> & {
      select?: TagCountAggregateInputType | true
    }
  >

  export interface TagDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TagFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TagFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Tag'> extends True ? CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>> : CheckSelect<T, Prisma__TagClient<Tag | null >, Prisma__TagClient<TagGetPayload<T> | null >>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TagFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TagFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Tag'> extends True ? CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>> : CheckSelect<T, Prisma__TagClient<Tag | null >, Prisma__TagClient<TagGetPayload<T> | null >>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TagFindManyArgs>(
      args?: SelectSubset<T, TagFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Tag>>, PrismaPromise<Array<TagGetPayload<T>>>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
    **/
    create<T extends TagCreateArgs>(
      args: SelectSubset<T, TagCreateArgs>
    ): CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>>

    /**
     * Create many Tags.
     *     @param {TagCreateManyArgs} args - Arguments to create many Tags.
     *     @example
     *     // Create many Tags
     *     const tag = await prisma.tag.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TagCreateManyArgs>(
      args?: SelectSubset<T, TagCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
    **/
    delete<T extends TagDeleteArgs>(
      args: SelectSubset<T, TagDeleteArgs>
    ): CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TagUpdateArgs>(
      args: SelectSubset<T, TagUpdateArgs>
    ): CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TagDeleteManyArgs>(
      args?: SelectSubset<T, TagDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TagUpdateManyArgs>(
      args: SelectSubset<T, TagUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
    **/
    upsert<T extends TagUpsertArgs>(
      args: SelectSubset<T, TagUpsertArgs>
    ): CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>>

    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TagClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    posts<T extends PostTagsFindManyArgs = {}>(args?: Subset<T, PostTagsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<PostTags>>, PrismaPromise<Array<PostTagsGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * Throw an Error if a Tag can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Tag to fetch.
     * 
    **/
    where: TagWhereUniqueInput
  }


  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * Throw an Error if a Tag can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Tag to fetch.
     * 
    **/
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     * 
    **/
    orderBy?: Enumerable<TagOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     * 
    **/
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     * 
    **/
    distinct?: Enumerable<TagScalarFieldEnum>
  }


  /**
   * Tag findMany
   */
  export type TagFindManyArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * Filter, which Tags to fetch.
     * 
    **/
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     * 
    **/
    orderBy?: Enumerable<TagOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     * 
    **/
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TagScalarFieldEnum>
  }


  /**
   * Tag create
   */
  export type TagCreateArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * The data needed to create a Tag.
     * 
    **/
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }


  /**
   * Tag createMany
   */
  export type TagCreateManyArgs = {
    data: Enumerable<TagCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Tag update
   */
  export type TagUpdateArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * The data needed to update a Tag.
     * 
    **/
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     * 
    **/
    where: TagWhereUniqueInput
  }


  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs = {
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    where?: TagWhereInput
  }


  /**
   * Tag upsert
   */
  export type TagUpsertArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * The filter to search for the Tag to update in case it exists.
     * 
    **/
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     * 
    **/
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }


  /**
   * Tag delete
   */
  export type TagDeleteArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * Filter which Tag to delete.
     * 
    **/
    where: TagWhereUniqueInput
  }


  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs = {
    where?: TagWhereInput
  }


  /**
   * Tag without action
   */
  export type TagArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
  }



  /**
   * Model PostTags
   */


  export type AggregatePostTags = {
    _count: PostTagsCountAggregateOutputType | null
    count: PostTagsCountAggregateOutputType | null
    _min: PostTagsMinAggregateOutputType | null
    min: PostTagsMinAggregateOutputType | null
    _max: PostTagsMaxAggregateOutputType | null
    max: PostTagsMaxAggregateOutputType | null
  }

  export type PostTagsMinAggregateOutputType = {
    tagId: string | null
    postId: string | null
  }

  export type PostTagsMaxAggregateOutputType = {
    tagId: string | null
    postId: string | null
  }

  export type PostTagsCountAggregateOutputType = {
    tagId: number
    postId: number
    _all: number
  }


  export type PostTagsMinAggregateInputType = {
    tagId?: true
    postId?: true
  }

  export type PostTagsMaxAggregateInputType = {
    tagId?: true
    postId?: true
  }

  export type PostTagsCountAggregateInputType = {
    tagId?: true
    postId?: true
    _all?: true
  }

  export type PostTagsAggregateArgs = {
    /**
     * Filter which PostTags to aggregate.
     * 
    **/
    where?: PostTagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTags to fetch.
     * 
    **/
    orderBy?: Enumerable<PostTagsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PostTagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTags from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTags.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostTags
    **/
    _count?: true | PostTagsCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | PostTagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostTagsMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: PostTagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostTagsMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: PostTagsMaxAggregateInputType
  }

  export type GetPostTagsAggregateType<T extends PostTagsAggregateArgs> = {
        [P in keyof T & keyof AggregatePostTags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostTags[P]>
      : GetScalarType<T[P], AggregatePostTags[P]>
  }


    
    
  export type PostTagsGroupByArgs = {
    where?: PostTagsWhereInput
    orderBy?: Enumerable<PostTagsOrderByInput>
    by: Array<PostTagsScalarFieldEnum>
    having?: PostTagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostTagsCountAggregateInputType | true
    _min?: PostTagsMinAggregateInputType
    _max?: PostTagsMaxAggregateInputType
  }


  export type PostTagsGroupByOutputType = {
    tagId: string
    postId: string
    _count: PostTagsCountAggregateOutputType | null
    _min: PostTagsMinAggregateOutputType | null
    _max: PostTagsMaxAggregateOutputType | null
  }

  type GetPostTagsGroupByPayload<T extends PostTagsGroupByArgs> = Promise<
    Array<
      PickArray<PostTagsGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof PostTagsGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], PostTagsGroupByOutputType[P]> 
            : GetScalarType<T[P], PostTagsGroupByOutputType[P]>
        }
      > 
    >


  export type PostTagsSelect = {
    tagId?: boolean
    tag?: boolean | TagArgs
    postId?: boolean
    post?: boolean | PostArgs
  }

  export type PostTagsInclude = {
    tag?: boolean | TagArgs
    post?: boolean | PostArgs
  }

  export type PostTagsGetPayload<
    S extends boolean | null | undefined | PostTagsArgs,
    U = keyof S
      > = S extends true
        ? PostTags
    : S extends undefined
    ? never
    : S extends PostTagsArgs | PostTagsFindManyArgs
    ?'include' extends U
    ? PostTags  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'tag'
        ? TagGetPayload<S['include'][P]> :
        P extends 'post'
        ? PostGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof PostTags ?PostTags [P]
  : 
          P extends 'tag'
        ? TagGetPayload<S['select'][P]> :
        P extends 'post'
        ? PostGetPayload<S['select'][P]> : never
  } 
    : PostTags
  : PostTags


  type PostTagsCountArgs = Merge<
    Omit<PostTagsFindManyArgs, 'select' | 'include'> & {
      select?: PostTagsCountAggregateInputType | true
    }
  >

  export interface PostTagsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one PostTags that matches the filter.
     * @param {PostTagsFindUniqueArgs} args - Arguments to find a PostTags
     * @example
     * // Get one PostTags
     * const postTags = await prisma.postTags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostTagsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PostTagsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PostTags'> extends True ? CheckSelect<T, Prisma__PostTagsClient<PostTags>, Prisma__PostTagsClient<PostTagsGetPayload<T>>> : CheckSelect<T, Prisma__PostTagsClient<PostTags | null >, Prisma__PostTagsClient<PostTagsGetPayload<T> | null >>

    /**
     * Find the first PostTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagsFindFirstArgs} args - Arguments to find a PostTags
     * @example
     * // Get one PostTags
     * const postTags = await prisma.postTags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostTagsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PostTagsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PostTags'> extends True ? CheckSelect<T, Prisma__PostTagsClient<PostTags>, Prisma__PostTagsClient<PostTagsGetPayload<T>>> : CheckSelect<T, Prisma__PostTagsClient<PostTags | null >, Prisma__PostTagsClient<PostTagsGetPayload<T> | null >>

    /**
     * Find zero or more PostTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostTags
     * const postTags = await prisma.postTags.findMany()
     * 
     * // Get first 10 PostTags
     * const postTags = await prisma.postTags.findMany({ take: 10 })
     * 
     * // Only select the `tagId`
     * const postTagsWithTagIdOnly = await prisma.postTags.findMany({ select: { tagId: true } })
     * 
    **/
    findMany<T extends PostTagsFindManyArgs>(
      args?: SelectSubset<T, PostTagsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<PostTags>>, PrismaPromise<Array<PostTagsGetPayload<T>>>>

    /**
     * Create a PostTags.
     * @param {PostTagsCreateArgs} args - Arguments to create a PostTags.
     * @example
     * // Create one PostTags
     * const PostTags = await prisma.postTags.create({
     *   data: {
     *     // ... data to create a PostTags
     *   }
     * })
     * 
    **/
    create<T extends PostTagsCreateArgs>(
      args: SelectSubset<T, PostTagsCreateArgs>
    ): CheckSelect<T, Prisma__PostTagsClient<PostTags>, Prisma__PostTagsClient<PostTagsGetPayload<T>>>

    /**
     * Create many PostTags.
     *     @param {PostTagsCreateManyArgs} args - Arguments to create many PostTags.
     *     @example
     *     // Create many PostTags
     *     const postTags = await prisma.postTags.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostTagsCreateManyArgs>(
      args?: SelectSubset<T, PostTagsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a PostTags.
     * @param {PostTagsDeleteArgs} args - Arguments to delete one PostTags.
     * @example
     * // Delete one PostTags
     * const PostTags = await prisma.postTags.delete({
     *   where: {
     *     // ... filter to delete one PostTags
     *   }
     * })
     * 
    **/
    delete<T extends PostTagsDeleteArgs>(
      args: SelectSubset<T, PostTagsDeleteArgs>
    ): CheckSelect<T, Prisma__PostTagsClient<PostTags>, Prisma__PostTagsClient<PostTagsGetPayload<T>>>

    /**
     * Update one PostTags.
     * @param {PostTagsUpdateArgs} args - Arguments to update one PostTags.
     * @example
     * // Update one PostTags
     * const postTags = await prisma.postTags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostTagsUpdateArgs>(
      args: SelectSubset<T, PostTagsUpdateArgs>
    ): CheckSelect<T, Prisma__PostTagsClient<PostTags>, Prisma__PostTagsClient<PostTagsGetPayload<T>>>

    /**
     * Delete zero or more PostTags.
     * @param {PostTagsDeleteManyArgs} args - Arguments to filter PostTags to delete.
     * @example
     * // Delete a few PostTags
     * const { count } = await prisma.postTags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostTagsDeleteManyArgs>(
      args?: SelectSubset<T, PostTagsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostTags
     * const postTags = await prisma.postTags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostTagsUpdateManyArgs>(
      args: SelectSubset<T, PostTagsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one PostTags.
     * @param {PostTagsUpsertArgs} args - Arguments to update or create a PostTags.
     * @example
     * // Update or create a PostTags
     * const postTags = await prisma.postTags.upsert({
     *   create: {
     *     // ... data to create a PostTags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostTags we want to update
     *   }
     * })
    **/
    upsert<T extends PostTagsUpsertArgs>(
      args: SelectSubset<T, PostTagsUpsertArgs>
    ): CheckSelect<T, Prisma__PostTagsClient<PostTags>, Prisma__PostTagsClient<PostTagsGetPayload<T>>>

    /**
     * Count the number of PostTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagsCountArgs} args - Arguments to filter PostTags to count.
     * @example
     * // Count the number of PostTags
     * const count = await prisma.postTags.count({
     *   where: {
     *     // ... the filter for the PostTags we want to count
     *   }
     * })
    **/
    count<T extends PostTagsCountArgs>(
      args?: Subset<T, PostTagsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostTagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostTagsAggregateArgs>(args: Subset<T, PostTagsAggregateArgs>): PrismaPromise<GetPostTagsAggregateType<T>>

    /**
     * Group by PostTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostTagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostTagsGroupByArgs['orderBy'] }
        : { orderBy?: PostTagsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostTagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostTagsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostTags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PostTagsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    tag<T extends TagArgs = {}>(args?: Subset<T, TagArgs>): CheckSelect<T, Prisma__TagClient<Tag | null >, Prisma__TagClient<TagGetPayload<T> | null >>;

    post<T extends PostArgs = {}>(args?: Subset<T, PostArgs>): CheckSelect<T, Prisma__PostClient<Post | null >, Prisma__PostClient<PostGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * PostTags findUnique
   */
  export type PostTagsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the PostTags
     * 
    **/
    select?: PostTagsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostTagsInclude | null
    /**
     * Throw an Error if a PostTags can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which PostTags to fetch.
     * 
    **/
    where: PostTagsWhereUniqueInput
  }


  /**
   * PostTags findFirst
   */
  export type PostTagsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the PostTags
     * 
    **/
    select?: PostTagsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostTagsInclude | null
    /**
     * Throw an Error if a PostTags can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which PostTags to fetch.
     * 
    **/
    where?: PostTagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTags to fetch.
     * 
    **/
    orderBy?: Enumerable<PostTagsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostTags.
     * 
    **/
    cursor?: PostTagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTags from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTags.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostTags.
     * 
    **/
    distinct?: Enumerable<PostTagsScalarFieldEnum>
  }


  /**
   * PostTags findMany
   */
  export type PostTagsFindManyArgs = {
    /**
     * Select specific fields to fetch from the PostTags
     * 
    **/
    select?: PostTagsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostTagsInclude | null
    /**
     * Filter, which PostTags to fetch.
     * 
    **/
    where?: PostTagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTags to fetch.
     * 
    **/
    orderBy?: Enumerable<PostTagsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostTags.
     * 
    **/
    cursor?: PostTagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTags from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTags.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PostTagsScalarFieldEnum>
  }


  /**
   * PostTags create
   */
  export type PostTagsCreateArgs = {
    /**
     * Select specific fields to fetch from the PostTags
     * 
    **/
    select?: PostTagsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostTagsInclude | null
    /**
     * The data needed to create a PostTags.
     * 
    **/
    data: XOR<PostTagsCreateInput, PostTagsUncheckedCreateInput>
  }


  /**
   * PostTags createMany
   */
  export type PostTagsCreateManyArgs = {
    data: Enumerable<PostTagsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PostTags update
   */
  export type PostTagsUpdateArgs = {
    /**
     * Select specific fields to fetch from the PostTags
     * 
    **/
    select?: PostTagsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostTagsInclude | null
    /**
     * The data needed to update a PostTags.
     * 
    **/
    data: XOR<PostTagsUpdateInput, PostTagsUncheckedUpdateInput>
    /**
     * Choose, which PostTags to update.
     * 
    **/
    where: PostTagsWhereUniqueInput
  }


  /**
   * PostTags updateMany
   */
  export type PostTagsUpdateManyArgs = {
    data: XOR<PostTagsUpdateManyMutationInput, PostTagsUncheckedUpdateManyInput>
    where?: PostTagsWhereInput
  }


  /**
   * PostTags upsert
   */
  export type PostTagsUpsertArgs = {
    /**
     * Select specific fields to fetch from the PostTags
     * 
    **/
    select?: PostTagsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostTagsInclude | null
    /**
     * The filter to search for the PostTags to update in case it exists.
     * 
    **/
    where: PostTagsWhereUniqueInput
    /**
     * In case the PostTags found by the `where` argument doesn't exist, create a new PostTags with this data.
     * 
    **/
    create: XOR<PostTagsCreateInput, PostTagsUncheckedCreateInput>
    /**
     * In case the PostTags was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PostTagsUpdateInput, PostTagsUncheckedUpdateInput>
  }


  /**
   * PostTags delete
   */
  export type PostTagsDeleteArgs = {
    /**
     * Select specific fields to fetch from the PostTags
     * 
    **/
    select?: PostTagsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostTagsInclude | null
    /**
     * Filter which PostTags to delete.
     * 
    **/
    where: PostTagsWhereUniqueInput
  }


  /**
   * PostTags deleteMany
   */
  export type PostTagsDeleteManyArgs = {
    where?: PostTagsWhereInput
  }


  /**
   * PostTags without action
   */
  export type PostTagsArgs = {
    /**
     * Select specific fields to fetch from the PostTags
     * 
    **/
    select?: PostTagsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostTagsInclude | null
  }



  /**
   * Model Comment
   */


  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
    max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    body: string | null
    authorId: string | null
    postId: string | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    body: string | null
    authorId: string | null
    postId: string | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    isDeleted: number
    body: number
    authorId: number
    postId: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    body?: true
    authorId?: true
    postId?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    body?: true
    authorId?: true
    postId?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    body?: true
    authorId?: true
    postId?: true
    _all?: true
  }

  export type CommentAggregateArgs = {
    /**
     * Filter which Comment to aggregate.
     * 
    **/
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     * 
    **/
    orderBy?: Enumerable<CommentOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }


    
    
  export type CommentGroupByArgs = {
    where?: CommentWhereInput
    orderBy?: Enumerable<CommentOrderByInput>
    by: Array<CommentScalarFieldEnum>
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }


  export type CommentGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    body: string
    authorId: string
    postId: string
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Promise<
    Array<
      PickArray<CommentGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], CommentGroupByOutputType[P]> 
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      > 
    >


  export type CommentSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    body?: boolean
    author?: boolean | UserArgs
    authorId?: boolean
    post?: boolean | PostArgs
    postId?: boolean
  }

  export type CommentInclude = {
    author?: boolean | UserArgs
    post?: boolean | PostArgs
  }

  export type CommentGetPayload<
    S extends boolean | null | undefined | CommentArgs,
    U = keyof S
      > = S extends true
        ? Comment
    : S extends undefined
    ? never
    : S extends CommentArgs | CommentFindManyArgs
    ?'include' extends U
    ? Comment  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'author'
        ? UserGetPayload<S['include'][P]> :
        P extends 'post'
        ? PostGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Comment ?Comment [P]
  : 
          P extends 'author'
        ? UserGetPayload<S['select'][P]> :
        P extends 'post'
        ? PostGetPayload<S['select'][P]> : never
  } 
    : Comment
  : Comment


  type CommentCountArgs = Merge<
    Omit<CommentFindManyArgs, 'select' | 'include'> & {
      select?: CommentCountAggregateInputType | true
    }
  >

  export interface CommentDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CommentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Comment'> extends True ? CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>> : CheckSelect<T, Prisma__CommentClient<Comment | null >, Prisma__CommentClient<CommentGetPayload<T> | null >>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CommentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Comment'> extends True ? CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>> : CheckSelect<T, Prisma__CommentClient<Comment | null >, Prisma__CommentClient<CommentGetPayload<T> | null >>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommentFindManyArgs>(
      args?: SelectSubset<T, CommentFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Comment>>, PrismaPromise<Array<CommentGetPayload<T>>>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
    **/
    create<T extends CommentCreateArgs>(
      args: SelectSubset<T, CommentCreateArgs>
    ): CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>>

    /**
     * Create many Comments.
     *     @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     *     @example
     *     // Create many Comments
     *     const comment = await prisma.comment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CommentCreateManyArgs>(
      args?: SelectSubset<T, CommentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
    **/
    delete<T extends CommentDeleteArgs>(
      args: SelectSubset<T, CommentDeleteArgs>
    ): CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommentUpdateArgs>(
      args: SelectSubset<T, CommentUpdateArgs>
    ): CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommentDeleteManyArgs>(
      args?: SelectSubset<T, CommentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommentUpdateManyArgs>(
      args: SelectSubset<T, CommentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
    **/
    upsert<T extends CommentUpsertArgs>(
      args: SelectSubset<T, CommentUpsertArgs>
    ): CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>>

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CommentClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    author<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    post<T extends PostArgs = {}>(args?: Subset<T, PostArgs>): CheckSelect<T, Prisma__PostClient<Post | null >, Prisma__PostClient<PostGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * Throw an Error if a Comment can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Comment to fetch.
     * 
    **/
    where: CommentWhereUniqueInput
  }


  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * Throw an Error if a Comment can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Comment to fetch.
     * 
    **/
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     * 
    **/
    orderBy?: Enumerable<CommentOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     * 
    **/
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     * 
    **/
    distinct?: Enumerable<CommentScalarFieldEnum>
  }


  /**
   * Comment findMany
   */
  export type CommentFindManyArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * Filter, which Comments to fetch.
     * 
    **/
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     * 
    **/
    orderBy?: Enumerable<CommentOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     * 
    **/
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CommentScalarFieldEnum>
  }


  /**
   * Comment create
   */
  export type CommentCreateArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * The data needed to create a Comment.
     * 
    **/
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }


  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs = {
    data: Enumerable<CommentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Comment update
   */
  export type CommentUpdateArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * The data needed to update a Comment.
     * 
    **/
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     * 
    **/
    where: CommentWhereUniqueInput
  }


  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs = {
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    where?: CommentWhereInput
  }


  /**
   * Comment upsert
   */
  export type CommentUpsertArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * The filter to search for the Comment to update in case it exists.
     * 
    **/
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     * 
    **/
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }


  /**
   * Comment delete
   */
  export type CommentDeleteArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * Filter which Comment to delete.
     * 
    **/
    where: CommentWhereUniqueInput
  }


  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs = {
    where?: CommentWhereInput
  }


  /**
   * Comment without action
   */
  export type CommentArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
  }



  /**
   * Model PostsLikedByUsers
   */


  export type AggregatePostsLikedByUsers = {
    _count: PostsLikedByUsersCountAggregateOutputType | null
    count: PostsLikedByUsersCountAggregateOutputType | null
    _min: PostsLikedByUsersMinAggregateOutputType | null
    min: PostsLikedByUsersMinAggregateOutputType | null
    _max: PostsLikedByUsersMaxAggregateOutputType | null
    max: PostsLikedByUsersMaxAggregateOutputType | null
  }

  export type PostsLikedByUsersMinAggregateOutputType = {
    postId: string | null
    userId: string | null
    likedAt: Date | null
  }

  export type PostsLikedByUsersMaxAggregateOutputType = {
    postId: string | null
    userId: string | null
    likedAt: Date | null
  }

  export type PostsLikedByUsersCountAggregateOutputType = {
    postId: number
    userId: number
    likedAt: number
    _all: number
  }


  export type PostsLikedByUsersMinAggregateInputType = {
    postId?: true
    userId?: true
    likedAt?: true
  }

  export type PostsLikedByUsersMaxAggregateInputType = {
    postId?: true
    userId?: true
    likedAt?: true
  }

  export type PostsLikedByUsersCountAggregateInputType = {
    postId?: true
    userId?: true
    likedAt?: true
    _all?: true
  }

  export type PostsLikedByUsersAggregateArgs = {
    /**
     * Filter which PostsLikedByUsers to aggregate.
     * 
    **/
    where?: PostsLikedByUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostsLikedByUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<PostsLikedByUsersOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PostsLikedByUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostsLikedByUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostsLikedByUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostsLikedByUsers
    **/
    _count?: true | PostsLikedByUsersCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | PostsLikedByUsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostsLikedByUsersMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: PostsLikedByUsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostsLikedByUsersMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: PostsLikedByUsersMaxAggregateInputType
  }

  export type GetPostsLikedByUsersAggregateType<T extends PostsLikedByUsersAggregateArgs> = {
        [P in keyof T & keyof AggregatePostsLikedByUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostsLikedByUsers[P]>
      : GetScalarType<T[P], AggregatePostsLikedByUsers[P]>
  }


    
    
  export type PostsLikedByUsersGroupByArgs = {
    where?: PostsLikedByUsersWhereInput
    orderBy?: Enumerable<PostsLikedByUsersOrderByInput>
    by: Array<PostsLikedByUsersScalarFieldEnum>
    having?: PostsLikedByUsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostsLikedByUsersCountAggregateInputType | true
    _min?: PostsLikedByUsersMinAggregateInputType
    _max?: PostsLikedByUsersMaxAggregateInputType
  }


  export type PostsLikedByUsersGroupByOutputType = {
    postId: string
    userId: string
    likedAt: Date
    _count: PostsLikedByUsersCountAggregateOutputType | null
    _min: PostsLikedByUsersMinAggregateOutputType | null
    _max: PostsLikedByUsersMaxAggregateOutputType | null
  }

  type GetPostsLikedByUsersGroupByPayload<T extends PostsLikedByUsersGroupByArgs> = Promise<
    Array<
      PickArray<PostsLikedByUsersGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof PostsLikedByUsersGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], PostsLikedByUsersGroupByOutputType[P]> 
            : GetScalarType<T[P], PostsLikedByUsersGroupByOutputType[P]>
        }
      > 
    >


  export type PostsLikedByUsersSelect = {
    post?: boolean | PostArgs
    postId?: boolean
    user?: boolean | UserArgs
    userId?: boolean
    likedAt?: boolean
  }

  export type PostsLikedByUsersInclude = {
    post?: boolean | PostArgs
    user?: boolean | UserArgs
  }

  export type PostsLikedByUsersGetPayload<
    S extends boolean | null | undefined | PostsLikedByUsersArgs,
    U = keyof S
      > = S extends true
        ? PostsLikedByUsers
    : S extends undefined
    ? never
    : S extends PostsLikedByUsersArgs | PostsLikedByUsersFindManyArgs
    ?'include' extends U
    ? PostsLikedByUsers  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'post'
        ? PostGetPayload<S['include'][P]> :
        P extends 'user'
        ? UserGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof PostsLikedByUsers ?PostsLikedByUsers [P]
  : 
          P extends 'post'
        ? PostGetPayload<S['select'][P]> :
        P extends 'user'
        ? UserGetPayload<S['select'][P]> : never
  } 
    : PostsLikedByUsers
  : PostsLikedByUsers


  type PostsLikedByUsersCountArgs = Merge<
    Omit<PostsLikedByUsersFindManyArgs, 'select' | 'include'> & {
      select?: PostsLikedByUsersCountAggregateInputType | true
    }
  >

  export interface PostsLikedByUsersDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one PostsLikedByUsers that matches the filter.
     * @param {PostsLikedByUsersFindUniqueArgs} args - Arguments to find a PostsLikedByUsers
     * @example
     * // Get one PostsLikedByUsers
     * const postsLikedByUsers = await prisma.postsLikedByUsers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostsLikedByUsersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PostsLikedByUsersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PostsLikedByUsers'> extends True ? CheckSelect<T, Prisma__PostsLikedByUsersClient<PostsLikedByUsers>, Prisma__PostsLikedByUsersClient<PostsLikedByUsersGetPayload<T>>> : CheckSelect<T, Prisma__PostsLikedByUsersClient<PostsLikedByUsers | null >, Prisma__PostsLikedByUsersClient<PostsLikedByUsersGetPayload<T> | null >>

    /**
     * Find the first PostsLikedByUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsLikedByUsersFindFirstArgs} args - Arguments to find a PostsLikedByUsers
     * @example
     * // Get one PostsLikedByUsers
     * const postsLikedByUsers = await prisma.postsLikedByUsers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostsLikedByUsersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PostsLikedByUsersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PostsLikedByUsers'> extends True ? CheckSelect<T, Prisma__PostsLikedByUsersClient<PostsLikedByUsers>, Prisma__PostsLikedByUsersClient<PostsLikedByUsersGetPayload<T>>> : CheckSelect<T, Prisma__PostsLikedByUsersClient<PostsLikedByUsers | null >, Prisma__PostsLikedByUsersClient<PostsLikedByUsersGetPayload<T> | null >>

    /**
     * Find zero or more PostsLikedByUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsLikedByUsersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostsLikedByUsers
     * const postsLikedByUsers = await prisma.postsLikedByUsers.findMany()
     * 
     * // Get first 10 PostsLikedByUsers
     * const postsLikedByUsers = await prisma.postsLikedByUsers.findMany({ take: 10 })
     * 
     * // Only select the `postId`
     * const postsLikedByUsersWithPostIdOnly = await prisma.postsLikedByUsers.findMany({ select: { postId: true } })
     * 
    **/
    findMany<T extends PostsLikedByUsersFindManyArgs>(
      args?: SelectSubset<T, PostsLikedByUsersFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<PostsLikedByUsers>>, PrismaPromise<Array<PostsLikedByUsersGetPayload<T>>>>

    /**
     * Create a PostsLikedByUsers.
     * @param {PostsLikedByUsersCreateArgs} args - Arguments to create a PostsLikedByUsers.
     * @example
     * // Create one PostsLikedByUsers
     * const PostsLikedByUsers = await prisma.postsLikedByUsers.create({
     *   data: {
     *     // ... data to create a PostsLikedByUsers
     *   }
     * })
     * 
    **/
    create<T extends PostsLikedByUsersCreateArgs>(
      args: SelectSubset<T, PostsLikedByUsersCreateArgs>
    ): CheckSelect<T, Prisma__PostsLikedByUsersClient<PostsLikedByUsers>, Prisma__PostsLikedByUsersClient<PostsLikedByUsersGetPayload<T>>>

    /**
     * Create many PostsLikedByUsers.
     *     @param {PostsLikedByUsersCreateManyArgs} args - Arguments to create many PostsLikedByUsers.
     *     @example
     *     // Create many PostsLikedByUsers
     *     const postsLikedByUsers = await prisma.postsLikedByUsers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostsLikedByUsersCreateManyArgs>(
      args?: SelectSubset<T, PostsLikedByUsersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a PostsLikedByUsers.
     * @param {PostsLikedByUsersDeleteArgs} args - Arguments to delete one PostsLikedByUsers.
     * @example
     * // Delete one PostsLikedByUsers
     * const PostsLikedByUsers = await prisma.postsLikedByUsers.delete({
     *   where: {
     *     // ... filter to delete one PostsLikedByUsers
     *   }
     * })
     * 
    **/
    delete<T extends PostsLikedByUsersDeleteArgs>(
      args: SelectSubset<T, PostsLikedByUsersDeleteArgs>
    ): CheckSelect<T, Prisma__PostsLikedByUsersClient<PostsLikedByUsers>, Prisma__PostsLikedByUsersClient<PostsLikedByUsersGetPayload<T>>>

    /**
     * Update one PostsLikedByUsers.
     * @param {PostsLikedByUsersUpdateArgs} args - Arguments to update one PostsLikedByUsers.
     * @example
     * // Update one PostsLikedByUsers
     * const postsLikedByUsers = await prisma.postsLikedByUsers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostsLikedByUsersUpdateArgs>(
      args: SelectSubset<T, PostsLikedByUsersUpdateArgs>
    ): CheckSelect<T, Prisma__PostsLikedByUsersClient<PostsLikedByUsers>, Prisma__PostsLikedByUsersClient<PostsLikedByUsersGetPayload<T>>>

    /**
     * Delete zero or more PostsLikedByUsers.
     * @param {PostsLikedByUsersDeleteManyArgs} args - Arguments to filter PostsLikedByUsers to delete.
     * @example
     * // Delete a few PostsLikedByUsers
     * const { count } = await prisma.postsLikedByUsers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostsLikedByUsersDeleteManyArgs>(
      args?: SelectSubset<T, PostsLikedByUsersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostsLikedByUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsLikedByUsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostsLikedByUsers
     * const postsLikedByUsers = await prisma.postsLikedByUsers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostsLikedByUsersUpdateManyArgs>(
      args: SelectSubset<T, PostsLikedByUsersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one PostsLikedByUsers.
     * @param {PostsLikedByUsersUpsertArgs} args - Arguments to update or create a PostsLikedByUsers.
     * @example
     * // Update or create a PostsLikedByUsers
     * const postsLikedByUsers = await prisma.postsLikedByUsers.upsert({
     *   create: {
     *     // ... data to create a PostsLikedByUsers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostsLikedByUsers we want to update
     *   }
     * })
    **/
    upsert<T extends PostsLikedByUsersUpsertArgs>(
      args: SelectSubset<T, PostsLikedByUsersUpsertArgs>
    ): CheckSelect<T, Prisma__PostsLikedByUsersClient<PostsLikedByUsers>, Prisma__PostsLikedByUsersClient<PostsLikedByUsersGetPayload<T>>>

    /**
     * Count the number of PostsLikedByUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsLikedByUsersCountArgs} args - Arguments to filter PostsLikedByUsers to count.
     * @example
     * // Count the number of PostsLikedByUsers
     * const count = await prisma.postsLikedByUsers.count({
     *   where: {
     *     // ... the filter for the PostsLikedByUsers we want to count
     *   }
     * })
    **/
    count<T extends PostsLikedByUsersCountArgs>(
      args?: Subset<T, PostsLikedByUsersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostsLikedByUsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostsLikedByUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsLikedByUsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostsLikedByUsersAggregateArgs>(args: Subset<T, PostsLikedByUsersAggregateArgs>): PrismaPromise<GetPostsLikedByUsersAggregateType<T>>

    /**
     * Group by PostsLikedByUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsLikedByUsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostsLikedByUsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostsLikedByUsersGroupByArgs['orderBy'] }
        : { orderBy?: PostsLikedByUsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostsLikedByUsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostsLikedByUsersGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostsLikedByUsers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PostsLikedByUsersClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    post<T extends PostArgs = {}>(args?: Subset<T, PostArgs>): CheckSelect<T, Prisma__PostClient<Post | null >, Prisma__PostClient<PostGetPayload<T> | null >>;

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * PostsLikedByUsers findUnique
   */
  export type PostsLikedByUsersFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the PostsLikedByUsers
     * 
    **/
    select?: PostsLikedByUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostsLikedByUsersInclude | null
    /**
     * Throw an Error if a PostsLikedByUsers can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which PostsLikedByUsers to fetch.
     * 
    **/
    where: PostsLikedByUsersWhereUniqueInput
  }


  /**
   * PostsLikedByUsers findFirst
   */
  export type PostsLikedByUsersFindFirstArgs = {
    /**
     * Select specific fields to fetch from the PostsLikedByUsers
     * 
    **/
    select?: PostsLikedByUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostsLikedByUsersInclude | null
    /**
     * Throw an Error if a PostsLikedByUsers can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which PostsLikedByUsers to fetch.
     * 
    **/
    where?: PostsLikedByUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostsLikedByUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<PostsLikedByUsersOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostsLikedByUsers.
     * 
    **/
    cursor?: PostsLikedByUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostsLikedByUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostsLikedByUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostsLikedByUsers.
     * 
    **/
    distinct?: Enumerable<PostsLikedByUsersScalarFieldEnum>
  }


  /**
   * PostsLikedByUsers findMany
   */
  export type PostsLikedByUsersFindManyArgs = {
    /**
     * Select specific fields to fetch from the PostsLikedByUsers
     * 
    **/
    select?: PostsLikedByUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostsLikedByUsersInclude | null
    /**
     * Filter, which PostsLikedByUsers to fetch.
     * 
    **/
    where?: PostsLikedByUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostsLikedByUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<PostsLikedByUsersOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostsLikedByUsers.
     * 
    **/
    cursor?: PostsLikedByUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostsLikedByUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostsLikedByUsers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PostsLikedByUsersScalarFieldEnum>
  }


  /**
   * PostsLikedByUsers create
   */
  export type PostsLikedByUsersCreateArgs = {
    /**
     * Select specific fields to fetch from the PostsLikedByUsers
     * 
    **/
    select?: PostsLikedByUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostsLikedByUsersInclude | null
    /**
     * The data needed to create a PostsLikedByUsers.
     * 
    **/
    data: XOR<PostsLikedByUsersCreateInput, PostsLikedByUsersUncheckedCreateInput>
  }


  /**
   * PostsLikedByUsers createMany
   */
  export type PostsLikedByUsersCreateManyArgs = {
    data: Enumerable<PostsLikedByUsersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PostsLikedByUsers update
   */
  export type PostsLikedByUsersUpdateArgs = {
    /**
     * Select specific fields to fetch from the PostsLikedByUsers
     * 
    **/
    select?: PostsLikedByUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostsLikedByUsersInclude | null
    /**
     * The data needed to update a PostsLikedByUsers.
     * 
    **/
    data: XOR<PostsLikedByUsersUpdateInput, PostsLikedByUsersUncheckedUpdateInput>
    /**
     * Choose, which PostsLikedByUsers to update.
     * 
    **/
    where: PostsLikedByUsersWhereUniqueInput
  }


  /**
   * PostsLikedByUsers updateMany
   */
  export type PostsLikedByUsersUpdateManyArgs = {
    data: XOR<PostsLikedByUsersUpdateManyMutationInput, PostsLikedByUsersUncheckedUpdateManyInput>
    where?: PostsLikedByUsersWhereInput
  }


  /**
   * PostsLikedByUsers upsert
   */
  export type PostsLikedByUsersUpsertArgs = {
    /**
     * Select specific fields to fetch from the PostsLikedByUsers
     * 
    **/
    select?: PostsLikedByUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostsLikedByUsersInclude | null
    /**
     * The filter to search for the PostsLikedByUsers to update in case it exists.
     * 
    **/
    where: PostsLikedByUsersWhereUniqueInput
    /**
     * In case the PostsLikedByUsers found by the `where` argument doesn't exist, create a new PostsLikedByUsers with this data.
     * 
    **/
    create: XOR<PostsLikedByUsersCreateInput, PostsLikedByUsersUncheckedCreateInput>
    /**
     * In case the PostsLikedByUsers was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PostsLikedByUsersUpdateInput, PostsLikedByUsersUncheckedUpdateInput>
  }


  /**
   * PostsLikedByUsers delete
   */
  export type PostsLikedByUsersDeleteArgs = {
    /**
     * Select specific fields to fetch from the PostsLikedByUsers
     * 
    **/
    select?: PostsLikedByUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostsLikedByUsersInclude | null
    /**
     * Filter which PostsLikedByUsers to delete.
     * 
    **/
    where: PostsLikedByUsersWhereUniqueInput
  }


  /**
   * PostsLikedByUsers deleteMany
   */
  export type PostsLikedByUsersDeleteManyArgs = {
    where?: PostsLikedByUsersWhereInput
  }


  /**
   * PostsLikedByUsers without action
   */
  export type PostsLikedByUsersArgs = {
    /**
     * Select specific fields to fetch from the PostsLikedByUsers
     * 
    **/
    select?: PostsLikedByUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostsLikedByUsersInclude | null
  }



  /**
   * Model PostsViewedByUsers
   */


  export type AggregatePostsViewedByUsers = {
    _count: PostsViewedByUsersCountAggregateOutputType | null
    count: PostsViewedByUsersCountAggregateOutputType | null
    _min: PostsViewedByUsersMinAggregateOutputType | null
    min: PostsViewedByUsersMinAggregateOutputType | null
    _max: PostsViewedByUsersMaxAggregateOutputType | null
    max: PostsViewedByUsersMaxAggregateOutputType | null
  }

  export type PostsViewedByUsersMinAggregateOutputType = {
    postId: string | null
    userId: string | null
    viewedAt: Date | null
  }

  export type PostsViewedByUsersMaxAggregateOutputType = {
    postId: string | null
    userId: string | null
    viewedAt: Date | null
  }

  export type PostsViewedByUsersCountAggregateOutputType = {
    postId: number
    userId: number
    viewedAt: number
    _all: number
  }


  export type PostsViewedByUsersMinAggregateInputType = {
    postId?: true
    userId?: true
    viewedAt?: true
  }

  export type PostsViewedByUsersMaxAggregateInputType = {
    postId?: true
    userId?: true
    viewedAt?: true
  }

  export type PostsViewedByUsersCountAggregateInputType = {
    postId?: true
    userId?: true
    viewedAt?: true
    _all?: true
  }

  export type PostsViewedByUsersAggregateArgs = {
    /**
     * Filter which PostsViewedByUsers to aggregate.
     * 
    **/
    where?: PostsViewedByUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostsViewedByUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<PostsViewedByUsersOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PostsViewedByUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostsViewedByUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostsViewedByUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostsViewedByUsers
    **/
    _count?: true | PostsViewedByUsersCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | PostsViewedByUsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostsViewedByUsersMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: PostsViewedByUsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostsViewedByUsersMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: PostsViewedByUsersMaxAggregateInputType
  }

  export type GetPostsViewedByUsersAggregateType<T extends PostsViewedByUsersAggregateArgs> = {
        [P in keyof T & keyof AggregatePostsViewedByUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostsViewedByUsers[P]>
      : GetScalarType<T[P], AggregatePostsViewedByUsers[P]>
  }


    
    
  export type PostsViewedByUsersGroupByArgs = {
    where?: PostsViewedByUsersWhereInput
    orderBy?: Enumerable<PostsViewedByUsersOrderByInput>
    by: Array<PostsViewedByUsersScalarFieldEnum>
    having?: PostsViewedByUsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostsViewedByUsersCountAggregateInputType | true
    _min?: PostsViewedByUsersMinAggregateInputType
    _max?: PostsViewedByUsersMaxAggregateInputType
  }


  export type PostsViewedByUsersGroupByOutputType = {
    postId: string
    userId: string
    viewedAt: Date
    _count: PostsViewedByUsersCountAggregateOutputType | null
    _min: PostsViewedByUsersMinAggregateOutputType | null
    _max: PostsViewedByUsersMaxAggregateOutputType | null
  }

  type GetPostsViewedByUsersGroupByPayload<T extends PostsViewedByUsersGroupByArgs> = Promise<
    Array<
      PickArray<PostsViewedByUsersGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof PostsViewedByUsersGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], PostsViewedByUsersGroupByOutputType[P]> 
            : GetScalarType<T[P], PostsViewedByUsersGroupByOutputType[P]>
        }
      > 
    >


  export type PostsViewedByUsersSelect = {
    post?: boolean | PostArgs
    postId?: boolean
    user?: boolean | UserArgs
    userId?: boolean
    viewedAt?: boolean
  }

  export type PostsViewedByUsersInclude = {
    post?: boolean | PostArgs
    user?: boolean | UserArgs
  }

  export type PostsViewedByUsersGetPayload<
    S extends boolean | null | undefined | PostsViewedByUsersArgs,
    U = keyof S
      > = S extends true
        ? PostsViewedByUsers
    : S extends undefined
    ? never
    : S extends PostsViewedByUsersArgs | PostsViewedByUsersFindManyArgs
    ?'include' extends U
    ? PostsViewedByUsers  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'post'
        ? PostGetPayload<S['include'][P]> :
        P extends 'user'
        ? UserGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof PostsViewedByUsers ?PostsViewedByUsers [P]
  : 
          P extends 'post'
        ? PostGetPayload<S['select'][P]> :
        P extends 'user'
        ? UserGetPayload<S['select'][P]> : never
  } 
    : PostsViewedByUsers
  : PostsViewedByUsers


  type PostsViewedByUsersCountArgs = Merge<
    Omit<PostsViewedByUsersFindManyArgs, 'select' | 'include'> & {
      select?: PostsViewedByUsersCountAggregateInputType | true
    }
  >

  export interface PostsViewedByUsersDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one PostsViewedByUsers that matches the filter.
     * @param {PostsViewedByUsersFindUniqueArgs} args - Arguments to find a PostsViewedByUsers
     * @example
     * // Get one PostsViewedByUsers
     * const postsViewedByUsers = await prisma.postsViewedByUsers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostsViewedByUsersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PostsViewedByUsersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PostsViewedByUsers'> extends True ? CheckSelect<T, Prisma__PostsViewedByUsersClient<PostsViewedByUsers>, Prisma__PostsViewedByUsersClient<PostsViewedByUsersGetPayload<T>>> : CheckSelect<T, Prisma__PostsViewedByUsersClient<PostsViewedByUsers | null >, Prisma__PostsViewedByUsersClient<PostsViewedByUsersGetPayload<T> | null >>

    /**
     * Find the first PostsViewedByUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsViewedByUsersFindFirstArgs} args - Arguments to find a PostsViewedByUsers
     * @example
     * // Get one PostsViewedByUsers
     * const postsViewedByUsers = await prisma.postsViewedByUsers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostsViewedByUsersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PostsViewedByUsersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PostsViewedByUsers'> extends True ? CheckSelect<T, Prisma__PostsViewedByUsersClient<PostsViewedByUsers>, Prisma__PostsViewedByUsersClient<PostsViewedByUsersGetPayload<T>>> : CheckSelect<T, Prisma__PostsViewedByUsersClient<PostsViewedByUsers | null >, Prisma__PostsViewedByUsersClient<PostsViewedByUsersGetPayload<T> | null >>

    /**
     * Find zero or more PostsViewedByUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsViewedByUsersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostsViewedByUsers
     * const postsViewedByUsers = await prisma.postsViewedByUsers.findMany()
     * 
     * // Get first 10 PostsViewedByUsers
     * const postsViewedByUsers = await prisma.postsViewedByUsers.findMany({ take: 10 })
     * 
     * // Only select the `postId`
     * const postsViewedByUsersWithPostIdOnly = await prisma.postsViewedByUsers.findMany({ select: { postId: true } })
     * 
    **/
    findMany<T extends PostsViewedByUsersFindManyArgs>(
      args?: SelectSubset<T, PostsViewedByUsersFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<PostsViewedByUsers>>, PrismaPromise<Array<PostsViewedByUsersGetPayload<T>>>>

    /**
     * Create a PostsViewedByUsers.
     * @param {PostsViewedByUsersCreateArgs} args - Arguments to create a PostsViewedByUsers.
     * @example
     * // Create one PostsViewedByUsers
     * const PostsViewedByUsers = await prisma.postsViewedByUsers.create({
     *   data: {
     *     // ... data to create a PostsViewedByUsers
     *   }
     * })
     * 
    **/
    create<T extends PostsViewedByUsersCreateArgs>(
      args: SelectSubset<T, PostsViewedByUsersCreateArgs>
    ): CheckSelect<T, Prisma__PostsViewedByUsersClient<PostsViewedByUsers>, Prisma__PostsViewedByUsersClient<PostsViewedByUsersGetPayload<T>>>

    /**
     * Create many PostsViewedByUsers.
     *     @param {PostsViewedByUsersCreateManyArgs} args - Arguments to create many PostsViewedByUsers.
     *     @example
     *     // Create many PostsViewedByUsers
     *     const postsViewedByUsers = await prisma.postsViewedByUsers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostsViewedByUsersCreateManyArgs>(
      args?: SelectSubset<T, PostsViewedByUsersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a PostsViewedByUsers.
     * @param {PostsViewedByUsersDeleteArgs} args - Arguments to delete one PostsViewedByUsers.
     * @example
     * // Delete one PostsViewedByUsers
     * const PostsViewedByUsers = await prisma.postsViewedByUsers.delete({
     *   where: {
     *     // ... filter to delete one PostsViewedByUsers
     *   }
     * })
     * 
    **/
    delete<T extends PostsViewedByUsersDeleteArgs>(
      args: SelectSubset<T, PostsViewedByUsersDeleteArgs>
    ): CheckSelect<T, Prisma__PostsViewedByUsersClient<PostsViewedByUsers>, Prisma__PostsViewedByUsersClient<PostsViewedByUsersGetPayload<T>>>

    /**
     * Update one PostsViewedByUsers.
     * @param {PostsViewedByUsersUpdateArgs} args - Arguments to update one PostsViewedByUsers.
     * @example
     * // Update one PostsViewedByUsers
     * const postsViewedByUsers = await prisma.postsViewedByUsers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostsViewedByUsersUpdateArgs>(
      args: SelectSubset<T, PostsViewedByUsersUpdateArgs>
    ): CheckSelect<T, Prisma__PostsViewedByUsersClient<PostsViewedByUsers>, Prisma__PostsViewedByUsersClient<PostsViewedByUsersGetPayload<T>>>

    /**
     * Delete zero or more PostsViewedByUsers.
     * @param {PostsViewedByUsersDeleteManyArgs} args - Arguments to filter PostsViewedByUsers to delete.
     * @example
     * // Delete a few PostsViewedByUsers
     * const { count } = await prisma.postsViewedByUsers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostsViewedByUsersDeleteManyArgs>(
      args?: SelectSubset<T, PostsViewedByUsersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostsViewedByUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsViewedByUsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostsViewedByUsers
     * const postsViewedByUsers = await prisma.postsViewedByUsers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostsViewedByUsersUpdateManyArgs>(
      args: SelectSubset<T, PostsViewedByUsersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one PostsViewedByUsers.
     * @param {PostsViewedByUsersUpsertArgs} args - Arguments to update or create a PostsViewedByUsers.
     * @example
     * // Update or create a PostsViewedByUsers
     * const postsViewedByUsers = await prisma.postsViewedByUsers.upsert({
     *   create: {
     *     // ... data to create a PostsViewedByUsers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostsViewedByUsers we want to update
     *   }
     * })
    **/
    upsert<T extends PostsViewedByUsersUpsertArgs>(
      args: SelectSubset<T, PostsViewedByUsersUpsertArgs>
    ): CheckSelect<T, Prisma__PostsViewedByUsersClient<PostsViewedByUsers>, Prisma__PostsViewedByUsersClient<PostsViewedByUsersGetPayload<T>>>

    /**
     * Count the number of PostsViewedByUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsViewedByUsersCountArgs} args - Arguments to filter PostsViewedByUsers to count.
     * @example
     * // Count the number of PostsViewedByUsers
     * const count = await prisma.postsViewedByUsers.count({
     *   where: {
     *     // ... the filter for the PostsViewedByUsers we want to count
     *   }
     * })
    **/
    count<T extends PostsViewedByUsersCountArgs>(
      args?: Subset<T, PostsViewedByUsersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostsViewedByUsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostsViewedByUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsViewedByUsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostsViewedByUsersAggregateArgs>(args: Subset<T, PostsViewedByUsersAggregateArgs>): PrismaPromise<GetPostsViewedByUsersAggregateType<T>>

    /**
     * Group by PostsViewedByUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsViewedByUsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostsViewedByUsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostsViewedByUsersGroupByArgs['orderBy'] }
        : { orderBy?: PostsViewedByUsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostsViewedByUsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostsViewedByUsersGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostsViewedByUsers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PostsViewedByUsersClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    post<T extends PostArgs = {}>(args?: Subset<T, PostArgs>): CheckSelect<T, Prisma__PostClient<Post | null >, Prisma__PostClient<PostGetPayload<T> | null >>;

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * PostsViewedByUsers findUnique
   */
  export type PostsViewedByUsersFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the PostsViewedByUsers
     * 
    **/
    select?: PostsViewedByUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostsViewedByUsersInclude | null
    /**
     * Throw an Error if a PostsViewedByUsers can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which PostsViewedByUsers to fetch.
     * 
    **/
    where: PostsViewedByUsersWhereUniqueInput
  }


  /**
   * PostsViewedByUsers findFirst
   */
  export type PostsViewedByUsersFindFirstArgs = {
    /**
     * Select specific fields to fetch from the PostsViewedByUsers
     * 
    **/
    select?: PostsViewedByUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostsViewedByUsersInclude | null
    /**
     * Throw an Error if a PostsViewedByUsers can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which PostsViewedByUsers to fetch.
     * 
    **/
    where?: PostsViewedByUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostsViewedByUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<PostsViewedByUsersOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostsViewedByUsers.
     * 
    **/
    cursor?: PostsViewedByUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostsViewedByUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostsViewedByUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostsViewedByUsers.
     * 
    **/
    distinct?: Enumerable<PostsViewedByUsersScalarFieldEnum>
  }


  /**
   * PostsViewedByUsers findMany
   */
  export type PostsViewedByUsersFindManyArgs = {
    /**
     * Select specific fields to fetch from the PostsViewedByUsers
     * 
    **/
    select?: PostsViewedByUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostsViewedByUsersInclude | null
    /**
     * Filter, which PostsViewedByUsers to fetch.
     * 
    **/
    where?: PostsViewedByUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostsViewedByUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<PostsViewedByUsersOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostsViewedByUsers.
     * 
    **/
    cursor?: PostsViewedByUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostsViewedByUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostsViewedByUsers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PostsViewedByUsersScalarFieldEnum>
  }


  /**
   * PostsViewedByUsers create
   */
  export type PostsViewedByUsersCreateArgs = {
    /**
     * Select specific fields to fetch from the PostsViewedByUsers
     * 
    **/
    select?: PostsViewedByUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostsViewedByUsersInclude | null
    /**
     * The data needed to create a PostsViewedByUsers.
     * 
    **/
    data: XOR<PostsViewedByUsersCreateInput, PostsViewedByUsersUncheckedCreateInput>
  }


  /**
   * PostsViewedByUsers createMany
   */
  export type PostsViewedByUsersCreateManyArgs = {
    data: Enumerable<PostsViewedByUsersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PostsViewedByUsers update
   */
  export type PostsViewedByUsersUpdateArgs = {
    /**
     * Select specific fields to fetch from the PostsViewedByUsers
     * 
    **/
    select?: PostsViewedByUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostsViewedByUsersInclude | null
    /**
     * The data needed to update a PostsViewedByUsers.
     * 
    **/
    data: XOR<PostsViewedByUsersUpdateInput, PostsViewedByUsersUncheckedUpdateInput>
    /**
     * Choose, which PostsViewedByUsers to update.
     * 
    **/
    where: PostsViewedByUsersWhereUniqueInput
  }


  /**
   * PostsViewedByUsers updateMany
   */
  export type PostsViewedByUsersUpdateManyArgs = {
    data: XOR<PostsViewedByUsersUpdateManyMutationInput, PostsViewedByUsersUncheckedUpdateManyInput>
    where?: PostsViewedByUsersWhereInput
  }


  /**
   * PostsViewedByUsers upsert
   */
  export type PostsViewedByUsersUpsertArgs = {
    /**
     * Select specific fields to fetch from the PostsViewedByUsers
     * 
    **/
    select?: PostsViewedByUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostsViewedByUsersInclude | null
    /**
     * The filter to search for the PostsViewedByUsers to update in case it exists.
     * 
    **/
    where: PostsViewedByUsersWhereUniqueInput
    /**
     * In case the PostsViewedByUsers found by the `where` argument doesn't exist, create a new PostsViewedByUsers with this data.
     * 
    **/
    create: XOR<PostsViewedByUsersCreateInput, PostsViewedByUsersUncheckedCreateInput>
    /**
     * In case the PostsViewedByUsers was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PostsViewedByUsersUpdateInput, PostsViewedByUsersUncheckedUpdateInput>
  }


  /**
   * PostsViewedByUsers delete
   */
  export type PostsViewedByUsersDeleteArgs = {
    /**
     * Select specific fields to fetch from the PostsViewedByUsers
     * 
    **/
    select?: PostsViewedByUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostsViewedByUsersInclude | null
    /**
     * Filter which PostsViewedByUsers to delete.
     * 
    **/
    where: PostsViewedByUsersWhereUniqueInput
  }


  /**
   * PostsViewedByUsers deleteMany
   */
  export type PostsViewedByUsersDeleteManyArgs = {
    where?: PostsViewedByUsersWhereInput
  }


  /**
   * PostsViewedByUsers without action
   */
  export type PostsViewedByUsersArgs = {
    /**
     * Select specific fields to fetch from the PostsViewedByUsers
     * 
    **/
    select?: PostsViewedByUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostsViewedByUsersInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted',
    name: 'name',
    email: 'email',
    roleId: 'roleId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const SocialScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    accountId: 'accountId',
    accountUrl: 'accountUrl',
    accountImage: 'accountImage'
  };

  export type SocialScalarFieldEnum = (typeof SocialScalarFieldEnum)[keyof typeof SocialScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted',
    slug: 'slug',
    title: 'title',
    body: 'body',
    published: 'published',
    publishedAt: 'publishedAt',
    views: 'views',
    viewsIps: 'viewsIps',
    likes: 'likes',
    likedIps: 'likedIps',
    authorId: 'authorId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const PostTagsScalarFieldEnum: {
    tagId: 'tagId',
    postId: 'postId'
  };

  export type PostTagsScalarFieldEnum = (typeof PostTagsScalarFieldEnum)[keyof typeof PostTagsScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted',
    body: 'body',
    authorId: 'authorId',
    postId: 'postId'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const PostsLikedByUsersScalarFieldEnum: {
    postId: 'postId',
    userId: 'userId',
    likedAt: 'likedAt'
  };

  export type PostsLikedByUsersScalarFieldEnum = (typeof PostsLikedByUsersScalarFieldEnum)[keyof typeof PostsLikedByUsersScalarFieldEnum]


  export const PostsViewedByUsersScalarFieldEnum: {
    postId: 'postId',
    userId: 'userId',
    viewedAt: 'viewedAt'
  };

  export type PostsViewedByUsersScalarFieldEnum = (typeof PostsViewedByUsersScalarFieldEnum)[keyof typeof PostsViewedByUsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    isDeleted?: BoolFilter | boolean
    name?: StringFilter | string
    email?: StringFilter | string
    roleId?: StringFilter | string
    role?: XOR<RoleRelationFilter, RoleWhereInput>
    posts?: PostListRelationFilter
    socials?: SocialListRelationFilter
    likedPosts?: PostsLikedByUsersListRelationFilter
    viewedPosts?: PostsViewedByUsersListRelationFilter
    comments?: CommentListRelationFilter
  }

  export type UserOrderByInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    name?: SortOrder
    email?: SortOrder
    roleId?: SortOrder
  }

  export type UserWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    isDeleted?: BoolWithAggregatesFilter | boolean
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    roleId?: StringWithAggregatesFilter | string
  }

  export type RoleWhereInput = {
    AND?: Enumerable<RoleWhereInput>
    OR?: Enumerable<RoleWhereInput>
    NOT?: Enumerable<RoleWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    users?: UserListRelationFilter
  }

  export type RoleOrderByInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleWhereUniqueInput = {
    id?: string
    name?: string
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RoleScalarWhereWithAggregatesInput>
    OR?: Enumerable<RoleScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RoleScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type SocialWhereInput = {
    AND?: Enumerable<SocialWhereInput>
    OR?: Enumerable<SocialWhereInput>
    NOT?: Enumerable<SocialWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    type?: StringFilter | string
    accountId?: IntFilter | number
    accountUrl?: StringFilter | string
    accountImage?: StringFilter | string
  }

  export type SocialOrderByInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    accountId?: SortOrder
    accountUrl?: SortOrder
    accountImage?: SortOrder
  }

  export type SocialWhereUniqueInput = {
    id?: string
  }

  export type SocialScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SocialScalarWhereWithAggregatesInput>
    OR?: Enumerable<SocialScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SocialScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    type?: StringWithAggregatesFilter | string
    accountId?: IntWithAggregatesFilter | number
    accountUrl?: StringWithAggregatesFilter | string
    accountImage?: StringWithAggregatesFilter | string
  }

  export type PostWhereInput = {
    AND?: Enumerable<PostWhereInput>
    OR?: Enumerable<PostWhereInput>
    NOT?: Enumerable<PostWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    isDeleted?: BoolFilter | boolean
    slug?: StringFilter | string
    title?: StringFilter | string
    body?: StringFilter | string
    published?: BoolFilter | boolean
    publishedAt?: DateTimeNullableFilter | Date | string | null
    views?: IntFilter | number
    viewsIps?: StringNullableListFilter
    viewsUsers?: PostsViewedByUsersListRelationFilter
    likes?: IntFilter | number
    likedIps?: StringNullableListFilter
    likedUsers?: PostsLikedByUsersListRelationFilter
    author?: XOR<UserRelationFilter, UserWhereInput>
    authorId?: StringFilter | string
    comments?: CommentListRelationFilter
    tags?: PostTagsListRelationFilter
  }

  export type PostOrderByInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    body?: SortOrder
    published?: SortOrder
    publishedAt?: SortOrder
    views?: SortOrder
    viewsIps?: SortOrder
    likes?: SortOrder
    likedIps?: SortOrder
    authorId?: SortOrder
  }

  export type PostWhereUniqueInput = {
    id?: string
    slug?: string
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PostScalarWhereWithAggregatesInput>
    OR?: Enumerable<PostScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PostScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    isDeleted?: BoolWithAggregatesFilter | boolean
    slug?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
    body?: StringWithAggregatesFilter | string
    published?: BoolWithAggregatesFilter | boolean
    publishedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    views?: IntWithAggregatesFilter | number
    viewsIps?: StringNullableListFilter
    likes?: IntWithAggregatesFilter | number
    likedIps?: StringNullableListFilter
    authorId?: StringWithAggregatesFilter | string
  }

  export type TagWhereInput = {
    AND?: Enumerable<TagWhereInput>
    OR?: Enumerable<TagWhereInput>
    NOT?: Enumerable<TagWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    posts?: PostTagsListRelationFilter
  }

  export type TagOrderByInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagWhereUniqueInput = {
    id?: string
    name?: string
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TagScalarWhereWithAggregatesInput>
    OR?: Enumerable<TagScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TagScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type PostTagsWhereInput = {
    AND?: Enumerable<PostTagsWhereInput>
    OR?: Enumerable<PostTagsWhereInput>
    NOT?: Enumerable<PostTagsWhereInput>
    tagId?: StringFilter | string
    tag?: XOR<TagRelationFilter, TagWhereInput>
    postId?: StringFilter | string
    post?: XOR<PostRelationFilter, PostWhereInput>
  }

  export type PostTagsOrderByInput = {
    tagId?: SortOrder
    postId?: SortOrder
  }

  export type PostTagsWhereUniqueInput = {
    tagId_postId?: PostTagsTagIdPostIdCompoundUniqueInput
  }

  export type PostTagsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PostTagsScalarWhereWithAggregatesInput>
    OR?: Enumerable<PostTagsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PostTagsScalarWhereWithAggregatesInput>
    tagId?: StringWithAggregatesFilter | string
    postId?: StringWithAggregatesFilter | string
  }

  export type CommentWhereInput = {
    AND?: Enumerable<CommentWhereInput>
    OR?: Enumerable<CommentWhereInput>
    NOT?: Enumerable<CommentWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    isDeleted?: BoolFilter | boolean
    body?: StringFilter | string
    author?: XOR<UserRelationFilter, UserWhereInput>
    authorId?: StringFilter | string
    post?: XOR<PostRelationFilter, PostWhereInput>
    postId?: StringFilter | string
  }

  export type CommentOrderByInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    body?: SortOrder
    authorId?: SortOrder
    postId?: SortOrder
  }

  export type CommentWhereUniqueInput = {
    id?: string
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CommentScalarWhereWithAggregatesInput>
    OR?: Enumerable<CommentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CommentScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    isDeleted?: BoolWithAggregatesFilter | boolean
    body?: StringWithAggregatesFilter | string
    authorId?: StringWithAggregatesFilter | string
    postId?: StringWithAggregatesFilter | string
  }

  export type PostsLikedByUsersWhereInput = {
    AND?: Enumerable<PostsLikedByUsersWhereInput>
    OR?: Enumerable<PostsLikedByUsersWhereInput>
    NOT?: Enumerable<PostsLikedByUsersWhereInput>
    post?: XOR<PostRelationFilter, PostWhereInput>
    postId?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    userId?: StringFilter | string
    likedAt?: DateTimeFilter | Date | string
  }

  export type PostsLikedByUsersOrderByInput = {
    postId?: SortOrder
    userId?: SortOrder
    likedAt?: SortOrder
  }

  export type PostsLikedByUsersWhereUniqueInput = {
    postId_userId?: PostsLikedByUsersPostIdUserIdCompoundUniqueInput
  }

  export type PostsLikedByUsersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PostsLikedByUsersScalarWhereWithAggregatesInput>
    OR?: Enumerable<PostsLikedByUsersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PostsLikedByUsersScalarWhereWithAggregatesInput>
    postId?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    likedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PostsViewedByUsersWhereInput = {
    AND?: Enumerable<PostsViewedByUsersWhereInput>
    OR?: Enumerable<PostsViewedByUsersWhereInput>
    NOT?: Enumerable<PostsViewedByUsersWhereInput>
    post?: XOR<PostRelationFilter, PostWhereInput>
    postId?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    userId?: StringFilter | string
    viewedAt?: DateTimeFilter | Date | string
  }

  export type PostsViewedByUsersOrderByInput = {
    postId?: SortOrder
    userId?: SortOrder
    viewedAt?: SortOrder
  }

  export type PostsViewedByUsersWhereUniqueInput = {
    postId_userId?: PostsViewedByUsersPostIdUserIdCompoundUniqueInput
  }

  export type PostsViewedByUsersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PostsViewedByUsersScalarWhereWithAggregatesInput>
    OR?: Enumerable<PostsViewedByUsersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PostsViewedByUsersScalarWhereWithAggregatesInput>
    postId?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    viewedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    email: string
    role: RoleCreateNestedOneWithoutUsersInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    socials?: SocialCreateNestedManyWithoutUserInput
    likedPosts?: PostsLikedByUsersCreateNestedManyWithoutUserInput
    viewedPosts?: PostsViewedByUsersCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    email: string
    roleId: string
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    socials?: SocialUncheckedCreateNestedManyWithoutUserInput
    likedPosts?: PostsLikedByUsersUncheckedCreateNestedManyWithoutUserInput
    viewedPosts?: PostsViewedByUsersUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutUsersInput
    posts?: PostUpdateManyWithoutAuthorInput
    socials?: SocialUpdateManyWithoutUserInput
    likedPosts?: PostsLikedByUsersUpdateManyWithoutUserInput
    viewedPosts?: PostsViewedByUsersUpdateManyWithoutUserInput
    comments?: CommentUpdateManyWithoutAuthorInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    posts?: PostUncheckedUpdateManyWithoutAuthorInput
    socials?: SocialUncheckedUpdateManyWithoutUserInput
    likedPosts?: PostsLikedByUsersUncheckedUpdateManyWithoutUserInput
    viewedPosts?: PostsViewedByUsersUncheckedUpdateManyWithoutUserInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorInput
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    email: string
    roleId: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type RoleCreateInput = {
    id?: string
    name: string
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    name: string
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutRoleInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutRoleInput
  }

  export type RoleCreateManyInput = {
    id?: string
    name: string
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SocialCreateInput = {
    id?: string
    type: string
    accountId: number
    accountUrl: string
    accountImage: string
    user: UserCreateNestedOneWithoutSocialsInput
  }

  export type SocialUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    accountId: number
    accountUrl: string
    accountImage: string
  }

  export type SocialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    accountId?: IntFieldUpdateOperationsInput | number
    accountUrl?: StringFieldUpdateOperationsInput | string
    accountImage?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutSocialsInput
  }

  export type SocialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    accountId?: IntFieldUpdateOperationsInput | number
    accountUrl?: StringFieldUpdateOperationsInput | string
    accountImage?: StringFieldUpdateOperationsInput | string
  }

  export type SocialCreateManyInput = {
    id?: string
    userId: string
    type: string
    accountId: number
    accountUrl: string
    accountImage: string
  }

  export type SocialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    accountId?: IntFieldUpdateOperationsInput | number
    accountUrl?: StringFieldUpdateOperationsInput | string
    accountImage?: StringFieldUpdateOperationsInput | string
  }

  export type SocialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    accountId?: IntFieldUpdateOperationsInput | number
    accountUrl?: StringFieldUpdateOperationsInput | string
    accountImage?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    slug: string
    title: string
    body: string
    published?: boolean
    publishedAt?: Date | string | null
    views: number
    likes: number
    viewsIps?: PostCreateviewsIpsInput | Enumerable<string>
    likedIps?: PostCreatelikedIpsInput | Enumerable<string>
    viewsUsers?: PostsViewedByUsersCreateNestedManyWithoutPostInput
    likedUsers?: PostsLikedByUsersCreateNestedManyWithoutPostInput
    author: UserCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
    tags?: PostTagsCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    slug: string
    title: string
    body: string
    published?: boolean
    publishedAt?: Date | string | null
    views: number
    likes: number
    authorId: string
    viewsIps?: PostCreateviewsIpsInput | Enumerable<string>
    likedIps?: PostCreatelikedIpsInput | Enumerable<string>
    viewsUsers?: PostsViewedByUsersUncheckedCreateNestedManyWithoutPostInput
    likedUsers?: PostsLikedByUsersUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    tags?: PostTagsUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    viewsIps?: PostUpdateviewsIpsInput | Enumerable<string>
    likedIps?: PostUpdatelikedIpsInput | Enumerable<string>
    viewsUsers?: PostsViewedByUsersUpdateManyWithoutPostInput
    likedUsers?: PostsLikedByUsersUpdateManyWithoutPostInput
    author?: UserUpdateOneRequiredWithoutPostsInput
    comments?: CommentUpdateManyWithoutPostInput
    tags?: PostTagsUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    viewsIps?: PostUpdateviewsIpsInput | Enumerable<string>
    likedIps?: PostUpdatelikedIpsInput | Enumerable<string>
    viewsUsers?: PostsViewedByUsersUncheckedUpdateManyWithoutPostInput
    likedUsers?: PostsLikedByUsersUncheckedUpdateManyWithoutPostInput
    comments?: CommentUncheckedUpdateManyWithoutPostInput
    tags?: PostTagsUncheckedUpdateManyWithoutPostInput
  }

  export type PostCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    slug: string
    title: string
    body: string
    published?: boolean
    publishedAt?: Date | string | null
    views: number
    likes: number
    authorId: string
    viewsIps?: PostCreateManyviewsIpsInput | Enumerable<string>
    likedIps?: PostCreateManylikedIpsInput | Enumerable<string>
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    viewsIps?: PostUpdateviewsIpsInput | Enumerable<string>
    likedIps?: PostUpdatelikedIpsInput | Enumerable<string>
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    viewsIps?: PostUpdateviewsIpsInput | Enumerable<string>
    likedIps?: PostUpdatelikedIpsInput | Enumerable<string>
  }

  export type TagCreateInput = {
    id?: string
    name: string
    posts?: PostTagsCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    posts?: PostTagsUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    posts?: PostTagsUpdateManyWithoutTagInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    posts?: PostTagsUncheckedUpdateManyWithoutTagInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PostTagsCreateInput = {
    tag: TagCreateNestedOneWithoutPostsInput
    post: PostCreateNestedOneWithoutTagsInput
  }

  export type PostTagsUncheckedCreateInput = {
    tagId: string
    postId: string
  }

  export type PostTagsUpdateInput = {
    tag?: TagUpdateOneRequiredWithoutPostsInput
    post?: PostUpdateOneRequiredWithoutTagsInput
  }

  export type PostTagsUncheckedUpdateInput = {
    tagId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type PostTagsCreateManyInput = {
    tagId: string
    postId: string
  }

  export type PostTagsUpdateManyMutationInput = {

  }

  export type PostTagsUncheckedUpdateManyInput = {
    tagId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    body: string
    author: UserCreateNestedOneWithoutCommentsInput
    post: PostCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    body: string
    authorId: string
    postId: string
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    body?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutCommentsInput
    post?: PostUpdateOneRequiredWithoutCommentsInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    body?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    body: string
    authorId: string
    postId: string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    body?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    body?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type PostsLikedByUsersCreateInput = {
    likedAt?: Date | string
    post: PostCreateNestedOneWithoutLikedUsersInput
    user: UserCreateNestedOneWithoutLikedPostsInput
  }

  export type PostsLikedByUsersUncheckedCreateInput = {
    postId: string
    userId: string
    likedAt?: Date | string
  }

  export type PostsLikedByUsersUpdateInput = {
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutLikedUsersInput
    user?: UserUpdateOneRequiredWithoutLikedPostsInput
  }

  export type PostsLikedByUsersUncheckedUpdateInput = {
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsLikedByUsersCreateManyInput = {
    postId: string
    userId: string
    likedAt?: Date | string
  }

  export type PostsLikedByUsersUpdateManyMutationInput = {
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsLikedByUsersUncheckedUpdateManyInput = {
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsViewedByUsersCreateInput = {
    viewedAt?: Date | string
    post: PostCreateNestedOneWithoutViewsUsersInput
    user: UserCreateNestedOneWithoutViewedPostsInput
  }

  export type PostsViewedByUsersUncheckedCreateInput = {
    postId: string
    userId: string
    viewedAt?: Date | string
  }

  export type PostsViewedByUsersUpdateInput = {
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutViewsUsersInput
    user?: UserUpdateOneRequiredWithoutViewedPostsInput
  }

  export type PostsViewedByUsersUncheckedUpdateInput = {
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsViewedByUsersCreateManyInput = {
    postId: string
    userId: string
    viewedAt?: Date | string
  }

  export type PostsViewedByUsersUpdateManyMutationInput = {
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsViewedByUsersUncheckedUpdateManyInput = {
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type RoleRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type SocialListRelationFilter = {
    every?: SocialWhereInput
    some?: SocialWhereInput
    none?: SocialWhereInput
  }

  export type PostsLikedByUsersListRelationFilter = {
    every?: PostsLikedByUsersWhereInput
    some?: PostsLikedByUsersWhereInput
    none?: PostsLikedByUsersWhereInput
  }

  export type PostsViewedByUsersListRelationFilter = {
    every?: PostsViewedByUsersWhereInput
    some?: PostsViewedByUsersWhereInput
    none?: PostsViewedByUsersWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringFilter
    _max?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDateTimeFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedBoolFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedBoolFilter
    _max?: NestedBoolFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedBoolFilter
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _avg?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedIntFilter
    _min?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedIntFilter
    _max?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedIntFilter
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }

  export type PostTagsListRelationFilter = {
    every?: PostTagsWhereInput
    some?: PostTagsWhereInput
    none?: PostTagsWhereInput
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDateTimeNullableFilter
  }

  export type TagRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type PostRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type PostTagsTagIdPostIdCompoundUniqueInput = {
    tagId: string
    postId: string
  }

  export type PostsLikedByUsersPostIdUserIdCompoundUniqueInput = {
    postId: string
    userId: string
  }

  export type PostsViewedByUsersPostIdUserIdCompoundUniqueInput = {
    postId: string
    userId: string
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<PostCreateWithoutAuthorInput>, Enumerable<PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type SocialCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SocialCreateWithoutUserInput>, Enumerable<SocialUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SocialCreateOrConnectWithoutUserInput>
    createMany?: SocialCreateManyUserInputEnvelope
    connect?: Enumerable<SocialWhereUniqueInput>
  }

  export type PostsLikedByUsersCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<PostsLikedByUsersCreateWithoutUserInput>, Enumerable<PostsLikedByUsersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PostsLikedByUsersCreateOrConnectWithoutUserInput>
    createMany?: PostsLikedByUsersCreateManyUserInputEnvelope
    connect?: Enumerable<PostsLikedByUsersWhereUniqueInput>
  }

  export type PostsViewedByUsersCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<PostsViewedByUsersCreateWithoutUserInput>, Enumerable<PostsViewedByUsersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PostsViewedByUsersCreateOrConnectWithoutUserInput>
    createMany?: PostsViewedByUsersCreateManyUserInputEnvelope
    connect?: Enumerable<PostsViewedByUsersWhereUniqueInput>
  }

  export type CommentCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<CommentCreateWithoutAuthorInput>, Enumerable<CommentUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutAuthorInput>
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<PostCreateWithoutAuthorInput>, Enumerable<PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type SocialUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SocialCreateWithoutUserInput>, Enumerable<SocialUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SocialCreateOrConnectWithoutUserInput>
    createMany?: SocialCreateManyUserInputEnvelope
    connect?: Enumerable<SocialWhereUniqueInput>
  }

  export type PostsLikedByUsersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<PostsLikedByUsersCreateWithoutUserInput>, Enumerable<PostsLikedByUsersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PostsLikedByUsersCreateOrConnectWithoutUserInput>
    createMany?: PostsLikedByUsersCreateManyUserInputEnvelope
    connect?: Enumerable<PostsLikedByUsersWhereUniqueInput>
  }

  export type PostsViewedByUsersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<PostsViewedByUsersCreateWithoutUserInput>, Enumerable<PostsViewedByUsersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PostsViewedByUsersCreateOrConnectWithoutUserInput>
    createMany?: PostsViewedByUsersCreateManyUserInputEnvelope
    connect?: Enumerable<PostsViewedByUsersWhereUniqueInput>
  }

  export type CommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<CommentCreateWithoutAuthorInput>, Enumerable<CommentUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutAuthorInput>
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RoleUpdateOneRequiredWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type PostUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<PostCreateWithoutAuthorInput>, Enumerable<PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type SocialUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<SocialCreateWithoutUserInput>, Enumerable<SocialUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SocialCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SocialUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SocialCreateManyUserInputEnvelope
    connect?: Enumerable<SocialWhereUniqueInput>
    set?: Enumerable<SocialWhereUniqueInput>
    disconnect?: Enumerable<SocialWhereUniqueInput>
    delete?: Enumerable<SocialWhereUniqueInput>
    update?: Enumerable<SocialUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SocialUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SocialScalarWhereInput>
  }

  export type PostsLikedByUsersUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<PostsLikedByUsersCreateWithoutUserInput>, Enumerable<PostsLikedByUsersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PostsLikedByUsersCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<PostsLikedByUsersUpsertWithWhereUniqueWithoutUserInput>
    createMany?: PostsLikedByUsersCreateManyUserInputEnvelope
    connect?: Enumerable<PostsLikedByUsersWhereUniqueInput>
    set?: Enumerable<PostsLikedByUsersWhereUniqueInput>
    disconnect?: Enumerable<PostsLikedByUsersWhereUniqueInput>
    delete?: Enumerable<PostsLikedByUsersWhereUniqueInput>
    update?: Enumerable<PostsLikedByUsersUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<PostsLikedByUsersUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<PostsLikedByUsersScalarWhereInput>
  }

  export type PostsViewedByUsersUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<PostsViewedByUsersCreateWithoutUserInput>, Enumerable<PostsViewedByUsersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PostsViewedByUsersCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<PostsViewedByUsersUpsertWithWhereUniqueWithoutUserInput>
    createMany?: PostsViewedByUsersCreateManyUserInputEnvelope
    connect?: Enumerable<PostsViewedByUsersWhereUniqueInput>
    set?: Enumerable<PostsViewedByUsersWhereUniqueInput>
    disconnect?: Enumerable<PostsViewedByUsersWhereUniqueInput>
    delete?: Enumerable<PostsViewedByUsersWhereUniqueInput>
    update?: Enumerable<PostsViewedByUsersUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<PostsViewedByUsersUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<PostsViewedByUsersScalarWhereInput>
  }

  export type CommentUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<CommentCreateWithoutAuthorInput>, Enumerable<CommentUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type PostUncheckedUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<PostCreateWithoutAuthorInput>, Enumerable<PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type SocialUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<SocialCreateWithoutUserInput>, Enumerable<SocialUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SocialCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SocialUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SocialCreateManyUserInputEnvelope
    connect?: Enumerable<SocialWhereUniqueInput>
    set?: Enumerable<SocialWhereUniqueInput>
    disconnect?: Enumerable<SocialWhereUniqueInput>
    delete?: Enumerable<SocialWhereUniqueInput>
    update?: Enumerable<SocialUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SocialUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SocialScalarWhereInput>
  }

  export type PostsLikedByUsersUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<PostsLikedByUsersCreateWithoutUserInput>, Enumerable<PostsLikedByUsersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PostsLikedByUsersCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<PostsLikedByUsersUpsertWithWhereUniqueWithoutUserInput>
    createMany?: PostsLikedByUsersCreateManyUserInputEnvelope
    connect?: Enumerable<PostsLikedByUsersWhereUniqueInput>
    set?: Enumerable<PostsLikedByUsersWhereUniqueInput>
    disconnect?: Enumerable<PostsLikedByUsersWhereUniqueInput>
    delete?: Enumerable<PostsLikedByUsersWhereUniqueInput>
    update?: Enumerable<PostsLikedByUsersUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<PostsLikedByUsersUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<PostsLikedByUsersScalarWhereInput>
  }

  export type PostsViewedByUsersUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<PostsViewedByUsersCreateWithoutUserInput>, Enumerable<PostsViewedByUsersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PostsViewedByUsersCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<PostsViewedByUsersUpsertWithWhereUniqueWithoutUserInput>
    createMany?: PostsViewedByUsersCreateManyUserInputEnvelope
    connect?: Enumerable<PostsViewedByUsersWhereUniqueInput>
    set?: Enumerable<PostsViewedByUsersWhereUniqueInput>
    disconnect?: Enumerable<PostsViewedByUsersWhereUniqueInput>
    delete?: Enumerable<PostsViewedByUsersWhereUniqueInput>
    update?: Enumerable<PostsViewedByUsersUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<PostsViewedByUsersUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<PostsViewedByUsersScalarWhereInput>
  }

  export type CommentUncheckedUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<CommentCreateWithoutAuthorInput>, Enumerable<CommentUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<Enumerable<UserCreateWithoutRoleInput>, Enumerable<UserUncheckedCreateWithoutRoleInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutRoleInput>
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<Enumerable<UserCreateWithoutRoleInput>, Enumerable<UserUncheckedCreateWithoutRoleInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutRoleInput>
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserUpdateManyWithoutRoleInput = {
    create?: XOR<Enumerable<UserCreateWithoutRoleInput>, Enumerable<UserUncheckedCreateWithoutRoleInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutRoleInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutRoleInput>
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutRoleInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutRoleInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    create?: XOR<Enumerable<UserCreateWithoutRoleInput>, Enumerable<UserUncheckedCreateWithoutRoleInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutRoleInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutRoleInput>
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutRoleInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutRoleInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutSocialsInput = {
    create?: XOR<UserCreateWithoutSocialsInput, UserUncheckedCreateWithoutSocialsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSocialsInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutSocialsInput = {
    create?: XOR<UserCreateWithoutSocialsInput, UserUncheckedCreateWithoutSocialsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSocialsInput
    upsert?: UserUpsertWithoutSocialsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutSocialsInput, UserUncheckedUpdateWithoutSocialsInput>
  }

  export type PostCreateviewsIpsInput = {
    set: Enumerable<string>
  }

  export type PostCreatelikedIpsInput = {
    set: Enumerable<string>
  }

  export type PostsViewedByUsersCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<PostsViewedByUsersCreateWithoutPostInput>, Enumerable<PostsViewedByUsersUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<PostsViewedByUsersCreateOrConnectWithoutPostInput>
    createMany?: PostsViewedByUsersCreateManyPostInputEnvelope
    connect?: Enumerable<PostsViewedByUsersWhereUniqueInput>
  }

  export type PostsLikedByUsersCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<PostsLikedByUsersCreateWithoutPostInput>, Enumerable<PostsLikedByUsersUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<PostsLikedByUsersCreateOrConnectWithoutPostInput>
    createMany?: PostsLikedByUsersCreateManyPostInputEnvelope
    connect?: Enumerable<PostsLikedByUsersWhereUniqueInput>
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<CommentCreateWithoutPostInput>, Enumerable<CommentUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutPostInput>
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type PostTagsCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<PostTagsCreateWithoutPostInput>, Enumerable<PostTagsUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<PostTagsCreateOrConnectWithoutPostInput>
    createMany?: PostTagsCreateManyPostInputEnvelope
    connect?: Enumerable<PostTagsWhereUniqueInput>
  }

  export type PostsViewedByUsersUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<PostsViewedByUsersCreateWithoutPostInput>, Enumerable<PostsViewedByUsersUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<PostsViewedByUsersCreateOrConnectWithoutPostInput>
    createMany?: PostsViewedByUsersCreateManyPostInputEnvelope
    connect?: Enumerable<PostsViewedByUsersWhereUniqueInput>
  }

  export type PostsLikedByUsersUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<PostsLikedByUsersCreateWithoutPostInput>, Enumerable<PostsLikedByUsersUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<PostsLikedByUsersCreateOrConnectWithoutPostInput>
    createMany?: PostsLikedByUsersCreateManyPostInputEnvelope
    connect?: Enumerable<PostsLikedByUsersWhereUniqueInput>
  }

  export type CommentUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<CommentCreateWithoutPostInput>, Enumerable<CommentUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutPostInput>
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type PostTagsUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<PostTagsCreateWithoutPostInput>, Enumerable<PostTagsUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<PostTagsCreateOrConnectWithoutPostInput>
    createMany?: PostTagsCreateManyPostInputEnvelope
    connect?: Enumerable<PostTagsWhereUniqueInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PostUpdateviewsIpsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type PostUpdatelikedIpsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type PostsViewedByUsersUpdateManyWithoutPostInput = {
    create?: XOR<Enumerable<PostsViewedByUsersCreateWithoutPostInput>, Enumerable<PostsViewedByUsersUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<PostsViewedByUsersCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<PostsViewedByUsersUpsertWithWhereUniqueWithoutPostInput>
    createMany?: PostsViewedByUsersCreateManyPostInputEnvelope
    connect?: Enumerable<PostsViewedByUsersWhereUniqueInput>
    set?: Enumerable<PostsViewedByUsersWhereUniqueInput>
    disconnect?: Enumerable<PostsViewedByUsersWhereUniqueInput>
    delete?: Enumerable<PostsViewedByUsersWhereUniqueInput>
    update?: Enumerable<PostsViewedByUsersUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<PostsViewedByUsersUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<PostsViewedByUsersScalarWhereInput>
  }

  export type PostsLikedByUsersUpdateManyWithoutPostInput = {
    create?: XOR<Enumerable<PostsLikedByUsersCreateWithoutPostInput>, Enumerable<PostsLikedByUsersUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<PostsLikedByUsersCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<PostsLikedByUsersUpsertWithWhereUniqueWithoutPostInput>
    createMany?: PostsLikedByUsersCreateManyPostInputEnvelope
    connect?: Enumerable<PostsLikedByUsersWhereUniqueInput>
    set?: Enumerable<PostsLikedByUsersWhereUniqueInput>
    disconnect?: Enumerable<PostsLikedByUsersWhereUniqueInput>
    delete?: Enumerable<PostsLikedByUsersWhereUniqueInput>
    update?: Enumerable<PostsLikedByUsersUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<PostsLikedByUsersUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<PostsLikedByUsersScalarWhereInput>
  }

  export type UserUpdateOneRequiredWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type CommentUpdateManyWithoutPostInput = {
    create?: XOR<Enumerable<CommentCreateWithoutPostInput>, Enumerable<CommentUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutPostInput>
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type PostTagsUpdateManyWithoutPostInput = {
    create?: XOR<Enumerable<PostTagsCreateWithoutPostInput>, Enumerable<PostTagsUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<PostTagsCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<PostTagsUpsertWithWhereUniqueWithoutPostInput>
    createMany?: PostTagsCreateManyPostInputEnvelope
    connect?: Enumerable<PostTagsWhereUniqueInput>
    set?: Enumerable<PostTagsWhereUniqueInput>
    disconnect?: Enumerable<PostTagsWhereUniqueInput>
    delete?: Enumerable<PostTagsWhereUniqueInput>
    update?: Enumerable<PostTagsUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<PostTagsUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<PostTagsScalarWhereInput>
  }

  export type PostsViewedByUsersUncheckedUpdateManyWithoutPostInput = {
    create?: XOR<Enumerable<PostsViewedByUsersCreateWithoutPostInput>, Enumerable<PostsViewedByUsersUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<PostsViewedByUsersCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<PostsViewedByUsersUpsertWithWhereUniqueWithoutPostInput>
    createMany?: PostsViewedByUsersCreateManyPostInputEnvelope
    connect?: Enumerable<PostsViewedByUsersWhereUniqueInput>
    set?: Enumerable<PostsViewedByUsersWhereUniqueInput>
    disconnect?: Enumerable<PostsViewedByUsersWhereUniqueInput>
    delete?: Enumerable<PostsViewedByUsersWhereUniqueInput>
    update?: Enumerable<PostsViewedByUsersUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<PostsViewedByUsersUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<PostsViewedByUsersScalarWhereInput>
  }

  export type PostsLikedByUsersUncheckedUpdateManyWithoutPostInput = {
    create?: XOR<Enumerable<PostsLikedByUsersCreateWithoutPostInput>, Enumerable<PostsLikedByUsersUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<PostsLikedByUsersCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<PostsLikedByUsersUpsertWithWhereUniqueWithoutPostInput>
    createMany?: PostsLikedByUsersCreateManyPostInputEnvelope
    connect?: Enumerable<PostsLikedByUsersWhereUniqueInput>
    set?: Enumerable<PostsLikedByUsersWhereUniqueInput>
    disconnect?: Enumerable<PostsLikedByUsersWhereUniqueInput>
    delete?: Enumerable<PostsLikedByUsersWhereUniqueInput>
    update?: Enumerable<PostsLikedByUsersUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<PostsLikedByUsersUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<PostsLikedByUsersScalarWhereInput>
  }

  export type CommentUncheckedUpdateManyWithoutPostInput = {
    create?: XOR<Enumerable<CommentCreateWithoutPostInput>, Enumerable<CommentUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutPostInput>
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type PostTagsUncheckedUpdateManyWithoutPostInput = {
    create?: XOR<Enumerable<PostTagsCreateWithoutPostInput>, Enumerable<PostTagsUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<PostTagsCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<PostTagsUpsertWithWhereUniqueWithoutPostInput>
    createMany?: PostTagsCreateManyPostInputEnvelope
    connect?: Enumerable<PostTagsWhereUniqueInput>
    set?: Enumerable<PostTagsWhereUniqueInput>
    disconnect?: Enumerable<PostTagsWhereUniqueInput>
    delete?: Enumerable<PostTagsWhereUniqueInput>
    update?: Enumerable<PostTagsUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<PostTagsUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<PostTagsScalarWhereInput>
  }

  export type PostCreateManyviewsIpsInput = {
    set: Enumerable<string>
  }

  export type PostCreateManylikedIpsInput = {
    set: Enumerable<string>
  }

  export type PostTagsCreateNestedManyWithoutTagInput = {
    create?: XOR<Enumerable<PostTagsCreateWithoutTagInput>, Enumerable<PostTagsUncheckedCreateWithoutTagInput>>
    connectOrCreate?: Enumerable<PostTagsCreateOrConnectWithoutTagInput>
    createMany?: PostTagsCreateManyTagInputEnvelope
    connect?: Enumerable<PostTagsWhereUniqueInput>
  }

  export type PostTagsUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<Enumerable<PostTagsCreateWithoutTagInput>, Enumerable<PostTagsUncheckedCreateWithoutTagInput>>
    connectOrCreate?: Enumerable<PostTagsCreateOrConnectWithoutTagInput>
    createMany?: PostTagsCreateManyTagInputEnvelope
    connect?: Enumerable<PostTagsWhereUniqueInput>
  }

  export type PostTagsUpdateManyWithoutTagInput = {
    create?: XOR<Enumerable<PostTagsCreateWithoutTagInput>, Enumerable<PostTagsUncheckedCreateWithoutTagInput>>
    connectOrCreate?: Enumerable<PostTagsCreateOrConnectWithoutTagInput>
    upsert?: Enumerable<PostTagsUpsertWithWhereUniqueWithoutTagInput>
    createMany?: PostTagsCreateManyTagInputEnvelope
    connect?: Enumerable<PostTagsWhereUniqueInput>
    set?: Enumerable<PostTagsWhereUniqueInput>
    disconnect?: Enumerable<PostTagsWhereUniqueInput>
    delete?: Enumerable<PostTagsWhereUniqueInput>
    update?: Enumerable<PostTagsUpdateWithWhereUniqueWithoutTagInput>
    updateMany?: Enumerable<PostTagsUpdateManyWithWhereWithoutTagInput>
    deleteMany?: Enumerable<PostTagsScalarWhereInput>
  }

  export type PostTagsUncheckedUpdateManyWithoutTagInput = {
    create?: XOR<Enumerable<PostTagsCreateWithoutTagInput>, Enumerable<PostTagsUncheckedCreateWithoutTagInput>>
    connectOrCreate?: Enumerable<PostTagsCreateOrConnectWithoutTagInput>
    upsert?: Enumerable<PostTagsUpsertWithWhereUniqueWithoutTagInput>
    createMany?: PostTagsCreateManyTagInputEnvelope
    connect?: Enumerable<PostTagsWhereUniqueInput>
    set?: Enumerable<PostTagsWhereUniqueInput>
    disconnect?: Enumerable<PostTagsWhereUniqueInput>
    delete?: Enumerable<PostTagsWhereUniqueInput>
    update?: Enumerable<PostTagsUpdateWithWhereUniqueWithoutTagInput>
    updateMany?: Enumerable<PostTagsUpdateManyWithWhereWithoutTagInput>
    deleteMany?: Enumerable<PostTagsScalarWhereInput>
  }

  export type TagCreateNestedOneWithoutPostsInput = {
    create?: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>
    connectOrCreate?: TagCreateOrConnectWithoutPostsInput
    connect?: TagWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutTagsInput = {
    create?: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>
    connectOrCreate?: PostCreateOrConnectWithoutTagsInput
    connect?: PostWhereUniqueInput
  }

  export type TagUpdateOneRequiredWithoutPostsInput = {
    create?: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>
    connectOrCreate?: TagCreateOrConnectWithoutPostsInput
    upsert?: TagUpsertWithoutPostsInput
    connect?: TagWhereUniqueInput
    update?: XOR<TagUpdateWithoutPostsInput, TagUncheckedUpdateWithoutPostsInput>
  }

  export type PostUpdateOneRequiredWithoutTagsInput = {
    create?: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>
    connectOrCreate?: PostCreateOrConnectWithoutTagsInput
    upsert?: PostUpsertWithoutTagsInput
    connect?: PostWhereUniqueInput
    update?: XOR<PostUpdateWithoutTagsInput, PostUncheckedUpdateWithoutTagsInput>
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutCommentsInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    connect?: PostWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type PostUpdateOneRequiredWithoutCommentsInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    upsert?: PostUpsertWithoutCommentsInput
    connect?: PostWhereUniqueInput
    update?: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type PostCreateNestedOneWithoutLikedUsersInput = {
    create?: XOR<PostCreateWithoutLikedUsersInput, PostUncheckedCreateWithoutLikedUsersInput>
    connectOrCreate?: PostCreateOrConnectWithoutLikedUsersInput
    connect?: PostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLikedPostsInput = {
    create?: XOR<UserCreateWithoutLikedPostsInput, UserUncheckedCreateWithoutLikedPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedPostsInput
    connect?: UserWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutLikedUsersInput = {
    create?: XOR<PostCreateWithoutLikedUsersInput, PostUncheckedCreateWithoutLikedUsersInput>
    connectOrCreate?: PostCreateOrConnectWithoutLikedUsersInput
    upsert?: PostUpsertWithoutLikedUsersInput
    connect?: PostWhereUniqueInput
    update?: XOR<PostUpdateWithoutLikedUsersInput, PostUncheckedUpdateWithoutLikedUsersInput>
  }

  export type UserUpdateOneRequiredWithoutLikedPostsInput = {
    create?: XOR<UserCreateWithoutLikedPostsInput, UserUncheckedCreateWithoutLikedPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedPostsInput
    upsert?: UserUpsertWithoutLikedPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutLikedPostsInput, UserUncheckedUpdateWithoutLikedPostsInput>
  }

  export type PostCreateNestedOneWithoutViewsUsersInput = {
    create?: XOR<PostCreateWithoutViewsUsersInput, PostUncheckedCreateWithoutViewsUsersInput>
    connectOrCreate?: PostCreateOrConnectWithoutViewsUsersInput
    connect?: PostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutViewedPostsInput = {
    create?: XOR<UserCreateWithoutViewedPostsInput, UserUncheckedCreateWithoutViewedPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutViewedPostsInput
    connect?: UserWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutViewsUsersInput = {
    create?: XOR<PostCreateWithoutViewsUsersInput, PostUncheckedCreateWithoutViewsUsersInput>
    connectOrCreate?: PostCreateOrConnectWithoutViewsUsersInput
    upsert?: PostUpsertWithoutViewsUsersInput
    connect?: PostWhereUniqueInput
    update?: XOR<PostUpdateWithoutViewsUsersInput, PostUncheckedUpdateWithoutViewsUsersInput>
  }

  export type UserUpdateOneRequiredWithoutViewedPostsInput = {
    create?: XOR<UserCreateWithoutViewedPostsInput, UserUncheckedCreateWithoutViewedPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutViewedPostsInput
    upsert?: UserUpsertWithoutViewedPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutViewedPostsInput, UserUncheckedUpdateWithoutViewedPostsInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringFilter
    _max?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDateTimeFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedBoolFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedBoolFilter
    _max?: NestedBoolFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedBoolFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _avg?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedIntFilter
    _min?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedIntFilter
    _max?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDateTimeNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type RoleCreateWithoutUsersInput = {
    id?: string
    name: string
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type PostCreateWithoutAuthorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    slug: string
    title: string
    body: string
    published?: boolean
    publishedAt?: Date | string | null
    views: number
    likes: number
    viewsIps?: PostCreateviewsIpsInput | Enumerable<string>
    likedIps?: PostCreatelikedIpsInput | Enumerable<string>
    viewsUsers?: PostsViewedByUsersCreateNestedManyWithoutPostInput
    likedUsers?: PostsLikedByUsersCreateNestedManyWithoutPostInput
    comments?: CommentCreateNestedManyWithoutPostInput
    tags?: PostTagsCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutAuthorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    slug: string
    title: string
    body: string
    published?: boolean
    publishedAt?: Date | string | null
    views: number
    likes: number
    viewsIps?: PostCreateviewsIpsInput | Enumerable<string>
    likedIps?: PostCreatelikedIpsInput | Enumerable<string>
    viewsUsers?: PostsViewedByUsersUncheckedCreateNestedManyWithoutPostInput
    likedUsers?: PostsLikedByUsersUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    tags?: PostTagsUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostCreateManyAuthorInputEnvelope = {
    data: Enumerable<PostCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type SocialCreateWithoutUserInput = {
    id?: string
    type: string
    accountId: number
    accountUrl: string
    accountImage: string
  }

  export type SocialUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    accountId: number
    accountUrl: string
    accountImage: string
  }

  export type SocialCreateOrConnectWithoutUserInput = {
    where: SocialWhereUniqueInput
    create: XOR<SocialCreateWithoutUserInput, SocialUncheckedCreateWithoutUserInput>
  }

  export type SocialCreateManyUserInputEnvelope = {
    data: Enumerable<SocialCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type PostsLikedByUsersCreateWithoutUserInput = {
    likedAt?: Date | string
    post: PostCreateNestedOneWithoutLikedUsersInput
  }

  export type PostsLikedByUsersUncheckedCreateWithoutUserInput = {
    postId: string
    likedAt?: Date | string
  }

  export type PostsLikedByUsersCreateOrConnectWithoutUserInput = {
    where: PostsLikedByUsersWhereUniqueInput
    create: XOR<PostsLikedByUsersCreateWithoutUserInput, PostsLikedByUsersUncheckedCreateWithoutUserInput>
  }

  export type PostsLikedByUsersCreateManyUserInputEnvelope = {
    data: Enumerable<PostsLikedByUsersCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type PostsViewedByUsersCreateWithoutUserInput = {
    viewedAt?: Date | string
    post: PostCreateNestedOneWithoutViewsUsersInput
  }

  export type PostsViewedByUsersUncheckedCreateWithoutUserInput = {
    postId: string
    viewedAt?: Date | string
  }

  export type PostsViewedByUsersCreateOrConnectWithoutUserInput = {
    where: PostsViewedByUsersWhereUniqueInput
    create: XOR<PostsViewedByUsersCreateWithoutUserInput, PostsViewedByUsersUncheckedCreateWithoutUserInput>
  }

  export type PostsViewedByUsersCreateManyUserInputEnvelope = {
    data: Enumerable<PostsViewedByUsersCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutAuthorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    body: string
    post: PostCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutAuthorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    body: string
    postId: string
  }

  export type CommentCreateOrConnectWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentCreateManyAuthorInputEnvelope = {
    data: Enumerable<CommentCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
  }

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutPostsInput>
  }

  export type PostScalarWhereInput = {
    AND?: Enumerable<PostScalarWhereInput>
    OR?: Enumerable<PostScalarWhereInput>
    NOT?: Enumerable<PostScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    isDeleted?: BoolFilter | boolean
    slug?: StringFilter | string
    title?: StringFilter | string
    body?: StringFilter | string
    published?: BoolFilter | boolean
    publishedAt?: DateTimeNullableFilter | Date | string | null
    views?: IntFilter | number
    viewsIps?: StringNullableListFilter
    likes?: IntFilter | number
    likedIps?: StringNullableListFilter
    authorId?: StringFilter | string
  }

  export type SocialUpsertWithWhereUniqueWithoutUserInput = {
    where: SocialWhereUniqueInput
    update: XOR<SocialUpdateWithoutUserInput, SocialUncheckedUpdateWithoutUserInput>
    create: XOR<SocialCreateWithoutUserInput, SocialUncheckedCreateWithoutUserInput>
  }

  export type SocialUpdateWithWhereUniqueWithoutUserInput = {
    where: SocialWhereUniqueInput
    data: XOR<SocialUpdateWithoutUserInput, SocialUncheckedUpdateWithoutUserInput>
  }

  export type SocialUpdateManyWithWhereWithoutUserInput = {
    where: SocialScalarWhereInput
    data: XOR<SocialUpdateManyMutationInput, SocialUncheckedUpdateManyWithoutSocialsInput>
  }

  export type SocialScalarWhereInput = {
    AND?: Enumerable<SocialScalarWhereInput>
    OR?: Enumerable<SocialScalarWhereInput>
    NOT?: Enumerable<SocialScalarWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    type?: StringFilter | string
    accountId?: IntFilter | number
    accountUrl?: StringFilter | string
    accountImage?: StringFilter | string
  }

  export type PostsLikedByUsersUpsertWithWhereUniqueWithoutUserInput = {
    where: PostsLikedByUsersWhereUniqueInput
    update: XOR<PostsLikedByUsersUpdateWithoutUserInput, PostsLikedByUsersUncheckedUpdateWithoutUserInput>
    create: XOR<PostsLikedByUsersCreateWithoutUserInput, PostsLikedByUsersUncheckedCreateWithoutUserInput>
  }

  export type PostsLikedByUsersUpdateWithWhereUniqueWithoutUserInput = {
    where: PostsLikedByUsersWhereUniqueInput
    data: XOR<PostsLikedByUsersUpdateWithoutUserInput, PostsLikedByUsersUncheckedUpdateWithoutUserInput>
  }

  export type PostsLikedByUsersUpdateManyWithWhereWithoutUserInput = {
    where: PostsLikedByUsersScalarWhereInput
    data: XOR<PostsLikedByUsersUpdateManyMutationInput, PostsLikedByUsersUncheckedUpdateManyWithoutLikedPostsInput>
  }

  export type PostsLikedByUsersScalarWhereInput = {
    AND?: Enumerable<PostsLikedByUsersScalarWhereInput>
    OR?: Enumerable<PostsLikedByUsersScalarWhereInput>
    NOT?: Enumerable<PostsLikedByUsersScalarWhereInput>
    postId?: StringFilter | string
    userId?: StringFilter | string
    likedAt?: DateTimeFilter | Date | string
  }

  export type PostsViewedByUsersUpsertWithWhereUniqueWithoutUserInput = {
    where: PostsViewedByUsersWhereUniqueInput
    update: XOR<PostsViewedByUsersUpdateWithoutUserInput, PostsViewedByUsersUncheckedUpdateWithoutUserInput>
    create: XOR<PostsViewedByUsersCreateWithoutUserInput, PostsViewedByUsersUncheckedCreateWithoutUserInput>
  }

  export type PostsViewedByUsersUpdateWithWhereUniqueWithoutUserInput = {
    where: PostsViewedByUsersWhereUniqueInput
    data: XOR<PostsViewedByUsersUpdateWithoutUserInput, PostsViewedByUsersUncheckedUpdateWithoutUserInput>
  }

  export type PostsViewedByUsersUpdateManyWithWhereWithoutUserInput = {
    where: PostsViewedByUsersScalarWhereInput
    data: XOR<PostsViewedByUsersUpdateManyMutationInput, PostsViewedByUsersUncheckedUpdateManyWithoutViewedPostsInput>
  }

  export type PostsViewedByUsersScalarWhereInput = {
    AND?: Enumerable<PostsViewedByUsersScalarWhereInput>
    OR?: Enumerable<PostsViewedByUsersScalarWhereInput>
    NOT?: Enumerable<PostsViewedByUsersScalarWhereInput>
    postId?: StringFilter | string
    userId?: StringFilter | string
    viewedAt?: DateTimeFilter | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
  }

  export type CommentUpdateManyWithWhereWithoutAuthorInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutCommentsInput>
  }

  export type CommentScalarWhereInput = {
    AND?: Enumerable<CommentScalarWhereInput>
    OR?: Enumerable<CommentScalarWhereInput>
    NOT?: Enumerable<CommentScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    isDeleted?: BoolFilter | boolean
    body?: StringFilter | string
    authorId?: StringFilter | string
    postId?: StringFilter | string
  }

  export type UserCreateWithoutRoleInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    email: string
    posts?: PostCreateNestedManyWithoutAuthorInput
    socials?: SocialCreateNestedManyWithoutUserInput
    likedPosts?: PostsLikedByUsersCreateNestedManyWithoutUserInput
    viewedPosts?: PostsViewedByUsersCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    email: string
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    socials?: SocialUncheckedCreateNestedManyWithoutUserInput
    likedPosts?: PostsLikedByUsersUncheckedCreateNestedManyWithoutUserInput
    viewedPosts?: PostsViewedByUsersUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: Enumerable<UserCreateManyRoleInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUsersInput>
  }

  export type UserScalarWhereInput = {
    AND?: Enumerable<UserScalarWhereInput>
    OR?: Enumerable<UserScalarWhereInput>
    NOT?: Enumerable<UserScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    isDeleted?: BoolFilter | boolean
    name?: StringFilter | string
    email?: StringFilter | string
    roleId?: StringFilter | string
  }

  export type UserCreateWithoutSocialsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    email: string
    role: RoleCreateNestedOneWithoutUsersInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    likedPosts?: PostsLikedByUsersCreateNestedManyWithoutUserInput
    viewedPosts?: PostsViewedByUsersCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutSocialsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    email: string
    roleId: string
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    likedPosts?: PostsLikedByUsersUncheckedCreateNestedManyWithoutUserInput
    viewedPosts?: PostsViewedByUsersUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutSocialsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSocialsInput, UserUncheckedCreateWithoutSocialsInput>
  }

  export type UserUpsertWithoutSocialsInput = {
    update: XOR<UserUpdateWithoutSocialsInput, UserUncheckedUpdateWithoutSocialsInput>
    create: XOR<UserCreateWithoutSocialsInput, UserUncheckedCreateWithoutSocialsInput>
  }

  export type UserUpdateWithoutSocialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutUsersInput
    posts?: PostUpdateManyWithoutAuthorInput
    likedPosts?: PostsLikedByUsersUpdateManyWithoutUserInput
    viewedPosts?: PostsViewedByUsersUpdateManyWithoutUserInput
    comments?: CommentUpdateManyWithoutAuthorInput
  }

  export type UserUncheckedUpdateWithoutSocialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    posts?: PostUncheckedUpdateManyWithoutAuthorInput
    likedPosts?: PostsLikedByUsersUncheckedUpdateManyWithoutUserInput
    viewedPosts?: PostsViewedByUsersUncheckedUpdateManyWithoutUserInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorInput
  }

  export type PostsViewedByUsersCreateWithoutPostInput = {
    viewedAt?: Date | string
    user: UserCreateNestedOneWithoutViewedPostsInput
  }

  export type PostsViewedByUsersUncheckedCreateWithoutPostInput = {
    userId: string
    viewedAt?: Date | string
  }

  export type PostsViewedByUsersCreateOrConnectWithoutPostInput = {
    where: PostsViewedByUsersWhereUniqueInput
    create: XOR<PostsViewedByUsersCreateWithoutPostInput, PostsViewedByUsersUncheckedCreateWithoutPostInput>
  }

  export type PostsViewedByUsersCreateManyPostInputEnvelope = {
    data: Enumerable<PostsViewedByUsersCreateManyPostInput>
    skipDuplicates?: boolean
  }

  export type PostsLikedByUsersCreateWithoutPostInput = {
    likedAt?: Date | string
    user: UserCreateNestedOneWithoutLikedPostsInput
  }

  export type PostsLikedByUsersUncheckedCreateWithoutPostInput = {
    userId: string
    likedAt?: Date | string
  }

  export type PostsLikedByUsersCreateOrConnectWithoutPostInput = {
    where: PostsLikedByUsersWhereUniqueInput
    create: XOR<PostsLikedByUsersCreateWithoutPostInput, PostsLikedByUsersUncheckedCreateWithoutPostInput>
  }

  export type PostsLikedByUsersCreateManyPostInputEnvelope = {
    data: Enumerable<PostsLikedByUsersCreateManyPostInput>
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    email: string
    role: RoleCreateNestedOneWithoutUsersInput
    socials?: SocialCreateNestedManyWithoutUserInput
    likedPosts?: PostsLikedByUsersCreateNestedManyWithoutUserInput
    viewedPosts?: PostsViewedByUsersCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    email: string
    roleId: string
    socials?: SocialUncheckedCreateNestedManyWithoutUserInput
    likedPosts?: PostsLikedByUsersUncheckedCreateNestedManyWithoutUserInput
    viewedPosts?: PostsViewedByUsersUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type CommentCreateWithoutPostInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    body: string
    author: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutPostInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    body: string
    authorId: string
  }

  export type CommentCreateOrConnectWithoutPostInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentCreateManyPostInputEnvelope = {
    data: Enumerable<CommentCreateManyPostInput>
    skipDuplicates?: boolean
  }

  export type PostTagsCreateWithoutPostInput = {
    tag: TagCreateNestedOneWithoutPostsInput
  }

  export type PostTagsUncheckedCreateWithoutPostInput = {
    tagId: string
  }

  export type PostTagsCreateOrConnectWithoutPostInput = {
    where: PostTagsWhereUniqueInput
    create: XOR<PostTagsCreateWithoutPostInput, PostTagsUncheckedCreateWithoutPostInput>
  }

  export type PostTagsCreateManyPostInputEnvelope = {
    data: Enumerable<PostTagsCreateManyPostInput>
    skipDuplicates?: boolean
  }

  export type PostsViewedByUsersUpsertWithWhereUniqueWithoutPostInput = {
    where: PostsViewedByUsersWhereUniqueInput
    update: XOR<PostsViewedByUsersUpdateWithoutPostInput, PostsViewedByUsersUncheckedUpdateWithoutPostInput>
    create: XOR<PostsViewedByUsersCreateWithoutPostInput, PostsViewedByUsersUncheckedCreateWithoutPostInput>
  }

  export type PostsViewedByUsersUpdateWithWhereUniqueWithoutPostInput = {
    where: PostsViewedByUsersWhereUniqueInput
    data: XOR<PostsViewedByUsersUpdateWithoutPostInput, PostsViewedByUsersUncheckedUpdateWithoutPostInput>
  }

  export type PostsViewedByUsersUpdateManyWithWhereWithoutPostInput = {
    where: PostsViewedByUsersScalarWhereInput
    data: XOR<PostsViewedByUsersUpdateManyMutationInput, PostsViewedByUsersUncheckedUpdateManyWithoutViewsUsersInput>
  }

  export type PostsLikedByUsersUpsertWithWhereUniqueWithoutPostInput = {
    where: PostsLikedByUsersWhereUniqueInput
    update: XOR<PostsLikedByUsersUpdateWithoutPostInput, PostsLikedByUsersUncheckedUpdateWithoutPostInput>
    create: XOR<PostsLikedByUsersCreateWithoutPostInput, PostsLikedByUsersUncheckedCreateWithoutPostInput>
  }

  export type PostsLikedByUsersUpdateWithWhereUniqueWithoutPostInput = {
    where: PostsLikedByUsersWhereUniqueInput
    data: XOR<PostsLikedByUsersUpdateWithoutPostInput, PostsLikedByUsersUncheckedUpdateWithoutPostInput>
  }

  export type PostsLikedByUsersUpdateManyWithWhereWithoutPostInput = {
    where: PostsLikedByUsersScalarWhereInput
    data: XOR<PostsLikedByUsersUpdateManyMutationInput, PostsLikedByUsersUncheckedUpdateManyWithoutLikedUsersInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutUsersInput
    socials?: SocialUpdateManyWithoutUserInput
    likedPosts?: PostsLikedByUsersUpdateManyWithoutUserInput
    viewedPosts?: PostsViewedByUsersUpdateManyWithoutUserInput
    comments?: CommentUpdateManyWithoutAuthorInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    socials?: SocialUncheckedUpdateManyWithoutUserInput
    likedPosts?: PostsLikedByUsersUncheckedUpdateManyWithoutUserInput
    viewedPosts?: PostsViewedByUsersUncheckedUpdateManyWithoutUserInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorInput
  }

  export type CommentUpsertWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
  }

  export type CommentUpdateManyWithWhereWithoutPostInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutCommentsInput>
  }

  export type PostTagsUpsertWithWhereUniqueWithoutPostInput = {
    where: PostTagsWhereUniqueInput
    update: XOR<PostTagsUpdateWithoutPostInput, PostTagsUncheckedUpdateWithoutPostInput>
    create: XOR<PostTagsCreateWithoutPostInput, PostTagsUncheckedCreateWithoutPostInput>
  }

  export type PostTagsUpdateWithWhereUniqueWithoutPostInput = {
    where: PostTagsWhereUniqueInput
    data: XOR<PostTagsUpdateWithoutPostInput, PostTagsUncheckedUpdateWithoutPostInput>
  }

  export type PostTagsUpdateManyWithWhereWithoutPostInput = {
    where: PostTagsScalarWhereInput
    data: XOR<PostTagsUpdateManyMutationInput, PostTagsUncheckedUpdateManyWithoutTagsInput>
  }

  export type PostTagsScalarWhereInput = {
    AND?: Enumerable<PostTagsScalarWhereInput>
    OR?: Enumerable<PostTagsScalarWhereInput>
    NOT?: Enumerable<PostTagsScalarWhereInput>
    tagId?: StringFilter | string
    postId?: StringFilter | string
  }

  export type PostTagsCreateWithoutTagInput = {
    post: PostCreateNestedOneWithoutTagsInput
  }

  export type PostTagsUncheckedCreateWithoutTagInput = {
    postId: string
  }

  export type PostTagsCreateOrConnectWithoutTagInput = {
    where: PostTagsWhereUniqueInput
    create: XOR<PostTagsCreateWithoutTagInput, PostTagsUncheckedCreateWithoutTagInput>
  }

  export type PostTagsCreateManyTagInputEnvelope = {
    data: Enumerable<PostTagsCreateManyTagInput>
    skipDuplicates?: boolean
  }

  export type PostTagsUpsertWithWhereUniqueWithoutTagInput = {
    where: PostTagsWhereUniqueInput
    update: XOR<PostTagsUpdateWithoutTagInput, PostTagsUncheckedUpdateWithoutTagInput>
    create: XOR<PostTagsCreateWithoutTagInput, PostTagsUncheckedCreateWithoutTagInput>
  }

  export type PostTagsUpdateWithWhereUniqueWithoutTagInput = {
    where: PostTagsWhereUniqueInput
    data: XOR<PostTagsUpdateWithoutTagInput, PostTagsUncheckedUpdateWithoutTagInput>
  }

  export type PostTagsUpdateManyWithWhereWithoutTagInput = {
    where: PostTagsScalarWhereInput
    data: XOR<PostTagsUpdateManyMutationInput, PostTagsUncheckedUpdateManyWithoutPostsInput>
  }

  export type TagCreateWithoutPostsInput = {
    id?: string
    name: string
  }

  export type TagUncheckedCreateWithoutPostsInput = {
    id?: string
    name: string
  }

  export type TagCreateOrConnectWithoutPostsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>
  }

  export type PostCreateWithoutTagsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    slug: string
    title: string
    body: string
    published?: boolean
    publishedAt?: Date | string | null
    views: number
    likes: number
    viewsIps?: PostCreateviewsIpsInput | Enumerable<string>
    likedIps?: PostCreatelikedIpsInput | Enumerable<string>
    viewsUsers?: PostsViewedByUsersCreateNestedManyWithoutPostInput
    likedUsers?: PostsLikedByUsersCreateNestedManyWithoutPostInput
    author: UserCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutTagsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    slug: string
    title: string
    body: string
    published?: boolean
    publishedAt?: Date | string | null
    views: number
    likes: number
    authorId: string
    viewsIps?: PostCreateviewsIpsInput | Enumerable<string>
    likedIps?: PostCreatelikedIpsInput | Enumerable<string>
    viewsUsers?: PostsViewedByUsersUncheckedCreateNestedManyWithoutPostInput
    likedUsers?: PostsLikedByUsersUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutTagsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>
  }

  export type TagUpsertWithoutPostsInput = {
    update: XOR<TagUpdateWithoutPostsInput, TagUncheckedUpdateWithoutPostsInput>
    create: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>
  }

  export type TagUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PostUpsertWithoutTagsInput = {
    update: XOR<PostUpdateWithoutTagsInput, PostUncheckedUpdateWithoutTagsInput>
    create: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>
  }

  export type PostUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    viewsIps?: PostUpdateviewsIpsInput | Enumerable<string>
    likedIps?: PostUpdatelikedIpsInput | Enumerable<string>
    viewsUsers?: PostsViewedByUsersUpdateManyWithoutPostInput
    likedUsers?: PostsLikedByUsersUpdateManyWithoutPostInput
    author?: UserUpdateOneRequiredWithoutPostsInput
    comments?: CommentUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    viewsIps?: PostUpdateviewsIpsInput | Enumerable<string>
    likedIps?: PostUpdatelikedIpsInput | Enumerable<string>
    viewsUsers?: PostsViewedByUsersUncheckedUpdateManyWithoutPostInput
    likedUsers?: PostsLikedByUsersUncheckedUpdateManyWithoutPostInput
    comments?: CommentUncheckedUpdateManyWithoutPostInput
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    email: string
    role: RoleCreateNestedOneWithoutUsersInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    socials?: SocialCreateNestedManyWithoutUserInput
    likedPosts?: PostsLikedByUsersCreateNestedManyWithoutUserInput
    viewedPosts?: PostsViewedByUsersCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    email: string
    roleId: string
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    socials?: SocialUncheckedCreateNestedManyWithoutUserInput
    likedPosts?: PostsLikedByUsersUncheckedCreateNestedManyWithoutUserInput
    viewedPosts?: PostsViewedByUsersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type PostCreateWithoutCommentsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    slug: string
    title: string
    body: string
    published?: boolean
    publishedAt?: Date | string | null
    views: number
    likes: number
    viewsIps?: PostCreateviewsIpsInput | Enumerable<string>
    likedIps?: PostCreatelikedIpsInput | Enumerable<string>
    viewsUsers?: PostsViewedByUsersCreateNestedManyWithoutPostInput
    likedUsers?: PostsLikedByUsersCreateNestedManyWithoutPostInput
    author: UserCreateNestedOneWithoutPostsInput
    tags?: PostTagsCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutCommentsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    slug: string
    title: string
    body: string
    published?: boolean
    publishedAt?: Date | string | null
    views: number
    likes: number
    authorId: string
    viewsIps?: PostCreateviewsIpsInput | Enumerable<string>
    likedIps?: PostCreatelikedIpsInput | Enumerable<string>
    viewsUsers?: PostsViewedByUsersUncheckedCreateNestedManyWithoutPostInput
    likedUsers?: PostsLikedByUsersUncheckedCreateNestedManyWithoutPostInput
    tags?: PostTagsUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutCommentsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutUsersInput
    posts?: PostUpdateManyWithoutAuthorInput
    socials?: SocialUpdateManyWithoutUserInput
    likedPosts?: PostsLikedByUsersUpdateManyWithoutUserInput
    viewedPosts?: PostsViewedByUsersUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    posts?: PostUncheckedUpdateManyWithoutAuthorInput
    socials?: SocialUncheckedUpdateManyWithoutUserInput
    likedPosts?: PostsLikedByUsersUncheckedUpdateManyWithoutUserInput
    viewedPosts?: PostsViewedByUsersUncheckedUpdateManyWithoutUserInput
  }

  export type PostUpsertWithoutCommentsInput = {
    update: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
  }

  export type PostUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    viewsIps?: PostUpdateviewsIpsInput | Enumerable<string>
    likedIps?: PostUpdatelikedIpsInput | Enumerable<string>
    viewsUsers?: PostsViewedByUsersUpdateManyWithoutPostInput
    likedUsers?: PostsLikedByUsersUpdateManyWithoutPostInput
    author?: UserUpdateOneRequiredWithoutPostsInput
    tags?: PostTagsUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    viewsIps?: PostUpdateviewsIpsInput | Enumerable<string>
    likedIps?: PostUpdatelikedIpsInput | Enumerable<string>
    viewsUsers?: PostsViewedByUsersUncheckedUpdateManyWithoutPostInput
    likedUsers?: PostsLikedByUsersUncheckedUpdateManyWithoutPostInput
    tags?: PostTagsUncheckedUpdateManyWithoutPostInput
  }

  export type PostCreateWithoutLikedUsersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    slug: string
    title: string
    body: string
    published?: boolean
    publishedAt?: Date | string | null
    views: number
    likes: number
    viewsIps?: PostCreateviewsIpsInput | Enumerable<string>
    likedIps?: PostCreatelikedIpsInput | Enumerable<string>
    viewsUsers?: PostsViewedByUsersCreateNestedManyWithoutPostInput
    author: UserCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
    tags?: PostTagsCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutLikedUsersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    slug: string
    title: string
    body: string
    published?: boolean
    publishedAt?: Date | string | null
    views: number
    likes: number
    authorId: string
    viewsIps?: PostCreateviewsIpsInput | Enumerable<string>
    likedIps?: PostCreatelikedIpsInput | Enumerable<string>
    viewsUsers?: PostsViewedByUsersUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    tags?: PostTagsUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutLikedUsersInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutLikedUsersInput, PostUncheckedCreateWithoutLikedUsersInput>
  }

  export type UserCreateWithoutLikedPostsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    email: string
    role: RoleCreateNestedOneWithoutUsersInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    socials?: SocialCreateNestedManyWithoutUserInput
    viewedPosts?: PostsViewedByUsersCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutLikedPostsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    email: string
    roleId: string
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    socials?: SocialUncheckedCreateNestedManyWithoutUserInput
    viewedPosts?: PostsViewedByUsersUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutLikedPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikedPostsInput, UserUncheckedCreateWithoutLikedPostsInput>
  }

  export type PostUpsertWithoutLikedUsersInput = {
    update: XOR<PostUpdateWithoutLikedUsersInput, PostUncheckedUpdateWithoutLikedUsersInput>
    create: XOR<PostCreateWithoutLikedUsersInput, PostUncheckedCreateWithoutLikedUsersInput>
  }

  export type PostUpdateWithoutLikedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    viewsIps?: PostUpdateviewsIpsInput | Enumerable<string>
    likedIps?: PostUpdatelikedIpsInput | Enumerable<string>
    viewsUsers?: PostsViewedByUsersUpdateManyWithoutPostInput
    author?: UserUpdateOneRequiredWithoutPostsInput
    comments?: CommentUpdateManyWithoutPostInput
    tags?: PostTagsUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateWithoutLikedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    viewsIps?: PostUpdateviewsIpsInput | Enumerable<string>
    likedIps?: PostUpdatelikedIpsInput | Enumerable<string>
    viewsUsers?: PostsViewedByUsersUncheckedUpdateManyWithoutPostInput
    comments?: CommentUncheckedUpdateManyWithoutPostInput
    tags?: PostTagsUncheckedUpdateManyWithoutPostInput
  }

  export type UserUpsertWithoutLikedPostsInput = {
    update: XOR<UserUpdateWithoutLikedPostsInput, UserUncheckedUpdateWithoutLikedPostsInput>
    create: XOR<UserCreateWithoutLikedPostsInput, UserUncheckedCreateWithoutLikedPostsInput>
  }

  export type UserUpdateWithoutLikedPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutUsersInput
    posts?: PostUpdateManyWithoutAuthorInput
    socials?: SocialUpdateManyWithoutUserInput
    viewedPosts?: PostsViewedByUsersUpdateManyWithoutUserInput
    comments?: CommentUpdateManyWithoutAuthorInput
  }

  export type UserUncheckedUpdateWithoutLikedPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    posts?: PostUncheckedUpdateManyWithoutAuthorInput
    socials?: SocialUncheckedUpdateManyWithoutUserInput
    viewedPosts?: PostsViewedByUsersUncheckedUpdateManyWithoutUserInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorInput
  }

  export type PostCreateWithoutViewsUsersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    slug: string
    title: string
    body: string
    published?: boolean
    publishedAt?: Date | string | null
    views: number
    likes: number
    viewsIps?: PostCreateviewsIpsInput | Enumerable<string>
    likedIps?: PostCreatelikedIpsInput | Enumerable<string>
    likedUsers?: PostsLikedByUsersCreateNestedManyWithoutPostInput
    author: UserCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
    tags?: PostTagsCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutViewsUsersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    slug: string
    title: string
    body: string
    published?: boolean
    publishedAt?: Date | string | null
    views: number
    likes: number
    authorId: string
    viewsIps?: PostCreateviewsIpsInput | Enumerable<string>
    likedIps?: PostCreatelikedIpsInput | Enumerable<string>
    likedUsers?: PostsLikedByUsersUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    tags?: PostTagsUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutViewsUsersInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutViewsUsersInput, PostUncheckedCreateWithoutViewsUsersInput>
  }

  export type UserCreateWithoutViewedPostsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    email: string
    role: RoleCreateNestedOneWithoutUsersInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    socials?: SocialCreateNestedManyWithoutUserInput
    likedPosts?: PostsLikedByUsersCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutViewedPostsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    email: string
    roleId: string
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    socials?: SocialUncheckedCreateNestedManyWithoutUserInput
    likedPosts?: PostsLikedByUsersUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutViewedPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutViewedPostsInput, UserUncheckedCreateWithoutViewedPostsInput>
  }

  export type PostUpsertWithoutViewsUsersInput = {
    update: XOR<PostUpdateWithoutViewsUsersInput, PostUncheckedUpdateWithoutViewsUsersInput>
    create: XOR<PostCreateWithoutViewsUsersInput, PostUncheckedCreateWithoutViewsUsersInput>
  }

  export type PostUpdateWithoutViewsUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    viewsIps?: PostUpdateviewsIpsInput | Enumerable<string>
    likedIps?: PostUpdatelikedIpsInput | Enumerable<string>
    likedUsers?: PostsLikedByUsersUpdateManyWithoutPostInput
    author?: UserUpdateOneRequiredWithoutPostsInput
    comments?: CommentUpdateManyWithoutPostInput
    tags?: PostTagsUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateWithoutViewsUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    viewsIps?: PostUpdateviewsIpsInput | Enumerable<string>
    likedIps?: PostUpdatelikedIpsInput | Enumerable<string>
    likedUsers?: PostsLikedByUsersUncheckedUpdateManyWithoutPostInput
    comments?: CommentUncheckedUpdateManyWithoutPostInput
    tags?: PostTagsUncheckedUpdateManyWithoutPostInput
  }

  export type UserUpsertWithoutViewedPostsInput = {
    update: XOR<UserUpdateWithoutViewedPostsInput, UserUncheckedUpdateWithoutViewedPostsInput>
    create: XOR<UserCreateWithoutViewedPostsInput, UserUncheckedCreateWithoutViewedPostsInput>
  }

  export type UserUpdateWithoutViewedPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutUsersInput
    posts?: PostUpdateManyWithoutAuthorInput
    socials?: SocialUpdateManyWithoutUserInput
    likedPosts?: PostsLikedByUsersUpdateManyWithoutUserInput
    comments?: CommentUpdateManyWithoutAuthorInput
  }

  export type UserUncheckedUpdateWithoutViewedPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    posts?: PostUncheckedUpdateManyWithoutAuthorInput
    socials?: SocialUncheckedUpdateManyWithoutUserInput
    likedPosts?: PostsLikedByUsersUncheckedUpdateManyWithoutUserInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorInput
  }

  export type PostCreateManyAuthorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    slug: string
    title: string
    body: string
    published?: boolean
    publishedAt?: Date | string | null
    views: number
    likes: number
    viewsIps?: PostCreateManyviewsIpsInput | Enumerable<string>
    likedIps?: PostCreateManylikedIpsInput | Enumerable<string>
  }

  export type SocialCreateManyUserInput = {
    id?: string
    type: string
    accountId: number
    accountUrl: string
    accountImage: string
  }

  export type PostsLikedByUsersCreateManyUserInput = {
    postId: string
    likedAt?: Date | string
  }

  export type PostsViewedByUsersCreateManyUserInput = {
    postId: string
    viewedAt?: Date | string
  }

  export type CommentCreateManyAuthorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    body: string
    postId: string
  }

  export type PostUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    viewsIps?: PostUpdateviewsIpsInput | Enumerable<string>
    likedIps?: PostUpdatelikedIpsInput | Enumerable<string>
    viewsUsers?: PostsViewedByUsersUpdateManyWithoutPostInput
    likedUsers?: PostsLikedByUsersUpdateManyWithoutPostInput
    comments?: CommentUpdateManyWithoutPostInput
    tags?: PostTagsUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    viewsIps?: PostUpdateviewsIpsInput | Enumerable<string>
    likedIps?: PostUpdatelikedIpsInput | Enumerable<string>
    viewsUsers?: PostsViewedByUsersUncheckedUpdateManyWithoutPostInput
    likedUsers?: PostsLikedByUsersUncheckedUpdateManyWithoutPostInput
    comments?: CommentUncheckedUpdateManyWithoutPostInput
    tags?: PostTagsUncheckedUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateManyWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    viewsIps?: PostUpdateviewsIpsInput | Enumerable<string>
    likedIps?: PostUpdatelikedIpsInput | Enumerable<string>
  }

  export type SocialUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    accountId?: IntFieldUpdateOperationsInput | number
    accountUrl?: StringFieldUpdateOperationsInput | string
    accountImage?: StringFieldUpdateOperationsInput | string
  }

  export type SocialUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    accountId?: IntFieldUpdateOperationsInput | number
    accountUrl?: StringFieldUpdateOperationsInput | string
    accountImage?: StringFieldUpdateOperationsInput | string
  }

  export type SocialUncheckedUpdateManyWithoutSocialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    accountId?: IntFieldUpdateOperationsInput | number
    accountUrl?: StringFieldUpdateOperationsInput | string
    accountImage?: StringFieldUpdateOperationsInput | string
  }

  export type PostsLikedByUsersUpdateWithoutUserInput = {
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutLikedUsersInput
  }

  export type PostsLikedByUsersUncheckedUpdateWithoutUserInput = {
    postId?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsLikedByUsersUncheckedUpdateManyWithoutLikedPostsInput = {
    postId?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsViewedByUsersUpdateWithoutUserInput = {
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutViewsUsersInput
  }

  export type PostsViewedByUsersUncheckedUpdateWithoutUserInput = {
    postId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsViewedByUsersUncheckedUpdateManyWithoutViewedPostsInput = {
    postId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    body?: StringFieldUpdateOperationsInput | string
    post?: PostUpdateOneRequiredWithoutCommentsInput
  }

  export type CommentUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    body?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateManyWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    body?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyRoleInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    name: string
    email: string
  }

  export type UserUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    posts?: PostUpdateManyWithoutAuthorInput
    socials?: SocialUpdateManyWithoutUserInput
    likedPosts?: PostsLikedByUsersUpdateManyWithoutUserInput
    viewedPosts?: PostsViewedByUsersUpdateManyWithoutUserInput
    comments?: CommentUpdateManyWithoutAuthorInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    posts?: PostUncheckedUpdateManyWithoutAuthorInput
    socials?: SocialUncheckedUpdateManyWithoutUserInput
    likedPosts?: PostsLikedByUsersUncheckedUpdateManyWithoutUserInput
    viewedPosts?: PostsViewedByUsersUncheckedUpdateManyWithoutUserInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorInput
  }

  export type UserUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type PostsViewedByUsersCreateManyPostInput = {
    userId: string
    viewedAt?: Date | string
  }

  export type PostsLikedByUsersCreateManyPostInput = {
    userId: string
    likedAt?: Date | string
  }

  export type CommentCreateManyPostInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    body: string
    authorId: string
  }

  export type PostTagsCreateManyPostInput = {
    tagId: string
  }

  export type PostsViewedByUsersUpdateWithoutPostInput = {
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutViewedPostsInput
  }

  export type PostsViewedByUsersUncheckedUpdateWithoutPostInput = {
    userId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsViewedByUsersUncheckedUpdateManyWithoutViewsUsersInput = {
    userId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsLikedByUsersUpdateWithoutPostInput = {
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikedPostsInput
  }

  export type PostsLikedByUsersUncheckedUpdateWithoutPostInput = {
    userId?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsLikedByUsersUncheckedUpdateManyWithoutLikedUsersInput = {
    userId?: StringFieldUpdateOperationsInput | string
    likedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    body?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutCommentsInput
  }

  export type CommentUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    body?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type PostTagsUpdateWithoutPostInput = {
    tag?: TagUpdateOneRequiredWithoutPostsInput
  }

  export type PostTagsUncheckedUpdateWithoutPostInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type PostTagsUncheckedUpdateManyWithoutTagsInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type PostTagsCreateManyTagInput = {
    postId: string
  }

  export type PostTagsUpdateWithoutTagInput = {
    post?: PostUpdateOneRequiredWithoutTagsInput
  }

  export type PostTagsUncheckedUpdateWithoutTagInput = {
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type PostTagsUncheckedUpdateManyWithoutPostsInput = {
    postId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}