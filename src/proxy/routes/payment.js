/**
 * @param {import('next-connect').NextHandler} connect
 * @param {import('../controllers/payment').PaymentController} controller
 */
const buildPaymentRoutes = (connect, controller) => {
  // console.log("buildPaymentRoutes");

  connect
    .get("/api/v2/payment/debitcard", controller.debitCard)
    .get("/api/v2/payment/creditcard", controller.creditCard);

  return connect;
};

export { buildPaymentRoutes };
