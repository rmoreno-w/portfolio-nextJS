import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import { Header } from '../src/components/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
            <Analytics />
        </>
    );
}

export default MyApp;
