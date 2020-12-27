<template>
  <div id="app">
    <transition name="fade" appear><div class="overlay"></div></transition>
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
  font-display: swap;
}

.container {
  margin: 0 auto;
  max-width: rfs(--max-width);
}

.container--narrow {
  max-width: var(--content-width);
  margin: 0 auto;
}

.main {
  margin: 0 auto;
}

.footer {
  padding: var(--gutter-h);

  @include media('>tablet') {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  > span {
    margin: 0 0.35em;
  }

  a {
    color: currentColor;
  }
}

.fade-enter,
.fade-leave {
  height: 100%;
}

.fade-enter-to {
  height: 0%;
}

.fade-enter-active {
  bottom: 0;
  transition: all 1s ease-in-out;
}

.fade-leave-active {
  top: 0;
  transition: all 1s ease-in-out;
}

.overlay {
  position: absolute;
  background: black;
  width: 100%;
  z-index: 999;
}
</style>
