<template>
    <div>
        <img src="http://192.168.1.186/avatar/2020-06-12/1591929913524.jpeg" alt="" srcset="">

        <div @click="download" style="padding:100px">下载</div>
    </div>
</template>

<script>

export default {
    mounted() {

        // var x=new XMLHttpRequest();
        // x.open("GET", "http://192.168.1.186/avatar/2020-06-12/1591929913524.jpeg", true);
        // x.responseType = 'blob';
        // x.onload=function(e){
        //     var url = window.URL.createObjectURL(x.response)
        //     var a = document.createElement('a');
        //     a.href = url
        //     a.download = 'http://192.168.1.186/avatar/2020-06-12/1591929913524.jpeg'
        //     a.click()
        // }
        // x.send();
    },
    methods: {
    }
}
</script>