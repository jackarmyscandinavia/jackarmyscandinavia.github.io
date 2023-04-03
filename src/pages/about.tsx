import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import Layout from 'src/components/DefaultLayout';
import style from 'src/styles/pages/about.module.scss';

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>{`Jack Army Scandinavia | Om Oss`}</title>
      </Head>
      <article className={style.about}>
        <h2>Om Jack Army Scandinavia</h2>
        <p>
          Jack Army Scandinavia er en norsk/svensk/dansk supporterklubb for Swansea City AFC. Klubben skal være samlende
          for det skandinaviske miljøet med Swanseasupportere, skal støtte Swansea City Association Football Club i
          medgang og motgang, samt fremme interessen for og kunnskapen om Swansea City i Skandinavia. Klubben ble
          stiftet 6.april 2014. Vi ble anerkjent som offisiell supporterklubb av Swansea City AFC i 2019.
        </p>

        <figure className={style.jackflagimg}>
          <Image
            src="/images/jackarmy-300x300.jpg"
            width={300}
            height={300}
            alt={'Swansea City Supporters (Jacks) with a flag'}
            sizes="300px"
          />
          <figcaption>Supporterne til Swansea City går under navnet Jack Army.</figcaption>
        </figure>

        <p>
          Navnet Jack Army er en fellesbetegnelse på alle Swanseas supportere. Dette er basert på at innbyggerne i
          Swansea ofte refereres til som «Swansea Jacks». Grunnen til det er noe usikkert, men det er to teorier som
          står foran andre. Den kanskje mest sannsynlige er at Swanseas sjømenn tidlig på 1800-tallet ble referert til
          som Swansea Jacks. Dette grunnet deres «
          <a href="http://en.wikipedia.org/wiki/Jack_Tar" rel="noreferrer" target="_blank">
            Jack Tarred
          </a>
          » bekledning. Swansea Jacks var høyt respektert og kjent for hardt arbeid og gode ferdigheter på sjøen. Et
          annet, mer populært men kanskje mindre sannsynlig, opphav er en hund som levde under depresjonen i England på
          1930-tallet. Hunden, som gikk under navnet «
          <a href="http://en.wikipedia.org/wiki/Swansea_Jack" rel="noreferrer" target="_blank">
            Swansea Jack
          </a>
          «, skal visstnok ha reddet 27 mennesker opp av havet i havneområdene i Swansea.
        </p>

        <p>
          En av supporterklubbens hovedoppgaver er å drifte denne nettsiden. Her skal vi presentere nyheter og artikler
          om Swansea City, samtidig som det er en viktig kommunikasjonskanal for klubben. I tillegg til at en liten del
          av medlemskontingenten går til å dekke utgifter i forbindelse med siden, har medlemmer mulighet til å bidra
          direkte til siden gjennom å skrive innlegg eller lage annet innhold til siden.
        </p>

        <p>
          Utenom nettsiden, skal klubben være et felles samlingspunkt for skandinaviske Swanseasupportere. Vi arrangerer
          en eller flere turer for medlemmene våre over dammen til Swanseas kamper i løpet av sesongen. I tillegg er vi
          behjelpelige med informasjon og tips til de som eventuelt ønsker å reise på egen hånd.
        </p>

        <p>
          Jack Army Scandinavia er med i{' '}
          <a href="http://supporterunionen.com/" rel="noreferrer" target="_blank">
            Supporterunionen for Britisk Fotball
          </a>
          . Gjennom dem får vi diverse tilbud, eksponering i media og ikke minst mulighet til å stille i supportercupen
          i fotball.
        </p>
      </article>
    </Layout>
  );
}
