import { http } from '../../config';


export default {

  show: () => {
    return http.get('users?page=1');
  },

  save: (user) => {
    return http.post('users', user);
  },

  edit: (user) => {
    let retorno = http.put('user/'+ user.id, user);
    return retorno;
  },

  // delete: (user) => {
  //   return http.delete('user', {data:user});
  // }


}

