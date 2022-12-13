import { PaymentService } from "../services/payment";

export class PaymentController {
  /**
   * @param {import('next').NextApiRequest} req
   * @param {import('next').NextApiResponse} res
   */
  async debitCard(req, res) {
    try {
      const { traceId = "" } = req.headers;
      const { body } = req;

      const service = new PaymentService(traceId);
      const response = await service.payWithDebitCard(body);

      return res.json({ route: "debitcard", response });
    } catch (error) {
      return res.json({ error: true });
    }
  }

  /**
   * @param {import('next').NextApiRequest} req
   * @param {import('next').NextApiResponse} res
   */
  async creditCard(req, res) {
    try {
      const { traceId = "" } = req.headers;
      const { body } = req;

      const service = new PaymentService(traceId);
      const response = await service.payWithCreditCard(body);

      return res.json({ route: "creditCard", response });
    } catch (error) {
      return res.json({ error: true });
    }
  }
}