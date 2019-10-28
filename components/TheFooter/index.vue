<template>
  <footer class="the-footer">
    <div class="container the-footer__content">
      <p class="the-footer__copyleft">Copyleft - {{ currentYear }} - 🤙🏻</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss">
.the-footer {
  margin-top: auto;
  background: $violet-heart;
}
.the-footer__content {
  align-items: center;
}
.the-footer__copyleft {
  margin: 0;
  color: $white-smoke;
}
</style>
