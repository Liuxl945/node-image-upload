
import Router from "koa-router"

const router = new Router()
import send from "koa-send"


router.get("/", async (ctx)=>{
    ctx.body = "用户操作首页"
})

router.get("/download", async ctx => {
    const { name } = ctx.query
    const path = `${name}`
    ctx.attachment(path)
    await send(ctx, path)
})


module.exports = router
// export default router