import { GraphQLModel, GrampsError } from '@gramps/gramps-express';

export default class XKCDModel extends GraphQLModel {
  /**
   * Loads the latest xkcd comic.
   * @return {Promise}     resolves with the loaded comic data
   */
  getLatestComic() {
    return this.connector.get(`/info.0.json`).catch(res =>
      this.throwError(res, {
        description: 'Could not load the latest xkcd comic',
      }),
    );
  }

  /**
   * Loads an xkcd comic by its ID.
   * @param  {String}  id  the ID of the comic to load
   * @return {Promise}     resolves with the loaded comic data
   */
  getComicById(id) {
    return this.connector.get(`/${id}/info.0.json`).catch(res =>
      this.throwError(res, {
        description: 'Could not load the given xkcd comic',
        data: { id },
      }),
    );
  }

  /**
   * Throws a custom GrAMPS error.
   * @param  {Object}  error            the API error
   * @param  {Object?} customErrorData  additional error data to display
   * @return {void}
   */
  throwError(error, customErrorData = {}) {
    const defaults = {
      statusCode: error.statusCode || 500,
      errorCode: `${this.constructor.name}_Error`,
      description: error.message || 'Something went wrong.',
      targetEndpoint: error.options ? error.options.uri : null,
      graphqlModel: this.constructor.name,
      docsLink: 'https://ibm.biz/gramps-data-source-tutorial',
    };

    throw GrampsError({
      ...defaults,
      ...customErrorData,
    });
  }
}
