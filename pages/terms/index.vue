<template>
  <main class="container">
    <h2>
      Terms and services
    </h2>
    <p>
      This is a demo, I'm only using the Github username to make a request to
      the Github API.
    </p>
    <p>
      I am not storing any information you use in this page. Thanks for using
      the demo!
    </p>
    <input-text
      id="email"
      v-model="email"
      label="Email"
      name="email"
      type="email"
    />
    <input-checkbox
      id="acceptsTermsAndServices"
      v-model="hasAcceptedTermsAndServices"
      label="I accept the terms and conditions"
      name="acceptsTermsAndServices"
    />
    <steps-control :previous-step="previousStep" :next-step="nextStep" />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

import StepsControl from '~/components/StepsControl'
import InputCheckbox from '~/components/InputCheckbox'
import InputText from '~/components/InputText'

export default {
  components: {
    StepsControl,
    InputCheckbox,
    InputText
  },
  data() {
    return {
      nextStep: {
        action: () => {
          this.$router.push('/github-info')
        },
        isDisabled: true,
        label: 'Terms'
      },
      previousStep: {
        action: () => {
          this.$router.go(-1)
        },
        isDisabled: false,
        label: 'Personal info'
      }
    }
  },
  computed: {
    email: {
      get() {
        return this.$store.state.email
      },
      set(value) {
        this.$store.commit('updateEmail', value)
        this.nextStep.isDisabled = !this.isValidTermsAndServices
      }
    },
    hasAcceptedTermsAndServices: {
      get() {
        return this.$store.state.hasAcceptedTermsAndServices
      },
      set(value) {
        this.$store.commit('toggleHasAcceptedTermsAndServices', value)
        this.nextStep.isDisabled = !this.isValidTermsAndServices
      }
    },
    ...mapGetters(['isValidTermsAndServices'])
  }
}
</script>
