import { createContext, ReactNode, useContext } from "react";
import { slugify } from "../utils/usefulFunctions";

interface Post {
  id: string;
  title: string;
  published_at: string;
  excerpt: string;
  tags: [{ id: string; name: string }];
  authors: [{ name: string; profile_image: string }];
}

interface PostsProviderProps {
  children: ReactNode;
  postsFetched: Array<Post>;
  setCurrentPosts: (posts: Array<Post>) => void;
}

const PostsContext = createContext({});

export const PostsProvider = ({
  postsFetched,
  setCurrentPosts,
  children,
}: PostsProviderProps) => {
  function handleSearchByName(name: string) {
    const postsFiltered = postsFetched.filter((post: Post) =>
      slugify(post.title).includes(slugify(name))
    );

    setCurrentPosts(postsFiltered);
  }

  return (
    <PostsContext.Provider value={{ handleSearchByName }}>
      {children}
    </PostsContext.Provider>
  );
};

export function usePostsContext() {
  const context = useContext(PostsContext);

  return context;
}
