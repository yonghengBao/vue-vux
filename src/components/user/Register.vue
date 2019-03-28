<template>
  <div>
    <div class="user_logo">
      <img src="../../assets/images/user/user_logo.png" alt="">
    </div>
    <div class="box">
      <wine-input ref="wine_input" v-for="(iteam,index) in inputList" :statu="iteam.statu" :key="index"></wine-input>
      <x-button class="btn" :gradients="['#02D8D3', '#00D99B']" @click.native="enter">注 册</x-button>
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
        type:'', //1，立即注册，2，忘记密码，3，修改密码
        inputList:[{statu:1},{statu:3},{statu:2}]
      }
    },
    created(){
      document.body.style.backgroundColor='#fff';
      this.type = this.$route.params.type;
    },
    mounted(){
       switch (this.type){
        case 1:
          window.document.title ='注 册';
          break;
        case 2:
          window.document.title='忘记密码';
          break;
        case 3:
          window.document.title='修改密码';
          break;
      }
    },
    methods:{
      //登录
      enter(){
        let phone = this.$refs.wine_input[0].value;
        let password= this.$refs.wine_input[1].value;
        let code = this.$refs.wine_input[2].value;
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
  .box .input-box:nth-child(3){
    margin-bottom: .6rem;
  }
</style>
