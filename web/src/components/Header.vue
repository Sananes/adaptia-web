<template>
  <header class="header">
    <div class="header__left">
      <XyzTransition appear xyz="fade up ease-out-back">
        <h1 class="header__title">
          <g-link to="/"><logo class="header__logo" /></g-link>
        </h1>
        <header-logo v-if="showLogo" />
      </XyzTransition>
    </div>

    <XyzTransitionGroup
      appear
      class="header__right"
      xyz="fade up ease-out-back stagger-1"
      mode="in-out"
    >
      <!-- <toggle-theme key="1" /> -->
      <button key="2" class="header__menu"><icon name="menu" /></button
    ></XyzTransitionGroup>
  </header>
</template>

<script>
// import ToggleTheme from '~/components/ToggleTheme'
import Logo from '../../static/logo.svg'
import Icon from '~/components/Icon.vue'
import HeaderLogo from '~/components/HeaderLogo.vue'

export default {
  name: 'Header',
  props: {
    showLogo: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    HeaderLogo,
    Icon,
    Logo: () => import('../../static/logo.svg'),
  },
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
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

  .header__menu {
    color: inherit;
    outline: 0;
    padding: 0.5rem;
    opacity: inherit;
    cursor: pointer;
    margin: -0.5rem;
    border: none;
    background: none;
  }

  .header__logo {
    height: var(--logo-height);
  }

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  &__right {
    display: grid;
    grid-gap: 1rem;
    grid-auto-flow: column;
  }
}
</style>