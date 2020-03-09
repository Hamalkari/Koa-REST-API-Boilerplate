import Koa from 'koa';
import cors from '@koa/cors';
import helmet from 'koa-helmet';
import responseTime from 'koa-response-time';
import koaLogger from 'koa-logger';
import { env } from '../config';
import errorHandler from './middleware/error';
import bodyParser from './middleware/body-parser';
import router from './routes';

const app = new Koa();

if (env === 'development') {
  app.use(responseTime());
  app.use(koaLogger());
}

app.use(errorHandler);
app.use(helmet());
app.use(cors());
app.use(bodyParser());
app.use(router());

export default app;
