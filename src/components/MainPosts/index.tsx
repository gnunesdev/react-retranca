import { isMobile } from "react-device-detect";
import { EllipsisText } from "../EllipsisText";

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
  return (
    <MainPostsContainer>
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
            {!isMobile ? (
              <p>{post.excerpt}</p>
            ) : (
              <p>
                <EllipsisText text={post.excerpt} maxLength={15} />
              </p>
            )}
          </a>
        </PostContainer>
      ))}
    </MainPostsContainer>
  );
}
