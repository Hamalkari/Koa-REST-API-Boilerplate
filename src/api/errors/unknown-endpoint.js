export default class UnknownEndpointError extends Error {
  constructor(...params) {
    super(params);
    this.code = 'UNKNOWN_ENDPOINT';
    this.name = 'UnknownEndpoint';
    this.statusCode = 404;
  }
}
