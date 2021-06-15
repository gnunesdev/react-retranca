import Link from "next/link";

import { usePagination } from "../../context/usePaginationContext";
import { Container } from "./styles";

interface Post {
  id: string;
  slug: string;
  title: string;
  published_at: string;
  excerpt: string;
  tags: [{ id: string; name: string }];
  authors: [{ name: string; profile_image: string }];
}

export default function ListPosts() {
  const { itemsToShow } = usePagination();

  return (
    <Container>
      <ul>
        {itemsToShow.length ? (
          itemsToShow.map((post: Post) => (
            <Link href={`/post/${post.slug}`} key={post.id}>
              <li className="post__container" key={post.id}>
                <div className="post__head">
                  <img
                    src={post.authors[0].profile_image}
                    alt={`Foto de perfil de ${post.authors[0].name}`}
                  />
                  <div className="posts__head-description">
                    <time>
                      {new Intl.DateTimeFormat("pt-BR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }).format(new Date(post.published_at))}
                    </time>
                    <h2>{post.title}</h2>
                  </div>
                </div>
                <div className="post__content">
                  <p>{post.excerpt}</p>
                  <ul className="post__tags">
                    {post.tags.map((tag) => (
                      <li key={tag.id}>{tag.name}</li>
                    ))}
                  </ul>
                </div>
              </li>
            </Link>
          ))
        ) : (
          <h2>Não publicações disponíveis com esses filtros :(</h2>
        )}
      </ul>
    </Container>
  );
}
