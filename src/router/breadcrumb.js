/**
 * the route configuration of breadcrumb part
 */

export default {
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
          path: 'third-level-one',
          name: 'ThirdLevelBreadcrumbSampleOne',
          component: () => import('@/components/page/breadcrumb/third-level-one'),
          meta: {
            breadcrumbLabel: 'ThirdLevelSampleOne'
          }
        },
        {
          path: 'third-level-two',
          name: 'ThirdLevelBreadcrumbSampleTwo',
          component: () => import('@/components/page/breadcrumb/third-level-two'),
          meta: {
            breadcrumbLabel: 'ThirdLevelSampleTwo'
          },
          children: [
            {
              path: 'fourth-level',
              name: 'FourthLevelBreadcrumbSampleOne',
              component: () => import('@/components/page/breadcrumb/fourth-level'),
              meta: {
                breadcrumbLabel: 'FourthLevelSample'
              }
            }
          ]
        }
      ]
    }
  ]
}
