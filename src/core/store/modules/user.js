import http from '@/core/http'
const state = {
  itens: [],
  item: {
    user: {
      name: '',
      username: '',
      password: ''
    }
  },
  data_convert: [],
  data_convert2: []
}

const getters = {
  itens: state => state.itens,
  data_convert: state => state.data_convert,
  item: state => state.item
}

const actions = {
  async listar ({ commit }, payload) {
    const result = await http.get('/userList', { params: payload })
    if (result.status != 200) throw new Error(result.data)
    commit('SET_ITENS', result.data)
    return Promise.resolve(result.data)
  },
  add ({ commit }, payload) {
    // commit('ADD_USER', payload)
    http
      .post('/userCreate', payload)
      .then(response => {
        alert('Cadastrado com sucesso!')
        commit('CLEAR_INPUTS')
      })
      .catch(error => {
        alert('Falha ao cadastrar Usuário!', error)
      })
  }
}

const mutations = {
  SET_ITENS (state, payload) {
    state.itens = payload
  },
  CLEAR_INPUTS (state) {
    state.item.user.name = ''
    state.item.user.password = ''
    state.item.user.username = ''
  }
}

export default { state, mutations, actions, getters, namespaced: true }
