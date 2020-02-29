import { NotFoundError, DBError } from 'objection';

async function errorHandler(ctx, next) {
  try {
    await next();
  } catch (error) {
    if (error instanceof NotFoundError) {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        type: 'NotFound',
        message: error.message,
      };
    } else if (error instanceof DBError) {
      ctx.status = 500;
      ctx.body = {
        status: 'error',
        type: 'DatabaseError',
        message: error.message,
      };
    } else {
      ctx.status = error.status || error.statusCode || 500;
      ctx.body = {
        status: 'error',
        type: error.type,
        message: error.message,
      };
    }

    ctx.app.emit('error', error, ctx);
  }
}

export default errorHandler;
