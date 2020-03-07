import bodyParser from 'koa-bodyparser';
import { InvalidRequestBodyFormatError } from '../errors';

function bodyParserMiddleware(options = {}) {
  return bodyParser({
    ...options,
    onerror: () => {
      throw new InvalidRequestBodyFormatError(
        'Invalid format is detected in the request body',
      );
    },
  });
}

export default bodyParserMiddleware;
