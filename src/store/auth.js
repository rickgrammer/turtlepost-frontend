const state = () => (
    {
        isLoggedIn: false,
        profile: {
            username: null,
            email: null,
        }
    }
)

const getters = {
    isLoggedIn() {
        return state.isLoggedIn
    }
}

const mutations = {
    loginUser(state, {isLoggedIn, profile}) {
        state.isLoggedIn = isLoggedIn
        state.profile = profile
    },
    logoutUser(state) {
        state.isLoggedIn = false
    }
}

const actions = {
    login ({commit}, profile) {
        commit('loginUser', {isLoggedIn: true, profile})
    },

    logout ({commit}) {
        commit('logoutUser')
    },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}