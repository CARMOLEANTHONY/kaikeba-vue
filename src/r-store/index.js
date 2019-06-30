import Vuex from '@/utils/factory/r-store'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bomb: 0
  },
  mutations: {
    throwBomb(state, n = 3, test) {
      console.log(test, 'test')
      state.bomb += n
    }
  },
  getters: {
    bombCount(state) {
      return `共扔出了 ${state.bomb} 个炸弹， 花了${state.bomb * 2}元`
    }
  },
  actions: {
    asyncThrow({ commit }, per, a) {
      setTimeout(() => {
        commit('throwBomb', per, a)
      }, 3000)
    }
  }
})
