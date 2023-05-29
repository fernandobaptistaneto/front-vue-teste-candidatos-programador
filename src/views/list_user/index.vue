<template>
  <button @click.prevent="listar">Listar Usuários</button>
  <div id="container" class="w-100 d-flex flex-column">
    <table class="table table-striped" v-for="(item, i) in itens" :key="i">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Id</th>
          <th scope="col">Username</th>
          <th scope="col">Password</th>
          <th scope="col">Nome</th>
          <th scope="col">Created</th>
          <th scope="col">Updated</th>
          <th scope="col">Deleted</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>{{ item.id }}</td>
          <td>{{ item.username }}</td>
          <td>{{ item.password }}</td>
          <td>{{ item.name }}</td>
          <td>{{ convert_timestamp(item.created) }}</td>

          <td>{{ item.updated }}</td>
          <td>{{ item.deleted }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "user_list",
  computed: {
    ...mapGetters("user", ["itens"]),
  },
  methods: {
    ...mapActions("user", ["listar"]),
    ...mapActions("user", ["convert_timestamp"]),
  },
};
</script>
<style lang=""></style>
