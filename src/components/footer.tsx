import React from 'react';
import Link from 'next/link';
import cn from 'classnames';

import details from 'data/clubdetails.json';
import style from 'src/styles/components/footer.module.scss';

type FooterProps = {
  className?: string;
};

const Footer: React.FunctionComponent<FooterProps> = ({ className }: FooterProps) => {
  return (
    <footer className={cn(className, style.footer)}>
      <section className={style.basedata}>
        <span>{String.fromCodePoint(0x000a9)} 2023</span>
        <span>{`${details.name}`}</span>
        <span>{`Org.nr.: ${details.orgnr}`}</span>
      </section>
      <section className={style.address}>
        <span>{details.address.first}</span>
        <span>{!!details.address.second ? details.address.second : undefined}</span>
        <span>
          {details.address.zip} {details.address.city}
        </span>
        <span>{details.address.country.toUpperCase()}</span>
        <span>{details.email}</span>
        <span>Tlf.: {details.phone}</span>
      </section>
      <section className={style.conditions}>
        <Link href="/statutes">{'Vedtekter'}</Link>
        <Link href="/conditions">{'Betingelser for medlemskap'}</Link>
      </section>
    </footer>
  );
};

export default Footer;
