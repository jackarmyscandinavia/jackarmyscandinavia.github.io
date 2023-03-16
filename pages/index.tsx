import MoreStories from 'components/more-stories';
import FeaturedPost from 'components/FeaturedPost';
import Layout from 'components/layout';
import { getAllPosts } from 'lib/api';
import Head from 'next/head';
import Post from 'interfaces/post';

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const featured = allPosts[0];
  const rest = allPosts.slice(1);
  return (
    <>
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
    </>
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
