<template>
  <div id="app">
    <main class="main">
      <Header />
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
// @font-face {
//   font-family: Tungsten;
//   src: url('../assets/fonts/Roswell.woff') format('woff'),
//     url('../assets/fonts/Roswell.woff2') format('woff2');
//   font-weight: normal;
//   font-display: swap;
// }

@font-face {
  font-family: Tungsten;
  src: url('../assets/fonts/Cinderblock.eot') format('eot');
  font-weight: normal;
  font-display: swap;
}

@font-face {
  font-family: Roobert;
  src: url('../assets/fonts/rooberttrial-regular-webfont.woff') format('woff'),
    url('../assets/fonts/rooberttrial-regular-webfont.woff2') format('woff2');
  font-weight: normal;
  font-display: swap;
}

@font-face {
  font-family: Roobert;
  src: url('../assets/fonts/rooberttrial-regularitalic-webfont.woff') format('woff'),
    url('../assets/fonts/rooberttrial-regularitalic-webfont.woff2') format('woff2');
  font-weight: normal;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: Roobert;
  src: url('../assets/fonts/rooberttrial-medium-webfont.woff') format('woff'),
    url('../assets/fonts/rooberttrial-medium-webfont.woff2') format('woff2');
  font-weight: 500;
  font-display: swap;
}

@font-face {
  font-family: Roobert;
  src: url('../assets/fonts/rooberttrial-mediumitalic-webfont.woff') format('woff'),
    url('../assets/fonts/rooberttrial-mediumitalic-webfont.woff2') format('woff2');
  font-weight: 500;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: Roobert;
  src: url('../assets/fonts/rooberttrial-semibold-webfont.woff') format('woff'),
    url('../assets/fonts/rooberttrial-semibold-webfont.woff2') format('woff2');
  font-weight: 600;
  font-display: swap;
}

@font-face {
  font-family: Roobert;
  src: url('../assets/fonts/rooberttrial-semibolditalic-webfont.woff') format('woff'),
    url('../assets/fonts/rooberttrial-semibolditalic-webfont.woff2') format('woff2');
  font-weight: 600;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: Roobert;
  src: url('../assets/fonts/rooberttrial-bold-webfont.woff') format('woff'),
    url('../assets/fonts/rooberttrial-bold-webfont.woff2') format('woff2');
  font-weight: 700;
  font-display: swap;
}

@font-face {
  font-family: Roobert;
  src: url('../assets/fonts/rooberttrial-bolditalic-webfont.woff') format('woff'),
    url('../assets/fonts/rooberttrial-bolditalic-webfont.woff2') format('woff2');
  font-weight: 700;
  font-style: italic;
  font-display: swap;
}

.container {
  margin: 0 auto;
  max-width: var(--max-width);
  padding: rfs(0 1rem);
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
  background: black;
  width: 500px;
  height: 500px;
  z-index: 999;
}
</style>
