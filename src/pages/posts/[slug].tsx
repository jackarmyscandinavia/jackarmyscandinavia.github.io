import React from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';

import Post from 'src/components/Post';
import Layout from 'src/components/DefaultLayout';
import { getPostBySlug, getAllPosts } from 'src/lib/api';
import markdownToHtml from 'src/lib/markdownToHtml';
import type PostType from 'src/interfaces/post';

import details from 'data/clubdetails.json';

type Props = {
  post: PostType;
};

export default function PostPage({ post }: Props) {
  const router = useRouter();
  const defaultTitle = `${details.name} | ${details.shortDescription}`;

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <Head>
        <title>{defaultTitle}</title>
      </Head>
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <Post
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          content={post.content}
          ogImageUrl={post.ogImage.url}
          embeddedYouTube={post.embeddedYouTube}
        />
      )}
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'embeddedYouTube',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
