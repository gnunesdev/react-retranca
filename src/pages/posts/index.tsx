import { PaginationProvider } from "../../context/usePaginationContext";
import { getPosts } from "../../lib/posts";
import { Container } from "./styles";
import ListPosts from "./ListPosts";
import { PaginationSettings } from "./PaginationSettings";
import { PostsProvider } from "../../context/usePostsContext";
import { useState } from "react";
import { FilterSettings } from "./FilterSettings";

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
  return (
    <PaginationProvider qtyItemsToShow={6} items={posts}>
      <PostsProvider postsFetched={posts}>
        <Container>
          <FilterSettings></FilterSettings>
          <ListPosts></ListPosts>
          <PaginationSettings></PaginationSettings>
        </Container>
      </PostsProvider>
    </PaginationProvider>
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
