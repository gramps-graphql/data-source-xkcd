import casual from 'casual';

export default {
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
};
