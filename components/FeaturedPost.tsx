import style from 'styles/components/FeaturedPost.module.scss';

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

const FeaturedPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <section className={style.featured}>
      <CoverImage
        className={style.image}
        title={title}
        src={coverImage}
        slug={slug}
      />
      <div className={style.titleGroup}>
        <h2 className={style.title}>
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            {title}
          </Link>
        </h2>
        <span className={style.meta}>{`${formatDate(date)}, ${
          author.name
        }`}</span>
      </div>
      <p className={style.excerpt}>{excerpt}</p>
    </section>
  );
};

export default FeaturedPost;
