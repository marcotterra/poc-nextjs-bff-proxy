import { PaymentController } from "./controllers/payment";
import { PaymentRouter } from "./routes/payment";

/**
 * @param {import('next-connect/dist/types/node').NodeRouter} router
 */
export function setupRouter(router) {
  const paymentController = new PaymentController();
  const paymentRouter = new PaymentRouter({
    router,
    controller: paymentController,
  });

  return router //
    .use(paymentRouter.getRouter());
}
