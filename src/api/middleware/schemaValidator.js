const schemaValidator = schema => {
  const validationsOptions = {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
  };

  return async (ctx, next) => {
    try {
      const res = await schema.validateAsync(
        ctx.request.body,
        validationsOptions,
      );

      ctx.request.body = res;

      return next();
    } catch (error) {
      const details = Array.from(error.details);
      ctx.status = 400;
      ctx.body = {
        status: 'error',
        message: 'Invalid request data. Please review request and try again.',
        details: details.map(err => err.message.replace(/["']/g, '')),
      };
    }
  };
};

export default schemaValidator;
