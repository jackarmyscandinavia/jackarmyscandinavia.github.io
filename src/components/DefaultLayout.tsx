import { useState } from 'react';

import Header from 'src/components/HeaderComponent';
import Footer from 'src/components/footer';
import Meta from 'src/components/meta';
import Navigation from 'src/components/Navigation';

import style from 'src/styles/components/DefaultLayout.module.scss';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <section className={style.layout}>
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
