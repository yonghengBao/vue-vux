<!--该文件为测试用-->
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
  name: 'Home1',
  data () {
    return {
      msg: ''
    }
  },
  mounted(){
    //$axios对象中的baseURL未作配置
//    this.$axios.get(baseURL+"users").then(res=>{
//      console.log(res)
//    })
    let data={
      mobile:18826550532
    }
    let headers={
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      'x-user-token':'123'
    }
    this.getData({url:'/mobile/code',params:data,callback:res=>{
       console.log(res)
    }})
//    this.getData({type:'get',url:'/mobile/code',params:data,ischeckcode:2,callback:res=>{
//
//    }})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
