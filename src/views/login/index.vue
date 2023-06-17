<template lang="">
  <br />
  <br />
  <div class="container">
    <form @submit.prevent="submit">
      <div class="card">
        <h1>Login</h1>
        <div class="inputBox">
          <input v-model.trim="username" autocomplete="false" type="text" required="required" />
          <span class="user">Username</span>
        </div>
        <div class="error" v-if="!v$.username.required">Name is required</div>

        <div class="inputBox">
          <input v-model="password" autocomplete="false" type="password" required="required" />
          <span>Password</span>
        </div>

        <button class="button" @click="teste" :disabled="submitStatus === 'PENDING'">Submit!</button>
        <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
        <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
        <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>

        <button @click.prevent="login" type="submit" class="enter">Enter</button>
      </div>
    </form>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { mapGetters, mapActions } from "vuex";
import login from './store'

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      username: "",
      password: "",
      email: "",
      submitStatus: ''
    };
  },
  computed: {
    ...mapGetters("login", ["getUsuario"]),
  },
  actions: {
    ...mapActions('login', ['getUser'])
  },
  methods: {
    login() {
      // if (this.username == "" || this.password == "") {
      //   alert("Preencha todos os campos!");
      // }
      // if (this.username && this.password) {
      //   if (this.username == "fernando" && this.password == "1234") {
      //     alert("Usuario Logado com sucesso!");
      //   } else {
      //     alert("Usuario inválido!");
      //   }
      // }
    },
    submit() {
      console.log('ta chamando',getUser)
      if (this.v$.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        this.submitStatus = "OK";
      }
    },
  },
  validations() {
    return {
      username: { required },
      password: { required },
      email: { required, email },
    };
  },
};
</script>

<style scoped>
.login {
  color: #000;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: block;
  font-weight: bold;
  font-size: x-large;
}

.card {
  /* outline: dashed 1px black; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  min-height: 350px;
  width: 300px;
  flex-direction: column;
  gap: 45px;
  background: #ffffff;
  box-shadow: 16px 16px 32px #ffffff, -16px -16px 32px #fefefe;
  border-radius: 8px;
}

.inputBox {
  position: relative;
  width: 250px;
}

.inputBox input {
  width: 100%;
  padding: 10px;
  outline: none;
  border: none;
  color: #000;
  font-size: 1em;
  background: transparent;
  border-left: 2px solid #000;
  border-bottom: 2px solid #000;
  transition: 0.1s;
  border-bottom-left-radius: 8px;
}

.inputBox span {
  margin-top: 5px;
  position: absolute;
  left: 0;
  transform: translateY(-4px);
  margin-left: 10px;
  padding: 10px;
  pointer-events: none;
  font-size: 12px;
  color: #000;
  text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 3px;
  border-radius: 8px;
}

.inputBox input:valid ~ span,
.inputBox input:focus ~ span {
  transform: translateX(113px) translateY(-15px);
  font-size: 0.8em;
  padding: 5px 10px;
  background: #000;
  letter-spacing: 0.2em;
  color: #fff;
  border: 2px;
}

.inputBox input:valid,
.inputBox input:focus {
  border: 2px solid #000;
  border-radius: 8px;
}

.enter {
  height: 45px;
  width: 100px;
  border-radius: 5px;
  border: 2px solid #000;
  cursor: pointer;
  background-color: transparent;
  transition: 0.5s;
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: 2px;
  margin-bottom: 1em;
}

.enter:hover {
  background-color: rgb(0, 0, 0);
  color: white;
}
</style>
