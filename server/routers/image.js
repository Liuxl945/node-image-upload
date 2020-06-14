import path from "path"
import Router from "koa-router"
import { NGINX_ROOT, NGINX_ROOT_URL, API_URL } from "../config"
import QRCode from "qrcode"
import sharp from "sharp"
import { getDate, mkdirs } from "../utils"



const router = new Router()
router.prefix("/image")

router.post("/uploadImage", async ctx => {
    let file = ctx.request.files.file
    let dirname = ctx.request.body.dir || "avatar" 
    dirname = `${dirname}/${getDate()}`
    let { width, height } = ctx.request.body

    let uploadPath = `${NGINX_ROOT}/${dirname}`
    mkdirs(path.resolve(uploadPath))
    const image = sharp(file.path)
    let data = await image.metadata()
    let name = `${Number(new Date())}.${data.format}`

    width = Math.floor(width || data.width)
    height = Math.floor(height || data.height)

    await image.resize({
        width,
        height
    })
    .toFile(`${uploadPath}/${name}`)

    ctx.body = {
        code: 200,
        message: "图片上传成功",
        file: `${NGINX_ROOT_URL}/${dirname}/${name}`,
        root: `${dirname}/${name}`
    }
})

router.post("/getQrCode", async ctx => {
    let {
        imageUrl,
        dirname
    } = ctx.request.body

    let qrcodeurl
    
    try{

        dirname = `${dirname || "avatar"}/${getDate()}`
        let uploadPath = `${NGINX_ROOT}/${dirname}`
        mkdirs(path.resolve(uploadPath))
        let name = `${Number(new Date())}.png`

        await QRCode.toFile(`${uploadPath}/${name}`,
            // `${API_URL}/image_preview?url=${JSON.stringify(imageUrl)}`,
            `${imageUrl}`,
            {
                width: 500,
                margin:1,
                errorCorrectionLevel: "L"
            }
        )
        qrcodeurl = `${NGINX_ROOT_URL}/${dirname}/${name}`

    }catch (err) {
        qrcodeurl = ""
    }
    
    if(qrcodeurl){
        ctx.body = {
            code: 200,
            message: "二维码生成成功",
            qrcode: qrcodeurl
        }
    }else{
        ctx.body = {
            code: 200,
            message: "二维码生成失败",
            qrcode: qrcodeurl
        }
    }

    
})

module.exports  = router
// export default router