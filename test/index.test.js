import dataSource from '../src';
import Model from '../src/model';

describe('Data Source: XKCD', () => {
  it('returns a namespace', () => {
    expect(dataSource.namespace).toBe('XKCD');
  });

  it('returns its model as a context', () => {
    expect(dataSource.context).toBeTruthy();
  });

  it('returns typeDefs', () => {
    expect(dataSource.typeDefs).toBeTruthy();
  });

  it('returns a resolver object', () => {
    expect(dataSource.resolvers).toBeTruthy();
  });

  it('returns mock resolvers', () => {
    expect(dataSource.mocks).toBeTruthy();
  });
});
