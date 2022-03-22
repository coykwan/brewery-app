import { NextApiRequest, NextApiResponse } from "next";
import httpProxyMiddleware from "next-http-proxy-middleware";

export const config = {
  api: {
    externalResolver: true,
  },
}

export default (req: NextApiRequest, res: NextApiResponse) => (
      httpProxyMiddleware(req, res, {

      target: 'https://api.openbrewerydb.org',
      pathRewrite: [{
        patternStr: '^/api',
        replaceStr: ''
      }],
    })
);