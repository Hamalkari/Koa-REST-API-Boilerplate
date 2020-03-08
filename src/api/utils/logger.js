import bunyan from 'bunyan';
import path from 'path';
import { root, env, logLevel } from '../../config/index';

const logger = bunyan.createLogger({
  name: 'koa-rest',
  level: logLevel,
  serializers: bunyan.stdSerializers,
  streams: [
    {
      level: 'info',
      stream: process.stdout,
    },
    {
      level: 'debug',
      stream: process.stderr,
    },
    {
      type: 'rotating-file',
      level: 'error',
      path: path.join(root, `logs/${env}-error.log`),
      period: '1d',
      count: 7,
    },
  ],
});

export default logger;
