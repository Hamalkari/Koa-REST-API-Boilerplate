import { createServer } from 'http';
import { Model } from 'objection';
import { port, env } from './config/index';
import app from './api/server';
import logger from './api/utils/logger';
import knex from './db';

function handleError(err, ctx) {
  if (ctx == null) {
    logger.error({ message: err.message, stack: err.stack });
  }
}

const server = createServer(app.callback());

function terminate(signal) {
  logger.info(`${signal} signal received.`);
  logger.info('Starting graceful shutdown server.');
  server.close(err => {
    if (err) {
      logger.error({ message: err.message, stack: err.stack });
      process.exit(1);
    }
    logger.info('Http server closed');
    knex.destroy(() => {
      logger.info('Db connection closed.');
      process.exit(0);
    });
  });
}

Model.knex(knex);

server.listen(port, () => {
  logger.info(
    `✅  API server listening on http://localhost:${port}, in ${env}`,
  );
  server.on('error', handleError);
  const errors = ['unhandledRejection', 'uncaughtException'];
  errors.forEach(error => {
    process.on(error, handleError);
  });

  const signals = ['SIGTERM', 'SIGINT', 'SIGUSR2'];
  signals.forEach(signal => {
    process.once(signal, () => terminate(signal));
  });
});

export default server;
