import { HttpClient } from "../infrastructure/http-client";
import { PaymentController } from "./controllers/payment";
import { buildPaymentRoutes } from "./routes/payment";

/**
 * @param {import('next-connect/dist/types/types').NextHandler} connect
 */
export function buildProxy(...params) {
  const paymentController = new PaymentController();
  const paymentRouter = buildPaymentRoutes(connect, paymentController);

  return (...options) => {
    console.log({ params });
    console.log({ options });
    connect.use(paymentRouter);
  };
}
