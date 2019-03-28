<template>
  <div>
    <x-header :left-options="{showBack: false}">
      <div slot="left">
        <div class="adress-box">
          <div @click="chooseAdress">四川托普信息技术职业学业学业学业学院</div>
          <!--<div v-transfer-dom>-->
            <ul class="list" v-show="isShow" >
              <li>11</li>
              <li>11</li>
              <li>11</li>
            </ul>
          <!--</div>-->

        </div>


        <!--<group>-->
          <!--<selector v-model="value" :options="list"></selector>-->
        <!--</group>-->
        <!--<select name="" id="">-->
          <!--<option value="">11</option>-->
          <!--<option value="">22</option>-->
          <!--<option value="">44</option>-->
        <!--</select>-->
      </div>
      <div slot="right" >
        <img src="../assets/images/home/icon／system／more@2x.png" alt="">
      </div>
    </x-header>


    <tabbar>
      <tabbar-item selected>
        <img slot="icon" src="../assets/images/home/bar／tab_home_pre@2x1.png">
        <img slot="icon-active" src="../assets/images/home/bar／tab_home_pre@2x.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../assets/images/home/bar／tab_mine@2x.png">
        <img slot="icon-active" src="../assets/images/home/bar／tab_mine@2x1.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import { baseURL } from '@/assets/js/api.js'
  import { XHeader ,Tabbar, TabbarItem,Selector ,Popover} from 'vux'
  export default {
  name: 'Home',
  components: {
    XHeader,
    Tabbar,
    TabbarItem,
    Selector,
    Popover
  },
  data () {
    return {
      value: '',
      isShow:false,
      list: [{key: 'gd', value: '四川托普信息技术职业学院'}, {key: 'gx', value: '广西'}],
    }
  },
  mounted(){

  },
  methods:{
    chooseAdress(){
      document.body.style.backgroundColor = '#ddd';
      this.isShow = !this.isShow;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/css/resetVux.css";
  .vux-header{background-color: #24C678;}
  .adress-box{
    position: relative;
    width: 2rem;
    padding: 0 .1rem 0 .22rem;
    background: url("../assets/images/home/icon_location@2x.png") no-repeat scroll left center transparent;
    background-size: .14rem;
  }
  .adress-box>div{
    background: url("../assets/images/home/icon_extend@2x.png") no-repeat scroll right center transparent;
    background-size: .1rem;
    padding-right: .1rem;
    font-size: .15rem;
    color: #fff;
    line-height: .2rem;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

  }
  .adress-box .list{
    width: 100%;
    position: absolute;
    top: .2rem;
    /*height: 0;*/
    /*overflow: hidden;*/
  }
  .adress-box .list li{
    padding: .13rem .15rem;
    color: #666666;
  }
  .adress-box .list li:active{
    background: #F1F1F1;
  }
  /*select {*/
    /*!*清除select默认样式*!*/
    /*appearance:none;*/
    /*-moz-appearance:none;*/
    /*-webkit-appearance:none;*/
    /*-ms-appearance:none;*/
    /*padding-right: .1rem;*/
    /*width: 1.8rem;*/
    /*border:none;*/
    /*background: url("../assets/images/home/icon_extend@2x.png") no-repeat scroll right center transparent;*/
    /*background-size: .1rem;*/
    /*outline:none;*/
    /*color: #FFFFFF;*/
  /*}*/
  /*!*清除ie的默认选择框样式清除，隐藏下拉箭头*!*/
  /*select::-ms-expand { display: none; }*/
  /*select option{ color: #333;border: none;outline: none; }*/
  /*select option:hover{background: red;}*/
</style>
