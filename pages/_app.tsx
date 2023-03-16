import { AppProps } from 'next/app';
import 'styles/main.scss';

import { Oswald as GoogleFont } from 'next/font/google';

const font = GoogleFont({ subsets: ['latin'] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className}>
      <Component className={font.className} {...pageProps} />
    </main>
  );
}
