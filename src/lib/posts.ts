import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
  url: 'http://localhost:2368',
  key: '447903bdce0e0718508a919df3',
  version: 'v3',
});

export async function getPosts() {
  return await api.posts
    .browse({
      include: 'tags,authors',
      limit: 'all',
    })
    .catch((err: Error) => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug: string) {
  return await api.posts
    .read({
      slug: postSlug,
      include: 'tags,authors',
    })
    .catch((err: Error) => {
      console.error(err);
    });
}

export async function getPostsFiltered(filter: string, limit = 6) {
  return await api.posts.browse({
    limit: String(limit),
    include: 'tags,authors',
    filter: `tag:${filter}`,
  });
}
