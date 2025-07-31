import type { AppProps } from "next/app";
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
      <Component {...pageProps} />
    </>
  );
}
