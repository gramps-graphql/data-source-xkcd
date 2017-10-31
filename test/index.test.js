import dataSource from '../src';
import Model from '../src/model';

describe('Data Source: XKCD', () => {
  it('returns a namespace', () => {
    expect(dataSource.namespace).toBe('XKCD');
  });

  it('returns a model', () => {
    expect(dataSource.model).toBeInstanceOf(Model);
  });

  it('returns a schema', () => {
    expect(dataSource.schema).toBeTruthy();
  });

  it('returns a resolver object', () => {
    expect(dataSource.resolvers).toBeTruthy();
  });

  it('returns mock resolvers', () => {
    expect(dataSource.mocks).toBeTruthy();
  });
});
