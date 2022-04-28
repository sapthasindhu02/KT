export default class NotFoundError extends Error {
  status: number;

  constructor() {
    super("Route Not Handled");
    this.status = 404;
  }
}
