import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import Layout from 'src/components/DefaultLayout';
import style from 'src/styles/pages/statutes.module.scss';

export default function StatutesPage() {
  const title = 'Jack Army Scandinavia | Vedtekter';
  return (
    <Layout className={style.membership}>
      <Head>
        <title>{title}</title>
        <meta
          property="og:image"
          content={'/images/Supporter-Flags-Jack-Army-Scandinavia.jpg'}
        />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={
            'Vedtekter for Jack Army Scandinavia, offisiell skandinavisk supporterklubb for Swansea City AFC'
          }
        />
        <meta property="og:type" content={'website'} />
      </Head>
      <article>
        <h2>Vedtekter</h2>
        <Image
          className={style.logo}
          src="/images/Supporter-Flags-Jack-Army-Scandinavia.jpg"
          alt={'Jack Army Scandinavia Flagg'}
          width={256}
          height={144}
          sizes="200px"
        />
        <h3>&sect;1 Foreningens navn</h3>
        <p>
          Foreningens navn er Jack Army Scandinavia og ble stiftet 6.april 2014.
          Foreningen har tilholdssted i Norge, med 0301 Oslo som kontorkommune.
        </p>
        <h3>&sect;2 Formål</h3>
        <p>
          Supporterklubbens formål er å samle det skandinaviske miljøet med
          supportere av Swansea City, å støtte Swansea City Association Football
          Club i medgang og motgang, samt å fremme interessen for og kunnskapen
          om Swansea City i Norge, Sverige og Danmark.
        </p>
        <h3>&sect;3 Juridisk person</h3>
        <p>
          Klubben er selveiende og en frittstående juridisk person med
          upersonlig og begrenset ansvar for gjeld.
        </p>
        <h3>&sect;4 Medlemmer</h3>
        <p>
          Alle supportere av Swansea City Association Football Club kan tas opp
          som medlemmer. Innmelding skjer gjennom klubbens nettside eller ved
          e-post til klubbens økonomiansvarlig, og er gyldig fra det øyeblikket
          innmeldingen er mottatt.
        </p>
        <p>
          Medlemskapet er gyldig i den sesongen medlemskontingenten ble betalt.
          Ny sesong starter 1.juli hvert år. Et medlem kan når som helst melde
          seg ut.
        </p>
        <p>
          Utmelding skjer enten direkte på nettsiden, skriftlig eller gjennom
          e-post til styret i klubben.
        </p>
        <p>
          Et medlem kan ekskluderes fra medlemskap dersom vedkommende oppfører
          seg usømmelig eller uforenlig med supporterklubbens formål. Usømmelig
          oppførsel kan være for eksempel deltagelse i eller oppfordring til
          vold/bråk eller hatefulle ytringer mot andre supportere/spillere.
          Eksklusjon av et medlem besluttes av styret, men kan ankes til
          årsmøtet.
        </p>
        <h3>&sect;4.1 Passivt medlemskap</h3>
        <p>
          Medlemmer som ikke betaler medlemskontingent regnes som passive
          medlemmer. Disse har ikke stemmerett ved årsmøtet og får ikke delta på
          f.eks. supportercupen. Det kan også forekomme andre tilbud som er
          forbeholdt betalende medlemmer.
        </p>
        <p>
          Passive medlemmer får den samme kommunikasjonen og
          informasjonsdelingen som aktive medlemmer.
        </p>
        <h3>&sect;5 Stemmerett og valgbarhet</h3>
        <p>
          Ethvert betalende medlem som har fylt minst 15 år har stemmerett og er
          valgbar til tillitsverv i klubben.
        </p>
        <h3>&sect;6 Kontingent</h3>
        <p>
          Kontingentene for medlemskap fastsettes av årsmøtet og betales
          forskuddsvis.
        </p>
        <p>
          Medlemmer som skylder kontingent for inneværende sesong, har ikke
          stemmerett eller andre rettigheter. Medlemmer som skylder kontingent
          regnes som passive medlemmer (se &sect;4.1)
        </p>
        <h3>&sect;7 Tillitsvalgtes godtgjørelse</h3>
        <p>Tillitsvalgte skal ikke motta honorar for sine verv.</p>
        <h3>&sect;8 Regnskap</h3>
        <p>
          Regnskapsåret regnes fra 1. juli til og med 30. juni. Styret har
          ansvar for at supporterklubben fører regnskap med de midler den
          forvalter. Regnskapet offentliggjøres på klubbens hjemmesider.
        </p>
        <h3>&sect;9 Årsmøte</h3>
        <p>
          Årsmøtet er klubbens høyeste myndighet og avholdes hvert år i mai/juni
          måned.
        </p>
        <p>
          Årsmøtet innkalles av styret med minst 30 dagers varsel direkte til
          medlemmene. Forslag som skal behandles på årsmøtet skal være sendt til
          styret senest 14 dager før årsmøtet. Fullstendig saksliste må være
          tilgjengelig for medlemmene senest 7 dager før årsmøtet.
        </p>
        <p>
          Alle medlemmer har adgang til årsmøtet. Årsmøtet kan invitere andre
          personer og/eller media til å være til stede.
        </p>
        <p>
          Årsmøtet er vedtaksført med det antall stemmeberettigede medlemmer som
          møter. Ingen har mer enn én stemme, og stemmegivning kan ikke skje ved
          fullmakt.
        </p>
        <p>
          Årsmøtet kan behandle forslag om vedtektsendring som er oppført på
          sakslisten senest 7 dager før årsmøtet. Andre saker kan behandles og
          avgjøres når minst 2/3 av de fremmøtte krever det. Slik beslutning kan
          kun tas i forbindelse med godkjenning av sakslisten.
        </p>
        <h3>&sect;10 Ledelse av årsmøtet</h3>
        <p>
          Årsmøtet ledes av valgt dirigent. Dirigenten behøver ikke å være
          medlem av klubben.
        </p>

        <h3>&sect;11 Stemmegivning på årsmøtet</h3>
        <p>
          Med mindre annet er bestemt skal et vedtak for å være gyldig være
          truffet med alminnelig flertall av de avgitte stemmene. Blanke stemmer
          skal anses som ikke avgitt.
        </p>
        <p>
          Valg foregår skriftlig hvis det foreligger mer enn ett forslag. Bare
          foreslåtte kandidater kan føres opp på stemmeseddelen. Skal flere
          velges ved samme avstemming, må stemmesedlene inneholde det antall
          forskjellige kandidater som det skal velges ved vedkommende
          avstemming. Stemmesedler som er blanke, eller som inneholder ikke
          foreslåtte kandidater, eller annet antall kandidater enn det som skal
          velges, teller ikke, og stemmene anses som ikke avgitt.
        </p>
        <p>
          Når et valg foregår enkeltvis og ingen kandidater oppnår mer enn
          halvparten av de avgitte stemmene, foretas bundet omvalg mellom de to
          kandidatene som har oppnådd flest stemmer. Er det ved omvalg
          stemmelikhet, avgjøres valget ved loddtrekning.
        </p>
        <p>
          Når det ved valg skal velges flere ved en avstemming, må alle for å
          anses valgt ha mer enn halvparten av de avgitte stemmene. Dette
          gjelder ikke ved valg av vararepresentanter. Hvis ikke tilstrekkelig
          mange kandidater har oppnådd dette i første omgang, anses de valgt som
          har fått mer enn halvparten av stemmene. Det foretas så bundet omvalg
          mellom de øvrige kandidatene, og etter denne avstemmingen anses de
          valgt som har fått flest stemmer. Er det ved omvalg stemmelikhet,
          avgjøres valget ved loddtrekning.
        </p>
        <h3>&sect;13 Valgkomite</h3>
        <p>
          Årsmøtet velger en valgkomité bestående av 2 medlemmer for 1 år av
          gangen. Innstilling på medlemmer til valgkomiteen fremmes av styret.
          Valgkomiteens oppgave er å motta og behandle eller selv å komme med
          forslag til styremedlemmer.
        </p>
        <h3>&sect;14 Årsmøtets oppgaver</h3>
        <p>
          Årsmøtet skal:
        </p>
        <ol>
          <li>Behandle årsmelding</li>
          <li>Behandle regnskap i revidert stand</li>
          <li>Behandle innkomne forslag</li>
          <li>Fastsette kontingent</li>
          <li>Vedta budsjett</li>
          <li>Utnevne styre (jf &sect;16), revisor og valgkomite (jf &sect;13).</li>
        </ol>
        <h3>&sect;15 Ekstraordinært årsmøte</h3>
        <p>
          Ekstraordinært årsmøte holdes når styret bestemmer det, eller minst en
          tredjedel av de stemmeberettigede medlemmene krever det.
        </p>
        <p>
          Det innkalles på samme måte som for ordinære årsmøter, med minst 14
          dagers varsel.
        </p>
        <p>
          Ekstraordinært årsmøte kan bare behandle og ta avgjørelse i de sakene
          som er kunngjort i innkallingen.
        </p>
        <h3>&sect;16 Styret</h3>
        <p>
          Klubben ledes av et styre på minimum 3 og maksimum 5 medlemmer som
          velges på årsmøtet. Hvert av de skandinaviske landene Norge, Sverige
          og Danmark har en kvoteplass hver i styret. Styrets sammensetning er
          leder, nestleder, økonomiansvarlig og opp til 2 ordinære
          styremedlemmer. Leder velges for 1 år av gangen, mens øvrige medlemmer
          velges for 2 år av gangen.
        </p>
        <p>
          Styret er klubbens høyeste myndighet mellom årsmøtene, og skal:
        </p>
        <ol>
          <li>Iverksette årsmøtets bestemmelser.</li>
          <li>
            Oppnevne etter behov komiteer/utvalg/personer for spesielle
            oppgaver som støtter klubbens formål og utarbeide instruks for
            disse.
          </li>
          <li>
            Administrere og føre nødvendig kontroll med klubbens økonomi i
            henhold til de til enhver tid gjeldende instrukser og
            bestemmelser.
          </li>
          <li>Representere Jack Army Norway utad.</li>
        </ol>
        <p>
          Styret skal holde møte når lederen eller et flertall av
          styremedlemmene forlanger det.
        </p>
        <p>
          Styret er vedtaksført når et flertall av styrets medlemmer er til
          stede. Vedtak fattes med flertall av de avgitte stemmene. Ved
          stemmelikhet teller møtelederens stemme dobbelt.
        </p>
        <h3>&sect;17 Vedtektsendring</h3>
        <p>
          Endringer i disse vedtekter kan kun foretas på ordinært eller
          ekstraordinært årsmøte etter å ha vært på sakslisten. Dette krever 2/3
          flertall av de avgitte stemmene.
        </p>
        <h3>&sect;18 Oppløsning</h3>
        <p>Denne bestemmelsen kan ikke endres.</p>
        <p>
          Oppløsning av Jack Army Scandinavia kan bare behandles på ordinært
          årsmøte. Blir oppløsning vedtatt med minst 2/3 flertall, innkalles
          ekstraordinært årsmøte 3 måneder senere.
        </p>
        <p>
          Sammenslutning med andre foreninger anses ikke som oppløsning av
          klubben. Vedtak om sammenslutning og nødvendige vedtektsendringer i
          tilknytning til dette treffes i samsvar med bestemmelsene om
          vedtektsendring, jf. &sect;17.
        </p>
      </article>
    </Layout>
  );
}
