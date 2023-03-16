import Avatar from 'components/avatar';
import CoverImage from 'components/cover-image';
import Link from 'next/link';
import type Author from 'interfaces/author';
import { formatDate } from 'lib/date';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <div>
      <div>
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          {title}
        </Link>
      </h3>
      <div>{formatDate(date)}</div>
      <p>{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
};

export default PostPreview;
