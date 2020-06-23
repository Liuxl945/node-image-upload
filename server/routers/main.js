
import Router from "koa-router"
import axios from "axios"


const router = new Router()
import send from "koa-send"


router.get("/", async (ctx)=>{
    let data = await axios({
        url: "http://h5.nxsound.com/ih5/20_06lslz/ajax_share.php",
        headers: {
            referer: 'http://h5.nxsound.com/ih5',
            origin: 'http://h5.nxsound.com/'
        }
    })
    console.log(data)
    ctx.body = data.data

})

router.get("/download", async ctx => {
    const { name } = ctx.query
    const path = `${name}`
    ctx.attachment(path)
    await send(ctx, path)
})


module.exports = router
// export default router