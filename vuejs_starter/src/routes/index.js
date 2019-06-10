import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Toast from '@/components/Toast'
import Welcome from '@/components/Welcome'
import NotFound from '@/components/error-pages/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Toast',
      name: 'Toast',
      component: Toast
    },
    {
      path: '/Welcome',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
