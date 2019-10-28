<template>
  <div class="default-container">
    <the-header />
    <nuxt />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader'
import TheFooter from '~/components/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss">
.default-container {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

// The .page-enter, .page-leave classes are leveraging NuxtJS awesomeness
.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 400ms;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
