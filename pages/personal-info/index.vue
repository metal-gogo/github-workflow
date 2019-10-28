<template>
  <main class="container">
    <h2>
      Personal information
    </h2>
    <steps-control :previous-step="previousStep" :next-step="nextStep" />
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
          this.$router.push('/terms')
        },
        isDisabled: true,
        label: 'Terms'
      },
      previousStep: {
        action: () => {
          this.$router.push('/')
        },
        isDisabled: false,
        label: 'Introduction'
      }
    }
  }
}
</script>
