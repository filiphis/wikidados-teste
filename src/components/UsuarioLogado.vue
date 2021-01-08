<template>
  <div>
    <q-btn
      color="dark"
      class="q-ma-md"
      label="Logout"
      icon="keyboard_backspace"
      @click="Logout"
    />
  </div>
</template>

<script>
const linksData = [
  {
    title: "Home",
    caption: "",
    icon: "home",
    link: "home"
  },
  {
    title: "Mostra Dashboard",
    caption: "",
    icon: "dashboard",
    link: "dashboard"
  },
  {
    title: "Listar usuarios",
    caption: "",
    icon: "list",
    link: "list"
  },
  {
    title: "Cadastrar Usuarios",
    caption: "",
    icon: "add",
    link: "register"
  }
];

export default {
  name: "UsuarioLogado",

  created() {
    this.$emit("linksPagina", linksData);
  },

  methods: {
    Logout() {
      this.$store.commit("USUARIO_DESLOGADO");
      this.$router.push("login");
    }
  }
};
</script>
