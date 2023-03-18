import Avatar from './avatar';
import CoverImage from 'src/components/cover-image';
import type Author from 'src/interfaces/author';
import { formatDate } from 'src/lib/date';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <h1>{title}</h1>
      <span>{formatDate(date)}</span>
      <Avatar name={author.name} picture={author.picture} />
      <CoverImage title={title} src={coverImage} />
    </>
  );
};

export default PostHeader;
