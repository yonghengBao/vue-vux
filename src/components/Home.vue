<template>
  <div>
    主页面
    <router-link :to="name='Login' ">登录</router-link>
    <span class="icon-pause"></span>

  </div>
</template>

<script>
  import { baseURL } from '@/assets/js/api.js'
  export default {
  name: 'Home',
  data () {
    return {
      msg: ''
    }
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
