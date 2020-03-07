import { debug } from 'debug';
import {
  UnknownEndpointError,
  InvalidRequestBodyFormatError,
  NotFoundError,
} from '../errors';
import Response from '../utils/response';

const err = debug('koa:error');

async function errorHandler(ctx, next) {
  try {
    await next();

    if (!ctx.body && (!ctx.status || ctx.status === 404)) {
      return Response.notFound(
        ctx,
        new UnknownEndpointError('The requested endpoint does not exist.'),
      );
    }
  } catch (error) {
    err('An error occured: %s', error.name);
    if (error instanceof InvalidRequestBodyFormatError) {
      Response.unprocessableEntity(ctx, error);
    } else if (error instanceof NotFoundError) {
      Response.notFound(ctx, error);
    } else {
      Response.internalServerError(ctx, error);
    }
    ctx.app.emit('error', error, ctx);
  }
}

export default errorHandler;
