<template>
  <header class="the-header">
    <div class="container the-header__content">
      <img
        svg-inline
        svg-sprite
        alt="Github workflow demo logo"
        src="~/assets/images/logo.svg"
        class="the-header__logo"
      />
      <h1 class="the-header__demo-name">Github Workflow</h1>
    </div>
  </header>
</template>

<style lang="scss">
.the-header {
  background: $violet-heart;
}

.the-header__content {
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (min-width: $breakpoint-extra-large) {
    padding: 2rem;
  }
}

.the-header__logo {
  height: 1.5rem;
  width: 1.5rem;
  margin-right: 0.5rem;

  @media screen and (min-width: $breakpoint-extra-large) {
    height: 2.5rem;
    width: 2.5rem;
    margin-right: 1rem;
  }
}

.the-header__demo-name {
  margin-bottom: 0;
  color: $white-smoke;
  font-size: 1.5rem;

  @media screen and (min-width: $breakpoint-medium) {
    font-size: 2rem;
  }

  @media screen and (min-width: $breakpoint-large) {
    font-size: 2.5rem;
  }

  @media screen and (min-width: $breakpoint-extra-large) {
    font-size: 3rem;
  }
}
</style>
