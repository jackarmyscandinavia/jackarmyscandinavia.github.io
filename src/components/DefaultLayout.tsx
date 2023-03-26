import React, { useState } from 'react';
import cn from 'classnames';

import Header from 'src/components/Header';
import Footer from 'src/components/footer';
import Meta from 'src/components/meta';
import Navigation from 'src/components/Navigation';

import style from 'src/styles/components/DefaultLayout.module.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ children, className }: Props) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <section className={cn(className, style.layout)}>
      <Meta />
      <Header
        className={style.header}
        onMenuIconClick={() => setMenuOpen(!isMenuOpen)}
      />
      <Navigation
        className={style.nav}
        isOpen={isMenuOpen}
        onClose={() => setMenuOpen(false)}
      />
      <main className={style.main}>{children}</main>
      <Footer className={style.footer} />
    </section>
  );
};

export default Layout;
