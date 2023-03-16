import Header from 'components/header';
import Footer from 'components/footer';
import Meta from 'components/meta';
import style from 'styles/components/layout.module.scss';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <section className={style.layout}>
      <Meta />
      <Header className={style.header} />
      <main className={style.main}>{children}</main>
      <Footer className={style.footer} />
    </section>
  );
};

export default Layout;
