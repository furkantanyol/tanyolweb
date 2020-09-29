import React, { ReactElement } from "react";
import { AppProps } from "next/app";
import "../styles/index.css";
import { CssBaseline, GeistProvider } from "@geist-ui/react";
import theme from "../lib/theme";

export default function MyApp({
  Component,
  pageProps,
}: AppProps): ReactElement {
  return (
    <GeistProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  );
}
