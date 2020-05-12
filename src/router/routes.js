const Common = () => import('pages/common/common')

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: Common,
    children: [
      {
        path: '/home',
        name: 'home',
        meta: { title: '首页' },
        component: () => import('pages/home/home')
      }
    ]
  }
]

export default routes
