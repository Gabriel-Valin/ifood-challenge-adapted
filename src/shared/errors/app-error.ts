export default class AppError {
  constructor (
    private readonly message: string,
    private readonly statusCode = 400
  ) {
    this.message = message
    this.statusCode = statusCode
  }
}
