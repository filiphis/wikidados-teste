<template>
  <q-page class="container" padding>
    <h1 class="text-h4 text-center">Cadastrar acesso</h1>

    <div>
      <q-form @submit="register" ref="myForm">
        <q-input
          outlined
          v-model="user.email"
          label="Email *"
          class="q-ma-md"
          type="email"
          :rules="[
            val => !!val || 'O campo email é obrigatorio! Digite seu email.'
          ]"
        >
          <template v-slot:prepend>
            <q-icon name="email" />
          </template>
        </q-input>

        <q-input
          outlined
          v-model="user.password"
          label="Senha *"
          class="q-ma-md"
          :type="isPwd ? 'password' : 'text'"
          :rules="[
            val =>
              (val && val.length >= 3) ||
              'O campo senha é obrigatorio! Digite sua senha.'
          ]"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>

        <div class="column float-left">
          <q-btn
            color="primary"
            class="q-ma-md"
            label="Cadastrar"
            icon="add"
            type="submit"
          />
        </div>
      </q-form>
    </div>

    <div class="separaTop">
      <h2 class="text-h6 text-center">
        Somente os usuarios abaixo são liberados pela API para cadastrado:
      </h2>

      <div class="q-pa-lg">
        <q-list bordered separator>
          <q-item
            v-for="definedUser in definedUsers"
            :key="definedUser.id"
            class="q-mb-sm"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-avatar>
                <img :src="`${definedUser.avatar}`" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label
                class="text-weight-bolder text-dark"
                caption
                lines="1"
                >{{ definedUser.email }}</q-item-label
              >
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script>
import Login from "../domain/login/Login";

export default {
  name: "NovoUserLogin",

  created() {
    Login.definedUsers().then(res => {
      this.definedUsers = res.data.data;
    });
  },

  data() {
    return {
      isPwd: true,
      user: {
        email: "",
        password: ""
      },

      definedUsers: []
    };
  },

  methods: {
    register() {
      Login.register(this.user)
        .then(res => {
          console.log(res);
          this.$router.push("login");
        })
        .catch(erro => console.log(erro));
    }
  }
};
</script>

<style scoped>
.separaTop {
  margin-top: 80px;
}
</style>
