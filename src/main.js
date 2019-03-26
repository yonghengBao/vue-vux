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
import { cookie,ToastPlugin,TransferDom ,WechatPlugin,ConfirmPlugin,LoadingPlugin, dateFormat, Icon } from 'vux' //vux中的基础组件
import isLoading from './store_modules/isLoading'

const FastClick = require('fastclick')
FastClick.attach(document.body)
Vue.config.productionTip = false

Vue.prototype.$axios=axios;
Vue.use(vuex);
Vue.use(baseFn);
Vue.use(LoadingPlugin);
Vue.use(ToastPlugin);
const  store = new vuex.Store({
  modules:{
    isLoading:isLoading
  }
});
router.beforeEach((to,from,next)=>{
  store.commit('updateLoadingStatus',{isLoading:true});
  next();
})
router.afterEach(to=>{
  setTimeout(()=>{
    store.commit('updateLoadingStatus',{isLoading:false})
  },500)

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
