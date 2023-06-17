<template>
  <!-- <button @click.prevent="listar">Listar Usuários</button> -->
  <div>
    <h2>Lista de Usuários</h2>
    <div class="scrollDiv">
      <table class="table table-hover table-fixed table-bordered table-sm w-75">
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
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody clas="tbody">
          <tr v-for="(item, i) in itens" :key="i">
            <th scope="row">{{ i + 1 }}</th>
            <td>{{ item.id }}</td>
            <td>{{ item.username }}</td>
            <td>{{ item.password }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.created }}</td>
            <td>{{ item.updated }}</td>
            <td>{{ item.deleted }}</td>
            <td>

            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'user_list',
  created() {
    this.listarUsers()
  },
  computed: {
    ...mapGetters('user', ['itens'])
  },
  methods: {
    ...mapActions('user', ['listar']),
    listarUsers() {
      this.listar()
    }
  }
}
</script>
<style scoped>
.table {
  margin: 50px auto;
  text-align: center;
  border-color: black;
  width: 190px;
  height: 254px;
  background: rgb(236, 236, 236);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

.scrollDiv {
  height: 80vh;
  overflow: scroll;
}

.table-hover tbody tr:hover td,
.table-hover tbody tr:hover th {
  background: rgb(231, 235, 236);
}
</style>
