import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/mainPage'

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
    {
      path: '/breadcrumb',
      name: 'FirstLevelBreadcrumbSample',
      component: () => import('@/components/page/breadcrumb'),
      meta: {
        breadcrumbLabel: 'BreadcrumbSample'
      },
      children: [
        {
          path: 'second-level',
          name: 'SecondLevelBreadcrumbSample',
          component: () => import('@/components/page/breadcrumb/second-level'),
          meta: {
            breadcrumbLabel: 'SecondLevelSample'
          },
          children: [
            {
              path: 'third-level',
              name: 'ThirdLevelBreadcrumbSample',
              component: () => import('@/components/page/breadcrumb/third-level'),
              meta: {
                breadcrumbLabel: 'ThirdLevelSample'
              }
            }
          ]
        }
      ]
    },

    // 404
    {
      path: '*',
      redirect: '/'
    }
  ]
})
