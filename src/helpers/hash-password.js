import bcrypt from 'bcrypt';
import ApplicationError from './app-error';
import { HASHING_ERROR } from './internal-error-codes';

// Password hasher (to protect user's password)
export default function hash(data, environment) {
    try {
      if (environment === 'development') {
        const salt = bcrypt.genSaltSync(10);
        const hashedData = bcrypt.hashSync(data, salt);
        return hashedData;
      }

      const salt = bcrypt.genSaltSync(13);
      const hashedData = bcrypt.hashSync(data, salt);
      return hashedData;
      
    } catch (error) {
      throw new ApplicationError(HASHING_ERROR, 'Internal Error', 500)
    }
};