class AppConfig {
  private static DevServer = 'localhost:4000'
  private static ProdServer = 'blog-api.coryball.dev'

  static IsProd: boolean = process.env.NODE_ENV === 'production'

  static GraphQLEndpoint = `http${AppConfig.IsProd ? 's' : ''}://${
    AppConfig.IsProd ? AppConfig.ProdServer : AppConfig.DevServer
  }/graphql`
  static SubscriptionEndpoint = `ws://${
    AppConfig.IsProd ? AppConfig.ProdServer : AppConfig.DevServer
  }/graphql`
}

export default AppConfig
