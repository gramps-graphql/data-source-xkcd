export default {
  Query: {
    getLatestComic: (_, __, context) =>
      new Promise((resolve, reject) => {
        context
          .getLatestComic()
          .then(resolve)
          .catch(reject);
      }),
    getComicById: (_, { id }, context) =>
      new Promise((resolve, reject) => {
        context
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
