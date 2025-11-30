import type { AppProps } from "next/app";
import "../styles/globals.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
     <Head>
        <title>Zaylo. </title>
      </Head>
      <Navbar />
      
      <Component {...pageProps}  />
     
      <Footer />

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
    </>
  );
}
