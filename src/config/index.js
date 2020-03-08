import dotenv from 'dotenv';
import { resolve, normalize } from 'path';

dotenv.config({
  path: resolve(__dirname, '../../.env'),
});

const root = normalize(`${__dirname}/../../`);
const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;
const apiVersion = process.env.API_VERSION || 1;
const db = {
  database:
    process.env.DB_DATABASE +
    (process.env.NODE_ENV === 'testing' ? '_test' : ''),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
};
const logLevel =
  process.env.LOG_LEVEL || (env === 'production' ? 'info' : 'debug');

export { root, env, port, apiVersion, db, logLevel };
