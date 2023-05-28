const state = {
  counter: 5,
  nome: "",
};

const getters = {
  counter: (state) => state.counter,
  nome: (state) => state.nome,
};

const mutations = {
  decrement: (state) => state.counter--,
  increment: (state, num) => (state.counter = state.counter + num),
  mudarNome: (state, novoNome) => {
    state.nome = novoNome;
  },
};

const actions = {
  decrement: ({ commit }) => commit("decrement"),
  increment: ({ commit }) => commit("increment", 5),
  mudarNome({ commit }, novoNome) {
    commit("mudarNome", novoNome);
  },
};

export default { state, getters, mutations, actions, namespaced: true };
