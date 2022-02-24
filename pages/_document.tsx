import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel='shortcut icon' href='favicon.png' type='image/png' />
                    <link rel='preconnect' href='https://fonts.googleapis.com' />
                    <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
                    <link
                        href='https://fonts.googleapis.com/css2?family=EB+Garamond:wght@700&family=Encode+Sans:wght@200;400;700&display=swap'
                        rel='stylesheet'
                    />
                    <link rel='icon' href='/icons/favicon.ico' type='image/x-icon' />
                    <link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' />
                    <link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />
                    <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
                    <link rel='manifest' href='/icons/site.webmanifest' />
                    <link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#5bbad5' />
                    <meta name='theme-color' content='#f5f5fa' />
                    <meta name='robots' content='index, noimageindex'></meta>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
