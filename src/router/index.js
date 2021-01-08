import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '../store/index';

import { Notify } from 'quasar'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

const Router = new VueRouter({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes,

  // Leave these as they are and change in quasar.conf.js instead!
  // quasar.conf.js -> build -> vueRouterMode
  // quasar.conf.js -> build -> publicPath
  mode: process.env.VUE_ROUTER_MODE,
  base: process.env.VUE_ROUTER_BASE
});

Router.beforeEach((routeTo, routeFrom, next) => {
  if (!routeTo.meta.public && !store.state.token) {
    Notify.create({
      position: 'top',
      timeout: 2500,
      actions: [{ icon: 'close', color: 'white' }],
      message: 'Você não possui acesso a está pagina e será redirecionado!!!',
      textColor: 'black',
      color:'warning',
      progress: true,
    });

    return (
      setTimeout(() => {
        next({path: 'login'})
      }, 4000)
    ) ;

  }

  next();
});

export default Router;
