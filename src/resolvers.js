import casual from 'casual';

export default {
  queryResolvers: {
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

  dataResolvers: {
    XKCD_Comic: {
      // The link is often empty, so build one if it’s not returned.
      link: data => data.link || `https://xkcd.com/${data.num}/`,
    },
  },

  mockResolvers: {
    XKCD_Comic: () => ({
      num: casual.integer(0, 1999),
      alt: casual.sentence,
      title: casual.title,
      safe_title: casual.title,
      img: 'https://imgs.xkcd.com/comics/cast_iron_pans.png',
      transcript: casual.sentences(2),
      year: casual.year,
      month: casual.month,
      day: casual.integer(1, 31),
      link: casual.url,
      news: '',
    }),
  },
};
