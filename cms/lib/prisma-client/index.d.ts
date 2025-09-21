
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Page
 * 
 */
export type Page = $Result.DefaultSelection<Prisma.$PagePayload>
/**
 * Model NavigationItem
 * 
 */
export type NavigationItem = $Result.DefaultSelection<Prisma.$NavigationItemPayload>
/**
 * Model CarSeries
 * 
 */
export type CarSeries = $Result.DefaultSelection<Prisma.$CarSeriesPayload>
/**
 * Model Media
 * 
 */
export type Media = $Result.DefaultSelection<Prisma.$MediaPayload>
/**
 * Model ContentBlock
 * 
 */
export type ContentBlock = $Result.DefaultSelection<Prisma.$ContentBlockPayload>

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
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

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

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.page`: Exposes CRUD operations for the **Page** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pages
    * const pages = await prisma.page.findMany()
    * ```
    */
  get page(): Prisma.PageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.navigationItem`: Exposes CRUD operations for the **NavigationItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NavigationItems
    * const navigationItems = await prisma.navigationItem.findMany()
    * ```
    */
  get navigationItem(): Prisma.NavigationItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carSeries`: Exposes CRUD operations for the **CarSeries** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CarSeries
    * const carSeries = await prisma.carSeries.findMany()
    * ```
    */
  get carSeries(): Prisma.CarSeriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.media`: Exposes CRUD operations for the **Media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Media
    * const media = await prisma.media.findMany()
    * ```
    */
  get media(): Prisma.MediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contentBlock`: Exposes CRUD operations for the **ContentBlock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContentBlocks
    * const contentBlocks = await prisma.contentBlock.findMany()
    * ```
    */
  get contentBlock(): Prisma.ContentBlockDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Page: 'Page',
    NavigationItem: 'NavigationItem',
    CarSeries: 'CarSeries',
    Media: 'Media',
    ContentBlock: 'ContentBlock'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "page" | "navigationItem" | "carSeries" | "media" | "contentBlock"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Page: {
        payload: Prisma.$PagePayload<ExtArgs>
        fields: Prisma.PageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          findFirst: {
            args: Prisma.PageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          findMany: {
            args: Prisma.PageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[]
          }
          create: {
            args: Prisma.PageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          createMany: {
            args: Prisma.PageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[]
          }
          delete: {
            args: Prisma.PageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          update: {
            args: Prisma.PageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          deleteMany: {
            args: Prisma.PageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[]
          }
          upsert: {
            args: Prisma.PageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          aggregate: {
            args: Prisma.PageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePage>
          }
          groupBy: {
            args: Prisma.PageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PageCountArgs<ExtArgs>
            result: $Utils.Optional<PageCountAggregateOutputType> | number
          }
        }
      }
      NavigationItem: {
        payload: Prisma.$NavigationItemPayload<ExtArgs>
        fields: Prisma.NavigationItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NavigationItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NavigationItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationItemPayload>
          }
          findFirst: {
            args: Prisma.NavigationItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NavigationItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationItemPayload>
          }
          findMany: {
            args: Prisma.NavigationItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationItemPayload>[]
          }
          create: {
            args: Prisma.NavigationItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationItemPayload>
          }
          createMany: {
            args: Prisma.NavigationItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NavigationItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationItemPayload>[]
          }
          delete: {
            args: Prisma.NavigationItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationItemPayload>
          }
          update: {
            args: Prisma.NavigationItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationItemPayload>
          }
          deleteMany: {
            args: Prisma.NavigationItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NavigationItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NavigationItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationItemPayload>[]
          }
          upsert: {
            args: Prisma.NavigationItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationItemPayload>
          }
          aggregate: {
            args: Prisma.NavigationItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNavigationItem>
          }
          groupBy: {
            args: Prisma.NavigationItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<NavigationItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.NavigationItemCountArgs<ExtArgs>
            result: $Utils.Optional<NavigationItemCountAggregateOutputType> | number
          }
        }
      }
      CarSeries: {
        payload: Prisma.$CarSeriesPayload<ExtArgs>
        fields: Prisma.CarSeriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarSeriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarSeriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarSeriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarSeriesPayload>
          }
          findFirst: {
            args: Prisma.CarSeriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarSeriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarSeriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarSeriesPayload>
          }
          findMany: {
            args: Prisma.CarSeriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarSeriesPayload>[]
          }
          create: {
            args: Prisma.CarSeriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarSeriesPayload>
          }
          createMany: {
            args: Prisma.CarSeriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarSeriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarSeriesPayload>[]
          }
          delete: {
            args: Prisma.CarSeriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarSeriesPayload>
          }
          update: {
            args: Prisma.CarSeriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarSeriesPayload>
          }
          deleteMany: {
            args: Prisma.CarSeriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarSeriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarSeriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarSeriesPayload>[]
          }
          upsert: {
            args: Prisma.CarSeriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarSeriesPayload>
          }
          aggregate: {
            args: Prisma.CarSeriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarSeries>
          }
          groupBy: {
            args: Prisma.CarSeriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarSeriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarSeriesCountArgs<ExtArgs>
            result: $Utils.Optional<CarSeriesCountAggregateOutputType> | number
          }
        }
      }
      Media: {
        payload: Prisma.$MediaPayload<ExtArgs>
        fields: Prisma.MediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findFirst: {
            args: Prisma.MediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findMany: {
            args: Prisma.MediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          create: {
            args: Prisma.MediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          createMany: {
            args: Prisma.MediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          delete: {
            args: Prisma.MediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          update: {
            args: Prisma.MediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          deleteMany: {
            args: Prisma.MediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          upsert: {
            args: Prisma.MediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          aggregate: {
            args: Prisma.MediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedia>
          }
          groupBy: {
            args: Prisma.MediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaCountArgs<ExtArgs>
            result: $Utils.Optional<MediaCountAggregateOutputType> | number
          }
        }
      }
      ContentBlock: {
        payload: Prisma.$ContentBlockPayload<ExtArgs>
        fields: Prisma.ContentBlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentBlockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentBlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentBlockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentBlockPayload>
          }
          findFirst: {
            args: Prisma.ContentBlockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentBlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentBlockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentBlockPayload>
          }
          findMany: {
            args: Prisma.ContentBlockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentBlockPayload>[]
          }
          create: {
            args: Prisma.ContentBlockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentBlockPayload>
          }
          createMany: {
            args: Prisma.ContentBlockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContentBlockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentBlockPayload>[]
          }
          delete: {
            args: Prisma.ContentBlockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentBlockPayload>
          }
          update: {
            args: Prisma.ContentBlockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentBlockPayload>
          }
          deleteMany: {
            args: Prisma.ContentBlockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentBlockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContentBlockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentBlockPayload>[]
          }
          upsert: {
            args: Prisma.ContentBlockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentBlockPayload>
          }
          aggregate: {
            args: Prisma.ContentBlockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContentBlock>
          }
          groupBy: {
            args: Prisma.ContentBlockGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentBlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContentBlockCountArgs<ExtArgs>
            result: $Utils.Optional<ContentBlockCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    page?: PageOmit
    navigationItem?: NavigationItemOmit
    carSeries?: CarSeriesOmit
    media?: MediaOmit
    contentBlock?: ContentBlockOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PageCountOutputType
   */

  export type PageCountOutputType = {
    contentBlocks: number
  }

  export type PageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contentBlocks?: boolean | PageCountOutputTypeCountContentBlocksArgs
  }

  // Custom InputTypes
  /**
   * PageCountOutputType without action
   */
  export type PageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageCountOutputType
     */
    select?: PageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PageCountOutputType without action
   */
  export type PageCountOutputTypeCountContentBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentBlockWhereInput
  }


  /**
   * Count Type NavigationItemCountOutputType
   */

  export type NavigationItemCountOutputType = {
    children: number
  }

  export type NavigationItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | NavigationItemCountOutputTypeCountChildrenArgs
  }

  // Custom InputTypes
  /**
   * NavigationItemCountOutputType without action
   */
  export type NavigationItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationItemCountOutputType
     */
    select?: NavigationItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NavigationItemCountOutputType without action
   */
  export type NavigationItemCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NavigationItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    role: string | null
    firstName: string | null
    lastName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    role: string | null
    firstName: string | null
    lastName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    role: number
    firstName: number
    lastName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    firstName?: true
    lastName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    firstName?: true
    lastName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    firstName?: true
    lastName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    role: string
    firstName: string | null
    lastName: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "role" | "firstName" | "lastName" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      role: string
      firstName: string | null
      lastName: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Page
   */

  export type AggregatePage = {
    _count: PageCountAggregateOutputType | null
    _min: PageMinAggregateOutputType | null
    _max: PageMaxAggregateOutputType | null
  }

  export type PageMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    published: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PageMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    published: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PageCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    content: number
    heroData: number
    carouselData: number
    seoData: number
    published: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PageMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    published?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PageMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    published?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PageCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    heroData?: true
    carouselData?: true
    seoData?: true
    published?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Page to aggregate.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pages
    **/
    _count?: true | PageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PageMaxAggregateInputType
  }

  export type GetPageAggregateType<T extends PageAggregateArgs> = {
        [P in keyof T & keyof AggregatePage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePage[P]>
      : GetScalarType<T[P], AggregatePage[P]>
  }




  export type PageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageWhereInput
    orderBy?: PageOrderByWithAggregationInput | PageOrderByWithAggregationInput[]
    by: PageScalarFieldEnum[] | PageScalarFieldEnum
    having?: PageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PageCountAggregateInputType | true
    _min?: PageMinAggregateInputType
    _max?: PageMaxAggregateInputType
  }

  export type PageGroupByOutputType = {
    id: string
    title: string
    slug: string
    content: JsonValue | null
    heroData: JsonValue | null
    carouselData: JsonValue | null
    seoData: JsonValue | null
    published: boolean
    createdAt: Date
    updatedAt: Date
    _count: PageCountAggregateOutputType | null
    _min: PageMinAggregateOutputType | null
    _max: PageMaxAggregateOutputType | null
  }

  type GetPageGroupByPayload<T extends PageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PageGroupByOutputType[P]>
            : GetScalarType<T[P], PageGroupByOutputType[P]>
        }
      >
    >


  export type PageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    heroData?: boolean
    carouselData?: boolean
    seoData?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contentBlocks?: boolean | Page$contentBlocksArgs<ExtArgs>
    _count?: boolean | PageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["page"]>

  export type PageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    heroData?: boolean
    carouselData?: boolean
    seoData?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["page"]>

  export type PageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    heroData?: boolean
    carouselData?: boolean
    seoData?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["page"]>

  export type PageSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    heroData?: boolean
    carouselData?: boolean
    seoData?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "content" | "heroData" | "carouselData" | "seoData" | "published" | "createdAt" | "updatedAt", ExtArgs["result"]["page"]>
  export type PageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contentBlocks?: boolean | Page$contentBlocksArgs<ExtArgs>
    _count?: boolean | PageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Page"
    objects: {
      contentBlocks: Prisma.$ContentBlockPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      content: Prisma.JsonValue | null
      heroData: Prisma.JsonValue | null
      carouselData: Prisma.JsonValue | null
      seoData: Prisma.JsonValue | null
      published: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["page"]>
    composites: {}
  }

  type PageGetPayload<S extends boolean | null | undefined | PageDefaultArgs> = $Result.GetResult<Prisma.$PagePayload, S>

  type PageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PageCountAggregateInputType | true
    }

  export interface PageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Page'], meta: { name: 'Page' } }
    /**
     * Find zero or one Page that matches the filter.
     * @param {PageFindUniqueArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PageFindUniqueArgs>(args: SelectSubset<T, PageFindUniqueArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Page that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PageFindUniqueOrThrowArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PageFindUniqueOrThrowArgs>(args: SelectSubset<T, PageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Page that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindFirstArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PageFindFirstArgs>(args?: SelectSubset<T, PageFindFirstArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Page that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindFirstOrThrowArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PageFindFirstOrThrowArgs>(args?: SelectSubset<T, PageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pages
     * const pages = await prisma.page.findMany()
     * 
     * // Get first 10 Pages
     * const pages = await prisma.page.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pageWithIdOnly = await prisma.page.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PageFindManyArgs>(args?: SelectSubset<T, PageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Page.
     * @param {PageCreateArgs} args - Arguments to create a Page.
     * @example
     * // Create one Page
     * const Page = await prisma.page.create({
     *   data: {
     *     // ... data to create a Page
     *   }
     * })
     * 
     */
    create<T extends PageCreateArgs>(args: SelectSubset<T, PageCreateArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pages.
     * @param {PageCreateManyArgs} args - Arguments to create many Pages.
     * @example
     * // Create many Pages
     * const page = await prisma.page.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PageCreateManyArgs>(args?: SelectSubset<T, PageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pages and returns the data saved in the database.
     * @param {PageCreateManyAndReturnArgs} args - Arguments to create many Pages.
     * @example
     * // Create many Pages
     * const page = await prisma.page.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pages and only return the `id`
     * const pageWithIdOnly = await prisma.page.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PageCreateManyAndReturnArgs>(args?: SelectSubset<T, PageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Page.
     * @param {PageDeleteArgs} args - Arguments to delete one Page.
     * @example
     * // Delete one Page
     * const Page = await prisma.page.delete({
     *   where: {
     *     // ... filter to delete one Page
     *   }
     * })
     * 
     */
    delete<T extends PageDeleteArgs>(args: SelectSubset<T, PageDeleteArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Page.
     * @param {PageUpdateArgs} args - Arguments to update one Page.
     * @example
     * // Update one Page
     * const page = await prisma.page.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PageUpdateArgs>(args: SelectSubset<T, PageUpdateArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pages.
     * @param {PageDeleteManyArgs} args - Arguments to filter Pages to delete.
     * @example
     * // Delete a few Pages
     * const { count } = await prisma.page.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PageDeleteManyArgs>(args?: SelectSubset<T, PageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pages
     * const page = await prisma.page.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PageUpdateManyArgs>(args: SelectSubset<T, PageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pages and returns the data updated in the database.
     * @param {PageUpdateManyAndReturnArgs} args - Arguments to update many Pages.
     * @example
     * // Update many Pages
     * const page = await prisma.page.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pages and only return the `id`
     * const pageWithIdOnly = await prisma.page.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PageUpdateManyAndReturnArgs>(args: SelectSubset<T, PageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Page.
     * @param {PageUpsertArgs} args - Arguments to update or create a Page.
     * @example
     * // Update or create a Page
     * const page = await prisma.page.upsert({
     *   create: {
     *     // ... data to create a Page
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Page we want to update
     *   }
     * })
     */
    upsert<T extends PageUpsertArgs>(args: SelectSubset<T, PageUpsertArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageCountArgs} args - Arguments to filter Pages to count.
     * @example
     * // Count the number of Pages
     * const count = await prisma.page.count({
     *   where: {
     *     // ... the filter for the Pages we want to count
     *   }
     * })
    **/
    count<T extends PageCountArgs>(
      args?: Subset<T, PageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Page.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PageAggregateArgs>(args: Subset<T, PageAggregateArgs>): Prisma.PrismaPromise<GetPageAggregateType<T>>

    /**
     * Group by Page.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageGroupByArgs} args - Group by arguments.
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
      T extends PageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageGroupByArgs['orderBy'] }
        : { orderBy?: PageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Page model
   */
  readonly fields: PageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Page.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contentBlocks<T extends Page$contentBlocksArgs<ExtArgs> = {}>(args?: Subset<T, Page$contentBlocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Page model
   */
  interface PageFieldRefs {
    readonly id: FieldRef<"Page", 'String'>
    readonly title: FieldRef<"Page", 'String'>
    readonly slug: FieldRef<"Page", 'String'>
    readonly content: FieldRef<"Page", 'Json'>
    readonly heroData: FieldRef<"Page", 'Json'>
    readonly carouselData: FieldRef<"Page", 'Json'>
    readonly seoData: FieldRef<"Page", 'Json'>
    readonly published: FieldRef<"Page", 'Boolean'>
    readonly createdAt: FieldRef<"Page", 'DateTime'>
    readonly updatedAt: FieldRef<"Page", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Page findUnique
   */
  export type PageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page findUniqueOrThrow
   */
  export type PageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page findFirst
   */
  export type PageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pages.
     */
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Page findFirstOrThrow
   */
  export type PageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pages.
     */
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Page findMany
   */
  export type PageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Pages to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Page create
   */
  export type PageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * The data needed to create a Page.
     */
    data: XOR<PageCreateInput, PageUncheckedCreateInput>
  }

  /**
   * Page createMany
   */
  export type PageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pages.
     */
    data: PageCreateManyInput | PageCreateManyInput[]
  }

  /**
   * Page createManyAndReturn
   */
  export type PageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * The data used to create many Pages.
     */
    data: PageCreateManyInput | PageCreateManyInput[]
  }

  /**
   * Page update
   */
  export type PageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * The data needed to update a Page.
     */
    data: XOR<PageUpdateInput, PageUncheckedUpdateInput>
    /**
     * Choose, which Page to update.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page updateMany
   */
  export type PageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pages.
     */
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyInput>
    /**
     * Filter which Pages to update
     */
    where?: PageWhereInput
    /**
     * Limit how many Pages to update.
     */
    limit?: number
  }

  /**
   * Page updateManyAndReturn
   */
  export type PageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * The data used to update Pages.
     */
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyInput>
    /**
     * Filter which Pages to update
     */
    where?: PageWhereInput
    /**
     * Limit how many Pages to update.
     */
    limit?: number
  }

  /**
   * Page upsert
   */
  export type PageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * The filter to search for the Page to update in case it exists.
     */
    where: PageWhereUniqueInput
    /**
     * In case the Page found by the `where` argument doesn't exist, create a new Page with this data.
     */
    create: XOR<PageCreateInput, PageUncheckedCreateInput>
    /**
     * In case the Page was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PageUpdateInput, PageUncheckedUpdateInput>
  }

  /**
   * Page delete
   */
  export type PageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter which Page to delete.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page deleteMany
   */
  export type PageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pages to delete
     */
    where?: PageWhereInput
    /**
     * Limit how many Pages to delete.
     */
    limit?: number
  }

  /**
   * Page.contentBlocks
   */
  export type Page$contentBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentBlock
     */
    select?: ContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentBlock
     */
    omit?: ContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentBlockInclude<ExtArgs> | null
    where?: ContentBlockWhereInput
    orderBy?: ContentBlockOrderByWithRelationInput | ContentBlockOrderByWithRelationInput[]
    cursor?: ContentBlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentBlockScalarFieldEnum | ContentBlockScalarFieldEnum[]
  }

  /**
   * Page without action
   */
  export type PageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
  }


  /**
   * Model NavigationItem
   */

  export type AggregateNavigationItem = {
    _count: NavigationItemCountAggregateOutputType | null
    _avg: NavigationItemAvgAggregateOutputType | null
    _sum: NavigationItemSumAggregateOutputType | null
    _min: NavigationItemMinAggregateOutputType | null
    _max: NavigationItemMaxAggregateOutputType | null
  }

  export type NavigationItemAvgAggregateOutputType = {
    orderIndex: number | null
  }

  export type NavigationItemSumAggregateOutputType = {
    orderIndex: number | null
  }

  export type NavigationItemMinAggregateOutputType = {
    id: string | null
    label: string | null
    url: string | null
    parentId: string | null
    orderIndex: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NavigationItemMaxAggregateOutputType = {
    id: string | null
    label: string | null
    url: string | null
    parentId: string | null
    orderIndex: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NavigationItemCountAggregateOutputType = {
    id: number
    label: number
    url: number
    parentId: number
    orderIndex: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NavigationItemAvgAggregateInputType = {
    orderIndex?: true
  }

  export type NavigationItemSumAggregateInputType = {
    orderIndex?: true
  }

  export type NavigationItemMinAggregateInputType = {
    id?: true
    label?: true
    url?: true
    parentId?: true
    orderIndex?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NavigationItemMaxAggregateInputType = {
    id?: true
    label?: true
    url?: true
    parentId?: true
    orderIndex?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NavigationItemCountAggregateInputType = {
    id?: true
    label?: true
    url?: true
    parentId?: true
    orderIndex?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NavigationItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NavigationItem to aggregate.
     */
    where?: NavigationItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NavigationItems to fetch.
     */
    orderBy?: NavigationItemOrderByWithRelationInput | NavigationItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NavigationItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NavigationItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NavigationItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NavigationItems
    **/
    _count?: true | NavigationItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NavigationItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NavigationItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NavigationItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NavigationItemMaxAggregateInputType
  }

  export type GetNavigationItemAggregateType<T extends NavigationItemAggregateArgs> = {
        [P in keyof T & keyof AggregateNavigationItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNavigationItem[P]>
      : GetScalarType<T[P], AggregateNavigationItem[P]>
  }




  export type NavigationItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NavigationItemWhereInput
    orderBy?: NavigationItemOrderByWithAggregationInput | NavigationItemOrderByWithAggregationInput[]
    by: NavigationItemScalarFieldEnum[] | NavigationItemScalarFieldEnum
    having?: NavigationItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NavigationItemCountAggregateInputType | true
    _avg?: NavigationItemAvgAggregateInputType
    _sum?: NavigationItemSumAggregateInputType
    _min?: NavigationItemMinAggregateInputType
    _max?: NavigationItemMaxAggregateInputType
  }

  export type NavigationItemGroupByOutputType = {
    id: string
    label: string
    url: string | null
    parentId: string | null
    orderIndex: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: NavigationItemCountAggregateOutputType | null
    _avg: NavigationItemAvgAggregateOutputType | null
    _sum: NavigationItemSumAggregateOutputType | null
    _min: NavigationItemMinAggregateOutputType | null
    _max: NavigationItemMaxAggregateOutputType | null
  }

  type GetNavigationItemGroupByPayload<T extends NavigationItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NavigationItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NavigationItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NavigationItemGroupByOutputType[P]>
            : GetScalarType<T[P], NavigationItemGroupByOutputType[P]>
        }
      >
    >


  export type NavigationItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    url?: boolean
    parentId?: boolean
    orderIndex?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | NavigationItem$parentArgs<ExtArgs>
    children?: boolean | NavigationItem$childrenArgs<ExtArgs>
    _count?: boolean | NavigationItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["navigationItem"]>

  export type NavigationItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    url?: boolean
    parentId?: boolean
    orderIndex?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | NavigationItem$parentArgs<ExtArgs>
  }, ExtArgs["result"]["navigationItem"]>

  export type NavigationItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    url?: boolean
    parentId?: boolean
    orderIndex?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | NavigationItem$parentArgs<ExtArgs>
  }, ExtArgs["result"]["navigationItem"]>

  export type NavigationItemSelectScalar = {
    id?: boolean
    label?: boolean
    url?: boolean
    parentId?: boolean
    orderIndex?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NavigationItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label" | "url" | "parentId" | "orderIndex" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["navigationItem"]>
  export type NavigationItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | NavigationItem$parentArgs<ExtArgs>
    children?: boolean | NavigationItem$childrenArgs<ExtArgs>
    _count?: boolean | NavigationItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NavigationItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | NavigationItem$parentArgs<ExtArgs>
  }
  export type NavigationItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | NavigationItem$parentArgs<ExtArgs>
  }

  export type $NavigationItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NavigationItem"
    objects: {
      parent: Prisma.$NavigationItemPayload<ExtArgs> | null
      children: Prisma.$NavigationItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      label: string
      url: string | null
      parentId: string | null
      orderIndex: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["navigationItem"]>
    composites: {}
  }

  type NavigationItemGetPayload<S extends boolean | null | undefined | NavigationItemDefaultArgs> = $Result.GetResult<Prisma.$NavigationItemPayload, S>

  type NavigationItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NavigationItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NavigationItemCountAggregateInputType | true
    }

  export interface NavigationItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NavigationItem'], meta: { name: 'NavigationItem' } }
    /**
     * Find zero or one NavigationItem that matches the filter.
     * @param {NavigationItemFindUniqueArgs} args - Arguments to find a NavigationItem
     * @example
     * // Get one NavigationItem
     * const navigationItem = await prisma.navigationItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NavigationItemFindUniqueArgs>(args: SelectSubset<T, NavigationItemFindUniqueArgs<ExtArgs>>): Prisma__NavigationItemClient<$Result.GetResult<Prisma.$NavigationItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NavigationItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NavigationItemFindUniqueOrThrowArgs} args - Arguments to find a NavigationItem
     * @example
     * // Get one NavigationItem
     * const navigationItem = await prisma.navigationItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NavigationItemFindUniqueOrThrowArgs>(args: SelectSubset<T, NavigationItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NavigationItemClient<$Result.GetResult<Prisma.$NavigationItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NavigationItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavigationItemFindFirstArgs} args - Arguments to find a NavigationItem
     * @example
     * // Get one NavigationItem
     * const navigationItem = await prisma.navigationItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NavigationItemFindFirstArgs>(args?: SelectSubset<T, NavigationItemFindFirstArgs<ExtArgs>>): Prisma__NavigationItemClient<$Result.GetResult<Prisma.$NavigationItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NavigationItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavigationItemFindFirstOrThrowArgs} args - Arguments to find a NavigationItem
     * @example
     * // Get one NavigationItem
     * const navigationItem = await prisma.navigationItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NavigationItemFindFirstOrThrowArgs>(args?: SelectSubset<T, NavigationItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__NavigationItemClient<$Result.GetResult<Prisma.$NavigationItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NavigationItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavigationItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NavigationItems
     * const navigationItems = await prisma.navigationItem.findMany()
     * 
     * // Get first 10 NavigationItems
     * const navigationItems = await prisma.navigationItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const navigationItemWithIdOnly = await prisma.navigationItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NavigationItemFindManyArgs>(args?: SelectSubset<T, NavigationItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NavigationItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NavigationItem.
     * @param {NavigationItemCreateArgs} args - Arguments to create a NavigationItem.
     * @example
     * // Create one NavigationItem
     * const NavigationItem = await prisma.navigationItem.create({
     *   data: {
     *     // ... data to create a NavigationItem
     *   }
     * })
     * 
     */
    create<T extends NavigationItemCreateArgs>(args: SelectSubset<T, NavigationItemCreateArgs<ExtArgs>>): Prisma__NavigationItemClient<$Result.GetResult<Prisma.$NavigationItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NavigationItems.
     * @param {NavigationItemCreateManyArgs} args - Arguments to create many NavigationItems.
     * @example
     * // Create many NavigationItems
     * const navigationItem = await prisma.navigationItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NavigationItemCreateManyArgs>(args?: SelectSubset<T, NavigationItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NavigationItems and returns the data saved in the database.
     * @param {NavigationItemCreateManyAndReturnArgs} args - Arguments to create many NavigationItems.
     * @example
     * // Create many NavigationItems
     * const navigationItem = await prisma.navigationItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NavigationItems and only return the `id`
     * const navigationItemWithIdOnly = await prisma.navigationItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NavigationItemCreateManyAndReturnArgs>(args?: SelectSubset<T, NavigationItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NavigationItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NavigationItem.
     * @param {NavigationItemDeleteArgs} args - Arguments to delete one NavigationItem.
     * @example
     * // Delete one NavigationItem
     * const NavigationItem = await prisma.navigationItem.delete({
     *   where: {
     *     // ... filter to delete one NavigationItem
     *   }
     * })
     * 
     */
    delete<T extends NavigationItemDeleteArgs>(args: SelectSubset<T, NavigationItemDeleteArgs<ExtArgs>>): Prisma__NavigationItemClient<$Result.GetResult<Prisma.$NavigationItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NavigationItem.
     * @param {NavigationItemUpdateArgs} args - Arguments to update one NavigationItem.
     * @example
     * // Update one NavigationItem
     * const navigationItem = await prisma.navigationItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NavigationItemUpdateArgs>(args: SelectSubset<T, NavigationItemUpdateArgs<ExtArgs>>): Prisma__NavigationItemClient<$Result.GetResult<Prisma.$NavigationItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NavigationItems.
     * @param {NavigationItemDeleteManyArgs} args - Arguments to filter NavigationItems to delete.
     * @example
     * // Delete a few NavigationItems
     * const { count } = await prisma.navigationItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NavigationItemDeleteManyArgs>(args?: SelectSubset<T, NavigationItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NavigationItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavigationItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NavigationItems
     * const navigationItem = await prisma.navigationItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NavigationItemUpdateManyArgs>(args: SelectSubset<T, NavigationItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NavigationItems and returns the data updated in the database.
     * @param {NavigationItemUpdateManyAndReturnArgs} args - Arguments to update many NavigationItems.
     * @example
     * // Update many NavigationItems
     * const navigationItem = await prisma.navigationItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NavigationItems and only return the `id`
     * const navigationItemWithIdOnly = await prisma.navigationItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NavigationItemUpdateManyAndReturnArgs>(args: SelectSubset<T, NavigationItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NavigationItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NavigationItem.
     * @param {NavigationItemUpsertArgs} args - Arguments to update or create a NavigationItem.
     * @example
     * // Update or create a NavigationItem
     * const navigationItem = await prisma.navigationItem.upsert({
     *   create: {
     *     // ... data to create a NavigationItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NavigationItem we want to update
     *   }
     * })
     */
    upsert<T extends NavigationItemUpsertArgs>(args: SelectSubset<T, NavigationItemUpsertArgs<ExtArgs>>): Prisma__NavigationItemClient<$Result.GetResult<Prisma.$NavigationItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NavigationItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavigationItemCountArgs} args - Arguments to filter NavigationItems to count.
     * @example
     * // Count the number of NavigationItems
     * const count = await prisma.navigationItem.count({
     *   where: {
     *     // ... the filter for the NavigationItems we want to count
     *   }
     * })
    **/
    count<T extends NavigationItemCountArgs>(
      args?: Subset<T, NavigationItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NavigationItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NavigationItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavigationItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NavigationItemAggregateArgs>(args: Subset<T, NavigationItemAggregateArgs>): Prisma.PrismaPromise<GetNavigationItemAggregateType<T>>

    /**
     * Group by NavigationItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavigationItemGroupByArgs} args - Group by arguments.
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
      T extends NavigationItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NavigationItemGroupByArgs['orderBy'] }
        : { orderBy?: NavigationItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, NavigationItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNavigationItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NavigationItem model
   */
  readonly fields: NavigationItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NavigationItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NavigationItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends NavigationItem$parentArgs<ExtArgs> = {}>(args?: Subset<T, NavigationItem$parentArgs<ExtArgs>>): Prisma__NavigationItemClient<$Result.GetResult<Prisma.$NavigationItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends NavigationItem$childrenArgs<ExtArgs> = {}>(args?: Subset<T, NavigationItem$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NavigationItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NavigationItem model
   */
  interface NavigationItemFieldRefs {
    readonly id: FieldRef<"NavigationItem", 'String'>
    readonly label: FieldRef<"NavigationItem", 'String'>
    readonly url: FieldRef<"NavigationItem", 'String'>
    readonly parentId: FieldRef<"NavigationItem", 'String'>
    readonly orderIndex: FieldRef<"NavigationItem", 'Int'>
    readonly isActive: FieldRef<"NavigationItem", 'Boolean'>
    readonly createdAt: FieldRef<"NavigationItem", 'DateTime'>
    readonly updatedAt: FieldRef<"NavigationItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NavigationItem findUnique
   */
  export type NavigationItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationItem
     */
    select?: NavigationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavigationItem
     */
    omit?: NavigationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavigationItemInclude<ExtArgs> | null
    /**
     * Filter, which NavigationItem to fetch.
     */
    where: NavigationItemWhereUniqueInput
  }

  /**
   * NavigationItem findUniqueOrThrow
   */
  export type NavigationItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationItem
     */
    select?: NavigationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavigationItem
     */
    omit?: NavigationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavigationItemInclude<ExtArgs> | null
    /**
     * Filter, which NavigationItem to fetch.
     */
    where: NavigationItemWhereUniqueInput
  }

  /**
   * NavigationItem findFirst
   */
  export type NavigationItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationItem
     */
    select?: NavigationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavigationItem
     */
    omit?: NavigationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavigationItemInclude<ExtArgs> | null
    /**
     * Filter, which NavigationItem to fetch.
     */
    where?: NavigationItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NavigationItems to fetch.
     */
    orderBy?: NavigationItemOrderByWithRelationInput | NavigationItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NavigationItems.
     */
    cursor?: NavigationItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NavigationItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NavigationItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NavigationItems.
     */
    distinct?: NavigationItemScalarFieldEnum | NavigationItemScalarFieldEnum[]
  }

  /**
   * NavigationItem findFirstOrThrow
   */
  export type NavigationItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationItem
     */
    select?: NavigationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavigationItem
     */
    omit?: NavigationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavigationItemInclude<ExtArgs> | null
    /**
     * Filter, which NavigationItem to fetch.
     */
    where?: NavigationItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NavigationItems to fetch.
     */
    orderBy?: NavigationItemOrderByWithRelationInput | NavigationItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NavigationItems.
     */
    cursor?: NavigationItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NavigationItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NavigationItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NavigationItems.
     */
    distinct?: NavigationItemScalarFieldEnum | NavigationItemScalarFieldEnum[]
  }

  /**
   * NavigationItem findMany
   */
  export type NavigationItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationItem
     */
    select?: NavigationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavigationItem
     */
    omit?: NavigationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavigationItemInclude<ExtArgs> | null
    /**
     * Filter, which NavigationItems to fetch.
     */
    where?: NavigationItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NavigationItems to fetch.
     */
    orderBy?: NavigationItemOrderByWithRelationInput | NavigationItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NavigationItems.
     */
    cursor?: NavigationItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NavigationItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NavigationItems.
     */
    skip?: number
    distinct?: NavigationItemScalarFieldEnum | NavigationItemScalarFieldEnum[]
  }

  /**
   * NavigationItem create
   */
  export type NavigationItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationItem
     */
    select?: NavigationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavigationItem
     */
    omit?: NavigationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavigationItemInclude<ExtArgs> | null
    /**
     * The data needed to create a NavigationItem.
     */
    data: XOR<NavigationItemCreateInput, NavigationItemUncheckedCreateInput>
  }

  /**
   * NavigationItem createMany
   */
  export type NavigationItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NavigationItems.
     */
    data: NavigationItemCreateManyInput | NavigationItemCreateManyInput[]
  }

  /**
   * NavigationItem createManyAndReturn
   */
  export type NavigationItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationItem
     */
    select?: NavigationItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NavigationItem
     */
    omit?: NavigationItemOmit<ExtArgs> | null
    /**
     * The data used to create many NavigationItems.
     */
    data: NavigationItemCreateManyInput | NavigationItemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavigationItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NavigationItem update
   */
  export type NavigationItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationItem
     */
    select?: NavigationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavigationItem
     */
    omit?: NavigationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavigationItemInclude<ExtArgs> | null
    /**
     * The data needed to update a NavigationItem.
     */
    data: XOR<NavigationItemUpdateInput, NavigationItemUncheckedUpdateInput>
    /**
     * Choose, which NavigationItem to update.
     */
    where: NavigationItemWhereUniqueInput
  }

  /**
   * NavigationItem updateMany
   */
  export type NavigationItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NavigationItems.
     */
    data: XOR<NavigationItemUpdateManyMutationInput, NavigationItemUncheckedUpdateManyInput>
    /**
     * Filter which NavigationItems to update
     */
    where?: NavigationItemWhereInput
    /**
     * Limit how many NavigationItems to update.
     */
    limit?: number
  }

  /**
   * NavigationItem updateManyAndReturn
   */
  export type NavigationItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationItem
     */
    select?: NavigationItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NavigationItem
     */
    omit?: NavigationItemOmit<ExtArgs> | null
    /**
     * The data used to update NavigationItems.
     */
    data: XOR<NavigationItemUpdateManyMutationInput, NavigationItemUncheckedUpdateManyInput>
    /**
     * Filter which NavigationItems to update
     */
    where?: NavigationItemWhereInput
    /**
     * Limit how many NavigationItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavigationItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NavigationItem upsert
   */
  export type NavigationItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationItem
     */
    select?: NavigationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavigationItem
     */
    omit?: NavigationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavigationItemInclude<ExtArgs> | null
    /**
     * The filter to search for the NavigationItem to update in case it exists.
     */
    where: NavigationItemWhereUniqueInput
    /**
     * In case the NavigationItem found by the `where` argument doesn't exist, create a new NavigationItem with this data.
     */
    create: XOR<NavigationItemCreateInput, NavigationItemUncheckedCreateInput>
    /**
     * In case the NavigationItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NavigationItemUpdateInput, NavigationItemUncheckedUpdateInput>
  }

  /**
   * NavigationItem delete
   */
  export type NavigationItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationItem
     */
    select?: NavigationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavigationItem
     */
    omit?: NavigationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavigationItemInclude<ExtArgs> | null
    /**
     * Filter which NavigationItem to delete.
     */
    where: NavigationItemWhereUniqueInput
  }

  /**
   * NavigationItem deleteMany
   */
  export type NavigationItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NavigationItems to delete
     */
    where?: NavigationItemWhereInput
    /**
     * Limit how many NavigationItems to delete.
     */
    limit?: number
  }

  /**
   * NavigationItem.parent
   */
  export type NavigationItem$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationItem
     */
    select?: NavigationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavigationItem
     */
    omit?: NavigationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavigationItemInclude<ExtArgs> | null
    where?: NavigationItemWhereInput
  }

  /**
   * NavigationItem.children
   */
  export type NavigationItem$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationItem
     */
    select?: NavigationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavigationItem
     */
    omit?: NavigationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavigationItemInclude<ExtArgs> | null
    where?: NavigationItemWhereInput
    orderBy?: NavigationItemOrderByWithRelationInput | NavigationItemOrderByWithRelationInput[]
    cursor?: NavigationItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NavigationItemScalarFieldEnum | NavigationItemScalarFieldEnum[]
  }

  /**
   * NavigationItem without action
   */
  export type NavigationItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationItem
     */
    select?: NavigationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavigationItem
     */
    omit?: NavigationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavigationItemInclude<ExtArgs> | null
  }


  /**
   * Model CarSeries
   */

  export type AggregateCarSeries = {
    _count: CarSeriesCountAggregateOutputType | null
    _avg: CarSeriesAvgAggregateOutputType | null
    _sum: CarSeriesSumAggregateOutputType | null
    _min: CarSeriesMinAggregateOutputType | null
    _max: CarSeriesMaxAggregateOutputType | null
  }

  export type CarSeriesAvgAggregateOutputType = {
    price: number | null
  }

  export type CarSeriesSumAggregateOutputType = {
    price: number | null
  }

  export type CarSeriesMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    price: number | null
    published: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarSeriesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    price: number | null
    published: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarSeriesCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    specifications: number
    price: number
    heroData: number
    carouselData: number
    published: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CarSeriesAvgAggregateInputType = {
    price?: true
  }

  export type CarSeriesSumAggregateInputType = {
    price?: true
  }

  export type CarSeriesMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    price?: true
    published?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarSeriesMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    price?: true
    published?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarSeriesCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    specifications?: true
    price?: true
    heroData?: true
    carouselData?: true
    published?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CarSeriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarSeries to aggregate.
     */
    where?: CarSeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarSeries to fetch.
     */
    orderBy?: CarSeriesOrderByWithRelationInput | CarSeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarSeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarSeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarSeries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CarSeries
    **/
    _count?: true | CarSeriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarSeriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarSeriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarSeriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarSeriesMaxAggregateInputType
  }

  export type GetCarSeriesAggregateType<T extends CarSeriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCarSeries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarSeries[P]>
      : GetScalarType<T[P], AggregateCarSeries[P]>
  }




  export type CarSeriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarSeriesWhereInput
    orderBy?: CarSeriesOrderByWithAggregationInput | CarSeriesOrderByWithAggregationInput[]
    by: CarSeriesScalarFieldEnum[] | CarSeriesScalarFieldEnum
    having?: CarSeriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarSeriesCountAggregateInputType | true
    _avg?: CarSeriesAvgAggregateInputType
    _sum?: CarSeriesSumAggregateInputType
    _min?: CarSeriesMinAggregateInputType
    _max?: CarSeriesMaxAggregateInputType
  }

  export type CarSeriesGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string | null
    specifications: JsonValue | null
    price: number | null
    heroData: JsonValue | null
    carouselData: JsonValue | null
    published: boolean
    createdAt: Date
    updatedAt: Date
    _count: CarSeriesCountAggregateOutputType | null
    _avg: CarSeriesAvgAggregateOutputType | null
    _sum: CarSeriesSumAggregateOutputType | null
    _min: CarSeriesMinAggregateOutputType | null
    _max: CarSeriesMaxAggregateOutputType | null
  }

  type GetCarSeriesGroupByPayload<T extends CarSeriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarSeriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarSeriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarSeriesGroupByOutputType[P]>
            : GetScalarType<T[P], CarSeriesGroupByOutputType[P]>
        }
      >
    >


  export type CarSeriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    specifications?: boolean
    price?: boolean
    heroData?: boolean
    carouselData?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["carSeries"]>

  export type CarSeriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    specifications?: boolean
    price?: boolean
    heroData?: boolean
    carouselData?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["carSeries"]>

  export type CarSeriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    specifications?: boolean
    price?: boolean
    heroData?: boolean
    carouselData?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["carSeries"]>

  export type CarSeriesSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    specifications?: boolean
    price?: boolean
    heroData?: boolean
    carouselData?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CarSeriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "specifications" | "price" | "heroData" | "carouselData" | "published" | "createdAt" | "updatedAt", ExtArgs["result"]["carSeries"]>

  export type $CarSeriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CarSeries"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string | null
      specifications: Prisma.JsonValue | null
      price: number | null
      heroData: Prisma.JsonValue | null
      carouselData: Prisma.JsonValue | null
      published: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["carSeries"]>
    composites: {}
  }

  type CarSeriesGetPayload<S extends boolean | null | undefined | CarSeriesDefaultArgs> = $Result.GetResult<Prisma.$CarSeriesPayload, S>

  type CarSeriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarSeriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarSeriesCountAggregateInputType | true
    }

  export interface CarSeriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CarSeries'], meta: { name: 'CarSeries' } }
    /**
     * Find zero or one CarSeries that matches the filter.
     * @param {CarSeriesFindUniqueArgs} args - Arguments to find a CarSeries
     * @example
     * // Get one CarSeries
     * const carSeries = await prisma.carSeries.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarSeriesFindUniqueArgs>(args: SelectSubset<T, CarSeriesFindUniqueArgs<ExtArgs>>): Prisma__CarSeriesClient<$Result.GetResult<Prisma.$CarSeriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CarSeries that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarSeriesFindUniqueOrThrowArgs} args - Arguments to find a CarSeries
     * @example
     * // Get one CarSeries
     * const carSeries = await prisma.carSeries.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarSeriesFindUniqueOrThrowArgs>(args: SelectSubset<T, CarSeriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarSeriesClient<$Result.GetResult<Prisma.$CarSeriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarSeries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarSeriesFindFirstArgs} args - Arguments to find a CarSeries
     * @example
     * // Get one CarSeries
     * const carSeries = await prisma.carSeries.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarSeriesFindFirstArgs>(args?: SelectSubset<T, CarSeriesFindFirstArgs<ExtArgs>>): Prisma__CarSeriesClient<$Result.GetResult<Prisma.$CarSeriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarSeries that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarSeriesFindFirstOrThrowArgs} args - Arguments to find a CarSeries
     * @example
     * // Get one CarSeries
     * const carSeries = await prisma.carSeries.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarSeriesFindFirstOrThrowArgs>(args?: SelectSubset<T, CarSeriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarSeriesClient<$Result.GetResult<Prisma.$CarSeriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CarSeries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarSeriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CarSeries
     * const carSeries = await prisma.carSeries.findMany()
     * 
     * // Get first 10 CarSeries
     * const carSeries = await prisma.carSeries.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carSeriesWithIdOnly = await prisma.carSeries.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarSeriesFindManyArgs>(args?: SelectSubset<T, CarSeriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarSeriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CarSeries.
     * @param {CarSeriesCreateArgs} args - Arguments to create a CarSeries.
     * @example
     * // Create one CarSeries
     * const CarSeries = await prisma.carSeries.create({
     *   data: {
     *     // ... data to create a CarSeries
     *   }
     * })
     * 
     */
    create<T extends CarSeriesCreateArgs>(args: SelectSubset<T, CarSeriesCreateArgs<ExtArgs>>): Prisma__CarSeriesClient<$Result.GetResult<Prisma.$CarSeriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CarSeries.
     * @param {CarSeriesCreateManyArgs} args - Arguments to create many CarSeries.
     * @example
     * // Create many CarSeries
     * const carSeries = await prisma.carSeries.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarSeriesCreateManyArgs>(args?: SelectSubset<T, CarSeriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CarSeries and returns the data saved in the database.
     * @param {CarSeriesCreateManyAndReturnArgs} args - Arguments to create many CarSeries.
     * @example
     * // Create many CarSeries
     * const carSeries = await prisma.carSeries.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CarSeries and only return the `id`
     * const carSeriesWithIdOnly = await prisma.carSeries.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarSeriesCreateManyAndReturnArgs>(args?: SelectSubset<T, CarSeriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarSeriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CarSeries.
     * @param {CarSeriesDeleteArgs} args - Arguments to delete one CarSeries.
     * @example
     * // Delete one CarSeries
     * const CarSeries = await prisma.carSeries.delete({
     *   where: {
     *     // ... filter to delete one CarSeries
     *   }
     * })
     * 
     */
    delete<T extends CarSeriesDeleteArgs>(args: SelectSubset<T, CarSeriesDeleteArgs<ExtArgs>>): Prisma__CarSeriesClient<$Result.GetResult<Prisma.$CarSeriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CarSeries.
     * @param {CarSeriesUpdateArgs} args - Arguments to update one CarSeries.
     * @example
     * // Update one CarSeries
     * const carSeries = await prisma.carSeries.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarSeriesUpdateArgs>(args: SelectSubset<T, CarSeriesUpdateArgs<ExtArgs>>): Prisma__CarSeriesClient<$Result.GetResult<Prisma.$CarSeriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CarSeries.
     * @param {CarSeriesDeleteManyArgs} args - Arguments to filter CarSeries to delete.
     * @example
     * // Delete a few CarSeries
     * const { count } = await prisma.carSeries.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarSeriesDeleteManyArgs>(args?: SelectSubset<T, CarSeriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarSeries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarSeriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CarSeries
     * const carSeries = await prisma.carSeries.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarSeriesUpdateManyArgs>(args: SelectSubset<T, CarSeriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarSeries and returns the data updated in the database.
     * @param {CarSeriesUpdateManyAndReturnArgs} args - Arguments to update many CarSeries.
     * @example
     * // Update many CarSeries
     * const carSeries = await prisma.carSeries.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CarSeries and only return the `id`
     * const carSeriesWithIdOnly = await prisma.carSeries.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CarSeriesUpdateManyAndReturnArgs>(args: SelectSubset<T, CarSeriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarSeriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CarSeries.
     * @param {CarSeriesUpsertArgs} args - Arguments to update or create a CarSeries.
     * @example
     * // Update or create a CarSeries
     * const carSeries = await prisma.carSeries.upsert({
     *   create: {
     *     // ... data to create a CarSeries
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CarSeries we want to update
     *   }
     * })
     */
    upsert<T extends CarSeriesUpsertArgs>(args: SelectSubset<T, CarSeriesUpsertArgs<ExtArgs>>): Prisma__CarSeriesClient<$Result.GetResult<Prisma.$CarSeriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CarSeries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarSeriesCountArgs} args - Arguments to filter CarSeries to count.
     * @example
     * // Count the number of CarSeries
     * const count = await prisma.carSeries.count({
     *   where: {
     *     // ... the filter for the CarSeries we want to count
     *   }
     * })
    **/
    count<T extends CarSeriesCountArgs>(
      args?: Subset<T, CarSeriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarSeriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CarSeries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarSeriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarSeriesAggregateArgs>(args: Subset<T, CarSeriesAggregateArgs>): Prisma.PrismaPromise<GetCarSeriesAggregateType<T>>

    /**
     * Group by CarSeries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarSeriesGroupByArgs} args - Group by arguments.
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
      T extends CarSeriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarSeriesGroupByArgs['orderBy'] }
        : { orderBy?: CarSeriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CarSeriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarSeriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CarSeries model
   */
  readonly fields: CarSeriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CarSeries.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarSeriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CarSeries model
   */
  interface CarSeriesFieldRefs {
    readonly id: FieldRef<"CarSeries", 'String'>
    readonly name: FieldRef<"CarSeries", 'String'>
    readonly slug: FieldRef<"CarSeries", 'String'>
    readonly description: FieldRef<"CarSeries", 'String'>
    readonly specifications: FieldRef<"CarSeries", 'Json'>
    readonly price: FieldRef<"CarSeries", 'Float'>
    readonly heroData: FieldRef<"CarSeries", 'Json'>
    readonly carouselData: FieldRef<"CarSeries", 'Json'>
    readonly published: FieldRef<"CarSeries", 'Boolean'>
    readonly createdAt: FieldRef<"CarSeries", 'DateTime'>
    readonly updatedAt: FieldRef<"CarSeries", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CarSeries findUnique
   */
  export type CarSeriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarSeries
     */
    select?: CarSeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarSeries
     */
    omit?: CarSeriesOmit<ExtArgs> | null
    /**
     * Filter, which CarSeries to fetch.
     */
    where: CarSeriesWhereUniqueInput
  }

  /**
   * CarSeries findUniqueOrThrow
   */
  export type CarSeriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarSeries
     */
    select?: CarSeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarSeries
     */
    omit?: CarSeriesOmit<ExtArgs> | null
    /**
     * Filter, which CarSeries to fetch.
     */
    where: CarSeriesWhereUniqueInput
  }

  /**
   * CarSeries findFirst
   */
  export type CarSeriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarSeries
     */
    select?: CarSeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarSeries
     */
    omit?: CarSeriesOmit<ExtArgs> | null
    /**
     * Filter, which CarSeries to fetch.
     */
    where?: CarSeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarSeries to fetch.
     */
    orderBy?: CarSeriesOrderByWithRelationInput | CarSeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarSeries.
     */
    cursor?: CarSeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarSeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarSeries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarSeries.
     */
    distinct?: CarSeriesScalarFieldEnum | CarSeriesScalarFieldEnum[]
  }

  /**
   * CarSeries findFirstOrThrow
   */
  export type CarSeriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarSeries
     */
    select?: CarSeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarSeries
     */
    omit?: CarSeriesOmit<ExtArgs> | null
    /**
     * Filter, which CarSeries to fetch.
     */
    where?: CarSeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarSeries to fetch.
     */
    orderBy?: CarSeriesOrderByWithRelationInput | CarSeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarSeries.
     */
    cursor?: CarSeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarSeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarSeries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarSeries.
     */
    distinct?: CarSeriesScalarFieldEnum | CarSeriesScalarFieldEnum[]
  }

  /**
   * CarSeries findMany
   */
  export type CarSeriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarSeries
     */
    select?: CarSeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarSeries
     */
    omit?: CarSeriesOmit<ExtArgs> | null
    /**
     * Filter, which CarSeries to fetch.
     */
    where?: CarSeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarSeries to fetch.
     */
    orderBy?: CarSeriesOrderByWithRelationInput | CarSeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CarSeries.
     */
    cursor?: CarSeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarSeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarSeries.
     */
    skip?: number
    distinct?: CarSeriesScalarFieldEnum | CarSeriesScalarFieldEnum[]
  }

  /**
   * CarSeries create
   */
  export type CarSeriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarSeries
     */
    select?: CarSeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarSeries
     */
    omit?: CarSeriesOmit<ExtArgs> | null
    /**
     * The data needed to create a CarSeries.
     */
    data: XOR<CarSeriesCreateInput, CarSeriesUncheckedCreateInput>
  }

  /**
   * CarSeries createMany
   */
  export type CarSeriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CarSeries.
     */
    data: CarSeriesCreateManyInput | CarSeriesCreateManyInput[]
  }

  /**
   * CarSeries createManyAndReturn
   */
  export type CarSeriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarSeries
     */
    select?: CarSeriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CarSeries
     */
    omit?: CarSeriesOmit<ExtArgs> | null
    /**
     * The data used to create many CarSeries.
     */
    data: CarSeriesCreateManyInput | CarSeriesCreateManyInput[]
  }

  /**
   * CarSeries update
   */
  export type CarSeriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarSeries
     */
    select?: CarSeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarSeries
     */
    omit?: CarSeriesOmit<ExtArgs> | null
    /**
     * The data needed to update a CarSeries.
     */
    data: XOR<CarSeriesUpdateInput, CarSeriesUncheckedUpdateInput>
    /**
     * Choose, which CarSeries to update.
     */
    where: CarSeriesWhereUniqueInput
  }

  /**
   * CarSeries updateMany
   */
  export type CarSeriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CarSeries.
     */
    data: XOR<CarSeriesUpdateManyMutationInput, CarSeriesUncheckedUpdateManyInput>
    /**
     * Filter which CarSeries to update
     */
    where?: CarSeriesWhereInput
    /**
     * Limit how many CarSeries to update.
     */
    limit?: number
  }

  /**
   * CarSeries updateManyAndReturn
   */
  export type CarSeriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarSeries
     */
    select?: CarSeriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CarSeries
     */
    omit?: CarSeriesOmit<ExtArgs> | null
    /**
     * The data used to update CarSeries.
     */
    data: XOR<CarSeriesUpdateManyMutationInput, CarSeriesUncheckedUpdateManyInput>
    /**
     * Filter which CarSeries to update
     */
    where?: CarSeriesWhereInput
    /**
     * Limit how many CarSeries to update.
     */
    limit?: number
  }

  /**
   * CarSeries upsert
   */
  export type CarSeriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarSeries
     */
    select?: CarSeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarSeries
     */
    omit?: CarSeriesOmit<ExtArgs> | null
    /**
     * The filter to search for the CarSeries to update in case it exists.
     */
    where: CarSeriesWhereUniqueInput
    /**
     * In case the CarSeries found by the `where` argument doesn't exist, create a new CarSeries with this data.
     */
    create: XOR<CarSeriesCreateInput, CarSeriesUncheckedCreateInput>
    /**
     * In case the CarSeries was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarSeriesUpdateInput, CarSeriesUncheckedUpdateInput>
  }

  /**
   * CarSeries delete
   */
  export type CarSeriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarSeries
     */
    select?: CarSeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarSeries
     */
    omit?: CarSeriesOmit<ExtArgs> | null
    /**
     * Filter which CarSeries to delete.
     */
    where: CarSeriesWhereUniqueInput
  }

  /**
   * CarSeries deleteMany
   */
  export type CarSeriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarSeries to delete
     */
    where?: CarSeriesWhereInput
    /**
     * Limit how many CarSeries to delete.
     */
    limit?: number
  }

  /**
   * CarSeries without action
   */
  export type CarSeriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarSeries
     */
    select?: CarSeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarSeries
     */
    omit?: CarSeriesOmit<ExtArgs> | null
  }


  /**
   * Model Media
   */

  export type AggregateMedia = {
    _count: MediaCountAggregateOutputType | null
    _avg: MediaAvgAggregateOutputType | null
    _sum: MediaSumAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  export type MediaAvgAggregateOutputType = {
    size: number | null
    width: number | null
    height: number | null
  }

  export type MediaSumAggregateOutputType = {
    size: number | null
    width: number | null
    height: number | null
  }

  export type MediaMinAggregateOutputType = {
    id: string | null
    filename: string | null
    originalName: string | null
    url: string | null
    altText: string | null
    size: number | null
    mimeType: string | null
    width: number | null
    height: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MediaMaxAggregateOutputType = {
    id: string | null
    filename: string | null
    originalName: string | null
    url: string | null
    altText: string | null
    size: number | null
    mimeType: string | null
    width: number | null
    height: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MediaCountAggregateOutputType = {
    id: number
    filename: number
    originalName: number
    url: number
    altText: number
    size: number
    mimeType: number
    width: number
    height: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MediaAvgAggregateInputType = {
    size?: true
    width?: true
    height?: true
  }

  export type MediaSumAggregateInputType = {
    size?: true
    width?: true
    height?: true
  }

  export type MediaMinAggregateInputType = {
    id?: true
    filename?: true
    originalName?: true
    url?: true
    altText?: true
    size?: true
    mimeType?: true
    width?: true
    height?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MediaMaxAggregateInputType = {
    id?: true
    filename?: true
    originalName?: true
    url?: true
    altText?: true
    size?: true
    mimeType?: true
    width?: true
    height?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MediaCountAggregateInputType = {
    id?: true
    filename?: true
    originalName?: true
    url?: true
    altText?: true
    size?: true
    mimeType?: true
    width?: true
    height?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to aggregate.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Media
    **/
    _count?: true | MediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaMaxAggregateInputType
  }

  export type GetMediaAggregateType<T extends MediaAggregateArgs> = {
        [P in keyof T & keyof AggregateMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedia[P]>
      : GetScalarType<T[P], AggregateMedia[P]>
  }




  export type MediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithAggregationInput | MediaOrderByWithAggregationInput[]
    by: MediaScalarFieldEnum[] | MediaScalarFieldEnum
    having?: MediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaCountAggregateInputType | true
    _avg?: MediaAvgAggregateInputType
    _sum?: MediaSumAggregateInputType
    _min?: MediaMinAggregateInputType
    _max?: MediaMaxAggregateInputType
  }

  export type MediaGroupByOutputType = {
    id: string
    filename: string
    originalName: string
    url: string
    altText: string | null
    size: number | null
    mimeType: string | null
    width: number | null
    height: number | null
    createdAt: Date
    updatedAt: Date
    _count: MediaCountAggregateOutputType | null
    _avg: MediaAvgAggregateOutputType | null
    _sum: MediaSumAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  type GetMediaGroupByPayload<T extends MediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaGroupByOutputType[P]>
            : GetScalarType<T[P], MediaGroupByOutputType[P]>
        }
      >
    >


  export type MediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    originalName?: boolean
    url?: boolean
    altText?: boolean
    size?: boolean
    mimeType?: boolean
    width?: boolean
    height?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["media"]>

  export type MediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    originalName?: boolean
    url?: boolean
    altText?: boolean
    size?: boolean
    mimeType?: boolean
    width?: boolean
    height?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["media"]>

  export type MediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    originalName?: boolean
    url?: boolean
    altText?: boolean
    size?: boolean
    mimeType?: boolean
    width?: boolean
    height?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["media"]>

  export type MediaSelectScalar = {
    id?: boolean
    filename?: boolean
    originalName?: boolean
    url?: boolean
    altText?: boolean
    size?: boolean
    mimeType?: boolean
    width?: boolean
    height?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "filename" | "originalName" | "url" | "altText" | "size" | "mimeType" | "width" | "height" | "createdAt" | "updatedAt", ExtArgs["result"]["media"]>

  export type $MediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Media"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      filename: string
      originalName: string
      url: string
      altText: string | null
      size: number | null
      mimeType: string | null
      width: number | null
      height: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["media"]>
    composites: {}
  }

  type MediaGetPayload<S extends boolean | null | undefined | MediaDefaultArgs> = $Result.GetResult<Prisma.$MediaPayload, S>

  type MediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaCountAggregateInputType | true
    }

  export interface MediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Media'], meta: { name: 'Media' } }
    /**
     * Find zero or one Media that matches the filter.
     * @param {MediaFindUniqueArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaFindUniqueArgs>(args: SelectSubset<T, MediaFindUniqueArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Media that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaFindUniqueOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaFindFirstArgs>(args?: SelectSubset<T, MediaFindFirstArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Media
     * const media = await prisma.media.findMany()
     * 
     * // Get first 10 Media
     * const media = await prisma.media.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaWithIdOnly = await prisma.media.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaFindManyArgs>(args?: SelectSubset<T, MediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Media.
     * @param {MediaCreateArgs} args - Arguments to create a Media.
     * @example
     * // Create one Media
     * const Media = await prisma.media.create({
     *   data: {
     *     // ... data to create a Media
     *   }
     * })
     * 
     */
    create<T extends MediaCreateArgs>(args: SelectSubset<T, MediaCreateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Media.
     * @param {MediaCreateManyArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaCreateManyArgs>(args?: SelectSubset<T, MediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Media and returns the data saved in the database.
     * @param {MediaCreateManyAndReturnArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediaCreateManyAndReturnArgs>(args?: SelectSubset<T, MediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Media.
     * @param {MediaDeleteArgs} args - Arguments to delete one Media.
     * @example
     * // Delete one Media
     * const Media = await prisma.media.delete({
     *   where: {
     *     // ... filter to delete one Media
     *   }
     * })
     * 
     */
    delete<T extends MediaDeleteArgs>(args: SelectSubset<T, MediaDeleteArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Media.
     * @param {MediaUpdateArgs} args - Arguments to update one Media.
     * @example
     * // Update one Media
     * const media = await prisma.media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaUpdateArgs>(args: SelectSubset<T, MediaUpdateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Media.
     * @param {MediaDeleteManyArgs} args - Arguments to filter Media to delete.
     * @example
     * // Delete a few Media
     * const { count } = await prisma.media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaDeleteManyArgs>(args?: SelectSubset<T, MediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaUpdateManyArgs>(args: SelectSubset<T, MediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media and returns the data updated in the database.
     * @param {MediaUpdateManyAndReturnArgs} args - Arguments to update many Media.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MediaUpdateManyAndReturnArgs>(args: SelectSubset<T, MediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Media.
     * @param {MediaUpsertArgs} args - Arguments to update or create a Media.
     * @example
     * // Update or create a Media
     * const media = await prisma.media.upsert({
     *   create: {
     *     // ... data to create a Media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Media we want to update
     *   }
     * })
     */
    upsert<T extends MediaUpsertArgs>(args: SelectSubset<T, MediaUpsertArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaCountArgs} args - Arguments to filter Media to count.
     * @example
     * // Count the number of Media
     * const count = await prisma.media.count({
     *   where: {
     *     // ... the filter for the Media we want to count
     *   }
     * })
    **/
    count<T extends MediaCountArgs>(
      args?: Subset<T, MediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MediaAggregateArgs>(args: Subset<T, MediaAggregateArgs>): Prisma.PrismaPromise<GetMediaAggregateType<T>>

    /**
     * Group by Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaGroupByArgs} args - Group by arguments.
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
      T extends MediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaGroupByArgs['orderBy'] }
        : { orderBy?: MediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, MediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Media model
   */
  readonly fields: MediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Media model
   */
  interface MediaFieldRefs {
    readonly id: FieldRef<"Media", 'String'>
    readonly filename: FieldRef<"Media", 'String'>
    readonly originalName: FieldRef<"Media", 'String'>
    readonly url: FieldRef<"Media", 'String'>
    readonly altText: FieldRef<"Media", 'String'>
    readonly size: FieldRef<"Media", 'Int'>
    readonly mimeType: FieldRef<"Media", 'String'>
    readonly width: FieldRef<"Media", 'Int'>
    readonly height: FieldRef<"Media", 'Int'>
    readonly createdAt: FieldRef<"Media", 'DateTime'>
    readonly updatedAt: FieldRef<"Media", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Media findUnique
   */
  export type MediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findUniqueOrThrow
   */
  export type MediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findFirst
   */
  export type MediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findFirstOrThrow
   */
  export type MediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findMany
   */
  export type MediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media create
   */
  export type MediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data needed to create a Media.
     */
    data: XOR<MediaCreateInput, MediaUncheckedCreateInput>
  }

  /**
   * Media createMany
   */
  export type MediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
  }

  /**
   * Media createManyAndReturn
   */
  export type MediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
  }

  /**
   * Media update
   */
  export type MediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data needed to update a Media.
     */
    data: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
    /**
     * Choose, which Media to update.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media updateMany
   */
  export type MediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
  }

  /**
   * Media updateManyAndReturn
   */
  export type MediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
  }

  /**
   * Media upsert
   */
  export type MediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The filter to search for the Media to update in case it exists.
     */
    where: MediaWhereUniqueInput
    /**
     * In case the Media found by the `where` argument doesn't exist, create a new Media with this data.
     */
    create: XOR<MediaCreateInput, MediaUncheckedCreateInput>
    /**
     * In case the Media was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
  }

  /**
   * Media delete
   */
  export type MediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Filter which Media to delete.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media deleteMany
   */
  export type MediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to delete
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to delete.
     */
    limit?: number
  }

  /**
   * Media without action
   */
  export type MediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
  }


  /**
   * Model ContentBlock
   */

  export type AggregateContentBlock = {
    _count: ContentBlockCountAggregateOutputType | null
    _avg: ContentBlockAvgAggregateOutputType | null
    _sum: ContentBlockSumAggregateOutputType | null
    _min: ContentBlockMinAggregateOutputType | null
    _max: ContentBlockMaxAggregateOutputType | null
  }

  export type ContentBlockAvgAggregateOutputType = {
    orderIndex: number | null
  }

  export type ContentBlockSumAggregateOutputType = {
    orderIndex: number | null
  }

  export type ContentBlockMinAggregateOutputType = {
    id: string | null
    pageId: string | null
    type: string | null
    orderIndex: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentBlockMaxAggregateOutputType = {
    id: string | null
    pageId: string | null
    type: string | null
    orderIndex: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentBlockCountAggregateOutputType = {
    id: number
    pageId: number
    type: number
    data: number
    orderIndex: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContentBlockAvgAggregateInputType = {
    orderIndex?: true
  }

  export type ContentBlockSumAggregateInputType = {
    orderIndex?: true
  }

  export type ContentBlockMinAggregateInputType = {
    id?: true
    pageId?: true
    type?: true
    orderIndex?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentBlockMaxAggregateInputType = {
    id?: true
    pageId?: true
    type?: true
    orderIndex?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentBlockCountAggregateInputType = {
    id?: true
    pageId?: true
    type?: true
    data?: true
    orderIndex?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContentBlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentBlock to aggregate.
     */
    where?: ContentBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentBlocks to fetch.
     */
    orderBy?: ContentBlockOrderByWithRelationInput | ContentBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContentBlocks
    **/
    _count?: true | ContentBlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContentBlockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContentBlockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentBlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentBlockMaxAggregateInputType
  }

  export type GetContentBlockAggregateType<T extends ContentBlockAggregateArgs> = {
        [P in keyof T & keyof AggregateContentBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContentBlock[P]>
      : GetScalarType<T[P], AggregateContentBlock[P]>
  }




  export type ContentBlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentBlockWhereInput
    orderBy?: ContentBlockOrderByWithAggregationInput | ContentBlockOrderByWithAggregationInput[]
    by: ContentBlockScalarFieldEnum[] | ContentBlockScalarFieldEnum
    having?: ContentBlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentBlockCountAggregateInputType | true
    _avg?: ContentBlockAvgAggregateInputType
    _sum?: ContentBlockSumAggregateInputType
    _min?: ContentBlockMinAggregateInputType
    _max?: ContentBlockMaxAggregateInputType
  }

  export type ContentBlockGroupByOutputType = {
    id: string
    pageId: string
    type: string
    data: JsonValue
    orderIndex: number
    createdAt: Date
    updatedAt: Date
    _count: ContentBlockCountAggregateOutputType | null
    _avg: ContentBlockAvgAggregateOutputType | null
    _sum: ContentBlockSumAggregateOutputType | null
    _min: ContentBlockMinAggregateOutputType | null
    _max: ContentBlockMaxAggregateOutputType | null
  }

  type GetContentBlockGroupByPayload<T extends ContentBlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentBlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentBlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentBlockGroupByOutputType[P]>
            : GetScalarType<T[P], ContentBlockGroupByOutputType[P]>
        }
      >
    >


  export type ContentBlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pageId?: boolean
    type?: boolean
    data?: boolean
    orderIndex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    page?: boolean | PageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentBlock"]>

  export type ContentBlockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pageId?: boolean
    type?: boolean
    data?: boolean
    orderIndex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    page?: boolean | PageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentBlock"]>

  export type ContentBlockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pageId?: boolean
    type?: boolean
    data?: boolean
    orderIndex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    page?: boolean | PageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentBlock"]>

  export type ContentBlockSelectScalar = {
    id?: boolean
    pageId?: boolean
    type?: boolean
    data?: boolean
    orderIndex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContentBlockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pageId" | "type" | "data" | "orderIndex" | "createdAt" | "updatedAt", ExtArgs["result"]["contentBlock"]>
  export type ContentBlockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    page?: boolean | PageDefaultArgs<ExtArgs>
  }
  export type ContentBlockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    page?: boolean | PageDefaultArgs<ExtArgs>
  }
  export type ContentBlockIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    page?: boolean | PageDefaultArgs<ExtArgs>
  }

  export type $ContentBlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContentBlock"
    objects: {
      page: Prisma.$PagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pageId: string
      type: string
      data: Prisma.JsonValue
      orderIndex: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contentBlock"]>
    composites: {}
  }

  type ContentBlockGetPayload<S extends boolean | null | undefined | ContentBlockDefaultArgs> = $Result.GetResult<Prisma.$ContentBlockPayload, S>

  type ContentBlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContentBlockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContentBlockCountAggregateInputType | true
    }

  export interface ContentBlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContentBlock'], meta: { name: 'ContentBlock' } }
    /**
     * Find zero or one ContentBlock that matches the filter.
     * @param {ContentBlockFindUniqueArgs} args - Arguments to find a ContentBlock
     * @example
     * // Get one ContentBlock
     * const contentBlock = await prisma.contentBlock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentBlockFindUniqueArgs>(args: SelectSubset<T, ContentBlockFindUniqueArgs<ExtArgs>>): Prisma__ContentBlockClient<$Result.GetResult<Prisma.$ContentBlockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContentBlock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentBlockFindUniqueOrThrowArgs} args - Arguments to find a ContentBlock
     * @example
     * // Get one ContentBlock
     * const contentBlock = await prisma.contentBlock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentBlockFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentBlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentBlockClient<$Result.GetResult<Prisma.$ContentBlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentBlock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentBlockFindFirstArgs} args - Arguments to find a ContentBlock
     * @example
     * // Get one ContentBlock
     * const contentBlock = await prisma.contentBlock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentBlockFindFirstArgs>(args?: SelectSubset<T, ContentBlockFindFirstArgs<ExtArgs>>): Prisma__ContentBlockClient<$Result.GetResult<Prisma.$ContentBlockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentBlock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentBlockFindFirstOrThrowArgs} args - Arguments to find a ContentBlock
     * @example
     * // Get one ContentBlock
     * const contentBlock = await prisma.contentBlock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentBlockFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentBlockFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentBlockClient<$Result.GetResult<Prisma.$ContentBlockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContentBlocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentBlockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContentBlocks
     * const contentBlocks = await prisma.contentBlock.findMany()
     * 
     * // Get first 10 ContentBlocks
     * const contentBlocks = await prisma.contentBlock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentBlockWithIdOnly = await prisma.contentBlock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContentBlockFindManyArgs>(args?: SelectSubset<T, ContentBlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContentBlock.
     * @param {ContentBlockCreateArgs} args - Arguments to create a ContentBlock.
     * @example
     * // Create one ContentBlock
     * const ContentBlock = await prisma.contentBlock.create({
     *   data: {
     *     // ... data to create a ContentBlock
     *   }
     * })
     * 
     */
    create<T extends ContentBlockCreateArgs>(args: SelectSubset<T, ContentBlockCreateArgs<ExtArgs>>): Prisma__ContentBlockClient<$Result.GetResult<Prisma.$ContentBlockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContentBlocks.
     * @param {ContentBlockCreateManyArgs} args - Arguments to create many ContentBlocks.
     * @example
     * // Create many ContentBlocks
     * const contentBlock = await prisma.contentBlock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentBlockCreateManyArgs>(args?: SelectSubset<T, ContentBlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContentBlocks and returns the data saved in the database.
     * @param {ContentBlockCreateManyAndReturnArgs} args - Arguments to create many ContentBlocks.
     * @example
     * // Create many ContentBlocks
     * const contentBlock = await prisma.contentBlock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContentBlocks and only return the `id`
     * const contentBlockWithIdOnly = await prisma.contentBlock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContentBlockCreateManyAndReturnArgs>(args?: SelectSubset<T, ContentBlockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentBlockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContentBlock.
     * @param {ContentBlockDeleteArgs} args - Arguments to delete one ContentBlock.
     * @example
     * // Delete one ContentBlock
     * const ContentBlock = await prisma.contentBlock.delete({
     *   where: {
     *     // ... filter to delete one ContentBlock
     *   }
     * })
     * 
     */
    delete<T extends ContentBlockDeleteArgs>(args: SelectSubset<T, ContentBlockDeleteArgs<ExtArgs>>): Prisma__ContentBlockClient<$Result.GetResult<Prisma.$ContentBlockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContentBlock.
     * @param {ContentBlockUpdateArgs} args - Arguments to update one ContentBlock.
     * @example
     * // Update one ContentBlock
     * const contentBlock = await prisma.contentBlock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentBlockUpdateArgs>(args: SelectSubset<T, ContentBlockUpdateArgs<ExtArgs>>): Prisma__ContentBlockClient<$Result.GetResult<Prisma.$ContentBlockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContentBlocks.
     * @param {ContentBlockDeleteManyArgs} args - Arguments to filter ContentBlocks to delete.
     * @example
     * // Delete a few ContentBlocks
     * const { count } = await prisma.contentBlock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentBlockDeleteManyArgs>(args?: SelectSubset<T, ContentBlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentBlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContentBlocks
     * const contentBlock = await prisma.contentBlock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentBlockUpdateManyArgs>(args: SelectSubset<T, ContentBlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentBlocks and returns the data updated in the database.
     * @param {ContentBlockUpdateManyAndReturnArgs} args - Arguments to update many ContentBlocks.
     * @example
     * // Update many ContentBlocks
     * const contentBlock = await prisma.contentBlock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContentBlocks and only return the `id`
     * const contentBlockWithIdOnly = await prisma.contentBlock.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContentBlockUpdateManyAndReturnArgs>(args: SelectSubset<T, ContentBlockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentBlockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContentBlock.
     * @param {ContentBlockUpsertArgs} args - Arguments to update or create a ContentBlock.
     * @example
     * // Update or create a ContentBlock
     * const contentBlock = await prisma.contentBlock.upsert({
     *   create: {
     *     // ... data to create a ContentBlock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContentBlock we want to update
     *   }
     * })
     */
    upsert<T extends ContentBlockUpsertArgs>(args: SelectSubset<T, ContentBlockUpsertArgs<ExtArgs>>): Prisma__ContentBlockClient<$Result.GetResult<Prisma.$ContentBlockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContentBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentBlockCountArgs} args - Arguments to filter ContentBlocks to count.
     * @example
     * // Count the number of ContentBlocks
     * const count = await prisma.contentBlock.count({
     *   where: {
     *     // ... the filter for the ContentBlocks we want to count
     *   }
     * })
    **/
    count<T extends ContentBlockCountArgs>(
      args?: Subset<T, ContentBlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentBlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContentBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentBlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContentBlockAggregateArgs>(args: Subset<T, ContentBlockAggregateArgs>): Prisma.PrismaPromise<GetContentBlockAggregateType<T>>

    /**
     * Group by ContentBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentBlockGroupByArgs} args - Group by arguments.
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
      T extends ContentBlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentBlockGroupByArgs['orderBy'] }
        : { orderBy?: ContentBlockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ContentBlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContentBlock model
   */
  readonly fields: ContentBlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContentBlock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentBlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    page<T extends PageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PageDefaultArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContentBlock model
   */
  interface ContentBlockFieldRefs {
    readonly id: FieldRef<"ContentBlock", 'String'>
    readonly pageId: FieldRef<"ContentBlock", 'String'>
    readonly type: FieldRef<"ContentBlock", 'String'>
    readonly data: FieldRef<"ContentBlock", 'Json'>
    readonly orderIndex: FieldRef<"ContentBlock", 'Int'>
    readonly createdAt: FieldRef<"ContentBlock", 'DateTime'>
    readonly updatedAt: FieldRef<"ContentBlock", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContentBlock findUnique
   */
  export type ContentBlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentBlock
     */
    select?: ContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentBlock
     */
    omit?: ContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentBlockInclude<ExtArgs> | null
    /**
     * Filter, which ContentBlock to fetch.
     */
    where: ContentBlockWhereUniqueInput
  }

  /**
   * ContentBlock findUniqueOrThrow
   */
  export type ContentBlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentBlock
     */
    select?: ContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentBlock
     */
    omit?: ContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentBlockInclude<ExtArgs> | null
    /**
     * Filter, which ContentBlock to fetch.
     */
    where: ContentBlockWhereUniqueInput
  }

  /**
   * ContentBlock findFirst
   */
  export type ContentBlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentBlock
     */
    select?: ContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentBlock
     */
    omit?: ContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentBlockInclude<ExtArgs> | null
    /**
     * Filter, which ContentBlock to fetch.
     */
    where?: ContentBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentBlocks to fetch.
     */
    orderBy?: ContentBlockOrderByWithRelationInput | ContentBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentBlocks.
     */
    cursor?: ContentBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentBlocks.
     */
    distinct?: ContentBlockScalarFieldEnum | ContentBlockScalarFieldEnum[]
  }

  /**
   * ContentBlock findFirstOrThrow
   */
  export type ContentBlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentBlock
     */
    select?: ContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentBlock
     */
    omit?: ContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentBlockInclude<ExtArgs> | null
    /**
     * Filter, which ContentBlock to fetch.
     */
    where?: ContentBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentBlocks to fetch.
     */
    orderBy?: ContentBlockOrderByWithRelationInput | ContentBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentBlocks.
     */
    cursor?: ContentBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentBlocks.
     */
    distinct?: ContentBlockScalarFieldEnum | ContentBlockScalarFieldEnum[]
  }

  /**
   * ContentBlock findMany
   */
  export type ContentBlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentBlock
     */
    select?: ContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentBlock
     */
    omit?: ContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentBlockInclude<ExtArgs> | null
    /**
     * Filter, which ContentBlocks to fetch.
     */
    where?: ContentBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentBlocks to fetch.
     */
    orderBy?: ContentBlockOrderByWithRelationInput | ContentBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContentBlocks.
     */
    cursor?: ContentBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentBlocks.
     */
    skip?: number
    distinct?: ContentBlockScalarFieldEnum | ContentBlockScalarFieldEnum[]
  }

  /**
   * ContentBlock create
   */
  export type ContentBlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentBlock
     */
    select?: ContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentBlock
     */
    omit?: ContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentBlockInclude<ExtArgs> | null
    /**
     * The data needed to create a ContentBlock.
     */
    data: XOR<ContentBlockCreateInput, ContentBlockUncheckedCreateInput>
  }

  /**
   * ContentBlock createMany
   */
  export type ContentBlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContentBlocks.
     */
    data: ContentBlockCreateManyInput | ContentBlockCreateManyInput[]
  }

  /**
   * ContentBlock createManyAndReturn
   */
  export type ContentBlockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentBlock
     */
    select?: ContentBlockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContentBlock
     */
    omit?: ContentBlockOmit<ExtArgs> | null
    /**
     * The data used to create many ContentBlocks.
     */
    data: ContentBlockCreateManyInput | ContentBlockCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentBlockIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContentBlock update
   */
  export type ContentBlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentBlock
     */
    select?: ContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentBlock
     */
    omit?: ContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentBlockInclude<ExtArgs> | null
    /**
     * The data needed to update a ContentBlock.
     */
    data: XOR<ContentBlockUpdateInput, ContentBlockUncheckedUpdateInput>
    /**
     * Choose, which ContentBlock to update.
     */
    where: ContentBlockWhereUniqueInput
  }

  /**
   * ContentBlock updateMany
   */
  export type ContentBlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContentBlocks.
     */
    data: XOR<ContentBlockUpdateManyMutationInput, ContentBlockUncheckedUpdateManyInput>
    /**
     * Filter which ContentBlocks to update
     */
    where?: ContentBlockWhereInput
    /**
     * Limit how many ContentBlocks to update.
     */
    limit?: number
  }

  /**
   * ContentBlock updateManyAndReturn
   */
  export type ContentBlockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentBlock
     */
    select?: ContentBlockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContentBlock
     */
    omit?: ContentBlockOmit<ExtArgs> | null
    /**
     * The data used to update ContentBlocks.
     */
    data: XOR<ContentBlockUpdateManyMutationInput, ContentBlockUncheckedUpdateManyInput>
    /**
     * Filter which ContentBlocks to update
     */
    where?: ContentBlockWhereInput
    /**
     * Limit how many ContentBlocks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentBlockIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContentBlock upsert
   */
  export type ContentBlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentBlock
     */
    select?: ContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentBlock
     */
    omit?: ContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentBlockInclude<ExtArgs> | null
    /**
     * The filter to search for the ContentBlock to update in case it exists.
     */
    where: ContentBlockWhereUniqueInput
    /**
     * In case the ContentBlock found by the `where` argument doesn't exist, create a new ContentBlock with this data.
     */
    create: XOR<ContentBlockCreateInput, ContentBlockUncheckedCreateInput>
    /**
     * In case the ContentBlock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentBlockUpdateInput, ContentBlockUncheckedUpdateInput>
  }

  /**
   * ContentBlock delete
   */
  export type ContentBlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentBlock
     */
    select?: ContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentBlock
     */
    omit?: ContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentBlockInclude<ExtArgs> | null
    /**
     * Filter which ContentBlock to delete.
     */
    where: ContentBlockWhereUniqueInput
  }

  /**
   * ContentBlock deleteMany
   */
  export type ContentBlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentBlocks to delete
     */
    where?: ContentBlockWhereInput
    /**
     * Limit how many ContentBlocks to delete.
     */
    limit?: number
  }

  /**
   * ContentBlock without action
   */
  export type ContentBlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentBlock
     */
    select?: ContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentBlock
     */
    omit?: ContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentBlockInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    firstName: 'firstName',
    lastName: 'lastName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PageScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    content: 'content',
    heroData: 'heroData',
    carouselData: 'carouselData',
    seoData: 'seoData',
    published: 'published',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PageScalarFieldEnum = (typeof PageScalarFieldEnum)[keyof typeof PageScalarFieldEnum]


  export const NavigationItemScalarFieldEnum: {
    id: 'id',
    label: 'label',
    url: 'url',
    parentId: 'parentId',
    orderIndex: 'orderIndex',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NavigationItemScalarFieldEnum = (typeof NavigationItemScalarFieldEnum)[keyof typeof NavigationItemScalarFieldEnum]


  export const CarSeriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    specifications: 'specifications',
    price: 'price',
    heroData: 'heroData',
    carouselData: 'carouselData',
    published: 'published',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CarSeriesScalarFieldEnum = (typeof CarSeriesScalarFieldEnum)[keyof typeof CarSeriesScalarFieldEnum]


  export const MediaScalarFieldEnum: {
    id: 'id',
    filename: 'filename',
    originalName: 'originalName',
    url: 'url',
    altText: 'altText',
    size: 'size',
    mimeType: 'mimeType',
    width: 'width',
    height: 'height',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MediaScalarFieldEnum = (typeof MediaScalarFieldEnum)[keyof typeof MediaScalarFieldEnum]


  export const ContentBlockScalarFieldEnum: {
    id: 'id',
    pageId: 'pageId',
    type: 'type',
    data: 'data',
    orderIndex: 'orderIndex',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContentBlockScalarFieldEnum = (typeof ContentBlockScalarFieldEnum)[keyof typeof ContentBlockScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PageWhereInput = {
    AND?: PageWhereInput | PageWhereInput[]
    OR?: PageWhereInput[]
    NOT?: PageWhereInput | PageWhereInput[]
    id?: StringFilter<"Page"> | string
    title?: StringFilter<"Page"> | string
    slug?: StringFilter<"Page"> | string
    content?: JsonNullableFilter<"Page">
    heroData?: JsonNullableFilter<"Page">
    carouselData?: JsonNullableFilter<"Page">
    seoData?: JsonNullableFilter<"Page">
    published?: BoolFilter<"Page"> | boolean
    createdAt?: DateTimeFilter<"Page"> | Date | string
    updatedAt?: DateTimeFilter<"Page"> | Date | string
    contentBlocks?: ContentBlockListRelationFilter
  }

  export type PageOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrderInput | SortOrder
    heroData?: SortOrderInput | SortOrder
    carouselData?: SortOrderInput | SortOrder
    seoData?: SortOrderInput | SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contentBlocks?: ContentBlockOrderByRelationAggregateInput
  }

  export type PageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: PageWhereInput | PageWhereInput[]
    OR?: PageWhereInput[]
    NOT?: PageWhereInput | PageWhereInput[]
    title?: StringFilter<"Page"> | string
    content?: JsonNullableFilter<"Page">
    heroData?: JsonNullableFilter<"Page">
    carouselData?: JsonNullableFilter<"Page">
    seoData?: JsonNullableFilter<"Page">
    published?: BoolFilter<"Page"> | boolean
    createdAt?: DateTimeFilter<"Page"> | Date | string
    updatedAt?: DateTimeFilter<"Page"> | Date | string
    contentBlocks?: ContentBlockListRelationFilter
  }, "id" | "slug">

  export type PageOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrderInput | SortOrder
    heroData?: SortOrderInput | SortOrder
    carouselData?: SortOrderInput | SortOrder
    seoData?: SortOrderInput | SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PageCountOrderByAggregateInput
    _max?: PageMaxOrderByAggregateInput
    _min?: PageMinOrderByAggregateInput
  }

  export type PageScalarWhereWithAggregatesInput = {
    AND?: PageScalarWhereWithAggregatesInput | PageScalarWhereWithAggregatesInput[]
    OR?: PageScalarWhereWithAggregatesInput[]
    NOT?: PageScalarWhereWithAggregatesInput | PageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Page"> | string
    title?: StringWithAggregatesFilter<"Page"> | string
    slug?: StringWithAggregatesFilter<"Page"> | string
    content?: JsonNullableWithAggregatesFilter<"Page">
    heroData?: JsonNullableWithAggregatesFilter<"Page">
    carouselData?: JsonNullableWithAggregatesFilter<"Page">
    seoData?: JsonNullableWithAggregatesFilter<"Page">
    published?: BoolWithAggregatesFilter<"Page"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Page"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Page"> | Date | string
  }

  export type NavigationItemWhereInput = {
    AND?: NavigationItemWhereInput | NavigationItemWhereInput[]
    OR?: NavigationItemWhereInput[]
    NOT?: NavigationItemWhereInput | NavigationItemWhereInput[]
    id?: StringFilter<"NavigationItem"> | string
    label?: StringFilter<"NavigationItem"> | string
    url?: StringNullableFilter<"NavigationItem"> | string | null
    parentId?: StringNullableFilter<"NavigationItem"> | string | null
    orderIndex?: IntFilter<"NavigationItem"> | number
    isActive?: BoolFilter<"NavigationItem"> | boolean
    createdAt?: DateTimeFilter<"NavigationItem"> | Date | string
    updatedAt?: DateTimeFilter<"NavigationItem"> | Date | string
    parent?: XOR<NavigationItemNullableScalarRelationFilter, NavigationItemWhereInput> | null
    children?: NavigationItemListRelationFilter
  }

  export type NavigationItemOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    url?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    orderIndex?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parent?: NavigationItemOrderByWithRelationInput
    children?: NavigationItemOrderByRelationAggregateInput
  }

  export type NavigationItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NavigationItemWhereInput | NavigationItemWhereInput[]
    OR?: NavigationItemWhereInput[]
    NOT?: NavigationItemWhereInput | NavigationItemWhereInput[]
    label?: StringFilter<"NavigationItem"> | string
    url?: StringNullableFilter<"NavigationItem"> | string | null
    parentId?: StringNullableFilter<"NavigationItem"> | string | null
    orderIndex?: IntFilter<"NavigationItem"> | number
    isActive?: BoolFilter<"NavigationItem"> | boolean
    createdAt?: DateTimeFilter<"NavigationItem"> | Date | string
    updatedAt?: DateTimeFilter<"NavigationItem"> | Date | string
    parent?: XOR<NavigationItemNullableScalarRelationFilter, NavigationItemWhereInput> | null
    children?: NavigationItemListRelationFilter
  }, "id">

  export type NavigationItemOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    url?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    orderIndex?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NavigationItemCountOrderByAggregateInput
    _avg?: NavigationItemAvgOrderByAggregateInput
    _max?: NavigationItemMaxOrderByAggregateInput
    _min?: NavigationItemMinOrderByAggregateInput
    _sum?: NavigationItemSumOrderByAggregateInput
  }

  export type NavigationItemScalarWhereWithAggregatesInput = {
    AND?: NavigationItemScalarWhereWithAggregatesInput | NavigationItemScalarWhereWithAggregatesInput[]
    OR?: NavigationItemScalarWhereWithAggregatesInput[]
    NOT?: NavigationItemScalarWhereWithAggregatesInput | NavigationItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NavigationItem"> | string
    label?: StringWithAggregatesFilter<"NavigationItem"> | string
    url?: StringNullableWithAggregatesFilter<"NavigationItem"> | string | null
    parentId?: StringNullableWithAggregatesFilter<"NavigationItem"> | string | null
    orderIndex?: IntWithAggregatesFilter<"NavigationItem"> | number
    isActive?: BoolWithAggregatesFilter<"NavigationItem"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"NavigationItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NavigationItem"> | Date | string
  }

  export type CarSeriesWhereInput = {
    AND?: CarSeriesWhereInput | CarSeriesWhereInput[]
    OR?: CarSeriesWhereInput[]
    NOT?: CarSeriesWhereInput | CarSeriesWhereInput[]
    id?: StringFilter<"CarSeries"> | string
    name?: StringFilter<"CarSeries"> | string
    slug?: StringFilter<"CarSeries"> | string
    description?: StringNullableFilter<"CarSeries"> | string | null
    specifications?: JsonNullableFilter<"CarSeries">
    price?: FloatNullableFilter<"CarSeries"> | number | null
    heroData?: JsonNullableFilter<"CarSeries">
    carouselData?: JsonNullableFilter<"CarSeries">
    published?: BoolFilter<"CarSeries"> | boolean
    createdAt?: DateTimeFilter<"CarSeries"> | Date | string
    updatedAt?: DateTimeFilter<"CarSeries"> | Date | string
  }

  export type CarSeriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    specifications?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    heroData?: SortOrderInput | SortOrder
    carouselData?: SortOrderInput | SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarSeriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CarSeriesWhereInput | CarSeriesWhereInput[]
    OR?: CarSeriesWhereInput[]
    NOT?: CarSeriesWhereInput | CarSeriesWhereInput[]
    name?: StringFilter<"CarSeries"> | string
    description?: StringNullableFilter<"CarSeries"> | string | null
    specifications?: JsonNullableFilter<"CarSeries">
    price?: FloatNullableFilter<"CarSeries"> | number | null
    heroData?: JsonNullableFilter<"CarSeries">
    carouselData?: JsonNullableFilter<"CarSeries">
    published?: BoolFilter<"CarSeries"> | boolean
    createdAt?: DateTimeFilter<"CarSeries"> | Date | string
    updatedAt?: DateTimeFilter<"CarSeries"> | Date | string
  }, "id" | "slug">

  export type CarSeriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    specifications?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    heroData?: SortOrderInput | SortOrder
    carouselData?: SortOrderInput | SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CarSeriesCountOrderByAggregateInput
    _avg?: CarSeriesAvgOrderByAggregateInput
    _max?: CarSeriesMaxOrderByAggregateInput
    _min?: CarSeriesMinOrderByAggregateInput
    _sum?: CarSeriesSumOrderByAggregateInput
  }

  export type CarSeriesScalarWhereWithAggregatesInput = {
    AND?: CarSeriesScalarWhereWithAggregatesInput | CarSeriesScalarWhereWithAggregatesInput[]
    OR?: CarSeriesScalarWhereWithAggregatesInput[]
    NOT?: CarSeriesScalarWhereWithAggregatesInput | CarSeriesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CarSeries"> | string
    name?: StringWithAggregatesFilter<"CarSeries"> | string
    slug?: StringWithAggregatesFilter<"CarSeries"> | string
    description?: StringNullableWithAggregatesFilter<"CarSeries"> | string | null
    specifications?: JsonNullableWithAggregatesFilter<"CarSeries">
    price?: FloatNullableWithAggregatesFilter<"CarSeries"> | number | null
    heroData?: JsonNullableWithAggregatesFilter<"CarSeries">
    carouselData?: JsonNullableWithAggregatesFilter<"CarSeries">
    published?: BoolWithAggregatesFilter<"CarSeries"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CarSeries"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CarSeries"> | Date | string
  }

  export type MediaWhereInput = {
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    id?: StringFilter<"Media"> | string
    filename?: StringFilter<"Media"> | string
    originalName?: StringFilter<"Media"> | string
    url?: StringFilter<"Media"> | string
    altText?: StringNullableFilter<"Media"> | string | null
    size?: IntNullableFilter<"Media"> | number | null
    mimeType?: StringNullableFilter<"Media"> | string | null
    width?: IntNullableFilter<"Media"> | number | null
    height?: IntNullableFilter<"Media"> | number | null
    createdAt?: DateTimeFilter<"Media"> | Date | string
    updatedAt?: DateTimeFilter<"Media"> | Date | string
  }

  export type MediaOrderByWithRelationInput = {
    id?: SortOrder
    filename?: SortOrder
    originalName?: SortOrder
    url?: SortOrder
    altText?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    mimeType?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    filename?: StringFilter<"Media"> | string
    originalName?: StringFilter<"Media"> | string
    url?: StringFilter<"Media"> | string
    altText?: StringNullableFilter<"Media"> | string | null
    size?: IntNullableFilter<"Media"> | number | null
    mimeType?: StringNullableFilter<"Media"> | string | null
    width?: IntNullableFilter<"Media"> | number | null
    height?: IntNullableFilter<"Media"> | number | null
    createdAt?: DateTimeFilter<"Media"> | Date | string
    updatedAt?: DateTimeFilter<"Media"> | Date | string
  }, "id">

  export type MediaOrderByWithAggregationInput = {
    id?: SortOrder
    filename?: SortOrder
    originalName?: SortOrder
    url?: SortOrder
    altText?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    mimeType?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MediaCountOrderByAggregateInput
    _avg?: MediaAvgOrderByAggregateInput
    _max?: MediaMaxOrderByAggregateInput
    _min?: MediaMinOrderByAggregateInput
    _sum?: MediaSumOrderByAggregateInput
  }

  export type MediaScalarWhereWithAggregatesInput = {
    AND?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    OR?: MediaScalarWhereWithAggregatesInput[]
    NOT?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Media"> | string
    filename?: StringWithAggregatesFilter<"Media"> | string
    originalName?: StringWithAggregatesFilter<"Media"> | string
    url?: StringWithAggregatesFilter<"Media"> | string
    altText?: StringNullableWithAggregatesFilter<"Media"> | string | null
    size?: IntNullableWithAggregatesFilter<"Media"> | number | null
    mimeType?: StringNullableWithAggregatesFilter<"Media"> | string | null
    width?: IntNullableWithAggregatesFilter<"Media"> | number | null
    height?: IntNullableWithAggregatesFilter<"Media"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Media"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Media"> | Date | string
  }

  export type ContentBlockWhereInput = {
    AND?: ContentBlockWhereInput | ContentBlockWhereInput[]
    OR?: ContentBlockWhereInput[]
    NOT?: ContentBlockWhereInput | ContentBlockWhereInput[]
    id?: StringFilter<"ContentBlock"> | string
    pageId?: StringFilter<"ContentBlock"> | string
    type?: StringFilter<"ContentBlock"> | string
    data?: JsonFilter<"ContentBlock">
    orderIndex?: IntFilter<"ContentBlock"> | number
    createdAt?: DateTimeFilter<"ContentBlock"> | Date | string
    updatedAt?: DateTimeFilter<"ContentBlock"> | Date | string
    page?: XOR<PageScalarRelationFilter, PageWhereInput>
  }

  export type ContentBlockOrderByWithRelationInput = {
    id?: SortOrder
    pageId?: SortOrder
    type?: SortOrder
    data?: SortOrder
    orderIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    page?: PageOrderByWithRelationInput
  }

  export type ContentBlockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContentBlockWhereInput | ContentBlockWhereInput[]
    OR?: ContentBlockWhereInput[]
    NOT?: ContentBlockWhereInput | ContentBlockWhereInput[]
    pageId?: StringFilter<"ContentBlock"> | string
    type?: StringFilter<"ContentBlock"> | string
    data?: JsonFilter<"ContentBlock">
    orderIndex?: IntFilter<"ContentBlock"> | number
    createdAt?: DateTimeFilter<"ContentBlock"> | Date | string
    updatedAt?: DateTimeFilter<"ContentBlock"> | Date | string
    page?: XOR<PageScalarRelationFilter, PageWhereInput>
  }, "id">

  export type ContentBlockOrderByWithAggregationInput = {
    id?: SortOrder
    pageId?: SortOrder
    type?: SortOrder
    data?: SortOrder
    orderIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContentBlockCountOrderByAggregateInput
    _avg?: ContentBlockAvgOrderByAggregateInput
    _max?: ContentBlockMaxOrderByAggregateInput
    _min?: ContentBlockMinOrderByAggregateInput
    _sum?: ContentBlockSumOrderByAggregateInput
  }

  export type ContentBlockScalarWhereWithAggregatesInput = {
    AND?: ContentBlockScalarWhereWithAggregatesInput | ContentBlockScalarWhereWithAggregatesInput[]
    OR?: ContentBlockScalarWhereWithAggregatesInput[]
    NOT?: ContentBlockScalarWhereWithAggregatesInput | ContentBlockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContentBlock"> | string
    pageId?: StringWithAggregatesFilter<"ContentBlock"> | string
    type?: StringWithAggregatesFilter<"ContentBlock"> | string
    data?: JsonWithAggregatesFilter<"ContentBlock">
    orderIndex?: IntWithAggregatesFilter<"ContentBlock"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ContentBlock"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContentBlock"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    role?: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    role?: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    role?: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageCreateInput = {
    id?: string
    title: string
    slug: string
    content?: NullableJsonNullValueInput | InputJsonValue
    heroData?: NullableJsonNullValueInput | InputJsonValue
    carouselData?: NullableJsonNullValueInput | InputJsonValue
    seoData?: NullableJsonNullValueInput | InputJsonValue
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    contentBlocks?: ContentBlockCreateNestedManyWithoutPageInput
  }

  export type PageUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    content?: NullableJsonNullValueInput | InputJsonValue
    heroData?: NullableJsonNullValueInput | InputJsonValue
    carouselData?: NullableJsonNullValueInput | InputJsonValue
    seoData?: NullableJsonNullValueInput | InputJsonValue
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    contentBlocks?: ContentBlockUncheckedCreateNestedManyWithoutPageInput
  }

  export type PageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: NullableJsonNullValueInput | InputJsonValue
    heroData?: NullableJsonNullValueInput | InputJsonValue
    carouselData?: NullableJsonNullValueInput | InputJsonValue
    seoData?: NullableJsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentBlocks?: ContentBlockUpdateManyWithoutPageNestedInput
  }

  export type PageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: NullableJsonNullValueInput | InputJsonValue
    heroData?: NullableJsonNullValueInput | InputJsonValue
    carouselData?: NullableJsonNullValueInput | InputJsonValue
    seoData?: NullableJsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentBlocks?: ContentBlockUncheckedUpdateManyWithoutPageNestedInput
  }

  export type PageCreateManyInput = {
    id?: string
    title: string
    slug: string
    content?: NullableJsonNullValueInput | InputJsonValue
    heroData?: NullableJsonNullValueInput | InputJsonValue
    carouselData?: NullableJsonNullValueInput | InputJsonValue
    seoData?: NullableJsonNullValueInput | InputJsonValue
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: NullableJsonNullValueInput | InputJsonValue
    heroData?: NullableJsonNullValueInput | InputJsonValue
    carouselData?: NullableJsonNullValueInput | InputJsonValue
    seoData?: NullableJsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: NullableJsonNullValueInput | InputJsonValue
    heroData?: NullableJsonNullValueInput | InputJsonValue
    carouselData?: NullableJsonNullValueInput | InputJsonValue
    seoData?: NullableJsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NavigationItemCreateInput = {
    id?: string
    label: string
    url?: string | null
    orderIndex?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: NavigationItemCreateNestedOneWithoutChildrenInput
    children?: NavigationItemCreateNestedManyWithoutParentInput
  }

  export type NavigationItemUncheckedCreateInput = {
    id?: string
    label: string
    url?: string | null
    parentId?: string | null
    orderIndex?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: NavigationItemUncheckedCreateNestedManyWithoutParentInput
  }

  export type NavigationItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: NavigationItemUpdateOneWithoutChildrenNestedInput
    children?: NavigationItemUpdateManyWithoutParentNestedInput
  }

  export type NavigationItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: NavigationItemUncheckedUpdateManyWithoutParentNestedInput
  }

  export type NavigationItemCreateManyInput = {
    id?: string
    label: string
    url?: string | null
    parentId?: string | null
    orderIndex?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NavigationItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NavigationItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarSeriesCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    specifications?: NullableJsonNullValueInput | InputJsonValue
    price?: number | null
    heroData?: NullableJsonNullValueInput | InputJsonValue
    carouselData?: NullableJsonNullValueInput | InputJsonValue
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarSeriesUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    specifications?: NullableJsonNullValueInput | InputJsonValue
    price?: number | null
    heroData?: NullableJsonNullValueInput | InputJsonValue
    carouselData?: NullableJsonNullValueInput | InputJsonValue
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarSeriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specifications?: NullableJsonNullValueInput | InputJsonValue
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    heroData?: NullableJsonNullValueInput | InputJsonValue
    carouselData?: NullableJsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarSeriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specifications?: NullableJsonNullValueInput | InputJsonValue
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    heroData?: NullableJsonNullValueInput | InputJsonValue
    carouselData?: NullableJsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarSeriesCreateManyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    specifications?: NullableJsonNullValueInput | InputJsonValue
    price?: number | null
    heroData?: NullableJsonNullValueInput | InputJsonValue
    carouselData?: NullableJsonNullValueInput | InputJsonValue
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarSeriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specifications?: NullableJsonNullValueInput | InputJsonValue
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    heroData?: NullableJsonNullValueInput | InputJsonValue
    carouselData?: NullableJsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarSeriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specifications?: NullableJsonNullValueInput | InputJsonValue
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    heroData?: NullableJsonNullValueInput | InputJsonValue
    carouselData?: NullableJsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateInput = {
    id?: string
    filename: string
    originalName: string
    url: string
    altText?: string | null
    size?: number | null
    mimeType?: string | null
    width?: number | null
    height?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaUncheckedCreateInput = {
    id?: string
    filename: string
    originalName: string
    url: string
    altText?: string | null
    size?: number | null
    mimeType?: string | null
    width?: number | null
    height?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateManyInput = {
    id?: string
    filename: string
    originalName: string
    url: string
    altText?: string | null
    size?: number | null
    mimeType?: string | null
    width?: number | null
    height?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentBlockCreateInput = {
    id?: string
    type: string
    data: JsonNullValueInput | InputJsonValue
    orderIndex?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    page: PageCreateNestedOneWithoutContentBlocksInput
  }

  export type ContentBlockUncheckedCreateInput = {
    id?: string
    pageId: string
    type: string
    data: JsonNullValueInput | InputJsonValue
    orderIndex?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentBlockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    page?: PageUpdateOneRequiredWithoutContentBlocksNestedInput
  }

  export type ContentBlockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pageId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentBlockCreateManyInput = {
    id?: string
    pageId: string
    type: string
    data: JsonNullValueInput | InputJsonValue
    orderIndex?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentBlockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentBlockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pageId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ContentBlockListRelationFilter = {
    every?: ContentBlockWhereInput
    some?: ContentBlockWhereInput
    none?: ContentBlockWhereInput
  }

  export type ContentBlockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PageCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    heroData?: SortOrder
    carouselData?: SortOrder
    seoData?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NavigationItemNullableScalarRelationFilter = {
    is?: NavigationItemWhereInput | null
    isNot?: NavigationItemWhereInput | null
  }

  export type NavigationItemListRelationFilter = {
    every?: NavigationItemWhereInput
    some?: NavigationItemWhereInput
    none?: NavigationItemWhereInput
  }

  export type NavigationItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NavigationItemCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    url?: SortOrder
    parentId?: SortOrder
    orderIndex?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NavigationItemAvgOrderByAggregateInput = {
    orderIndex?: SortOrder
  }

  export type NavigationItemMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    url?: SortOrder
    parentId?: SortOrder
    orderIndex?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NavigationItemMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    url?: SortOrder
    parentId?: SortOrder
    orderIndex?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NavigationItemSumOrderByAggregateInput = {
    orderIndex?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CarSeriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    specifications?: SortOrder
    price?: SortOrder
    heroData?: SortOrder
    carouselData?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarSeriesAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type CarSeriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    price?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarSeriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    price?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarSeriesSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MediaCountOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    originalName?: SortOrder
    url?: SortOrder
    altText?: SortOrder
    size?: SortOrder
    mimeType?: SortOrder
    width?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaAvgOrderByAggregateInput = {
    size?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type MediaMaxOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    originalName?: SortOrder
    url?: SortOrder
    altText?: SortOrder
    size?: SortOrder
    mimeType?: SortOrder
    width?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaMinOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    originalName?: SortOrder
    url?: SortOrder
    altText?: SortOrder
    size?: SortOrder
    mimeType?: SortOrder
    width?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaSumOrderByAggregateInput = {
    size?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PageScalarRelationFilter = {
    is?: PageWhereInput
    isNot?: PageWhereInput
  }

  export type ContentBlockCountOrderByAggregateInput = {
    id?: SortOrder
    pageId?: SortOrder
    type?: SortOrder
    data?: SortOrder
    orderIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentBlockAvgOrderByAggregateInput = {
    orderIndex?: SortOrder
  }

  export type ContentBlockMaxOrderByAggregateInput = {
    id?: SortOrder
    pageId?: SortOrder
    type?: SortOrder
    orderIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentBlockMinOrderByAggregateInput = {
    id?: SortOrder
    pageId?: SortOrder
    type?: SortOrder
    orderIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentBlockSumOrderByAggregateInput = {
    orderIndex?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ContentBlockCreateNestedManyWithoutPageInput = {
    create?: XOR<ContentBlockCreateWithoutPageInput, ContentBlockUncheckedCreateWithoutPageInput> | ContentBlockCreateWithoutPageInput[] | ContentBlockUncheckedCreateWithoutPageInput[]
    connectOrCreate?: ContentBlockCreateOrConnectWithoutPageInput | ContentBlockCreateOrConnectWithoutPageInput[]
    createMany?: ContentBlockCreateManyPageInputEnvelope
    connect?: ContentBlockWhereUniqueInput | ContentBlockWhereUniqueInput[]
  }

  export type ContentBlockUncheckedCreateNestedManyWithoutPageInput = {
    create?: XOR<ContentBlockCreateWithoutPageInput, ContentBlockUncheckedCreateWithoutPageInput> | ContentBlockCreateWithoutPageInput[] | ContentBlockUncheckedCreateWithoutPageInput[]
    connectOrCreate?: ContentBlockCreateOrConnectWithoutPageInput | ContentBlockCreateOrConnectWithoutPageInput[]
    createMany?: ContentBlockCreateManyPageInputEnvelope
    connect?: ContentBlockWhereUniqueInput | ContentBlockWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ContentBlockUpdateManyWithoutPageNestedInput = {
    create?: XOR<ContentBlockCreateWithoutPageInput, ContentBlockUncheckedCreateWithoutPageInput> | ContentBlockCreateWithoutPageInput[] | ContentBlockUncheckedCreateWithoutPageInput[]
    connectOrCreate?: ContentBlockCreateOrConnectWithoutPageInput | ContentBlockCreateOrConnectWithoutPageInput[]
    upsert?: ContentBlockUpsertWithWhereUniqueWithoutPageInput | ContentBlockUpsertWithWhereUniqueWithoutPageInput[]
    createMany?: ContentBlockCreateManyPageInputEnvelope
    set?: ContentBlockWhereUniqueInput | ContentBlockWhereUniqueInput[]
    disconnect?: ContentBlockWhereUniqueInput | ContentBlockWhereUniqueInput[]
    delete?: ContentBlockWhereUniqueInput | ContentBlockWhereUniqueInput[]
    connect?: ContentBlockWhereUniqueInput | ContentBlockWhereUniqueInput[]
    update?: ContentBlockUpdateWithWhereUniqueWithoutPageInput | ContentBlockUpdateWithWhereUniqueWithoutPageInput[]
    updateMany?: ContentBlockUpdateManyWithWhereWithoutPageInput | ContentBlockUpdateManyWithWhereWithoutPageInput[]
    deleteMany?: ContentBlockScalarWhereInput | ContentBlockScalarWhereInput[]
  }

  export type ContentBlockUncheckedUpdateManyWithoutPageNestedInput = {
    create?: XOR<ContentBlockCreateWithoutPageInput, ContentBlockUncheckedCreateWithoutPageInput> | ContentBlockCreateWithoutPageInput[] | ContentBlockUncheckedCreateWithoutPageInput[]
    connectOrCreate?: ContentBlockCreateOrConnectWithoutPageInput | ContentBlockCreateOrConnectWithoutPageInput[]
    upsert?: ContentBlockUpsertWithWhereUniqueWithoutPageInput | ContentBlockUpsertWithWhereUniqueWithoutPageInput[]
    createMany?: ContentBlockCreateManyPageInputEnvelope
    set?: ContentBlockWhereUniqueInput | ContentBlockWhereUniqueInput[]
    disconnect?: ContentBlockWhereUniqueInput | ContentBlockWhereUniqueInput[]
    delete?: ContentBlockWhereUniqueInput | ContentBlockWhereUniqueInput[]
    connect?: ContentBlockWhereUniqueInput | ContentBlockWhereUniqueInput[]
    update?: ContentBlockUpdateWithWhereUniqueWithoutPageInput | ContentBlockUpdateWithWhereUniqueWithoutPageInput[]
    updateMany?: ContentBlockUpdateManyWithWhereWithoutPageInput | ContentBlockUpdateManyWithWhereWithoutPageInput[]
    deleteMany?: ContentBlockScalarWhereInput | ContentBlockScalarWhereInput[]
  }

  export type NavigationItemCreateNestedOneWithoutChildrenInput = {
    create?: XOR<NavigationItemCreateWithoutChildrenInput, NavigationItemUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: NavigationItemCreateOrConnectWithoutChildrenInput
    connect?: NavigationItemWhereUniqueInput
  }

  export type NavigationItemCreateNestedManyWithoutParentInput = {
    create?: XOR<NavigationItemCreateWithoutParentInput, NavigationItemUncheckedCreateWithoutParentInput> | NavigationItemCreateWithoutParentInput[] | NavigationItemUncheckedCreateWithoutParentInput[]
    connectOrCreate?: NavigationItemCreateOrConnectWithoutParentInput | NavigationItemCreateOrConnectWithoutParentInput[]
    createMany?: NavigationItemCreateManyParentInputEnvelope
    connect?: NavigationItemWhereUniqueInput | NavigationItemWhereUniqueInput[]
  }

  export type NavigationItemUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<NavigationItemCreateWithoutParentInput, NavigationItemUncheckedCreateWithoutParentInput> | NavigationItemCreateWithoutParentInput[] | NavigationItemUncheckedCreateWithoutParentInput[]
    connectOrCreate?: NavigationItemCreateOrConnectWithoutParentInput | NavigationItemCreateOrConnectWithoutParentInput[]
    createMany?: NavigationItemCreateManyParentInputEnvelope
    connect?: NavigationItemWhereUniqueInput | NavigationItemWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NavigationItemUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<NavigationItemCreateWithoutChildrenInput, NavigationItemUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: NavigationItemCreateOrConnectWithoutChildrenInput
    upsert?: NavigationItemUpsertWithoutChildrenInput
    disconnect?: NavigationItemWhereInput | boolean
    delete?: NavigationItemWhereInput | boolean
    connect?: NavigationItemWhereUniqueInput
    update?: XOR<XOR<NavigationItemUpdateToOneWithWhereWithoutChildrenInput, NavigationItemUpdateWithoutChildrenInput>, NavigationItemUncheckedUpdateWithoutChildrenInput>
  }

  export type NavigationItemUpdateManyWithoutParentNestedInput = {
    create?: XOR<NavigationItemCreateWithoutParentInput, NavigationItemUncheckedCreateWithoutParentInput> | NavigationItemCreateWithoutParentInput[] | NavigationItemUncheckedCreateWithoutParentInput[]
    connectOrCreate?: NavigationItemCreateOrConnectWithoutParentInput | NavigationItemCreateOrConnectWithoutParentInput[]
    upsert?: NavigationItemUpsertWithWhereUniqueWithoutParentInput | NavigationItemUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: NavigationItemCreateManyParentInputEnvelope
    set?: NavigationItemWhereUniqueInput | NavigationItemWhereUniqueInput[]
    disconnect?: NavigationItemWhereUniqueInput | NavigationItemWhereUniqueInput[]
    delete?: NavigationItemWhereUniqueInput | NavigationItemWhereUniqueInput[]
    connect?: NavigationItemWhereUniqueInput | NavigationItemWhereUniqueInput[]
    update?: NavigationItemUpdateWithWhereUniqueWithoutParentInput | NavigationItemUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: NavigationItemUpdateManyWithWhereWithoutParentInput | NavigationItemUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: NavigationItemScalarWhereInput | NavigationItemScalarWhereInput[]
  }

  export type NavigationItemUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<NavigationItemCreateWithoutParentInput, NavigationItemUncheckedCreateWithoutParentInput> | NavigationItemCreateWithoutParentInput[] | NavigationItemUncheckedCreateWithoutParentInput[]
    connectOrCreate?: NavigationItemCreateOrConnectWithoutParentInput | NavigationItemCreateOrConnectWithoutParentInput[]
    upsert?: NavigationItemUpsertWithWhereUniqueWithoutParentInput | NavigationItemUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: NavigationItemCreateManyParentInputEnvelope
    set?: NavigationItemWhereUniqueInput | NavigationItemWhereUniqueInput[]
    disconnect?: NavigationItemWhereUniqueInput | NavigationItemWhereUniqueInput[]
    delete?: NavigationItemWhereUniqueInput | NavigationItemWhereUniqueInput[]
    connect?: NavigationItemWhereUniqueInput | NavigationItemWhereUniqueInput[]
    update?: NavigationItemUpdateWithWhereUniqueWithoutParentInput | NavigationItemUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: NavigationItemUpdateManyWithWhereWithoutParentInput | NavigationItemUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: NavigationItemScalarWhereInput | NavigationItemScalarWhereInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PageCreateNestedOneWithoutContentBlocksInput = {
    create?: XOR<PageCreateWithoutContentBlocksInput, PageUncheckedCreateWithoutContentBlocksInput>
    connectOrCreate?: PageCreateOrConnectWithoutContentBlocksInput
    connect?: PageWhereUniqueInput
  }

  export type PageUpdateOneRequiredWithoutContentBlocksNestedInput = {
    create?: XOR<PageCreateWithoutContentBlocksInput, PageUncheckedCreateWithoutContentBlocksInput>
    connectOrCreate?: PageCreateOrConnectWithoutContentBlocksInput
    upsert?: PageUpsertWithoutContentBlocksInput
    connect?: PageWhereUniqueInput
    update?: XOR<XOR<PageUpdateToOneWithWhereWithoutContentBlocksInput, PageUpdateWithoutContentBlocksInput>, PageUncheckedUpdateWithoutContentBlocksInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ContentBlockCreateWithoutPageInput = {
    id?: string
    type: string
    data: JsonNullValueInput | InputJsonValue
    orderIndex?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentBlockUncheckedCreateWithoutPageInput = {
    id?: string
    type: string
    data: JsonNullValueInput | InputJsonValue
    orderIndex?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentBlockCreateOrConnectWithoutPageInput = {
    where: ContentBlockWhereUniqueInput
    create: XOR<ContentBlockCreateWithoutPageInput, ContentBlockUncheckedCreateWithoutPageInput>
  }

  export type ContentBlockCreateManyPageInputEnvelope = {
    data: ContentBlockCreateManyPageInput | ContentBlockCreateManyPageInput[]
  }

  export type ContentBlockUpsertWithWhereUniqueWithoutPageInput = {
    where: ContentBlockWhereUniqueInput
    update: XOR<ContentBlockUpdateWithoutPageInput, ContentBlockUncheckedUpdateWithoutPageInput>
    create: XOR<ContentBlockCreateWithoutPageInput, ContentBlockUncheckedCreateWithoutPageInput>
  }

  export type ContentBlockUpdateWithWhereUniqueWithoutPageInput = {
    where: ContentBlockWhereUniqueInput
    data: XOR<ContentBlockUpdateWithoutPageInput, ContentBlockUncheckedUpdateWithoutPageInput>
  }

  export type ContentBlockUpdateManyWithWhereWithoutPageInput = {
    where: ContentBlockScalarWhereInput
    data: XOR<ContentBlockUpdateManyMutationInput, ContentBlockUncheckedUpdateManyWithoutPageInput>
  }

  export type ContentBlockScalarWhereInput = {
    AND?: ContentBlockScalarWhereInput | ContentBlockScalarWhereInput[]
    OR?: ContentBlockScalarWhereInput[]
    NOT?: ContentBlockScalarWhereInput | ContentBlockScalarWhereInput[]
    id?: StringFilter<"ContentBlock"> | string
    pageId?: StringFilter<"ContentBlock"> | string
    type?: StringFilter<"ContentBlock"> | string
    data?: JsonFilter<"ContentBlock">
    orderIndex?: IntFilter<"ContentBlock"> | number
    createdAt?: DateTimeFilter<"ContentBlock"> | Date | string
    updatedAt?: DateTimeFilter<"ContentBlock"> | Date | string
  }

  export type NavigationItemCreateWithoutChildrenInput = {
    id?: string
    label: string
    url?: string | null
    orderIndex?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: NavigationItemCreateNestedOneWithoutChildrenInput
  }

  export type NavigationItemUncheckedCreateWithoutChildrenInput = {
    id?: string
    label: string
    url?: string | null
    parentId?: string | null
    orderIndex?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NavigationItemCreateOrConnectWithoutChildrenInput = {
    where: NavigationItemWhereUniqueInput
    create: XOR<NavigationItemCreateWithoutChildrenInput, NavigationItemUncheckedCreateWithoutChildrenInput>
  }

  export type NavigationItemCreateWithoutParentInput = {
    id?: string
    label: string
    url?: string | null
    orderIndex?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: NavigationItemCreateNestedManyWithoutParentInput
  }

  export type NavigationItemUncheckedCreateWithoutParentInput = {
    id?: string
    label: string
    url?: string | null
    orderIndex?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: NavigationItemUncheckedCreateNestedManyWithoutParentInput
  }

  export type NavigationItemCreateOrConnectWithoutParentInput = {
    where: NavigationItemWhereUniqueInput
    create: XOR<NavigationItemCreateWithoutParentInput, NavigationItemUncheckedCreateWithoutParentInput>
  }

  export type NavigationItemCreateManyParentInputEnvelope = {
    data: NavigationItemCreateManyParentInput | NavigationItemCreateManyParentInput[]
  }

  export type NavigationItemUpsertWithoutChildrenInput = {
    update: XOR<NavigationItemUpdateWithoutChildrenInput, NavigationItemUncheckedUpdateWithoutChildrenInput>
    create: XOR<NavigationItemCreateWithoutChildrenInput, NavigationItemUncheckedCreateWithoutChildrenInput>
    where?: NavigationItemWhereInput
  }

  export type NavigationItemUpdateToOneWithWhereWithoutChildrenInput = {
    where?: NavigationItemWhereInput
    data: XOR<NavigationItemUpdateWithoutChildrenInput, NavigationItemUncheckedUpdateWithoutChildrenInput>
  }

  export type NavigationItemUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: NavigationItemUpdateOneWithoutChildrenNestedInput
  }

  export type NavigationItemUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NavigationItemUpsertWithWhereUniqueWithoutParentInput = {
    where: NavigationItemWhereUniqueInput
    update: XOR<NavigationItemUpdateWithoutParentInput, NavigationItemUncheckedUpdateWithoutParentInput>
    create: XOR<NavigationItemCreateWithoutParentInput, NavigationItemUncheckedCreateWithoutParentInput>
  }

  export type NavigationItemUpdateWithWhereUniqueWithoutParentInput = {
    where: NavigationItemWhereUniqueInput
    data: XOR<NavigationItemUpdateWithoutParentInput, NavigationItemUncheckedUpdateWithoutParentInput>
  }

  export type NavigationItemUpdateManyWithWhereWithoutParentInput = {
    where: NavigationItemScalarWhereInput
    data: XOR<NavigationItemUpdateManyMutationInput, NavigationItemUncheckedUpdateManyWithoutParentInput>
  }

  export type NavigationItemScalarWhereInput = {
    AND?: NavigationItemScalarWhereInput | NavigationItemScalarWhereInput[]
    OR?: NavigationItemScalarWhereInput[]
    NOT?: NavigationItemScalarWhereInput | NavigationItemScalarWhereInput[]
    id?: StringFilter<"NavigationItem"> | string
    label?: StringFilter<"NavigationItem"> | string
    url?: StringNullableFilter<"NavigationItem"> | string | null
    parentId?: StringNullableFilter<"NavigationItem"> | string | null
    orderIndex?: IntFilter<"NavigationItem"> | number
    isActive?: BoolFilter<"NavigationItem"> | boolean
    createdAt?: DateTimeFilter<"NavigationItem"> | Date | string
    updatedAt?: DateTimeFilter<"NavigationItem"> | Date | string
  }

  export type PageCreateWithoutContentBlocksInput = {
    id?: string
    title: string
    slug: string
    content?: NullableJsonNullValueInput | InputJsonValue
    heroData?: NullableJsonNullValueInput | InputJsonValue
    carouselData?: NullableJsonNullValueInput | InputJsonValue
    seoData?: NullableJsonNullValueInput | InputJsonValue
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageUncheckedCreateWithoutContentBlocksInput = {
    id?: string
    title: string
    slug: string
    content?: NullableJsonNullValueInput | InputJsonValue
    heroData?: NullableJsonNullValueInput | InputJsonValue
    carouselData?: NullableJsonNullValueInput | InputJsonValue
    seoData?: NullableJsonNullValueInput | InputJsonValue
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageCreateOrConnectWithoutContentBlocksInput = {
    where: PageWhereUniqueInput
    create: XOR<PageCreateWithoutContentBlocksInput, PageUncheckedCreateWithoutContentBlocksInput>
  }

  export type PageUpsertWithoutContentBlocksInput = {
    update: XOR<PageUpdateWithoutContentBlocksInput, PageUncheckedUpdateWithoutContentBlocksInput>
    create: XOR<PageCreateWithoutContentBlocksInput, PageUncheckedCreateWithoutContentBlocksInput>
    where?: PageWhereInput
  }

  export type PageUpdateToOneWithWhereWithoutContentBlocksInput = {
    where?: PageWhereInput
    data: XOR<PageUpdateWithoutContentBlocksInput, PageUncheckedUpdateWithoutContentBlocksInput>
  }

  export type PageUpdateWithoutContentBlocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: NullableJsonNullValueInput | InputJsonValue
    heroData?: NullableJsonNullValueInput | InputJsonValue
    carouselData?: NullableJsonNullValueInput | InputJsonValue
    seoData?: NullableJsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageUncheckedUpdateWithoutContentBlocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: NullableJsonNullValueInput | InputJsonValue
    heroData?: NullableJsonNullValueInput | InputJsonValue
    carouselData?: NullableJsonNullValueInput | InputJsonValue
    seoData?: NullableJsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentBlockCreateManyPageInput = {
    id?: string
    type: string
    data: JsonNullValueInput | InputJsonValue
    orderIndex?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentBlockUpdateWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentBlockUncheckedUpdateWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentBlockUncheckedUpdateManyWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NavigationItemCreateManyParentInput = {
    id?: string
    label: string
    url?: string | null
    orderIndex?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NavigationItemUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: NavigationItemUpdateManyWithoutParentNestedInput
  }

  export type NavigationItemUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: NavigationItemUncheckedUpdateManyWithoutParentNestedInput
  }

  export type NavigationItemUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
  export const dmmf: runtime.BaseDMMF
}