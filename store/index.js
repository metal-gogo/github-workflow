const state = () => ({
  firstName: '',
  lastName: '',
  githubUsername: ''
})

const getters = {
  fullName(state) {
    return `${state.firstName} ${state.lastName}`
  },
  isValidPersonalInfo(state) {
    return (
      state.firstName.length > 0 &&
      state.lastName.length > 0 &&
      state.githubUsername.length > 0
    )
  }
}

const mutations = {
  updateFirstName(state, firstName) {
    state.firstName = firstName
  },
  updateLastName(state, lastName) {
    state.lastName = lastName
  },
  updateGithubUsername(state, githubUsername) {
    state.githubUsername = githubUsername
  }
}

export default {
  state,
  getters,
  mutations,
  actoins: {}
}
