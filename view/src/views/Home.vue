<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <input type="file" ref="inputFile"/>
    <button @click="submit">提交</button>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios"

export default {
  name: 'Home',
  methods: {
    async submit() {
      // let files = this.$refs.inputFile.files[0]
      
      // if(!files){
      //   return
      // }

      // const formData = new window.FormData()
      // formData.append('file', new Blob([files]), `${Math.random().toString().slice(3, 5)}.jpg`)
      // formData.append('dir', 'avatar')

      // let res = await axios({
      //   url: `http://127.0.0.1:3000/uploadImage/`,
      //   method: 'post',
      //   data: formData
      // })


      let res = await axios({
        url: `http://127.0.0.1:3000/getQrCode/`,
        method: 'post',
        data: {
          imageUrl: `G:\\node-image-upload\\upload_image\\2020-06-11`
        }
      })

      console.log(res)
    }
  }
}
</script>
