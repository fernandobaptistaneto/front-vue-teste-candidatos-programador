<template lang="">
  <div class="container">
    <h1>Count init</h1>
    <h1>{{ counter }}</h1>
    <h1>{{ nome }}</h1>

    <form action="">
      <input v-model="novoNome" id="inputNome" placeholder="Digite algo" class="input" type="text" />
    </form>
    <button @click="increment">Incrementar</button>
    <button @click="decrement">Decrementar</button>
    <button @click.prevent="mudarNome(novoNome)">Mudar Nome</button>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "count",
  computed: {
    ...mapGetters("count", ["counter"]),
    ...mapGetters("count", ["nome"]),
  },
  methods: {
    ...mapActions("count", ["decrement"]),
    ...mapActions("count", ["increment"]),
    ...mapActions("count", ["mudarNome"]),
  },
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  gap: 20px;
}

.container button {
  margin: 10px;
  width: 250px;
}

button {
  border: none;
  outline: none;
  background-color: #000000;
  padding: 10px 20px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  border-radius: 5px;
  transition: all ease 0.1s;
  box-shadow: 0px 5px 0px 0px #757579;
}

button:active {
  transform: translateY(5px);
  box-shadow: 0px 0px 0px 0px #f7f7fa;
}

.input {
  max-width: 245px;
  height: 35px;
  width: 230px;
  border: 2px solid transparent;
  outline: none;
  border-bottom: 2px solid #3f3f3f;
  caret-color: #3f3f3f;
  background-color: #ffffff;
  padding: 5px;
  transition: 0.5s linear;
  font-family: monospace;
  letter-spacing: 1px;
}

.input:focus {
  border: 2px solid #fa4753;
  caret-color: #fa4753;
  color: #fa4753;
  box-shadow: 4px 4px 10px #070707;
}

.input:focus::placeholder {
  color: #fa4753;
}
</style>
