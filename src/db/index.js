import Knex from 'knex';
import { env } from '../config';
import knexConfig from '../knexfile';

const knex = Knex(knexConfig[env]);

// Test Connection
knex
  .raw("SELECT 'test connection';")
  .then(() => {
    console.log('DB has been successfully connected');
  })
  .catch(err => {
    // Failure / timeout
    throw err;
  });

export default knex;
