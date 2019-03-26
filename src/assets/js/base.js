/**
 * Created by Administrator on 2018/3/25.
 */
import axios from 'axios'
import { baseURL } from './api'

//'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' //请求数据主体放在form Data中
//'Content-Type': 'application/json;charset=utf-8', //请求数据防止Request Payload中

const httpService = axios.create({
  baseURL: baseURL,// 接口的域名地址
  timeout: 15000
});

//请求拦截器
httpService.interceptors.request.use(config=>{
  return config;
},err=>{
  console.log("请求拦截出错！")
  return Promise.reject(error);
});
//响应拦截器
httpService.interceptors.response.use(req=>{
  return req;
},err=>{
  console.log("响应拦截出错！")
  return Promise.reject(error);
})


export default{
  install(Vue, options) {
    //type,请求方式，默认是get请求
    //url,请求地址，必传
    //params,请求参数，可选
    //headers,请求头设置，可选
    //ischeckcode,是否需要自行判断响应回来的response.data.code值，默认是1，传ischeckcode:2时需要自行判断response.data.code值，
    //callback,请求完成后的回调，可选
    Vue.prototype.getData = function ({type,url,params,headers,ischeckcode,callback}) {
      if(!url){
        this.$vux.toast.text("缺少请求url");
        return
      }
      type = type || 'get';
      ischeckcode = ischeckcode || 1;
      let options = {
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
      if(headers){
        options.headers=headers
      }
      httpService(options).then(response=>{
        if(response.status==200 && ischeckcode==1){
          if(response.data.code=="000000"){
            if(callback){callback(response.data);}
          }else if(resData.code == "000001" || resData.code == "000002"){
            this.$vux.toast.text("登录失效，请重新登录");
            //清除登录信息
            let timer = setTimeout(()=>{
              this.$router.push({name:'Login'});
              clearTimeout(timer)
            },2000)
          }else {
            this.$vux.toast.text(response.data.msg)
          }
        }else if(response.status==200 && ischeckcode==2){
          if(callback){callback(response.data);}
        }else {
          this.$vux.toast.text("请求接口数据异常")
        }
      }).catch(err=>{
          if(process.env.NODE_ENV=='production'){//开发环境出现错误直接抛出
            if(err.message.indexOf("timeout")!=-1){
              this.$vux.toast.text("服务器连接超时")
            }
          }else {
            throw err;
          }
      });
    }
  }
}
