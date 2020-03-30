import dotenv from 'dotenv';
import { path as rootPath } from 'app-root-path';

dotenv.config({
  path: `${rootPath}/.env`,
});

const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;
const db = {
  database: process.env.DB_DATABASE || 'postgres',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
};
const logLevel =
  process.env.LOG_LEVEL || (env === 'production' ? 'info' : 'debug');

export { rootPath, env, port, db, logLevel };
