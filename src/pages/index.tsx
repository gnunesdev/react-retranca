import { HomeContainer } from './styles';
import { MainPosts } from '../components/MainPosts';

import { getPostsFiltered } from '../lib/posts';
import { FormEmail } from '../components/FormEmail';

interface HomeProps {
  posts: [any];
}

export default function Home({ posts }: HomeProps) {
  return (
    <HomeContainer>
      <div className="home__intro">
        <div className="home__intro-content">
          <h1>.retranca.</h1>
          <p>Essa é uma descrição bacana sobre o retranca, tuti você deve pensar em um texto bacana pois eu sou programador o escritor aqui é tu tmj</p>
        </div>
      </div>
      <div className="home__section has--container">
        <h2>.Postagens principais</h2>
        <MainPosts posts={posts}></MainPosts>
      </div>
      <div className="home__section has--container">
        <FormEmail></FormEmail>
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
