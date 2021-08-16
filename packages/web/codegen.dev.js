process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
module.exports = {
  overwrite: true,
  schema: `http://${process.env.GRAPHQL_ENDPOINT ?? 'localhost:4000'}/graphql`,
  documents: 'src/**/*.graphql',
  generates: {
    'src/graphql/generatedTypes.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
        'fragment-matcher',
      ],
      config: {
        reactApolloVersion: 3,
        withHooks: true,
      },
    },
    'src/graphql/graphql.json': {
      plugins: ['introspection'],
    },
  },
}
