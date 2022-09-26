import Koa from 'koa';
import logger from 'koa-logger';
import koaBodyparser from 'koa-bodyparser';
import router from './router/index';
import error from './middlewares/error';
import result from './middlewares/result';
import mysql from './middlewares/mysql';

const app = new Koa();

// 打印日志
app.use(logger());
app.use(koaBodyparser());
app.use(result());
app.use(mysql());

// 错误捕获
app.use(error());

// 装载router
app.use(router.routes()).use(router.allowedMethods());

export default app;