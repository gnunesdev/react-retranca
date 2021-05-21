import { createContext, ReactNode, useContext } from "react";
import { slugify } from "../utils/usefulFunctions";
import { usePagination } from "./usePaginationContext";

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
}

interface PostsContextData {
  handleSearchByName: (name: string) => void;
}

const PostsContext = createContext({} as PostsContextData);

export const PostsProvider = ({
  postsFetched,
  children,
}: PostsProviderProps) => {
  const { handleUpdateCurrentItems } = usePagination();

  function handleSearchByName(name: string) {
    const postsFiltered = postsFetched.filter((post: Post) => {
      return slugify(post.title).includes(slugify(name));
    });

    handleUpdateCurrentItems(postsFiltered);
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
