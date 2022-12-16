import { CreditCardPaymentError } from "../common/errors";

/**
 * The Httpclient settings
 * @typedef {Object} PaymentServiceProps
 * @property {string} traceId - .
 */

import { HttpClient } from "../../utils/http-client";

export class PaymentService {
  /**
   * @param {PaymentServiceProps} props
   */
  constructor(props) {
    this.traceId = props?.traceId;
  }

  async payWithCreditCard(body) {
    try {
      console.log({ body });
      if (body === "toThrow") {
        throw new Error("nothing");
      }

      return {
        route: "/api/v2/payment/creditcard",
      };
    } catch {
      throw new CreditCardPaymentError("random was more than 50");
    }
  }

  async payWithDebitCard(props) {
    console.log("traceid", this.traceId);

    const httpClient = new HttpClient().setup().setTraceId(this.traceId);

    const response = await httpClient.post({
      path: "/payment/debitcard",
      body: props,
    });

    return response;
  }
}
