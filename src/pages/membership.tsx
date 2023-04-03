import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Layout from 'src/components/DefaultLayout';
import style from 'src/styles/pages/membership.module.scss';

const onJoinClick = () => {
  window.open('http://eepurl.com/imVFDo', '_blank');
};

export default function MembershipPage() {
  const title = 'Jack Army Scandinavia | Medlemskap';
  return (
    <Layout className={style.membership}>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={'/images/Supporter-Flags-Jack-Army-Scandinavia.jpg'} />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={
            'Informasjon om medlemskap og innmelding i Jack Army Scandinavia, offisiell skandinavisk supporterklubb for Swansea City AFC'
          }
        />
        <meta property="og:type" content={'website'} />
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
          Som medlem i Jack Army Scandinavia vil du motta vårt nyhetsbrev, samt få tilgang til alle de fordelene vi har
          gjennom{' '}
          <a href="http://www.supporterunionen.no/" rel="noreferrer" target="_blank">
            Supporterunionen for Britisk Fotball
          </a>{' '}
          og{' '}
          <a href="https://www.swanseacity.com/fans/official-supporters-groups" rel="noreferrer" target="_blank">
            Swansea City AFC
          </a>
          .
        </p>

        <p>Vi har pr. i dag to typer medlemskap:</p>
        <h5>Aktivt medlemskap</h5>
        <p>
          Som aktivt medlem får du tilgang til alle våre fordeler, inkludert stemmerett ved årsmøtet, mulighet til å
          delta i supportercupen og ikke minst å bidra til vår videre drift (som utgifter til nettside, e-post, supporterunionen og andre ordninger). I tillegg kan det forekomme andre tilbud,
          både gjennom oss, gjennom Swansea City og gjennom Supporterunionen, som kun gjelder aktivt medlemskap
        </p>
        <p>Prisen for aktivt medlemskap er pr. i dag 100 norske kroner pr. sesong.</p>
        <h5>Passivt medlemskap</h5>
        <p>
          Som passivt medlem betaler man ikke medlemskontingent, men får kun tilgang til vårt nyhetsbrev og våre
          digitale kommunikasjonsplattformer. Man har ikke stemmerett ved årsmøtet og kan heller ikke delta i
          supportercupen.
        </p>
        <h5>Innmelding
        </h5>
        <p>For å bli medlem, klikk knappen nedenfor (ekstern lenke åpnes) og fyll ut din informasjon. Oppgradering fra passivt til aktivt medlemskap skjer gjennom å betale via lenke i mottatt e-post.</p>
        <p>
          Ved å melde deg inn godtar du våre <Link href={'/statutes'}>vedtekter</Link> og (ved aktivt medlemskap){' '}
          <Link href={'/conditions'}>salgsvilkår for medlemskap</Link>
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
