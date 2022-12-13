// import

// checkout
// /payment/boleto
// /payment/creditcard
// /payment/debitcard

async function handleCreditCard() {}

async function handleBoleto() {}

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler(req, res) {
  switch (req.headers.location) {
    case "creditcard":
      const creditCardRespose = await handleCreditCard(req.body);
      return res.status(200).json(creditCardRespose);

    case "boleto":
      const boletoResponse = await handleBoleto(req.body);
      return res.status(200).json(boletoResponse);
  }
}
