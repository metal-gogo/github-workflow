import validateEmail from '~/utils/validateEmail'

const state = () => ({
  firstName: '',
  lastName: '',
  githubUsername: '',
  email: '',
  hasAcceptedTermsAndServices: false
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
  },
  isValidEmail(state) {
    return validateEmail(state.email)
  },
  isValidTermsAndServices(state, getters) {
    return getters.isValidEmail && state.hasAcceptedTermsAndServices
  }
}

const mutations = {
  toggleHasAcceptedTermsAndServices(state) {
    state.hasAcceptedTermsAndServices = !state.hasAcceptedTermsAndServices
  },
  updateFirstName(state, firstName) {
    state.firstName = firstName
  },
  updateLastName(state, lastName) {
    state.lastName = lastName
  },
  updateGithubUsername(state, githubUsername) {
    state.githubUsername = githubUsername
  },
  updateEmail(state, email) {
    state.email = email
  }
}

export default {
  state,
  getters,
  mutations,
  actoins: {}
}
