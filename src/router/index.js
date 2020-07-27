import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/manage'
    },
    {
      path: '/manage',
      name: 'Manage',
      component: () => import('@/components/Manage')
    },
    {
      path: '/echarts',
      name: 'Manage',
      component: () => import('@/components/Echarts')
    },
    {
      path: '/form',
      name: 'Manage',
      component: () => import('@/components/Form')
    }
  ]
})
