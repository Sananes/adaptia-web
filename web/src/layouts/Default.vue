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
  components: {
    Header,
  },
}
</script>

<style lang="scss">
@font-face {
  font-family: Tungsten;
  src: url('../assets/fonts/TungstenSemibold.woff') format('woff'),
    url('../assets/fonts/TungstenSemibold.woff2') format('woff2'),
    url('../assets/fonts/TungstenSemibold.tff') format('truetype'),
    url('../assets/fonts/TungstenSemibold.eot') format('eot');
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

// .fade-enter-to {
//   bottom: 0;
//   height: 0%;
// }

// .fade-enter-leave {
//   top: 0;
//   bottom: auto;
//   height: 100%;
// }

// .fade-enter-active {
//   animation: fade-in 0.5s var(--animation);
// }

// .fade-leave-active {
//   animation: fade-in 0.5s reverse var(--animation);
// }

// @keyframes fade-in {
//   from {
//     height: 100%;
//   }
//   to {
//     height: 0%;
//   }
// }

.overlay {
  position: absolute;
  background: black;
  width: 100%;
  height: 100%;
  z-index: 999;
}
</style>
