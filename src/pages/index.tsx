import React from 'react';
import Head from 'next/head';

import Layout from 'src/components/DefaultLayout';
import { getAllPosts } from 'src/lib/api';
import Post from 'src/interfaces/post';
import PostPreview from 'src/components/PostPreview';

import style from 'src/styles/pages/index.module.scss';

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <Layout className={style.index}>
      <Head>
        <title>{`Jack Army Scandinavia | Swansea City Supporterklubb`}</title>
      </Head>
      {allPosts.map((post) => (
        <PostPreview
          className={style.postPrev}
          key={post.slug}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          slug={post.slug}
          excerpt={post.excerpt}
        />
      ))}
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
};
