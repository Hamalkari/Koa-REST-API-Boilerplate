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
    format: new Date(Date.now()).toUTCString(),
  }),
  format.printf(info => `${info.timestamp} | ${info.level} | ${info.message}`),
);

const errorFormat = format.combine(
  format.timestamp({
    format: new Date(Date.now()).toUTCString(),
  }),
  format.json(),
);

const logger = createLogger({
  level: logLevel,
  format: format.json(),
  transports: [
    new transports.Console({
      level: 'info',
      format: consoleFormat,
    }),
    new transports.File({
      level: 'error',
      filename: errorFilePath,
      format: errorFormat,
    }),
  ],
});

export default logger;
