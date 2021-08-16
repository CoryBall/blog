import React from 'react'
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import apolloLogger from 'apollo-link-logger'
import { onError } from '@apollo/client/link/error'
import fetch from 'isomorphic-unfetch'
import merge from 'deepmerge'
import isEqual from 'lodash/isEqual'
import AppConfig from '../../config/app.config'

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

let apolloClient: ApolloClient<NormalizedCacheObject>

function createApolloClient(
  bearer?: string
): ApolloClient<NormalizedCacheObject> {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createLink(bearer),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  })
}

function createHttpLink(bearer?: string): HttpLink {
  return new HttpLink({
    uri: AppConfig.GraphQLEndpoint,
    credentials: 'same-origin',
    fetch,
    headers: {
      Authorization: !bearer ? '' : `Bearer: ${bearer}`,
    },
  })
}

export function createLink(bearer?: string): ApolloLink {
  return ApolloLink.from([
    apolloLogger,
    createErrorLink(),
    createHttpLink(bearer),
  ])
}

function createErrorLink(): ApolloLink {
  return onError(function ({ graphQLErrors, networkError }) {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message }) => {
        console.error(message)
      })
    }
    if (networkError) {
      console.error(networkError.message)
    }
  })
}

export function initializeApollo(
  bearer?: string,
  initialState?: NormalizedCacheObject
): ApolloClient<NormalizedCacheObject> {
  const _apolloClient = apolloClient ?? createApolloClient(bearer)
  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    })

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data)
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient
  return _apolloClient
}

// This is only for SSG using getStaticProps.
// Use initialize Client, run query, then return the client with this
export function addApolloState(
  client: ApolloClient<NormalizedCacheObject>,
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
  pageProps: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
  }

  return pageProps
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export function useApollo(pageProps: any): ApolloClient<NormalizedCacheObject> {
  const state = pageProps[APOLLO_STATE_PROP_NAME]
  return React.useMemo(() => initializeApollo(state), [state])
}
