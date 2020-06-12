import Koa from "koa"
import koaBody from "koa-body"
import cors from "@koa/cors"
import registerRouter from "./routers/index"
import consola from "consola"
import { CORS_URL } from "./config"



const app = new Koa()

function start() {
    
    let host = "127.0.0.1"
    let port = 3000

    app.use(koaBody({
        multipart: true
    }))
    .use(cors({
    origin: (ctx) => {
        if(CORS_URL.includes(ctx.request.header.origin)) {
            return ctx.request.header.origin
        }
        return CORS_URL[0]
    },
    allowMethods: ["GET,POST", "PUT"]
    }))
    .use(registerRouter())
    // .use(router.routes())
    // .use(router.allowedMethods())
    .listen(port, host)

    consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
    })
}

start()