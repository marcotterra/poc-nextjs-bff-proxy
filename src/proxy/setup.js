import { HttpClient } from "../infrastructure/http-client";
import { PaymentController } from "./controllers/payment";
import { buildPaymentRoutes } from "./routes/payment";

/**
 * @param {import('next-connect/dist/types/types').NextHandler} connect
 */
export function setupRouter(connect) {
  const paymentController = new PaymentController();
  const paymentRouter = new PaymentRouter(connect, paymentController);

  const freightController = new FreigthController();
  const freightRouter = new PaymentRouter(connect, freightController);

  return (...options) => {
    // console.log({ params });
    // console.log({ options });

    connect //
      .use(paymentRouter)
      .use(freightRouter);
  };
}
