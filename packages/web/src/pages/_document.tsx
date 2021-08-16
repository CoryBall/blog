import React from 'react'
import Document, {
  Html,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { DocumentInitialProps } from 'next/dist/next-server/lib/utils'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render(): JSX.Element {
    return (
      <Html lang="en">
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
