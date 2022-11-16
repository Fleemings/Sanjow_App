import type { NextApiRequest, NextApiResponse } from 'next';

import api from './api';

const users = api;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(`${users}/api/users`);
};

export default handler;
