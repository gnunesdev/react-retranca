import { HomeContainer } from "./styles";

import { getPostsFilterdByTag, getPostsTest } from "../lib/posts";

import { FormEmail } from "../components/FormEmail";
import { MainPosts } from "../components/MainPosts";
import { RecentPosts } from "../components/RecentPosts";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface HomeProps {
  mainPosts: [any];
  recentPosts: [any];
}

export default function Home({ mainPosts, recentPosts }: HomeProps) {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
    });
  }, []);

  return (
    <HomeContainer ref={containerRef}>
      <div className="home__intro">
        <div className="home__intro-content" ref={titleRef}>
          <h1>.retranca.</h1>
          <p>
            Essa é uma descrição bacana sobre o retranca, tuti você deve pensar
            em um texto bacana pois eu sou programador o escritor aqui é tu tmj
          </p>
        </div>
      </div>
      <div className="home__section has--container">
        <div className="home__section-container">
          <h2 className="home__section-title">.Postagens principais</h2>
          <MainPosts posts={mainPosts}></MainPosts>
        </div>
      </div>
      <div className="home__section has--background">
        <div className="home__section-container">
          <h2 className="home__section-title">.Postagens mais recentes</h2>
          <RecentPosts posts={recentPosts}></RecentPosts>
        </div>
      </div>
      <div className="home__section has--container">
        <FormEmail></FormEmail>
      </div>
    </HomeContainer>
  );
}

export const getStaticProps = async () => {
  const mainPosts = await getPostsFilterdByTag("main", 3);
  const recentPosts = await getPostsTest(5);

  if (!mainPosts || !recentPosts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { mainPosts, recentPosts },
  };
};
