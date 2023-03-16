import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import webheader from 'static/Jack-Army-Scandinavia-Black.png';
import style from 'styles/components/header.module.scss';

type HeaderProps = {
  className?: string;
};

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn(className, style.header)}>
      <Link href="/" className="hover:underline">
        <Image
          className={style.logo}
          src={webheader}
          alt="Jack Army Scandinavia Logo"
          height={160}
        />
        <h1 className={style.title}>Jack Army Scandinavia</h1>
        <h2 className={style.subtitle}>
          Official Swansea City Supporters Club
        </h2>
      </Link>
    </header>
  );
};

export default Header;
