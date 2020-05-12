const Common = () => import('pages/common/common')

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: Common,
    children: [
      {
        path: '/home',
        component: () => import('pages/home/home')
      }
    ]
  }
]

export default routes
