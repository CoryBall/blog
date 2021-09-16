import '@blog/web/styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css';
import React from 'react'
import { config } from '@fortawesome/fontawesome-svg-core';
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from '@apollo/client'
import { Provider as ReduxProvider } from 'react-redux'
import { AnimateSharedLayout } from 'framer-motion'
import { useApollo, PageWrapper } from '@blog/components/hoc'
import {store} from '@blog/web/state'
import { Header } from '@blog/components/navigation'
config.autoAddCss = false;

const MyApp: NextPage<AppProps> = (props: AppProps) => {
  const { Component, pageProps } = props
  const apolloClientRef = React.useRef<ApolloClient<NormalizedCacheObject>>(
    useApollo(pageProps)
  )

  return (
    <div className="core">
      <ApolloProvider client={apolloClientRef.current}>
        <ReduxProvider store={store} >
          <PageWrapper>
            <AnimateSharedLayout>
              <Header />
              <Component {...pageProps} />
            </AnimateSharedLayout>
          </PageWrapper>
        </ReduxProvider>
      </ApolloProvider>
    </div>
  )
}

export default MyApp
