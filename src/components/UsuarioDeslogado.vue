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
    link: "list"
  },
  {
    title: "Cadastrar Usuarios",
    caption: "",
    icon: "add",
    link: "register"
  },
  {
    title: "Cadastrar Login",
    caption: "",
    icon: "face",
    link: "register-login"
  }
];

export default {
  name: "UsuarioDeslogado",

  created() {
    this.$emit("linksPagina", linksData);
  }
};
</script>
