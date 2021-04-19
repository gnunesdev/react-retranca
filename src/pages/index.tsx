import { HomeContainer } from './styles';
import { MainPosts } from '../components/MainPosts';

import { getPostsFiltered } from '../lib/posts';

interface HomeProps {
  posts: [any];
}

export default function Home({ posts }) {
  return (
    <HomeContainer>
      <div className="home__section">
        <h2>.Postagens principais</h2>
        <MainPosts posts={posts}></MainPosts>
      </div>
    </HomeContainer>
  );
}

export const getStaticProps = async () => {
  const posts = await getPostsFiltered('main', 3);

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
  };
};
