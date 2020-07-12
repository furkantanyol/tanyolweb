import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document'
import { CssBaseline } from '@zeit-ui/react'

export default class MyDocument extends Document {
    static async getInitialProps (ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        const styles = CssBaseline.flush()

        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    {styles}
                </>
            )
        }
    }

    render() {  return (
        <Html lang="en">
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" as="font" crossOrigin="" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    ) }
}