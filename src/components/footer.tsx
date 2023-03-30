import React from 'react';
import Link from 'next/link';
import cn from 'classnames';

import details from 'data/clubdetails.json';
import style from 'src/styles/components/footer.module.scss';

type FooterProps = {
  className?: string;
};

const Footer: React.FunctionComponent<FooterProps> = ({
  className,
}: FooterProps) => {
  return (
    <footer className={cn(className, style.footer)}>
      <section className={style.address}>
        {`${String.fromCodePoint(0x000a9)} 2023 ${details.name}`}
      </section>
      <section className={style.conditions}>
        <Link href="/statutes">{'Vedtekter'}</Link>
      </section>
    </footer>
  );
};

export default Footer;
