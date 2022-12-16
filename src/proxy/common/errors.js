export class ProxyError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = "ProxyError"; // (2)
    this.errorCode = 10000;
    this.httpCode = 400;
  }
}

export class CreditCardPaymentError extends ProxyError {
  constructor(message) {
    super(message);
    this.name = "CreditCardPaymentError";
    this.errorCode = 1023;
    this.httpCode = 400;
  }
}
