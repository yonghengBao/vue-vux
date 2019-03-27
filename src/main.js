// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuex from  'vuex'
import axios from 'axios'//网络请求

import './assets/css/base.css'
import '../static/style.css' //字体
import baseFn from './assets/js/base'
import { cookie,ToastPlugin,TransferDom ,WechatPlugin,ConfirmPlugin,LoadingPlugin, dateFormat, Icon ,Loading  } from 'vux' //vux中的基础组件
import isLoading from './store_modules/isLoading'
import NoData from '@/components/NoData'
import MyLoading from '@/components/MyLoading'


const FastClick = require('fastclick')
FastClick.attach(document.body)
Vue.config.productionTip = false

Vue.prototype.$axios=axios;
Vue.use(vuex);
Vue.use(baseFn);  //请求
Vue.use(LoadingPlugin); //全局loading
Vue.use(ToastPlugin); //全局toast
//全局组件
Vue.component('no-data',NoData)
Vue.component('loading',Loading)
Vue.component('my-loading',MyLoading)

//全局过滤器
Vue.filter('dateFormat',function (data,formatStr) {
  return dateFormat(data, formatStr);
})

//全局指令
Vue.directive('transfer-dom',TransferDom)
const  store = new vuex.Store({
  modules:{
    isLoading:isLoading
  }
});
router.beforeEach((to,from,next)=>{
  console.log(to)
  store.commit('updateLoadingStatus',{isLoading:true});
  next();
  let allowBack = true
  if (to.meta.allowBack !== undefined) {
    allowBack = to.meta.allowBack
  }
  localStorage.setItem('allowBack', allowBack)
  // alert(11)
  if (!allowBack) {
    history.pushState(null, null, location.href)
  }
})
router.afterEach(to=>{
  setTimeout(()=>{
    store.commit('updateLoadingStatus',{isLoading:false})
  },200)

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
