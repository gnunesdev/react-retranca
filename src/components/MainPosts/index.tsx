import gsap from "gsap";
import { useEffect, useRef } from "react";
import { MainPostsContainer, PostContainer } from "./styles";
interface MainPostsProps {
  posts: Array<Post>;
}
interface Post {
  id: string;
  feature_image: string;
  slug: string;
  published_at: string;
  title: string;
  excerpt: string;
}

export function MainPosts({ posts }: MainPostsProps) {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.from(contentRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      // scrollTrigger: "#content",
    });
  }, []);

  return (
    <MainPostsContainer ref={contentRef} id="#content">
      {posts.map((post) => (
        <PostContainer postImg={post.feature_image} key={post.id}>
          <a href={`/post/${post.slug}`}>
            <header>
              <time>
                {new Intl.DateTimeFormat("pt-BR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }).format(new Date(post.published_at))}
              </time>
            </header>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </a>
        </PostContainer>
      ))}
    </MainPostsContainer>
  );
}
