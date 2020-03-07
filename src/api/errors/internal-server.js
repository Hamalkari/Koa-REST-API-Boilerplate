export default class InternalServerError extends Error {
  constructor(...params) {
    super(params);
    this.code = 'INTERNAL_SERVER_ERROR';
    this.name = 'InternalServerError';
    this.statusCode = 500;
  }
}
