import jwt, { SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret: string = process.env.JWT_SECRET || 'secret';

const jwtConfig = {
  expiresIn: '5d',
  algorithm: 'HS256',
} as SignOptions;

const createToken = (username: string, password: string) => {
  const token = jwt.sign({ username, password }, secret, jwtConfig);
  return token;
};

export default createToken;
