import style from 'styles/components/avatar.module.scss';

import cn from 'classnames';

type Props = {
  className?: string;
  name: string;
  picture: string;
};

const Avatar = ({ className, name, picture }: Props) => {
  return (
    <div className={cn(className, style.avatar)}>
      <img src={picture} className={style.image} alt={name} />
      <div className={style.name}>{name}</div>
    </div>
  );
};

export default Avatar;
