/**
 * Adiciona um middleware para rotas do next
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 * @param {Function} fn
 */
export function applyMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}
