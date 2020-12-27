<template>
  <div class="hero">
    <div class="hero__container">
      <div class="hero__content">
        <transition name="title" appear>
          <h1 class="hero__title">
            Marketing &amp; design agency in san diego, <span>california</span>
          </h1>
        </transition>
        <!-- <h1 class="hero__title">We help you adapt to Evolving markets</h1> -->
      </div>
      <div class="hero__scroll">
        <a href="#section1"><icon name="chevron-down" size="small" fill="none" /> Learn more</a>
      </div>
    </div>
    <div class="hero__phone"><a href="tel:+1 7325670876">Call Us +1 732 567 0876</a></div>
    <div class="hero__image-container">
      <div class="hero__image">
        <g-image
          :immediate="true"
          src="~/assets/images/hero.png"
          fit="inside"
          width="873"
          height="909"
          position="bottom right"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Icon from './Icon.vue'
export default {
  components: { Icon },
  name: 'Hero',
}
</script>

<style lang="scss">
$specific-breakpoint: '>=935px';

.hero {
  position: relative;
  display: grid;
  background: var(--color-black);
  color: var(--color-white);

  @include media($specific-breakpoint) {
    height: 100%;
    width: 100%;
    grid-template-rows: minmax(40vw, 1fr);
    overflow: hidden;
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
    max-width: rfs(--max-width);
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
    display: inline-grid;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 100%;
    grid-gap: 3.2rem;
    align-items: flex-end;
  }
}

.hero__image {
  grid-column: 1 / span 6;
  width: 100%;
  height: 100%;
  justify-self: flex-end;
  align-self: flex-end;

  img {
    display: block;
    object-fit: contain;
    position: relative;
    width: 100%;
    height: 100%;
  }
}

.hero__content {
  padding: var(--gutter-h);

  @include media($specific-breakpoint) {
    padding: 0;
    grid-column: 8 / span 4;
    grid-row: 2;
    max-width: 30rem;
  }
}

.hero__title {
  @include hero-title;
  color: inherit;
  margin: 0;

  span {
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
  top: 60%;
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

.title-enter,
.title-leave {
  opacity: 0;
  transform: translateY(-20px);
}

.title-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.title-enter-active,
.title-leave-active {
  transition: opacity 0.5s var(--animation) 0.5s, transform 1.5s var(--animation) 0.5s;
}
</style>