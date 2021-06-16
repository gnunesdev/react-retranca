import { useContext, useEffect, useRef } from "react";
import { getSinglePost, getPosts } from "../../services/ghost";
import { PostContainer } from "./../../styles/pages/post";

import { gsap } from "gsap";

import { DiscussionEmbed } from "disqus-react";
import { ThemeContext } from "styled-components";
import { GetStaticProps } from "next";

interface PostPageProps {
  post: Post;
}

interface Post {
  id: string;
  slug: string;
  title: string;
  published_at: string;
  updated_at: string;
  excerpt: string;
  feature_image: string;
  authors: [{ name: string; profile_image: string }];
  html: any;
}

export default function Post({ post }: PostPageProps) {
  const containerRef = useRef(null);

  function createAnimation() {
    gsap.from(containerRef.current, {
      opacity: 0,
      duration: 1,
      x: 20,
      ease: "ease",
    });
  }

  useEffect(() => {
    createAnimation();
  }, []);

  const themeContext = useContext(ThemeContext);

  return (
    <PostContainer>
      <div ref={containerRef}>
        <div className="post__header">
          <h1>{post.title}</h1>
          <p className="post__subtitle">{post.excerpt}</p>
          <div className="post__credits">
            <img
              src={post.authors[0].profile_image}
              alt={`Foto de perfil de ${post.authors[0].name}`}
            />
            <div>
              <span>
                Publicado por <strong>{post.authors[0].name}</strong>
              </span>
              <div>
                <time dateTime={post.published_at}>
                  {new Intl.DateTimeFormat("pt-BR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    minute: "numeric",
                    hour: "numeric",
                  }).format(new Date(post.published_at))}
                </time>
                <time dateTime={post.updated_at}>
                  {" "}
                  | Última vez atualizado:{" "}
                  {new Intl.DateTimeFormat("pt-BR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }).format(new Date(post.updated_at))}
                </time>
              </div>
            </div>
          </div>
          <span></span>
        </div>
        <div
          className="post__content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <div className="post__footer">
          <DiscussionEmbed
            shortname="retranca-1"
            config={{
              url: `${process.env.CURRENT_URL}/post/${post.slug}`,
              identifier: post.id,
              title: post.title,
              language: "pt_BR",
            }}
            // @ts-ignore
            fakeTheme={themeContext}
          />
        </div>
      </div>
    </PostContainer>
  );
}

export async function getStaticPaths() {
  const posts = await getPosts();

  //@ts-ignore
  const paths = posts.map((post: Post) => ({
    params: { slug: post.slug },
  }));

  // { fallback: false } means posts not found should 404.
  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async (context: any) => {
  try {
    const post = await getSinglePost(context.params.slug);

    if (!post) {
      return {
        notFound: true,
      };
    }

    return {
      props: { post },
    };
  } catch (error) {
    console.error(error);

    return {
      notFound: true,
    };
  }
};
