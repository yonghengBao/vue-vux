/**
 * Created by Administrator on 2018/3/25.
 */

import Vue from 'vue'
import axios from 'axios'
import { baseURL } from './api'

//'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' //请求数据主体放在form Data中
//'Content-Type': 'application/json;charset=utf-8', //请求数据防止Request Payload中

//httpService不带请求拦截器
const httpService = axios.create({
  baseURL: baseURL,// 接口的域名地址
  timeout: 15000
})

//httpServices带请求拦截器
const httpServices = axios.create({
  baseURL: baseURL,// 接口的域名地址
  timeout: 15000
})

//请求拦截器
httpServices.interceptors.request.use(config=>{
  return config;
},err=>{
  console.log("请求拦截出错！")
  return Promise.reject(error);
});
//响应拦截器
httpServices.interceptors.response.use(req=>{
  return req;
},err=>{
  console.log("响应拦截出错！")
  return Promise.reject(error);
})


export default{
  install(Vue, options) {
    //带参数请求
    Vue.prototype.getData = function ({type,url,params,succ}) {
      var options = {
        url:url,
        method:type
      }
      if(params){
        if (type.toLowerCase() === 'get') {
          options.params = params
        } else {
          options.data = params
        }
      }
      httpService(options).then(response=>{
        if(response.data.code=="000000"){
          succ(response.data);
        }else if(resData.code == "000001" || resData.code == "000002"){
          this.$vux.toast.text("登录失效，请重新登录")
          window.location.href=baseURL+'#/Login';
        }else {
          this.$vux.toast.text(response.data.msg)
        }
      }).catch(err=>{
          if(process.env.NODE_ENV=='production'){
            if(err.message.indexOf("timeout")!=-1){
              this.$vux.toast.text("服务器连接超时")
            }
            this.$vux.toast.text("网络异常请检查")
          }else {
            throw err;
          }
      });
    }
  }
}
