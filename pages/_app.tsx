import { AppProps } from 'next/app'
import 'styles/main.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
