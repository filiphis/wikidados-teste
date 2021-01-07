import Vue from 'vue'
import Vuex from 'vuex'
import { http } from 'src/config';

Vue.use(Vuex)

const state = {
  token: null,
  usuario: {
    nome: 'Luiz'
  }
}
const mutations = {
  USUARIO_LOGADO(state, {token}){
    state.token = token;
  },

  USUARIO_DESLOGADO(state){
    state.token = null;
  }
}

const actions = {
  efetuarLogin({ commit }, user){
    return new Promise((resolve, reject) => {
      http.post('login', user)
        .then(res => {
          commit("USUARIO_LOGADO", {

            token: res.data.token
          })
          resolve(res.data)
        })
        .catch(erro => {
          reject(erro);
        })
      ;
    });
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
});
