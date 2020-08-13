<template>
    <div id="avatar">
        <img @load="loading" src="https://iknow-base.cdn.bcebos.com/623MINGXING270x170x2.jpg" alt="" srcset="">

        <div @click="download" style="padding:100px">下载</div>

        <img id="saveImg" src="" alt="">
    </div>
</template>

<script>
import FileSaver from "file-saver"

import html2canvas from "html2canvas"

export default {
    mounted() {
        
    },
    methods: {
        loading() {
            html2canvas(document.querySelector("#avatar")).then(canvas  => {
                var dataUrl = canvas.toDataURL("jpeg")
                document.querySelector("#saveImg").src=dataUrl
            })
        },
        download() {
            FileSaver.saveAs("http://192.168.1.186/avatar/2020-06-12/1591929913524.jpeg", "image.jpg")
        }
    }
}
</script>