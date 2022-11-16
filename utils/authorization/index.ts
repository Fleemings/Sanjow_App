// import bcrypt from 'bcryptjs';
import JWT from 'jsonwebtoken';
import { NextApiRequest } from 'next';

import LStorage from '../localStorage';

// import Validate from '../validators';

const Auth = {
  api: async (req: NextApiRequest) => {
    // Getting token from header
    let token = String(req.headers.authorization);
    if (token) {
      token = token.replace('Bearer ', '');
      if (token === process.env.API_TOKEN) {
        return true;
      }
    }
    throw new Error('You have no access to this API');
  },
  user: () => {
    if (typeof window !== 'undefined') {
      const userInfo = JSON.parse(LStorage.get('userInfo'));
      const userToken = LStorage.get('userToken');
      const jwt = JWT.decode(userToken);
      // Check user token
      if (!userToken) return false;
      if (jwt && typeof jwt === 'object') {
        const now: string = (new Date().getTime() / 1000).toString();
        const nowToNumber = parseInt(now.split('.')[0], 10);
        // Check token expiration time
        if (jwt.exp! > nowToNumber) {
          // Check if user info matches user token
          if (userInfo && userInfo.id === jwt.id) {
            return true;
          }
          LStorage.remove('userInfo');
          return false;
        }
        LStorage.remove('userToken');
      }
      return false;
    }
  },
};

export default Auth;
