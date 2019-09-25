export default class RequestError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = message;
    this.statusCode = statusCode;

    // fix name
    Object.defineProperty(this, 'name', {
      value: new.target.name,
      enumerable: false,
    });

    // fix prototype
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
