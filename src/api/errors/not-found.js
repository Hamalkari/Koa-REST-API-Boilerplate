export default class NotFoundError extends Error {
  constructor(...params) {
    super(params);
    this.name = 'NotFound';
    this.code = 'NOT_FOUND';
    this.statusCode = 404;
  }
}
