<template>
  <q-page class="container" padding>
    <h1 class="text-h2 text-center">Seja bem vindo!</h1>
    <p>Usuario: {{ usuario }}</p>
  </q-page>
</template>

<script>
export default {
  computed: {
    usuario: {
      get() {
        return this.$store.state.token;
      },
      set(val) {
        this.$store.commit("updateDrawerState", val);
      }
    }
  }
};
</script>
