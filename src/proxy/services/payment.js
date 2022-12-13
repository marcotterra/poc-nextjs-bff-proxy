/**
 * The Httpclient settings
 * @typedef {Object} PaymentServiceProps
 * @property {string} traceId - .
 */

import { HttpClient } from "../../infrastructure/http-client";

export class PaymentService {
  /**
   * @param {PaymentServiceProps} props
   */
  constructor(props) {
    this.traceId = props?.traceId;
  }

  async payWithCreditCard(props) {
    const httpClient = new HttpClient().setup().setTraceId(this.traceId);

    const response = await httpClient.post({
      path: "/payment/creditcard",
      body: props,
    });

    return response;
  }

  async payWithDebitCard(props) {
    const httpClient = new HttpClient().setup().setTraceId(this.traceId);

    const response = await httpClient.post({
      path: "/payment/debitcard",
      body: props,
    });

    return response;
  }
}
