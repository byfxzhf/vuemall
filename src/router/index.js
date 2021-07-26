import Vue from 'vue'
import Router from 'vue-router'
const Cart=()=>import('views/cart/Cart')
const Profile=()=>import('../views/profile/Profile')
const Home=()=>import('../views/home/Home')
const Category=()=>import('../views/category/Category')
Vue.use(Router)
let routes=[
  {
    path:"/",
    redirect:"/home"
  },
  {
    path:'/home',
    component:Home
  }
  ,
  {
    path:'/category',
    component:Category
  }
  ,
  {
    path:'/cart',
    component:Cart
  }
  ,
  {
    path:'/profile',
    component:Profile
  }
]
export default new Router({
  mode: 'history',
  routes
})
