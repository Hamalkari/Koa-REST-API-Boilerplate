const STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500,
};

const toResponse = (statusCode, params = {}) => {
  const { code = null, data = null, message = null } = params;

  if (statusCode < 400) {
    return {
      status: 'success',
      data,
      message,
    };
  }
  return {
    status: 'error',
    code,
    data,
    message,
  };
};

class Response {
  static success(ctx, params = {}) {
    ctx.status = params.statusCode || ctx.status;
    if (ctx.status >= 400) {
      ctx.status = this.STATUS_CODES.OK;
    }
    ctx.body = toResponse(ctx.status, params);
    return ctx.body;
  }

  static notFound(ctx, params = {}) {
    ctx.status = STATUS_CODES.NOT_FOUND;
    ctx.body = toResponse(ctx.status, params);
  }

  static created(ctx, params = {}) {
    ctx.status = STATUS_CODES.CREATED;
    ctx.body = toResponse(ctx.status, params);
  }

  static badRequest(ctx, params = {}) {
    ctx.status = STATUS_CODES.BAD_REQUEST;
    ctx.body = toResponse(ctx.status, params);
  }

  static unprocessableEntity(ctx, params = {}) {
    ctx.status = STATUS_CODES.UNPROCESSABLE_ENTITY;
    ctx.body = toResponse(ctx.status, params);
  }

  static internalServerError(ctx, params = {}) {
    ctx.status = STATUS_CODES.INTERNAL_SERVER_ERROR;
    ctx.body = toResponse(ctx.status, params);
  }
}

export default Response;
