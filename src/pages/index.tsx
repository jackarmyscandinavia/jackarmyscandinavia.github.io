import Head from 'next/head';

import MoreStories from 'src/components/MoreStories';
import FeaturedPost from 'src/components/FeaturedPost';
import Layout from 'src/components/DefaultLayout';
import { getAllPosts } from 'src/lib/api';
import Post from 'src/interfaces/post';

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const featured = allPosts[0];
  const rest = allPosts.slice(1);
  return (
    <Layout>
      <Head>
        <title>{`Jack Army Scandinavia`}</title>
      </Head>
      {featured && (
        <FeaturedPost
          title={featured.title}
          coverImage={featured.coverImage}
          date={featured.date}
          author={featured.author}
          slug={featured.slug}
          excerpt={featured.excerpt}
        />
      )}
      {rest.length > 0 && <MoreStories posts={rest} />}
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
