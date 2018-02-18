export default {
  Query: {
    getLatestComic: (_, __, context) => context.model.getLatestComic(),
    getComicById: (_, { id }, context) => context.model.getComicById(id),
  },
  XKCD_Comic: {
    // The link is often empty, so build one if it’s not returned.
    link: data => data.link || `https://xkcd.com/${data.num}/`,
  },
};
