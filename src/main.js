// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import './mock/mock'
import axios from 'axios'
import './config/axios'
import 'font-awesome/css/font-awesome.min.css';
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css'
import 'mockjs'
import echarts from 'echarts'
//将引入的组件注册为全局Vue组件
Vue.use(ElementUi)

Vue.prototype.$axios  = axios
Vue.prototype.$bus = new Vue()
Vue.prototype.$echarts  = echarts
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
