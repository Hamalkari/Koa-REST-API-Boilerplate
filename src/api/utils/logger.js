// import bunyan from 'bunyan';
import { createLogger, format, transports } from 'winston';
import path from 'path';
import { rootPath, env, logLevel } from '../../config/index';

const errorFilePath = path.join(rootPath, `logs/${env}-error.log`);

const consoleFormat = format.combine(
  format.colorize({
    colors: {
      info: 'blue',
      error: 'red',
    },
  }),
  format.timestamp({
    format: new Date(Date.now()).toString(),
  }),
  format.printf(info => `${info.timestamp} | ${info.level} | ${info.message}`),
);

const errorFormat = format.combine(
  format.timestamp({
    format: new Date(Date.now()).toString(),
  }),
  format.json(),
);

const logger = createLogger({
  level: logLevel,
  transports: [
    new transports.File({
      level: 'error',
      filename: errorFilePath,
      format: errorFormat,
    }),
  ],
});

if (env !== 'production') {
  logger.add(
    new transports.Console({
      level: 'info',
      format: consoleFormat,
    }),
  );
}

export default logger;
