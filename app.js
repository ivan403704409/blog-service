const Koa = require('koa');
const app = new Koa();
var bodyParser = require('koa-bodyparser');
 
app.use(bodyParser())


// cors
app.use(async (ctx, next) => {
  await next()
  // ctx.set('Access-Control-Allow-Origin', 'http://127.0.0.1:9000')
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
  ctx.set("Access-Control-Allow-Credentials", false)
  ctx.set("Access-Control-Max-Age", '86400')
  ctx.set("Access-Control-Allow-Headers", "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept")
});

// routes
import tag from './routes/tag'
import article from './routes/article'
app.use(tag.routes()).use(tag.allowedMethods())
app.use(article.routes()).use(article.allowedMethods())


// logger
app.use((ctx, next) => {
  const start = new Date;
  return next().then(() => {
    const ms = new Date - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}`);
  });
});


// response
app.use(ctx => {
  ctx.body = 'Hello World';
});

app.listen(9099);




