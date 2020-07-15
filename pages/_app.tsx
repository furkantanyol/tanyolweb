import React, { ReactElement } from "react";
import { AppProps } from "next/app";
import "../styles/index.css";
import { CssBaseline, ZeitProvider } from "@zeit-ui/react";
import theme from "../lib/theme";

export default function MyApp({
  Component,
  pageProps,
}: AppProps): ReactElement {
  return (
    <ZeitProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ZeitProvider>
  );
}
