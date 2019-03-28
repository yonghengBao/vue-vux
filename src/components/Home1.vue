<!--该文件为测试用-->
<template>
  <div>
    主页面
    <router-link :to="name='Login' ">登录</router-link>
    <span class="icon-pause"></span>
    <no-data usedType="3"></no-data>
    <div class="my-loading" v-transfer-dom >
      <loading :show="toastInfo.isShow" :text="toastInfo.text" style="display: none"></loading>
    </div>
    <!--<my-loading></my-loading>-->
    <p>{{ 1553592829411 | dateFormat('YYYY-MM-DD HH:mm:ss') }}</p>
  </div>
</template>

<script>
  import { baseURL } from '@/assets/js/api.js'
  export default {
  data () {
    return {
      toastInfo:{
        isShow:true,
        text:"获取数据中..."
      },
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
  .my-loading /deep/ .weui-mask_transparent{
    background: rgba(0, 0, 0, 0.3);
  }
</style>
