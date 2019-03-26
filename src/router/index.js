import Vue from 'vue'
import Router from 'vue-router'
const Home1 = () =>import ( '@/components/Home1')
const Login = () =>import ( '@/components/user/Login')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home1',
      component: Home1
    },{
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
