import Vue from 'vue'
import Router from 'vue-router'
const Home = () =>import ( '@/components/Home')
const Home1 = () =>import ( '@/components/Home1')
const Login = () =>import ( '@/components/user/Login')
const Register = () =>import ( '@/components/user/Register')




const NotFound = () =>import ( '@/components/error/404')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      //redirect:{component: Home},
      meta:{allowBack: false,title:"首页"},
      component: Home
    },{
      path: '/home',
      name: 'Home',
      meta:{allowBack: false,title:"首页"},
      component: Home
    },{
      path: '/login',
      name: 'Login',
      meta:{title:"登录"},
      component: Login
    },{
      path: '/register/:type',
      name: 'Register',
      meta:{title:"注册"},
      component: Register
    },{
      path:'**',
      component:NotFound
    }
  ]
})
