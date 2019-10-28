<template>
  <main class="container">
    <h2>
      Welcome!
    </h2>
    <p>
      This is a small demo. I'm just playing around with NuxtJS, and the Github
      API.
    </p>
    <p>
      Please complete the following steps, and see your Github profile picture.
    </p>
    <steps-control :next-step="nextStep" />
  </main>
</template>

<script>
import StepsControl from '~/components/StepsControl'

export default {
  components: {
    StepsControl
  },
  data() {
    return {
      nextStep: {
        action: () => {
          this.$router.push('/personal-info')
        },
        isDisabled: false,
        label: 'Personal info'
      }
    }
  }
}
</script>
