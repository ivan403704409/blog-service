const Koa = require('koa');
const app = new Koa();
var bodyParser = require('koa-bodyparser');
 
app.use(bodyParser())
 
// routes
import tag from './routes/tag'
app.use(tag.routes()).use(tag.allowedMethods())


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