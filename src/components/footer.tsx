import React from 'react';
import cn from 'classnames';

import style from 'src/styles/components/footer.module.scss';

type FooterProps = {
  className?: string;
};

const Footer: React.FunctionComponent<FooterProps> = ({
  className,
}: FooterProps) => {
  return (
    <footer className={cn(className, style.footer)}>
      {`${String.fromCodePoint(0x000a9)} 2023 Jack Army Scandinavia`}
    </footer>
  );
};

export default Footer;
