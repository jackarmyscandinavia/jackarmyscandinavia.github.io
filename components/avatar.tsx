import style from 'styles/components/avatar.module.scss';

type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className={style.avatar}>
      <img src={picture} className={style.image} alt={name} />
      <div className={style.name}>{name}</div>
    </div>
  )
}

export default Avatar
