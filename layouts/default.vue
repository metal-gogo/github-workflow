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

<style>
.default-container {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
