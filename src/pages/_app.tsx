import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import "../styles/about.css";
import "../styles/contact.css";
import "../styles/footer.css";
import "../styles/hero.css";
import "../styles/navbar.css";
import "../styles/project.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Google Fonts - Poppins */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
