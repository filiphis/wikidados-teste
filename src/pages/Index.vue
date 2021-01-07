<template>
  <q-page class="container" padding>
    <h1 class="text-h4 text-center">Usuarios</h1>

    <div>
      <q-form @submit="save" @reset="onReset" ref="myForm">
        <q-input
          outlined
          v-model="user.name"
          label="Nome *"
          class="q-ma-md"
          :rules="[
            val =>
              (val && val.length >= 3) ||
              'O campo nome é obrigatorio e deve ter no minimo 3 caracteres.'
          ]"
        >
          <template v-slot:prepend>
            <q-icon name="person" />
          </template>
        </q-input>

        <q-input
          outlined
          v-model="user.job"
          label="Profissão *"
          class="q-ma-md"
          :rules="[
            val =>
              (val && val.length >= 3) ||
              'O campo profissão é obrigatorio e deve ter no minimo 3 caracteres.'
          ]"
        >
          <template v-slot:prepend>
            <q-icon name="work" />
          </template>
        </q-input>

        <div class="column float-left">
          <q-btn
            color="primary"
            class="q-ma-md"
            label="Salvar"
            icon="add"
            type="submit"
          />
        </div>
      </q-form>
    </div>

    <q-separator class="q-my-sm" />

    <div>
      <div class="q-pa-md">
        <q-markup-table>
          <thead>
            <tr>
              <th class="text-left">#Id</th>
              <th class="text-center">Nome</th>
              <th class="text-center">Ocupação</th>
              <th class="text-center">Criado em</th>
              <th class="text-center">Ultima alteração</th>
              <th class="text-center">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in usuarios" v-bind:key="user.id">
              <td class="text-left">{{ user.id }}</td>
              <td class="text-center">{{ user.name }}</td>
              <td class="text-center">{{ user.job }}</td>
              <td class="text-center">{{ user.createdAt }}</td>
              <td class="text-center">{{ user.updatedAt }}</td>
              <td class="text-right">
                <q-btn
                  color="primary"
                  icon="edit"
                  class="q-mx-sm"
                  aria-label="Editar usuario"
                  @click="edit(user)"
                />

                <q-btn
                  color="negative"
                  icon="delete"
                  aria-label="Deletar usuario"
                  @click="remove(user)"
                />
              </td>
            </tr>
          </tbody>
        </q-markup-table>
      </div>
    </div>
  </q-page>
</template>

<script>
import User from "../domain/user/User";

export default {
  name: "PageIndex",

  data() {
    return {
      user: {
        name: "",
        job: ""
      },

      usuarios: []
    };
  },

  methods: {
    save() {
      if (this.user.id) {
        User.edit(this.user).then(res => {
          this.onSubmit("Usuario atualizado!");

          let result = this.usuarios.findIndex(
            usuario => usuario.id === res.data.id
          );

          this.usuarios.splice(result, 1);
          this.usuarios.push(res.data);
        });
        return;
      }

      User.save(this.user).then(res => {
        console.log(res.data);
        this.usuarios.push(res.data);
        this.onSubmit("Cadastro realizado!");
      });
    },

    edit(user) {
      this.user = user;
      return;
    },

    remove(user) {
      if (confirm(`Deseja remover o(a) usuário(a) ${user.name} ?`)) {
        let arrIndice = this.usuarios.findIndex(
          usuario => usuario.id == user.id
        );
        this.usuarios.splice(arrIndice, 1);
      }
    },

    onSubmit(message) {
      this.$q.notify.setDefaults({
        position: "top",
        timeout: 3000,
        actions: [{ icon: "close", color: "white" }]
      });

      this.$q.notify({
        message: message,
        color: "positive"
      });

      this.onReset();
    },
    async onReset() {
      await this.resetForm();
      this.$refs.myForm.resetValidation();
    },
    async resetForm() {
      this.user = {
        name: "",
        job: ""
      };
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
</style>
