import React from 'react'
import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import Head from 'next/head'
import { GlobalStyles } from '../components'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () => (
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(
            <>
              <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1.0, shrink-to-fit=no' />
                <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.7.2/css/solid.css'
                  integrity='sha384-r/k8YTFqmlOaqRkZuSiE9trsrDXkh07mRaoGBMoDcmA58OHILZPsk29i2BsFng1B'
                  crossOrigin='anonymous' />
                <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.7.2/css/regular.css'
                  integrity='sha384-IG162Tfx2WTn//TRUi9ahZHsz47lNKzYOp0b6Vv8qltVlPkub2yj9TVwzNck6GEF'
                  crossOrigin='anonymous' />
                <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.7.2/css/fontawesome.css'
                  integrity='sha384-4aon80D8rXCGx9ayDt85LbyUHeMWd3UiBaWliBlJ53yzm9hqN21A+o1pqoyK04h+'
                  crossOrigin='anonymous' />
              </Head>
              <GlobalStyles />
              <App {...props} />
            </>
          )
        })
      )

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: <>{initialProps.styles}{sheet.getStyleElement()}</>
      }
    } finally {
      sheet.seal()
    }
  }
}

export default MyDocument
