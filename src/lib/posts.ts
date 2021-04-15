import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
  url: 'http://localhost:2368',
  key: '0c4b542a15945a697e1bd412c0',
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
