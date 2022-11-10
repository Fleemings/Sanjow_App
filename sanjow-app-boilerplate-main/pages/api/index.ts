import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).send('Welcome to the API');
};

export default handler;
