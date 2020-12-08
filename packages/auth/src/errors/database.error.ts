import { CustomError } from "./custom-error";

export class DatabaseError extends CustomError {
  statusCode = 500;
  constructor() {
    super("error trying to connecting to database!");
    Object.setPrototypeOf(this, DatabaseError.prototype);
  }
  serializeError() {
    return [{ message: "something went wrong" }];
  }
}
