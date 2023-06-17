<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <img src="./assets/code.png" alt="..." class="image-nav" />
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" @click="path = '/'"> Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle bg-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Usuário
          </a>
          <div class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLin">
            <a class="dropdown-item" @click="path = '/cadastro_user'">Cadastrar</a>
            <!-- <div class="dropdown-divider" /> -->
            <a class="dropdown-item" @click="path = '/list_user'">Listar</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
    </div>
  </nav>
  <div class="container-body">
    <count v-if="path === '/count'" />
    <login v-if="path === '/login'" />
    <!-- <cadastroUser v-if="path === '/cadastarUser'" /> -->
    <list_user v-if="path === '/list_user'" />
    <home v-if="path === '/'" />
    <cadastro_user v-if="path === '/cadastro_user'" />
  </div>
</template>

<script>
import { defineAsyncComponent, ref } from 'vue'

export default {
  name: 'App',
  components: {
    login: defineAsyncComponent(() => import('@/views/login/index.vue')),
    count: defineAsyncComponent(() => import('@/views/count/index.vue')),
    list_user: defineAsyncComponent(() => import('@/views/list_user/index.vue')),
    cadastro_user: defineAsyncComponent(() => import('@/views/cadastro_user/index.vue')
    ),
    home: defineAsyncComponent(() => import('@/views/home/index.vue'))
  },
  setup() {
    const path = ref('/')
    return {
      path
    }
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;

  /* text-align: center; */
}

.container-body {
  /* margin: 15px; */
  text-align: center;
  /* position: fixed; */
  top: 100px;
  bottom: 0px;
  left: 0px;
  right: 0px;
}

.navbar-brand {
  padding-left: 20px;
}

.nav-link:hover {
  background: linear-gradient(to right, rgb(229, 255, 113), rgb(56, 234, 107)),
    linear-gradient(to right,
      rgba(255, 0, 0, 1),
      rgba(255, 0, 180, 1),
      rgba(0, 100, 200, 1));
  cursor: pointer;
  background-size: 100% 3px, 0 3px;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms;
}

.image-nav {
  /* padding: 5px; */
  width: 60px;
}

.dropdown-item {
  cursor: pointer;
}

.dropdown-item:hover {
  background: linear-gradient(to right, rgb(229, 255, 113), rgb(56, 234, 107)),
    linear-gradient(to right,
      rgba(255, 0, 0, 1),
      rgba(255, 0, 180, 1),
      rgba(0, 100, 200, 1));
  cursor: pointer;
  background-size: 100% 3px, 0 3px;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms;
}
</style>
