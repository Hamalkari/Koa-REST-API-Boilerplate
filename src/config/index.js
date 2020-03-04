import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config({
  path: resolve(__dirname, '../../.env'),
});

export const env = process.env.NODE_ENV || 'development';
export const port = process.env.PORT || 3000;
export const apiVersion = process.env.API_VERSION || 1;
export const db = {
  database:
    process.env.DB_DATABASE +
    (process.env.NODE_ENV === 'testing' ? '_test' : ''),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
};
