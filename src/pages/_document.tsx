import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
  <link rel="icon" href="/favicon2.ico" />
  <link rel="manifest" href="/site.webmanifest" />
  <meta name="description" content="An E-commerce Website" />
</Head>


      <body style={{ backgroundColor: "#fcf6ef", fontFamily: "monospace", paddingTop: "100px" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
