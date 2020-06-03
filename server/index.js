const Koa = require('koa');
const app = new Koa();
const port = 3000;//端口号可以修改
const ip = require('ip');
const ipAddress = ip.address();
// response
app.use(ctx => {
  if(ctx.path === '/proxy'){
    console.log('koa');
    ctx.body = 'proxy success ';
  }
});
 
app.listen(port);
console.log(`server is running ${ipAddress}:${port}`);
module.exports = {
  ipAddress,
  port
}