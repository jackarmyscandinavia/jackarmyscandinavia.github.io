import React from 'react';
import Script from 'next/script';
import { AppProps } from 'next/app';
import cn from 'classnames';

import ga from 'data/ga.json';
import 'src/styles/main.scss';

import { Oswald as GoogleFont } from 'next/font/google';

const font = GoogleFont({ subsets: ['latin'] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={cn('fontwrapper', font.className)}>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${ga.GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${ga.GA_MEASUREMENT_ID}');
        `}
      </Script>
      <Component {...pageProps} />
    </div>
  );
}
