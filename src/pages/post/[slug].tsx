import { useContext, useEffect, useRef } from "react";
import { getSinglePost, getPosts } from "../../lib/posts";
import { PostContainer } from "./styles";

import { gsap } from "gsap";

import { DiscussionEmbed } from "disqus-react";
import { ThemeContext } from "styled-components";

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
  tags: [{ id: string; name: string }];
  authors: [{ name: string; profile_image: string }];
}

export default function Post({ post }: PostPageProps) {
  const containerRef = useRef("");

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
  console.log("theme rendered", themeContext);

  return (
    <PostContainer ref={containerRef}>
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
            url: `http://localhost:3000/post/${post.slug}`,
            identifier: post.id,
            title: post.title,
            language: "pt_BR",
          }}
          fakeTheme={themeContext}
        />
      </div>
    </PostContainer>
  );
}

export async function getStaticPaths() {
  const posts = await getPosts();

  const paths = posts.map((post: Post) => ({
    params: { slug: post.slug },
  }));

  // { fallback: false } means posts not found should 404.
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const post = await getSinglePost(context.params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
  };
}
