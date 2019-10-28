<template>
  <main class="container">
    <div v-if="isLoading" class="github-info__container github-info__loading">
      Loading...
    </div>
    <div v-else-if="hasError" class="github-info__container github-info__error">
      <h2>There was an error...</h2>
      <p>{{ errorReason }}</p>
      <button class="main-cta restart-cta" @click="handleRestartWorkflow">
        Try another Github user
      </button>
    </div>
    <div v-else class="github-info__container github-info__success">
      <h2>Thanks {{ fullName }}!</h2>
      <div class="github-info__avatar-container">
        <img
          :src="avatarUrl"
          :alt="`${fullName} Github avatar`"
          class="github-info__avatar"
        />
      </div>
      <button class="main-cta" @click="handleRestartWorkflow">
        Explir another Github user
      </button>
    </div>
  </main>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

const validAvatarInResponse = (response) => {
  const OK = 200

  return (
    response.status === OK &&
    response.data &&
    response.data.avatar_url &&
    response.data.avatar_url.length > 0
  )
}

export default {
  data() {
    return {
      avatarUrl: '',
      errorReason: '',
      hasError: false,
      hasValidGithubInfo: false,
      isLoading: true
    }
  },
  computed: {
    ...mapState({
      githubUsername: (state) => state.githubUsername
    }),
    ...mapGetters(['fullName'])
  },
  async mounted() {
    try {
      const response = await this.$axios.get(
        `https://api.github.com/users/${this.githubUsername}`
      )
      if (validAvatarInResponse(response)) {
        this.avatarUrl = response.data.avatar_url
      } else {
        this.errorReason =
          'The response from Github is missing the avatar information'
        this.hasError = true
      }
      this.isLoading = false
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        this.errorReason = `The request was made and the server responded with '${error.response.status} - ${error.response.statusText}' response.`
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        this.errorReason = 'The request was made but no response was received.'
      } else {
        // Something happened in setting up the request to Beek that triggered an error
        this.errorReason =
          'Something happened in setting up the request to Beek that triggered an error.'
      }
      this.hasError = true
      this.isLoading = false
    }
  },
  methods: {
    handleRestartWorkflow() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
.github-info__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}

.github-info__avatar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 115px;
  height: 115px;
  margin-bottom: 3rem;
  border: 2px solid $violet-heart;
  border-radius: 20px;
  background-color: $daisy-bush;
  overflow: hidden;
  transform: rotate(45deg);
}

.github-info__avatar {
  transform: rotate(-45deg);
}
</style>
