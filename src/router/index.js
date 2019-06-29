import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/mainPage'
import breadcrumbRouteConfiguration from './breadcrumb'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/samples'
    },
    {
      path: '/samples',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/form',
      name: 'FormSample',
      component: () => import('@/components/page/form')
    },
    {
      path: '/tree',
      name: 'TreeSample',
      component: () => import('@/components/page/tree')
    },

    breadcrumbRouteConfiguration,

    // 404
    {
      path: '*',
      redirect: '/'
    }
  ]
})
