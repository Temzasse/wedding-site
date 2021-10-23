import * as React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "@styles/styled";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="fi">
        <Head>
          {/* Block robots */}
          <meta name="robots" content="noindex" />

          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" href="/favicon_32x32.png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Playfair+Display:wght@400;500&display=swap"
            rel="stylesheet"
          />

          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
