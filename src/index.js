import typeDefs from './schema.graphql';
import Connector from './connector';
import Model from './model';
import resolvers from './resolvers';
import mocks from './mocks';

/*
 * For more information on the GrAMPS data sources, see
 * https://ibm.biz/gramps-data-source-tutorial
 */
export default {
  namespace: 'XKCD',
  context: new Model({ connector: new Connector() }),
  typeDefs,
  resolvers,
  mocks,
};
