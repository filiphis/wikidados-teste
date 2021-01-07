
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ListaUsuarios.vue') , meta:{public:true}},
      { path: 'users/list', component: () => import('pages/ListaUsuarios.vue') , meta:{public:true}},
      { path: 'users/register', component: () => import('pages/Index.vue') , meta:{public:true}},
      { path: 'users/register-login', component: () => import('pages/NovoUserLogin.vue') , meta:{public:true}},
      { path: 'users/login', component: () => import('pages/Login.vue') , meta:{public:true}},
      { path: 'users/dashboard', component: () => import('pages/Dashboard.vue') },
      { path: 'users/home', component: () => import('pages/Home.vue') },
    ]
  },

  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]


export default routes
