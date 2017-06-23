import 'app-module-path/register'
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'


const app = new Koa();

// body处理
app.use(bodyParser())


// logger
app.use(async (ctx, next) => {
    const start = new Date;
    await next()
    const ms = new Date - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
});


// 跨域处理
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
  ctx.set("Access-Control-Allow-Credentials", false)
  ctx.set("Access-Control-Max-Age", '86400')
  ctx.set("Access-Control-Allow-Headers", "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept")
  await next()
});

// 路由分配
import initRoute from './routes'
initRoute(app)


app.listen(9099);