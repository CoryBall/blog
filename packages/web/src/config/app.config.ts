class AppConfig {
  private static DevServer = process.env.GRAPHQL_ENDPOINT ?? 'localhost:4000'
  private static ProdServer = 'api.domain'

  static IsProd: boolean = process.env.NODE_ENV === 'production'

  static GraphQLEndpoint = `http${AppConfig.IsProd && 's'}://${
    AppConfig.IsProd ? AppConfig.ProdServer : AppConfig.DevServer
  }/graphql`
  static SubscriptionEndpoint = `ws://${
    AppConfig.IsProd ? AppConfig.ProdServer : AppConfig.DevServer
  }/subscriptions`
}

export default AppConfig
