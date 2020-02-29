import Router from 'koa-router';
import { apiVersion } from '../../config';

const router = new Router({
  prefix: `/api/${apiVersion}`,
});

export default router;
