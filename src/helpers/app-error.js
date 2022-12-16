export default function ApplicationError(errorCode, message, statusCode) {
    this.errorCode = errorCode;
    this.message = message;
    this.statusCode = statusCode;
    this.name = 'ApplicationError'
}