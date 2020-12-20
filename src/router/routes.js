
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ListaUsuarios.vue') },
      { path: 'users/list', component: () => import('pages/ListaUsuarios.vue') },
      { path: 'users/register', component: () => import('pages/Index.vue') },,
    ]
  },

  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
