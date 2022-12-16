/**
 * The PaymentRouter settings
 * @typedef {Object} PaymentRouterProps
 * @property {import('next-connect/dist/types/node').NodeRouter} router
 * @property {import('../controllers/payment').PaymentController} controller
 */

export class PaymentRouter {
  #router;
  #controller;

  /**
   * @param {PaymentRouterProps} props
   */
  constructor({ router, controller }) {
    this.#router = router.clone();
    this.#controller = controller;

    this.#buildRoutes();
  }

  #buildRoutes() {
    this.#router
      .get("/api/v2/payment/debitcard", this.#controller.debitCard)
      .get("/api/v2/payment/creditcard", this.#controller.creditCard);
  }

  getRouter() {
    return this.#router;
  }
}
