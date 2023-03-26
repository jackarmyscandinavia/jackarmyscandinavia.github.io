import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import Layout from 'src/components/DefaultLayout';
import style from 'src/styles/pages/membership.module.scss';

const onJoinClick = () => {
  window.open('http://eepurl.com/imVFDo', '_blank');
};

export default function MembershipPage() {
  return (
    <Layout className={style.membership}>
      <Head>
        <title>{`Jack Army Scandinavia | Medlemskap`}</title>
      </Head>
      <article>
        <h2>Medlemskap</h2>
        <Image
          className={style.logo}
          src="/images/Jack-Army-Scandinavia-Black.png"
          alt={'Jack Army Scandinavia Logo'}
          width={200}
          height={200}
          sizes="200px"
        />
        <p>
          Som medlem i Jack Army Scandinavia vil du motta vårt nyhetsbrev, samt
          få tilgang til alle de fordelene vi har gjennom{' '}
          <a href="http://www.supporterunionen.no/" rel="noreferrer" target="_blank">
            Supporterunionen for Britisk Fotball
          </a>{' '}
          og{' '}
          <a
            href="https://www.swanseacity.com/fans/official-supporters-groups" rel="noreferrer"
            target="_blank"
          >
            Swansea City AFC
          </a>
          .
        </p>

        <p>
          Medlemskontingenten på 100 kroner er frivillig, med mindre det
          eksplisitt spesifiseres for et arrangement, slik som for
          Supportercupen. Vi setter likevel stor pris på om denne betales,
          ettersom vi har litt utgifter relatert til blant annet nettside,
          e-post og supporterunionen.
        </p>

        <p>
          For å bli medlem, klikk knappen nedenfor (ekstern lenke åpnes) og fyll
          ut din informasjon.
        </p>
      </article>
      <div className={style.joinButtonContainer}>
        <button className={style.joinButton} onClick={onJoinClick}>
          Bli medlem!
        </button>
      </div>
    </Layout>
  );
}
