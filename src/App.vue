<template>
  <div id="app">
    <loading v-model="isLoading"></loading>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import { Loading } from 'vux'
export default {
  name: 'App',
  components: {
    Loading
  },
  data:function () {
    return{

    }
  },
  mounted(){
    let deviceWidth= document.documentElement.clientWidth
    document.documentElement.style.fontSize = (deviceWidth/3.75) + 'px';
  },
  computed:{
    isLoading(){
      return this.$store.getters.isLoadingStatus;
    }
  }
}
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  .slide-enter-active,.slide-leave-active{
    transition: opacity .5s;
  }
  .slide-enter,.slide-leave-to{
    opacity: 0;
  }
</style>
