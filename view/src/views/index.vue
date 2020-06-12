<template>
    <div>
        <img src="http://192.168.1.186/avatar/2020-06-12/1591929913524.jpeg" alt="" srcset="">

        <div @click="download" style="padding:100px">下载</div>
    </div>
</template>

<script>
import FileSaver from "file-saver"


export default {
    mounted() {
        
    },
    methods: {
        download() {
            FileSaver.saveAs("http://192.168.1.186/avatar/2020-06-12/1591929913524.jpeg", "image.jpg")
        }
    }
}
</script>