import { createServer } from 'http';
import { Model } from 'objection';
import { port, env } from './config/index';
import app from './api/server';
import logger from './api/utils/logger';
import knex from './db';

app.on('error', (err, ctx) => {
  logger.error(err);
});

const server = createServer(app.callback());

Model.knex(knex);

server.listen(port, () => {
  console.log(
    `✅  API server listening on http://localhost:${port}, in ${env}`,
  );
});
