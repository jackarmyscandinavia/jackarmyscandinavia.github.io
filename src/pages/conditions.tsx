import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import clubdetails from 'data/clubdetails.json';

import Layout from 'src/components/DefaultLayout';
import style from 'src/styles/pages/conditions.module.scss';

export default function ConditionsPage() {
  const title = 'Jack Army Scandinavia | Salgsvilkår for medlemskap';
  return (
    <Layout className={style.conditions}>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={'/images/Supporter-Flags-Jack-Army-Scandinavia.jpg'} />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={
            'Salgsvilkår for medlemskap i Jack Army Scandinavia, offisiell skandinavisk supporterklubb for Swansea City AFC'
          }
        />
        <meta property="og:type" content={'website'} />
      </Head>
      <article>
        <h2>Salgsvilkår for medlemskap</h2>
        <Image
          className={style.logo}
          src="/images/Supporter-Flags-Jack-Army-Scandinavia.jpg"
          alt={'Jack Army Scandinavia Flagg'}
          width={256}
          height={144}
          sizes="200px"
        />
        <h3>Avtalen</h3>
        <p>
          Disse betingelsene omhandler kjøp av aktivt medlemskap i Jack Army Scandinavia. Avtalen består av disse
          betingelsene, <Link href={'/statutes'}>klubbens vedtekter</Link> samt opplysninger gitt i
          bestillingsløsningen.
        </p>
        <p>Avtalen vil i tillegg bli utfylt av relevante lovbestemmelser som regulerer kjøp av medlemskap.</p>
        <h3>Partene</h3>
        <p>
          Selger er {clubdetails.name}, {clubdetails.address.first}, {clubdetails.address.zip}{' '}
          {clubdetails.address.city}, {clubdetails.address.country}, {clubdetails.email}, {clubdetails.phone},{' '}
          {clubdetails.orgnr}, og betegnes i det følgende som selger/selgeren.
        </p>
        <p>Kjøper er den forbrukeren som foretar bestillingen, og betegnes i det følgende som kjøper/kjøperen.</p>
        <h3>Pris</h3>
        <p>
          Prisen som oppgis i betalingsløsningen er den totale prisen kjøper skal betale. Denne prisen inkluderer alle
          avgifter og tilleggskostnader. Ytterligere kostnader som selger før kjøpet ikke har informert om, skal kjøper
          ikke bære.
        </p>
        <p>Prisen fastsettes av årsmøtet i forkant av hver fotballsesong</p>
        <h3>Avtaleinngåelse</h3>
        <p>Avtalen er bindende for begge parter når kjøperen har sendt sin bestilling til selgeren.</p>
        <p>
          Avtalen er likevel ikke bindende hvis det har forekommet skrive- eller tastefeil i tilbudet fra selgeren i
          bestillingsløsningen i nettbutikken eller i kjøperens bestilling, og den annen part innså eller burde ha
          innsett at det forelå en slik feil.
        </p>
        <h3>Betaling</h3>
        <p>
          Betaling skjer gjennom Vipps eller Paypal. Kjøper mottar lenke til betaling etter å ha registrert seg som
          medlem i klubben.
        </p>
        <p>
          Dersom kjøperen bruker kredittkort eller debetkort ved betaling, kan selgeren reservere kjøpesummen på kortet
          ved bestilling. Kortet blir belastet samme dag som varen sendes.
        </p>
        <h3>Levering</h3>
        <p>Levering anses som utført det øyeblikket betalingen er prosessert, da medlemskapet aktiveres umiddelbart.</p>
        <h3>Angrerett</h3>
        <p>
          Angrer du kjøpet kan det returneres til oss innenfor 14 dager. Angreretten gjelder fra det tidspunkt
          medlemskapet betales.
        </p>
        <p>
          For å benytte angrefristen, send kvitteringen i retur til {clubdetails.email}, evt. per post til vår adresse
          listet i starten av denne avtalen.
        </p>
        <p>
          Husk å legge ved opplysninger som gjør det mulig for oss å identifisere deg: navn, adresse og kontonummer du
          vil ha pengene tilbakeført på.
        </p>

        <h3>Retur og reklamasjon</h3>
        <p>
          Jack Army Scandinavia behandler reklamasjoner iht. kjøpslovens paragraf om reklamasjon. Dersom du ønsker å
          reklamere på et medlemskap, skal det sendes skriftlig begrunnelse med dokumentasjon inn til oss på vår adresse
          listet tidligere i dokumentet.
        </p>
        <h3>Avslutting eller endring av medlemskap</h3>
        <p>Informasjon om hvordan si opp eller endre avtale om medlemskap.</p>
        <p>For å oppdatere informasjonen din, kan du følge oppdateringslenken fra et av våre nyhetsbrev.</p>
        <p>
          Dersom du ønsker å melde deg ut, kan du bruke følgende lenke til vårt{' '}
          <Link href={clubdetails.unsubscribeLink} target="_blank">
            utmeldingsskjema
          </Link>
          .
        </p>
        <h3>Personopplysninger</h3>
        <p>
          Behandlingsansvarlig for innsamlede personopplysninger er selger. Med mindre kjøperen samtykker til noe annet,
          kan selgeren, i tråd med personopplysningsloven, kun innhente og lagre de personopplysninger som er nødvendig
          for at selgeren skal kunne gjennomføre forpliktelsene etter avtalen. Kjøperens personopplysninger vil kun bli
          utlevert til andre hvis det er nødvendig for at selger skal få gjennomført avtalen med kjøperen, eller i
          lovbestemte tilfelle.
        </p>
        <p>
          Medlemsinformasjon for Jack Army Scandinavia lagres hos Mailchimp (
          <Link href={'https://www.mailchimp.com/'} target="_blank">
            https://www.mailchimp.com/
          </Link>
          )
        </p>
        <h3>Konfliktløsning</h3>
        <p>
          Klager rettes til selger innen rimelig tid, jf. punkt 9 og 10. Partene skal forsøke å løse eventuelle tvister
          i minnelighet. Dersom dette ikke lykkes, kan kjøperen ta kontakt med Forbrukertilsynet for mekling.
          Forbrukertilsynet er tilgjengelig på telefon 23 400 600 eller{' '}
          <Link href={'www.forbrukertilsynet.no'} target="_blank">
            www.forbrukertilsynet.no
          </Link>
          .
        </p>
        <p>
          Europa-Kommisjonens klageportal kan også brukes hvis du ønsker å inngi en klage. Det er særlig relevant, hvis
          du er forbruker bosatt i et annet EU-land. Klagen inngis her: http://ec.europa.eu/odr.
        </p>
      </article>
    </Layout>
  );
}
