import { GraphQLConnector } from '@gramps/rest-helpers';
import Connector from '../src/connector';

const connector = new Connector();

describe(`XKCDConnector`, () => {
  it('inherits the GraphQLConnector class', () => {
    expect(connector).toBeInstanceOf(GraphQLConnector);
  });

  it('uses the appropriate URL', () => {
    expect(connector.apiBaseUri).toBe(`https://xkcd.com`);
  });
});
