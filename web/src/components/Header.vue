<template>
  <header class="header">
    <div class="header__left">
      <h1 class="header__title">
        <g-link to="/"><logo class="header__logo" /></g-link>
      </h1>
      <header-logo v-if="showLogo" />
    </div>

    <div class="header__right">
      <toggle-theme />
    </div>
  </header>
</template>

<script>
import ToggleTheme from '~/components/ToggleTheme'
import Logo from '../../static/logo.svg'
import HeaderLogo from '~/components/HeaderLogo.vue'

export default {
  name: 'Header',
  components: {
    HeaderLogo,
    ToggleTheme,
    Logo: () => import('../../static/logo.svg'),
  },
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  background: var(--color-black);
  padding: 0 var(--gutter-h);
  top: 0;
  z-index: 10;
  color: var(--color-white);

  @include theme('dark') {
    color: var(--color-black);
    background: var(--color-white);
  }

  .header__title,
  .header__title a {
    color: inherit;
    margin: 0;
  }

  .header__logo {
    height: var(--logo-height);
  }

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1300px) {
    //Make header sticky for large screens
    position: sticky;
    width: 100%;
  }
}
</style>