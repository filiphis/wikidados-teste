<template>
  <q-page class="container" padding>
    <h1 class="text-h4 text-center">Lista de Usuarios</h1>

     <q-list bordered separator>

      <q-item v-for="user in users" :key="user.id" class="q-mb-sm" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img :src="`${user.avatar}`">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ user.first_name }} ' ' {{user.last_name}}</q-item-label>
          <q-item-label caption lines="1">{{ user.email }}</q-item-label>
        </q-item-section>

      </q-item>
    </q-list>

  </q-page>
</template>

<script>
import User from '../domain/user/User';

export default {
  name: 'ListaUsuarios',


    data(){
      return {
        users : []
      }
    },

  created(){

    User.show()
      .then(res => {
        console.log("Res.data.data " , res.data.data);
        this.users = res.data.data;
      })
    ;
  }
}

</script>

<style scoped>

</style>
