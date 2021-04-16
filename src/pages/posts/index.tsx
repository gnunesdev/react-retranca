import { PaginationProvider } from '../../hooks/usePaginationContext';
import { getPosts } from '../../lib/posts';
import { Container } from './styles';
import ListPosts from './ListPosts';

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
      <Container>
        <ListPosts></ListPosts>
      </Container>
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
