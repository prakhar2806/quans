import type { AppProps } from "next/app";
import Link from "next/link";
import "../styles/localStyles.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="quans">
        <img src="quans.png" height="50px" width="50px" />
        <h1>UANS</h1>
      </div>
      <Component {...pageProps} />
    </>
  );
}
