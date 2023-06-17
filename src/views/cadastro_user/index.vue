<template>
  <h2>Cadastrar Novo Usuário</h2>
  <br />
  <br />
  <br />
  <form class="card">
    <div class="form-outline mb-4">
      <label class="form-label" for="form1Example2">Nome Completo</label>
      <input type="text" id="name" v-model="item.user.name" class="form-control" />
    </div>
    <!-- Email input -->
    <div class="form-outline mb-4">
      <label class="form-label" for="username">Username</label>
      <input v-model="item.user.username" id="username" class="form-control" />
    </div>
    <!-- Password input -->
    <div class="form-outline mb-4">
      <label class="form-label" for="password">Password</label>
      <input type="password" v-model="item.user.password" id="password" class="form-control" />
    </div>
    <!-- Submit button -->
    <button type="submit" @click.prevent="cadastrar()" class="btn btn-primary btn-block">
      Cadastrar
    </button>
    <br>
    <br>
    <br>
  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: "cadastro_usuario",
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters('user', ['item'])
  },
  methods: {
    ...mapActions('user', ['add']),
    cadastrar() {
      // console.log(this.item.user.name)
      this.add(this.item.user)
    }
  },
}
</script>

<style scoped>
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  min-height: 350px;
  width: 500px;
  flex-direction: column;
  /* gap: 45px; */
  background: #ffffff;
  /* box-shadow: 16px 16px 32px #7ce97f, -16px -16px 32px #c6f054; */
  border-radius: 10px;
}

.form-control {
  border-color: black;
}

.form-control:focus {
  border-color: black;
  box-shadow: 0 0 0 0.25rem rgba(44, 86, 212, 0.849);
}
</style>
