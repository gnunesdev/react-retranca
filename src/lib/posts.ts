import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: process.env.CURRENT_URL as string,
  key: process.env.CONTENT_API_KEY as string,
  version: "v3",
});

export async function getPosts() {
  return await api.posts
    .browse({
      include: ["tags", "authors"],
      limit: "all",
    })
    .catch((err: Error) => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug: string) {
  console.log("abc");
  return await api.posts
    .read({
      // @ts-ignore
      include: ["tags", "authors"],
      slug: postSlug,
    })
    .catch((err: Error) => {
      console.log("dce");
      console.error(err);
    });
}

export async function getPostsFilterdByTag(filter: string, limit = 6) {
  return await api.posts.browse({
    limit: String(limit),
    include: ["tags", "authors"],
    filter: `tag:${filter}`,
  });
}

export async function getPostsLimited(limit = 6) {
  return await api.posts.browse({
    limit: String(limit),
    include: ["tags", "authors"],
  });
}

export async function getPostsTest(limit = 5) {
  return await api.posts.browse({
    limit: String(limit),
    filter: `tag:-main`,
    include: ["tags", "authors"],
  });
}
