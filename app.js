import Koa from 'koa'
import bodyParser from 'koa-bodyparser'


const app = new Koa();

// body处理
app.use(bodyParser())

// 跨域处理
app.use(async (ctx, next) => {
  await next()
  // ctx.set('Access-Control-Allow-Origin', 'http://127.0.0.1:9000')
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
  ctx.set("Access-Control-Allow-Credentials", false)
  ctx.set("Access-Control-Max-Age", '86400')
  ctx.set("Access-Control-Allow-Headers", "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept")
});

// 路由分配
import initRoute from './routes'
initRoute(app)


// logger
app.use((ctx, next) => {
  const start = new Date;
  return next().then(() => {
    const ms = new Date - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}`);
  });
});


// response
// app.use(ctx => {
//   ctx.body = 'Hello World';
// });

app.listen(9099);