import { GrampsError } from '@gramps/errors';
import { GraphQLModel } from '@gramps/gramps-express';

export default class XKCDModel extends GraphQLModel {
  /**
   * Loads the latest xkcd comic.
   * @return {Promise}     resolves with the loaded comic data
   */
  getLatestComic() {
    return this.connector.get(`/info.0.json`).catch(res =>
      this.throwError(res.error, {
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
    return this.connector.get(`/${id}/info.0.json`).catch(res => {
      const description =
        res.statusCode >= 400 && res.statusCode < 500
          ? 'Comic not found'
          : 'Could not load the given xkcd comic';

      return this.throwError(false, {
        statusCode: res.statusCode,
        targetEndpoint: `${this.connector.apiBaseUri}/${id}/info.0.json`,
        data: { id },
        description,
      });
    });
  }

  /**
   * Throws a custom GrAMPS error.
   * @param  {Object}  error            the API error
   * @param  {Object?} customErrorData  additional error data to display
   * @return {void}
   */
  throwError(
    {
      statusCode = 500,
      message = 'Something went wrong.',
      targetEndpoint = null,
    } = {},
    customErrorData = {},
  ) {
    const defaults = {
      statusCode,
      targetEndpoint,
      errorCode: `${this.constructor.name}_Error`,
      description: message,
      graphqlModel: this.constructor.name,
      docsLink: 'https://ibm.biz/gramps-data-source-tutorial',
    };

    throw GrampsError({
      ...defaults,
      ...customErrorData,
    });
  }
}
