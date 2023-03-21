import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';

import type Author from 'src/interfaces/author';
import { formatDate } from 'src/lib/date';

import style from 'src/styles/components/PostPreview.module.scss';

type Props = {
  className?: string;
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({
  className,
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <section className={cn(className, style.postPreview)}>
      <Link
        className={style.imageLink}
        as={`/posts/${slug}`}
        href="/posts/[slug]"
        aria-label={title}
      >
        <Image
          className={style.image}
          title={title}
          src={coverImage}
          width={420}
          height={250}
          alt={title}
          sizes={'(min-width: 40rem) 300px, 100vw'}
        />
      </Link>
      <h3 className={style.title}>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          {title}
        </Link>
      </h3>
      <span className={style.meta}>
        {formatDate(date)}, {author.name}
      </span>
      <p className={style.excerpt}>{excerpt}</p>
    </section>
  );
};

export default PostPreview;
