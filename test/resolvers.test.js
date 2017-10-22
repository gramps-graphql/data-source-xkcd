import resolvers from '../src/resolvers';
import expectMockFields from './helpers/expectMockFields';

describe('XKCD resolvers', () => {
  it('returns valid resolvers', () => {
    expect(Object.keys(resolvers)).toEqual([
      'queryResolvers',
      'dataResolvers',
      'mockResolvers',
    ]);
  });

  describe('queryResolvers', () => {
    const mockContext = {
      XKCD: {
        // Mock a response so we can actually test it.
        getLatestComic: () => Promise.resolve('latest'),
        // For testing, we mock the model to simply return the ID.
        getComicById: id => Promise.resolve(id),
      },
    };

    describe('getLatestComic()', () => {
      it('loads the latest comic', () => {
        expect.assertions(1);

        return expect(
          resolvers.queryResolvers.getLatestComic(null, null, mockContext),
        ).resolves.toEqual('latest');
      });
    });

    describe('getComicById()', () => {
      it('loads a comic by its ID', () => {
        expect.assertions(1);

        return expect(
          resolvers.queryResolvers.getComicById(
            null,
            { id: 1234 },
            mockContext,
          ),
        ).resolves.toEqual(1234);
      });
    });
  });

  describe('dataResolvers', () => {
    describe('XKCD_Comic', () => {
      const resolver = resolvers.dataResolvers.XKCD_Comic;

      it('creates a link if none is provided', () => {
        expect(resolver.link({ num: 1234 })).toEqual('https://xkcd.com/1234/');
      });
    });
  });

  describe('mockResolvers', () => {
    describe('XKCD_Comic', () => {
      const mockResolvers = resolvers.mockResolvers.XKCD_Comic();

      expectMockFields(mockResolvers, [
        'num',
        'alt',
        'title',
        'safe_title',
        'img',
        'transcript',
        'year',
        'month',
        'day',
        'link',
        'news',
      ]);
    });
  });
});
