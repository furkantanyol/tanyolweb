import {AppProps} from 'next/app'
import '../styles/index.css'
import React from "react";
import {CssBaseline, ZeitProvider} from "@zeit-ui/react";
import theme from "../lib/theme";

export default function MyApp({Component, pageProps}: AppProps) {
    return (
        <ZeitProvider theme={theme}>
            <CssBaseline/>
            <Component {...pageProps} />
        </ZeitProvider>
    )
}
