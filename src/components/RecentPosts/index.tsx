import { EllipsisText } from "../EllipsisText";
import { RecentPostsContainer } from "./styles";

interface Post {
  id: string;
  feature_image: string;
  slug: string;
  published_at: string;
  title: string;
  excerpt: string;
}

interface RecentPostsProps {
  posts: [Post];
}

export function RecentPosts({ posts }: RecentPostsProps) {
  return (
    <RecentPostsContainer>
      <ul className="recent-post">
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`/post/${post.slug}`}>
              <img src={post.feature_image} alt="" />
              <div>
                <h3>{post.title}</h3>
                <p>
                  <EllipsisText text={post.excerpt} maxLength={30} />
                </p>
                <time>
                  {new Intl.DateTimeFormat("pt-BR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }).format(new Date(post.published_at))}
                </time>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </RecentPostsContainer>
  );
}
