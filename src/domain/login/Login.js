import { http } from '../../config';


export default {

  register: (user) => {
    return http.post('register', user);
  },

  definedUsers: () => {
    return http.get('users?page=2');
  },
}

