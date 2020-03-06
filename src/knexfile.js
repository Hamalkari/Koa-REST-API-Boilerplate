import path from 'path';
import { db } from './config';

const BASE_PATH = path.join(__dirname, 'db');

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: `${db.database}_dev`,
      user: db.user,
      password: db.password,
      host: db.host,
      charset: 'utf8',
    },
    migrations: {
      directory: path.join(BASE_PATH, 'migrations'),
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds'),
    },
    pool: {
      min: 0,
      max: 10,
    },
  },
};
