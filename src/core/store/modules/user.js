import http from "@/core/http";
const state = {
  itens: [],
  data_convert: [],
  data_convert2: [],
};

const getters = {
  itens: (state) => state.itens,
  data_convert: (state) => state.data_convert,
};

const actions = {
  async listar({ commit }, payload) {
    const result = await http.get("/userList", { params: payload });
    if (result.status != 200) throw new Error(result.data);
    commit("set_itens", result.data);
    return Promise.resolve(result.data);
  },
  convert_timestamp({ commit }, tempo) {
    const convert = new Date(tempo);
    data_convert = convert.getDate() + "/" + (convert.getMonth() + 1) + "/" + convert.getFullYear();
    commit("convert_timestamp", tempo);
  },
};

const mutations = {
  set_itens(state, payload) {
    state.itens = payload;
  },
  convert_timestamp(state, tempo) {
    state.data_convert2 = state.data_convert;
  },
};

export default { state, mutations, actions, getters, namespaced: true };
