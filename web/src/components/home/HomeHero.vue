<template>
  <div class="hero">
    <div class="hero__container">
      <XyzTransition
        class="hero__content"
        appear
        appear-visible
        xyz="fade down ease-out-back"
        duration="auto"
      >
        <h1 class="hero__title">
          <XyzTransitionGroup
            appear
            appear-visible
            xyz="fade down ease-out-back delay-20 stagger-1"
            duration="auto"
          >
            <span key="1">Marketing &amp; design</span>
            <span key="2">agency in san diego,</span>
            <span class="outline" key="3">california</span>
          </XyzTransitionGroup>
        </h1>
      </XyzTransition>
      <!-- <h1 class="hero__title">We help you adapt to Evolving markets</h1> -->
      <XyzTransition
        appear-visible
        class="hero__scroll"
        appear
        xyz="fade down rotate-90 ease-out-back delay-30"
        duration="auto"
      >
        <button-arrow v-on:click="scrollToElement({ behavior: 'smooth' })">Learn more</button-arrow>
      </XyzTransition>
    </div>
    <div class="hero__phone">
      <XyzTransition
        appear-visibleappear
        xyz="fade up ease-out-back duration-10 delay-20"
        duration="auto"
      >
        <a href="tel:+1 7325670876"><strong>Call Us</strong> +1 732 567 0876</a>
      </XyzTransition>
    </div>

    <div class="hero__image-container">
      <div class="hero__image animate">
        <div class="hero__image animate">
          <video autoplay playsinline muted loop>
            <source :src="require('~/assets/videos/hero.mp4')" />
          </video>

          <svg viewBox="0 0 953 992" preserveAspectRatio="xMidYMin slice">
            <defs>
              <mask id="maskLayer" x="0" y="0" height="100%" width="100%">
                <rect class="inside" x="0" y="0" height="100%" width="100%" />
                <path
                  d="M952 386.735v164.99c-62.81.086-120.263 8.247-173.243 20.902l-1.122.268.425 1.073L943.413 991H767.945L623.038 629.498l-.402-1.003-.969.479C453.586 712.061 337.92 844.742 255.55 939.229l-.032.037c-16.597 19.037-31.834 36.516-45.881 51.734H1.473L394.682 1h155.523l115.154 288.891.001.002 50.336 126.879.326.821.855-.222c72.475-18.816 150.801-29.977 235.123-30.636zm-421.827 6.791l-.002-.005-56.801-140.677-.936-2.319-.921 2.326L328.157 614.98l-1.391 3.515 2.947-2.367c66.309-53.24 143.158-103.514 230.926-143.354l.868-.394-.352-.886-30.982-77.968z"
                />
              </mask>
            </defs>
            <rect class="outside" x="0" y="0" height="100%" width="100%" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonArrow from '../ButtonArrow'
import Icon from '../Icon'

export default {
  data() {
    return {
      isLoaded: true
    }
  },
  components: { Icon, ButtonArrow },
  name: 'Hero',
  methods: {
    scrollToElement(options) {
      const el = document.getElementById('list')
      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        el.scrollIntoView(options)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$specific-breakpoint: '>=935px';

.hero {
  position: relative;
  display: grid;
  background: var(--color-black);
  color: var(--color-white);
  overflow: hidden;

  @include media($specific-breakpoint) {
    height: 100%;
    width: 100%;
    grid-template-rows: minmax(50vw, 1fr);
  }

  @include theme('dark') {
    background: white;
    color: var(--color-black);
  }

  a {
    color: inherit;
    text-decoration: none;
  }
}

.hero__container {
  order: -1;
  grid-template-rows: rfs(0.5fr) 1fr rfs(0.5fr);

  // Specific breakpoint
  @include media($specific-breakpoint) {
    box-sizing: content-box;
    display: grid;
    z-index: 10;
    order: 1;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: rfs(0.4fr) 1fr rfs(0.4fr);
    margin: 0 auto;
    justify-content: center;
    align-items: center;
  }

  @include media('>desktop') {
    grid-template-rows: rfs(20%) 1fr rfs(20%);
  }
}

.hero__image-container {
  @include media($specific-breakpoint) {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50%;
    height: 100%;
    overflow: hidden;
  }
}

.hero__image {
  position: relative;
  width: 100%;
  height: 100%;

  .animate & {
    @include media('<tablet') {
      margin-bottom: rfs(-1rem);
    }
  }

  img {
    display: block;
    object-fit: contain;
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 100%;
  }

  video {
    opacity: 1;
    width: 100%;
    object-fit: cover;
    height: 100%;

    // No video

    .animate & {
      opacity: 0;
      animation: showVideo 1s ease-in-out 5s forwards;
    }
  }

  svg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    path {
      fill: inherit;

      .animate & {
        animation: dash 4s ease-in-out 1s;
        stroke: var(--color-white);
        stroke-width: 2px;
        stroke-dasharray: 4030;
        stroke-dashoffset: 0;
        animation-fill-mode: both;
      }
    }

    .inside {
      // Video
      fill: var(--color-black);

      .animate & {
        fill: none;
        animation: changeFill 0s ease-in-out 5s forwards;
      }
    }
    .outside {
      fill: var(--color-black);
      mask: url('#maskLayer');
      -webkit-mask: url('#maskLayer');

      .animate & {
        fill: var(--color-white);
        animation: changeSettings 0s ease-in-out 5s forwards;
      }
    }
  }
}

@keyframes changeSettings {
  from {
    fill: var(--color-white);
  }
  to {
    fill: var(--color-black);
  }
}

@keyframes changeFill {
  from {
    fill: rgba(0, 0, 0, 0.01);
  }
  to {
    fill: var(--color-white);
  }
}

@keyframes dash {
  from {
    stroke-dashoffset: 4030;
  }
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes showVideo {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.hero__content {
  padding: var(--gutter-h);

  @include media($specific-breakpoint) {
    padding: 0;
    grid-column: 8 / span 4;
    grid-row: 2;
    max-width: 30rem;
    margin-top: rfs(-3rem);
  }
}

.hero__title {
  @include hero-title;
  color: inherit;
  margin: 0;

  span {
    display: block;
  }

  .outline {
    @include outline-styles;
  }
}

.hero__scroll {
  padding: 0 var(--gutter-h);

  @include media($specific-breakpoint) {
    padding: calc(var(--gutter-h) / 2) 0;
    grid-column: 8 / span 4;
    grid-row: 3;
  }

  svg {
    margin-right: rfs(0.5rem);
  }

  a {
    display: flex;
    align-items: center;
  }
}

.hero__phone {
  display: none;
  position: absolute;
  top: 55%;
  right: var(--gutter-h);
  height: auto;
  line-height: 1;
  transform: rotate(270deg) translateY(-50%);
  z-index: 10;
  margin: 0;
  width: 0;
  white-space: nowrap;
  text-align: center;
  transform-origin: bottom;

  @include media('>1400px') {
    display: inline;
  }

  a {
    line-height: inherit;
    display: inline;
    height: inherit;
  }
}
</style>
