<template>
  <div id="app">
    <Header />
    <main class="main">
      <slot />
    </main>

    <footer class="footer">
      <span class="footer__copyright">Copyright © {{ new Date().getFullYear() }}.</span>
      <span class="footer__links">
        Powered by
        <a href="//gridsome.org">Gridsome</a> &amp;
        <a href="//www.sanity.io">Sanity.io</a>
      </span>
    </footer>
  </div>
</template>

<script>
import Header from '~/components/Header'
export default {
  props: {
    showLogo: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    Header,
  },
}
</script>

<style lang="scss">
@font-face {
  font-family: Tungsten;
  src: url('../assets/fonts/TungstenSemibold.otf');
  font-weight: normal;
}

.container {
  margin: 0 auto;
  max-width: var(--max-width);
}

.main {
  margin: 0 auto;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;

  > span {
    margin: 0 0.35em;
  }

  a {
    color: currentColor;
  }
}
</style>
