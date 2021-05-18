import { PaginationProvider } from "../../context/usePaginationContext";
import { getPosts } from "../../lib/posts";
import { Container } from "./styles";
import ListPosts from "./ListPosts";
import { PaginationPosts } from "./PaginationSettings";
import { PostsProvider } from "../../context/usePostsContext";
import { useState } from "react";

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
  const [currentPosts, setCurrentPosts] = useState(posts);

  return (
    // <PostsProvider postsFetched={posts} setCurrentPosts={setCurrentPosts}>
    <PaginationProvider qtyItemsToShow={6} items={currentPosts}>
      <Container>
        <ListPosts></ListPosts>
        <PaginationPosts></PaginationPosts>
      </Container>
    </PaginationProvider>
    // </PostsProvider>
  );
}

export const getStaticProps = async () => {
  const posts = await getPosts();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
  };
};
