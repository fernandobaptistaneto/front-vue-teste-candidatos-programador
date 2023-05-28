<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <button @click="path = '/login'">Login</button>
      <button @click="path = '/count'">Count</button>
      <button @click="path = '/count'">Cadastar</button>
      <button @click="path = '/count'">Listar Usuários</button>
    </div>
  </nav>
  <div class="container-body">
    <count v-if="path === '/count'" />
    <login v-if="path === '/login'" />
    <!-- <cadastroUser v-if="path === '/cadastarUser'" /> -->
    <!-- <listarUser v-if="path === '/listarUser'" /> -->
  </div>
</template>

<script>
import { defineAsyncComponent, ref } from "vue";

export default {
  name: "App",
  components: {
    login: defineAsyncComponent(() => import("@/views/login/index.vue")),
    count: defineAsyncComponent(() => import("@/views/count/index.vue")),
  },
  setup() {
    const path = ref("/");

    return {
      path,
    };
  },
};
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

.container-body {
  margin-top: 50px;
}

button {
  background: #fff;
  border: none;
  padding: 10px 20px;
  display: inline-block;
  font-size: 15px;
  font-weight: 600;
  width: 200px;
  text-transform: uppercase;
  cursor: pointer;
  transform: skew(-21deg);
}

button::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  right: 100%;
  left: 0;
  background: rgb(20, 20, 20);
  opacity: 0;
  z-index: -1;
  transition: all 0.5s;
}

button:hover {
  color: #fff;
}

button:hover::before {
  left: 0;
  right: 0;
  opacity: 1;
}

.container-fluid {
  /* background-color: black; */
  box-sizing: border-box;
  box-shadow: 0 0 0px 5px rgba(0, 0, 0, 0.06);
}
</style>
