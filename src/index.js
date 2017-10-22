import schema from './schema.graphql';
import resolvers from './resolvers';
import Connector from './connector';
import Model from './model';

/*
 * For more information on the GrAMPS data sources, see
 * https://ibm.biz/gramps-data-source-tutorial
 */
export default {
  context: 'XKCD',
  model: new Model({ connector: new Connector() }),
  schema,
  resolvers,
};
