import { DebitCardPaymentError } from "../utils/errors";

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
    try {
      const httpClient = new HttpClient({ batseguroToken: "adasd" })
        .setup()
        .setTraceId(this.traceId);

      const response = await httpClient.post({
        path: "/payment/creditcard",
        body: props,
      });

      return response;
    } catch (error) {
      throw new DebitCardPaymentError("error bugado");
    }
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
