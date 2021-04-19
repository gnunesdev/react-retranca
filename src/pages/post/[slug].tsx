import { getSinglePost, getPosts } from '../../lib/posts';
import { PostContainer } from './styles';

interface PostPageProps {
  post: Post;
}

interface Post {
  title: string;
  html: string;
}

export default function Post({ post }: PostPageProps) {
  return (
    <PostContainer>
      <div className="post__header">
        <h1>{post.title}</h1>
        <p className="post__subtitle">{post.excerpt}</p>
        <div className="post__credits">
          <img
            src={post.authors[0].profile_image}
            alt={`Foto de perfil de ${post.authors[0].name}`}
          />
          <div>
            <span>
              Publicado por <strong>{post.authors[0].name}</strong>
            </span>
            <div>
              <time>
                {new Intl.DateTimeFormat('pt-BR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                  minute: 'numeric',
                  hour: 'numeric',
                }).format(new Date(post.published_at))}
              </time>
              <time>
                {' '}
                | Última vez atualizado:{' '}
                {new Intl.DateTimeFormat('pt-BR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                }).format(new Date(post.updated_at))}
              </time>
            </div>
          </div>
        </div>
        <span></span>
      </div>
      <div
        className="post__content"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </PostContainer>
  );
}

export async function getStaticPaths() {
  const posts = await getPosts();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  // { fallback: false } means posts not found should 404.
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const post = await getSinglePost(context.params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
  };
}
