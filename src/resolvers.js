export default {
  Query: {
    getLatestComic: (_, __, context) =>
      new Promise((resolve, reject) => {
        context.XKCD
          .getLatestComic()
          .then(resolve)
          .catch(reject);
      }),
    getComicById: (_, { id }, context) =>
      new Promise((resolve, reject) => {
        context.XKCD
          .getComicById(id)
          .then(resolve)
          .catch(reject);
      }),
  },
  XKCD_Comic: {
    // The link is often empty, so build one if it’s not returned.
    link: data => data.link || `https://xkcd.com/${data.num}/`,
  },
};
