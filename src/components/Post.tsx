
import Head from 'next/head';
import cn from 'classnames';

import type Author from 'src/interfaces/author';
import { formatDate } from 'src/lib/date';

import style from 'src/styles/components/Post.module.scss';
import markdownStyles from 'src/styles/components/markdown-styles.module.scss';

type PostProps = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
  content: string;
  ogImageUrl: string;
};

const Post = ({ title, coverImage, date, author, content, ogImageUrl }: PostProps) => {
  return (
    <article className={style.post}>
      <Head>
        <title>{`${title} - Jack Army Scandinavia`}</title>
        <meta property="og:image" content={ogImageUrl} />
      </Head>
      <h2 className={style.title}>
        {title}
      </h2>
      <div className={style.meta}>{formatDate(date)}, {author.name}</div>
      <img className={style.image} title={title} src={coverImage} />
      <div
        className={cn(style.content, markdownStyles.markdown)}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
};

export default Post;
