<template>
  <g-link class="logo" to="/">
    <span class="logo__text">&larr; {{ $static.metadata.siteName }}</span>
  </g-link>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Logo from '../../static/logo.svg'
export default {
  components: {
    Logo,
  },
}
</script>

<style lang="scss" scoped>
.logo {
  text-decoration: none;
  color: var(--body-color) !important;
  font-size: 0.9em;

  &__image {
    vertical-align: middle;
    border-radius: 99px;
    height: 40px;
    width: 40px;
    margin-right: 0.5em;
  }
}
</style>
