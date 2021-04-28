import "../styles/globals.css";
import Head from "next/head";
import { AppProps } from "next/app";
import React from "react";
import { ThemeProvider } from "next-themes"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Tweetliable</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
