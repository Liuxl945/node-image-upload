<template>
  <div class="home">
    <img alt="Vue logo" v-if="qrcode" :src="qrcode">
    <img alt="Vue logo" v-if="imageUrl" :src="imageUrl">
    <input type="file" ref="inputFile"/>
    <button @click="submit">提交</button>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios"

export default {
  name: 'Home',
  data() {
    return {
      qrcode: undefined,
      imageUrl: undefined,
    }
  },
  methods: {
    async submit() {
      let files = this.$refs.inputFile.files[0]
      
      if(!files){
        return
      }

      const formData = new window.FormData()
      formData.append('file', new Blob([files]), `${Math.random().toString().slice(3, 5)}.jpg`)
      formData.append('dir', 'avatar')

      let res = await axios({
        url: `http://m.yingliyingli.com/image/uploadImage/`,
        method: 'post',
        data: formData
      })

      if(res.data.code === 200){
        this.imageUrl = res.data.file
        let data = await axios({
          url: `http://m.yingliyingli.com/image/getQrCode/`,
          method: 'post',
          data: {
            imageUrl: res.data.file
          }
        })

        this.qrcode = data.data.qrcode
      }
    }
  }
}
</script>
