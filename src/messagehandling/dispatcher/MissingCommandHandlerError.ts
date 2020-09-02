export class MissingCommandHandlerError extends Error {
  constructor(message?: string) {
    super(message);
    Object.setPrototypeOf(this, MissingCommandHandlerError.prototype);
  }
}
