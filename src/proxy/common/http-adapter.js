import { ProxyError } from "./errors";

export class HttpRequest {
  static sucess(data) {
    return {
      data: data,
      status: "ok",
    };
  }

  static error(error) {
    if (error instanceof ProxyError) {
      return {
        code: error.httpCode,
        message: error.message,
      };
    }

    return {
      code: 500,
      message: "Something went wrong",
    };
  }
}
