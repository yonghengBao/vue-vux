<template>
  <!--<div>-->
    <div  v-if="statu==1" class="input-box" :class="{active:focusStr=='phone'}">
      <group >
        <x-input type="tel" v-model="value" placeholder="请输入手机号" @on-blur="blur" @on-focus="focus">
          <img slot="label" :src="phone_icon"/>
        </x-input>
      </group>
    </div>
    <div v-else-if="statu==2" class="input-box" :class="{active:focusStr=='password'}">
      <group >
        <x-input :type="type" v-model="value" :show-clear="false" placeholder="请输入6-12位英文加数字密码"  @on-blur="blur" @on-focus="focus">
          <img slot="label" :src="pass_icon"/>
          <img class="ts"  slot="right" @click="changetype" :src="pass_type"/>
        </x-input>
      </group>
    </div>
    <div v-else-if="statu==3" class="input-box" :class="{active:focusStr=='code'}">
      <group >
        <x-input type="tel" v-model="value" :show-clear="false" placeholder="请输入验证码" @on-blur="blur" @on-focus="focus">
          <img slot="label" :src="code_icon"/>
          <span slot="right" @click="getCode">{{codeBtnName}}</span>
        </x-input>
      </group>
    </div>
  <!--</div>-->
</template>

<script>
  export default {
    props:['statu'],
    data () {
      return {
        codeBtnName:'发送验证码',
        phone_icon:require('../../assets/images/user/icon_phone.png'),
        pass_icon:require('../../assets/images/user/password.png'),
        pass_type:require('../../assets/images/user/pass_type.png'),
        code_icon:require('../../assets/images/user/icon_code.png'),
        type:'password',//密码显示类型
        focusStr:'',
        value:''
      }
    },
    methods:{
      //显示、隐藏密码
      changetype(){
        if(this.type=='password'){
          this.type='text';
          this.pass_type=require('../../assets/images/user/pass_type1.png')
        }else{
          this.type='password';
          this.pass_type=require('../../assets/images/user/pass_type.png')
        }
      },
      //input失去焦点
      blur(){
        this.focusStr='';
        if(this.statu==1){
          this.phone_icon = require('../../assets/images/user/icon_phone.png')
        }else if(this.statu==2){
          this.pass_icon = require('../../assets/images/user/password.png')
        }else if(this.statu==3){
          this.code_icon = require('../../assets/images/user/icon_code.png')
        }
      },
      //input聚焦
      focus(){
        if(this.statu==1){
          this.focusStr='phone';
          this.phone_icon = require('../../assets/images/user/icon_phone1.png')
        }else if(this.statu==2){
          this.focusStr='password';
          this.pass_icon = require('../../assets/images/user/password1.png')
        }else if(this.statu==3){
          this.focusStr='code';
          this.code_icon = require('../../assets/images/user/icon_code1.png')
        }
      },
      //获取验证码
      getCode(){
        this.$vux.toast.text("发送成功")
        let time = 10;
        let timer = setInterval(()=>{
          if(time<=1){
            this.codeBtnName = '发送验证码';
            clearInterval(timer);
            timer = null;
          }else{
            time--;
            this.codeBtnName = time+"s后重新发送"
          }
        },1000)
      }
    }
  }
</script>


<style scoped>
  @import "../../assets/css/resetVux.css";
  .input-box{
    border: 1px solid #A3A3A3;
    border-radius: .42rem;
    margin-bottom: .15rem;
  }
  .active{border: 1px solid #00D99C;}
  .box img{height: .24rem;margin-right: .1rem;}
  .box img.ts{height: .2rem;margin-right: 0;}
  .weui-cell{height: .42rem; border-radius: .42rem;}
</style>
