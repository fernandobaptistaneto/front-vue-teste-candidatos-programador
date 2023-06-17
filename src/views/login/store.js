const state = {
  usuario: {
    infos: {
      nomeCompleto: "Fernando Amorim",
      cpf: "03231324130",
      data_nascimento: "26/07/1994",
    },
    dadosUser: {
      username: "femaster",
      password: "1234",
      email: "fernando@gmail.com",
    },
  },
  itens: [],
};

const mutations = {
  'SET_USER'(state, payload) {
    state.itens = payload;
  }
};

const actions = {
  getUser({commit}, payload) {
    commit('SET_USER', getUsuario)
    return itens
  }
};

const getters = {
  getUsuario: (state) => state.usuario,
  itens: (state) => state.itens,
};

export default { state, mutations, actions, getters, namespaced: true };
