import { select } from '../mysql/mysqldb'
import Router from "koa-router"

const router = new Router()
router.prefix("/test")

router.get("/world", async ctx => {
    let sql = "SELECT COUNT(*) num,ID FROM city "

    let result = await select(sql)

    ctx.body = result
})


module.exports  = router