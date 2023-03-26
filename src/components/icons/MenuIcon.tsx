import React, { MouseEventHandler } from 'react';

type IconProps = {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

const MenuIcon = ({ className, onClick }: IconProps) => {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
  );
};

export default MenuIcon;
