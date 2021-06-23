var balao = []

export const state = () => ({
  list: []
})

export const mutations = {
  adicionar (state, payload) {
    // console.log(state.data, state.list, payload)
    balao = state.data
  }
}

export const getters = {
  myList: (state, getters) => {
    return balao
  }
}
