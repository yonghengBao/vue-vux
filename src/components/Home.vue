<template>
  <div>
    <x-header></x-header>
    <div class="testcon">less测试</div>
    <router-link :to="{name:'Login'}">登录</router-link>
    <tabbar>
      <tabbar-item selected>
        <img slot="icon" src="../assets/images/home/bar／tab_home_pre@2x1.png" srcset="../assets/images/home/bar／tab_home_pre@2x1.png 2x,../assets/images/home/bar／tab_home_pre@2x1.png 3x">
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

    }
  },
  mounted(){

  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../assets/less/common_less.less";
  .testcon{
    width: @width;
    height: @height;
    background-color: @color;
    margin-bottom: 5px;
  };
</style>
