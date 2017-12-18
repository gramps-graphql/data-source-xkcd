import mocks from '../src/mocks';
import expectMockFields from './helpers/expectMockFields';

describe('XKCD mock resolvers', () => {
  describe('XKCD_Comic', () => {
    const mockResolvers = mocks.XKCD_Comic();

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
