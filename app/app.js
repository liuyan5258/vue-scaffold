import Vue from 'vue'
import VueRouter from 'vue-router'
// import RouterConfig from './router'
import app from './main'
import lizhongshuo from './components/lizhongshuo'
import wanglihong from './components/wanglihong'

Vue.use(VueRouter)

var App = Vue.extend({})

const router = new VueRouter()

router.map({
  '/main': {
    name: 'name',
    component: app
  },
  '/lizhongshuo': {
    name: 'lizhongshuo',
    component: lizhongshuo
  },
  '/wanglihong': {
    name: 'wanglihong',
    component: wanglihong
  }
})

router.redirect({
  '*': '/main'
})

router.start(App,'#app')





