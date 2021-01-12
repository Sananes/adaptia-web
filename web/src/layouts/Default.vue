<template>
  <div id="app">
    <main class="main">
      <Header />
      <slot />
      <Footer />
    </main>
  </div>
</template>

<script>
import Header from '~/components/Header'
export default {
  components: {
    Header,
    Footer: () => import('~/components/Footer'),
  },
}
</script>

<style lang="scss">
@font-face {
  font-family: Tungsten;
  src: url('../assets/fonts/Tungsten.woff'), url('../assets/fonts/Tungsten.woff2') format('woff2'),
    url('../assets/fonts/Tungsten.eot') format('eot'),
    url('../assets/fonts/Tungsten.eot?#iefix') format('embedded-opentype'),
    url('../assets/fonts/Tungsten.ttf') format('truetype');
  font-display: swap;
  font-weight: normal;
  font-style: normal;
}

// @font-face {
//   font-family: Roobert;
//   src: url('../assets/fonts/Roobert.woff') format('woff'),
//     url('../assets/fonts/Roobert.woff2') format('woff2');
//   font-weight: normal;
//   font-display: swap;
// }

// @font-face {
//   font-family: Roobert;
//   src: url('../assets/fonts/Roobert-Italic.woff') format('woff'),
//     url('../assets/fonts/Roobert-Italic.woff2') format('woff2');
//   font-weight: normal;
//   font-style: italic;
//   font-display: swap;
// }

// @font-face {
//   font-family: Roobert;
//   src: url('../assets/fonts/Roobert-Medium.woff') format('woff'),
//     url('../assets/fonts/Roobert-Medium.woff2') format('woff2');
//   font-weight: 500;
//   font-display: swap;
// }

// @font-face {
//   font-family: Roobert;
//   src: url('../assets/fonts/Roobert-Medium-Italic.woff') format('woff'),
//     url('../assets/fonts/Roobert-Medium-Italic.woff2') format('woff2');
//   font-weight: 500;
//   font-style: italic;
//   font-display: swap;
// }

// @font-face {
//   font-family: Roobert;
//   src: url('../assets/fonts/Roobert-Semibold.woff') format('woff'),
//     url('../assets/fonts/Roobert-Semibold.woff2') format('woff2');
//   font-weight: 600;
//   font-display: swap;
// }

// @font-face {
//   font-family: Roobert;
//   src: url('../assets/fonts/Roobert-Semibold-Italic.woff') format('woff'),
//     url('../assets/fonts/Roobert-Semibold-Italic.woff2') format('woff2');
//   font-weight: 600;
//   font-style: italic;
//   font-display: swap;
// }

// @font-face {
//   font-family: Roobert;
//   src: url('../assets/fonts/Roobert-Bold.woff') format('woff'),
//     url('../assets/fonts/Roobert-Bold.woff2') format('woff2');
//   font-weight: 700;
//   font-display: swap;
// }

// @font-face {
//   font-family: Roobert;
//   src: url('../assets/fonts/Roobert-Bold-Italic.woff') format('woff'),
//     url('../assets/fonts/Roobert-Bold-Italic.woff2') format('woff2');
//   font-weight: 700;
//   font-style: italic;
//   font-display: swap;
// }

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
