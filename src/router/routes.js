
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ListaUsuarios.vue') , meta:{public:true}},
      { path: 'list', component: () => import('pages/ListaUsuarios.vue') , meta:{public:true}},
      { path: 'register', component: () => import('pages/Index.vue') , meta:{public:true}},
      { path: 'register-login', component: () => import('pages/NovoUserLogin.vue') , meta:{public:true}},
      { path: 'login', component: () => import('pages/Login.vue') , meta:{public:true}},
      { path: 'dashboard', component: () => import('pages/Dashboard.vue') },
      { path: 'home', component: () => import('pages/Home.vue') },
    ]
  },

  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]


export default routes
