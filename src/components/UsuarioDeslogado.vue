<template>
  <div>
    <q-btn color="dark" class="q-ma-md" label="Login" icon="login" to="login" />
  </div>
</template>

<script>
const linksData = [
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
  },
  {
    title: "Cadastrar Login",
    caption: "",
    icon: "face",
    link: "/users/register-login"
  }
];

export default {
  name: "UsuarioDeslogado",

  created() {
    this.$emit("linksPagina", linksData);
  }
};
</script>
