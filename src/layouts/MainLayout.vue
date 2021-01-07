<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Usuarios
        </q-toolbar-title>

        <UsuarioLogado v-if="usuarioLogado" @linksPagina="alteraLinks" />
        <UsuarioDeslogado v-else @linksPagina="alteraLinks" />

        <div></div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">
          Funcionalidades
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import UsuarioLogado from "components/UsuarioLogado.vue";
import UsuarioDeslogado from "components/UsuarioDeslogado.vue";

const linksData = [];

export default {
  name: "MainLayout",
  components: {
    EssentialLink,
    UsuarioLogado,
    UsuarioDeslogado
  },

  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    };
  },

  methods: {
    alteraLinks(links) {
      this.essentialLinks = links;
    }
  },

  computed: {
    usuarioLogado() {
      return Boolean(this.$store.state.token);
    }
  }
};
</script>
