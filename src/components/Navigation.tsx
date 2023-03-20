import Link from 'next/link';
import cn from 'classnames';

import style from 'src/styles/components/Navigation.module.scss';
import CloseIcon from 'src/components/icons/CloseIcon';

type NavigationMenuListProps = {
  className?: string;
};

const NavigationMenuList = ({ className }: NavigationMenuListProps) => {
  return (
    <ul className={cn(style.menu, className)}>
      <li className={style.item}>
        <Link href="/">{'Hjem'}</Link>
      </li>
    </ul>
  );
};

type NavigationProps = {
  className?: string;
  isOpen: boolean;
  onClose?: () => void;
};

export const Navigation = ({ className, isOpen, onClose }: NavigationProps) => {
  return (
    <nav className={cn(className, style.navigationWrapper)}>
      <div className={cn(style.navigation, isOpen && style.open)}>
        <ul className={style.menu}>
          <li className={style.item}>
            <Link href="/">{'Hjem'}</Link>
          </li>
          <li className={style.item}>
            <Link href="/about">{'Om oss'}</Link>
          </li>
        </ul>
        <CloseIcon
          className={style.close}
          onClick={() => onClose && onClose()}
        />
      </div>
    </nav>
  );
};

export default Navigation;