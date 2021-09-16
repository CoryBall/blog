import React from 'react'
import {
  Html,
  Main,
  NextScript,
  Head,
  DocumentInitialProps
} from 'next/document'
import { NextPage } from 'next'

// class MyDocument extends Document {
//   static async getInitialProps(
//     ctx: DocumentContext
//   ): Promise<DocumentInitialProps> {
//     const initialProps = await Document.getInitialProps(ctx)
//     return { ...initialProps }
//   }
//   render(): JSX.Element {
//     return (
//       <Html lang="en">
//         <Head />
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     )
//   }
// }

const MyDocument: NextPage<DocumentInitialProps> = (_props: DocumentInitialProps) => (
  <Html lang="en">
    <Head>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true" />
      <link
        rel="preload"
        as="font"
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&family=Suez+One&display=swap" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&family=Suez+One&display=swap"
        media="print"
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        onLoad="this.media='all'" />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&family=Suez+One&display=swap"
          />
        </noscript>
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default MyDocument
