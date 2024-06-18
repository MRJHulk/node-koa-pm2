const Router=require('koa-router');
const router=new Router;

router.get('/',(ctx,next)=>{
    ctx.body='Hello World'
})

router.get('/users',(ctx,next)=>{
    ctx.body='here is users'
})

module.exports=router