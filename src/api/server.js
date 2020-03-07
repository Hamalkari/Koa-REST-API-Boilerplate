import Koa from 'koa';
import cors from '@koa/cors';
import helmet from 'koa-helmet';
import logger from 'koa-logger';
import { env } from '../config';
import routes from './routes';
import errorHandler from './middleware/error';
import bodyParser from './middleware/body-parser';

const app = new Koa();

if (env === 'development') app.use(logger());

app.use(errorHandler);
app.use(helmet());
app.use(cors());
app.use(bodyParser());

app.use(routes.routes());
app.use(routes.allowedMethods());

app.on('error', (err, ctx) => {
  console.error(err, ctx);
});

export default app;
