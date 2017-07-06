// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)
// 1.定义组件，这里使用从其他文件import进来
const goods = require('./components/goods/goods.vue')
const seller = require('./components/seller/seller.vue')
const ratings = require('./components/ratings/ratings.vue')
// 2.定义路由

const routes = [
    { path: '/', component: goods },
    { path: '/goods', component: goods },
    { path: '/seller', component: seller },
    { path: '/ratings', component: ratings }
]
// 3.创建 router 实例，然后传 routes 配置
const router = new VueRouter({
  routes
})
// 4.创建和挂载根实例。通过 router 配置参数注入路由，从而让整个应用都有路由功能

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  render: h => h(App)
})
