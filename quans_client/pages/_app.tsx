import type { AppProps } from 'next/app'
import '../styles/localStyles.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
