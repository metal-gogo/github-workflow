<template>
  <main class="container">
    <h2>
      Personal information
    </h2>
    <input-text
      id="firstName"
      v-model="firstName"
      label="First name"
      name="firstName"
      type="text"
    />
    <input-text
      id="lastName"
      v-model="lastName"
      label="Last name"
      name="lastName"
      type="text"
    />
    <input-text
      id="githubUsername"
      v-model="githubUsername"
      label="Github username"
      name="githubUsername"
      type="text"
    />
    <steps-control :previous-step="previousStep" :next-step="nextStep" />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

import StepsControl from '~/components/StepsControl'
import InputText from '~/components/InputText'

export default {
  components: {
    StepsControl,
    InputText
  },
  data() {
    return {
      nextStep: {
        action: () => {
          this.$router.push('/terms')
        },
        isDisabled: true,
        label: 'Terms'
      },
      previousStep: {
        action: () => {
          this.$router.go(-1)
        },
        isDisabled: false,
        label: 'Introduction'
      }
    }
  },
  computed: {
    firstName: {
      get() {
        return this.$store.state.firstName
      },
      set(value) {
        this.$store.commit('updateFirstName', value)
        this.nextStep.isDisabled = !this.isValidPersonalInfo
      }
    },
    lastName: {
      get() {
        return this.$store.state.lastName
      },
      set(value) {
        this.$store.commit('updateLastName', value)
        this.nextStep.isDisabled = !this.isValidPersonalInfo
      }
    },
    githubUsername: {
      get() {
        return this.$store.state.githubUsername
      },
      set(value) {
        this.$store.commit('updateGithubUsername', value)
        this.nextStep.isDisabled = !this.isValidPersonalInfo
      }
    },
    ...mapGetters(['isValidPersonalInfo'])
  }
}
</script>
