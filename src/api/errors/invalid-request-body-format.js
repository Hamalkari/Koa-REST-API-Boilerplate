export default class InvalidRequestBodyFormatError extends Error {
  constructor(...params) {
    super(params);
    this.code = 'INVALID_REQUEST_BODY_FORMAT';
    this.name = 'InvalidRequestBodyFormat';
    this.statusCode = 422;
  }
}
