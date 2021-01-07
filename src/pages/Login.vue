<template>
  <q-page class="container" padding>
    <h1 class="text-h4 text-center">Login de usuarios</h1>

    <div>
      <q-form @submit="efetuarLogin" ref="myForm" class="">
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
            label="Login"
            icon="login"
            type="submit"
          />
        </div>
        <q-btn
          color="secondary"
          class="q-ma-md float-right"
          label="Cadastre-se"
          icon="add"
          to="register-login"
        />
      </q-form>
    </div>
  </q-page>
</template>

<script>
import Login from "../domain/login/Login";

export default {
  name: "Login",

  created() {},

  data() {
    return {
      isPwd: true,
      user: {
        email: "",
        password: ""
      }
    };
  },

  methods: {
    efetuarLogin() {
      this.$store.dispatch("efetuarLogin", this.user).then(() => {
        this.$router.push("home");
      });
    }
  }
};
</script>

<style scoped></style>
