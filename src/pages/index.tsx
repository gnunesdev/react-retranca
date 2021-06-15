import { HomeContainer } from "./../styles/pages/home";

import { getPostsFilterdByTag, getPostsTest } from "../lib/posts";

import { FormEmail } from "../components/FormEmail";
import { MainPosts } from "../components/MainPosts";
import { RecentPosts } from "../components/RecentPosts";
import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface HomeProps {
  mainPosts: [any];
  recentPosts: [any];
}

export default function Home({ mainPosts, recentPosts }: HomeProps) {
  const mainTitleRef = useRef(null);

  const mainPostTitleRef = useRef(null);
  const mainPostsContainerRef = useRef(null);

  const recentPostsTitleRef = useRef(null);
  const recentPostsContainerRef = useRef(null);

  function handleCreateInitialAnimate() {
    gsap.from(mainTitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.5,
    });

    // MainPosts
    gsap
      .timeline({
        scrollTrigger: {
          // @ts-ignore
          trigger: mainPostTitleRef.current,
          start: "top 75%",
        },
      })
      .from(mainPostTitleRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "ease",
      })
      .from(mainPostsContainerRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "ease",
      });

    // PostsRecentes
    gsap
      .timeline({
        scrollTrigger: {
          //@ts-ignore
          trigger: recentPostsTitleRef.current,
          start: "top 75%",
        },
      })
      .from(recentPostsTitleRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "ease",
      })
      .from(recentPostsContainerRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "ease",
      });
  }

  useEffect(() => {
    handleCreateInitialAnimate();
  }, []);

  return (
    <HomeContainer>
      <div className="home__intro">
        <div className="home__intro-content" ref={mainTitleRef}>
          <h1>.retranca.</h1>
          <p>
            Essa é uma descrição bacana sobre o retranca, tuti você deve pensar
            em um texto bacana pois eu sou programador o escritor aqui é tu tmj
          </p>
        </div>
      </div>
      <div className="home__section has--container">
        <div className="home__section-container" id="teste">
          <h2 className="home__section-title" ref={mainPostTitleRef}>
            .Postagens principais
          </h2>
          <div ref={mainPostsContainerRef}>
            <MainPosts posts={mainPosts}></MainPosts>
          </div>
        </div>
      </div>
      <div className="home__section has--background">
        <div className="home__section-container">
          <h2 className="home__section-title" ref={recentPostsTitleRef}>
            .Postagens recentes
          </h2>
          <div ref={recentPostsContainerRef}>
            <RecentPosts posts={recentPosts}></RecentPosts>
          </div>
        </div>
      </div>
      <div className="home__section has--container">
        <FormEmail></FormEmail>
      </div>
    </HomeContainer>
  );
}

export const getStaticProps = async () => {
  try {
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
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
};
