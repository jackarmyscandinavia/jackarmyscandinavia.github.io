import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import logo from 'public/assets/images/Jack-Army-Scandinavia-Black.png';
import style from 'src/styles/components/Header.module.scss';
import MenuIcon from 'src/components/icons/MenuIcon';

type HeaderProps = {
  className?: string;
  onMenuIconClick?: () => void;
};

const Header = ({ className, onMenuIconClick }: HeaderProps) => {
  const onJoinClick = () => {
    window.open('http://eepurl.com/imVFDo', '_blank');
  };

  return (
    <header className={cn(className, style.headerWrapper)}>
      <div className={style.header}>
        <Link className={style.homelink} href="/">
          <div className={style.logowrapper}>
            <Image
              className={style.logo}
              src={logo}
              alt="Jack Army Scandinavia Logo"
              fill={true}
            />
          </div>
          <h1 className={style.title}>Jack Army Scandinavia</h1>
          <h2 className={style.subtitle}>
            Official Swansea City Supporters Club
          </h2>
        </Link>
        <button className={style.joinButton} onClick={onJoinClick}>
          Bli medlem!
        </button>
        <MenuIcon className={style.menuIcon} onClick={onMenuIconClick} />
      </div>
    </header>
  );
};

export default Header;
