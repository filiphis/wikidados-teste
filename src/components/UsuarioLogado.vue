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
    link: "/users/home"
  },
  {
    title: "Mostra Dashboard",
    caption: "",
    icon: "dashboard",
    link: "/users/dashboard"
  },
  {
    title: "Listar usuarios",
    caption: "",
    icon: "list",
    link: "/users/list"
  },
  {
    title: "Cadastrar Usuarios",
    caption: "",
    icon: "add",
    link: "/users/register"
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
