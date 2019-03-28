<template>
    <div>
      <div class="user_logo">
        <img src="../../assets/images/user/user_logo.png" alt="">
      </div>
      <div class="box">
        <wine-input ref="wine_input" v-for="(iteam,index) in inputList" :statu="iteam.statu" :key="index"></wine-input>
        <p class="forget">
          <router-link  :to="{name:'Register',params:{type:2}}">忘记密码</router-link>
        </p>
        <x-button class="btn" :gradients="['#02D8D3', '#00D99B']" @click.native="enter">登 录</x-button>
        <p class="forget">
          没有账号？<router-link  :to="{name:'Register',params:{type:1}}">立即注册</router-link>
        </p>
      </div>

    </div>
</template>

<script>
  import WineInput from '@/components/user/WineInput'
  export default {
    components:{
      WineInput
    },
    data () {
      return {
        inputList:[{statu:1},{statu:2}]
      }
    },
    created(){
      document.body.style.backgroundColor='#fff';
    },
    methods:{
      //登录
      enter(){
        let phone = this.$refs.wine_input[0].value;
        let password= this.$refs.wine_input[1].value;
        //this.$router.push({name:'Home'})
      }
    }
  }
</script>


<style scoped>
  @import "../../assets/css/common.css";
  .user_logo{text-align: center;padding: .4rem 0 .2rem;}
  .user_logo img{width: .9rem;}
  .box{padding: 0 .4rem;}
  .box .input-box:nth-child(2){
    margin-bottom: 0;
  }
  .forget{text-align: right;padding:0 .15rem .4rem 0;font-size: .12rem;}
  .forget a{color: #00D99C;font-size: .12rem;display: inline-block;padding-top: .1rem;}
</style>
