/* eslint-disable camelcase */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

const UserHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    body: {
      id, email, first_name, last_name, avatar,
    }, method,
  } = req;

  switch (method) {
    case 'GET':
      res.status(200).json({
        id, email, first_name, last_name, avatar,
      });
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }

  res.redirect('/');
};

export default UserHandler;
