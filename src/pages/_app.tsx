import { AppProps } from 'next/app';
import cn from 'classnames';

import 'src/styles/main.scss';

import { Oswald as GoogleFont } from 'next/font/google';

const font = GoogleFont({ subsets: ['latin'] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={cn('fontwrapper', font.className)}>
      <Component {...pageProps} />
    </div>
  );
}
