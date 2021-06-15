import { PaginationProvider } from "../../context/usePaginationContext";
import { getPosts } from "../../lib/posts";
import { Container } from "./../../styles/pages/posts";
import ListPosts from "./../../components/ListPosts";
import { PaginationSettings } from "./../../components/PaginationSettings";
import { PostsProvider } from "../../context/usePostsContext";
import { useEffect, useRef } from "react";
import { FilterSettings } from "../../components/FilterSettings";
import gsap from "gsap";

interface PostsProps {
  posts: Array<Post>;
}

interface Post {
  id: string;
  title: string;
  published_at: string;
  excerpt: string;
  tags: [{ id: string; name: string }];
  authors: [{ name: string; profile_image: string }];
}

export default function Posts({ posts }: PostsProps) {
  const containerRef = useRef(null);

  function handleInitialAnimation() {
    gsap.from(containerRef.current, {
      opacity: 0,
      duration: 1,
      x: 20,
      ease: "ease",
    });
  }

  useEffect(() => {
    handleInitialAnimation();
  }, []);

  return (
    <PaginationProvider qtyItemsToShow={6} items={posts}>
      <PostsProvider postsFetched={posts}>
        <Container ref={containerRef}>
          <FilterSettings></FilterSettings>
          <ListPosts></ListPosts>
          <PaginationSettings></PaginationSettings>
        </Container>
      </PostsProvider>
    </PaginationProvider>
  );
}

export const getStaticProps = async () => {
  try {
    const posts = await getPosts();

    if (!posts) {
      return {
        notFound: true,
      };
    }

    return {
      props: { posts },
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
};
