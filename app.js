const Koa=require('koa')
const app=new Koa()
const router=require('./api/test')

app.use(async (ctx,next)=>{
    const start=Date.now();
    await next()
    const ms=Date.now()-start;
    console.log(`${ctx.method} ${ctx.url} ${ms}ms`)
})

app.use(router.routes())

app.listen(8080,()=>{
    console.log(`serve run localhost:3000`)
})