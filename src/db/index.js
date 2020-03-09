import Knex from 'knex';
import { env } from '../config';
import knexConfig from '../knexfile';
import logger from '../api/utils/logger';

const knex = Knex(knexConfig[env]);

// Test Connection
knex
  .raw("SELECT 'test connection';")
  .then(() => {
    logger.info('DB connected successfully');
  })
  .catch(err => {
    logger.error(err.message);
    throw err;
  });

export default knex;
