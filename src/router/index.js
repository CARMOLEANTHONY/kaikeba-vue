import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/mainPage'
import FormSample from '@/components/page/form'
import TreeSample from '@/components/page/tree'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/form',
      name: 'FormSample',
      component: FormSample
    },
    {
      path: '/tree',
      name: 'TreeSample',
      component: TreeSample
    }
  ]
})
