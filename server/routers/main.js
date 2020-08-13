
import Router from "koa-router"
import axios from "axios"


const router = new Router()
import send from "koa-send"


router.get("/earth_login", async ctx => {
    let data = await axios({
        url: "http://serve.jfyf.com/dl_game/2020/earth_war/api.php?a=login",
        headers: {
            referer: 'http://serve.jfyf.com',
            origin: 'http://serve.jfyf.com'
        }
    })
    console.log(data)
    ctx.body = data.data
})

router.get("/earth_submit", async ctx => {
    let data = await axios({
        url: "http://serve.jfyf.com/dl_game/2020/earth_war/api.php?a=submit&num=100",
        headers: {
            referer: 'http://serve.jfyf.com',
            origin: 'http://serve.jfyf.com'
        }
    })
    console.log(data)
    ctx.body = data.data
})



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

router.get("/getUserInfo", async (ctx)=>{
    let data = await axios({
        url: "http://h5.nxsound.com/ih5/20_06lslz/ajax.php",
        headers: {
            referer: 'http://h5.nxsound.com/ih5',
            origin: 'http://h5.nxsound.com/'
        },
        params: {
            type: "saveScore",
            score: 80
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