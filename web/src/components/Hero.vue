<template>
  <div class="hero">
    <div class="hero__container">
      <div class="hero__content">
        <h1 class="hero__title">Marketing &amp; design agency in san diego, california</h1>
        <!-- <h1 class="hero__title">We help you adapt to Evolving markets</h1> -->
      </div>
      <div class="hero__scroll"><a href="#section1">Learn more</a></div>
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
export default {
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
  // Specific breakpoint
  @include media($specific-breakpoint) {
    box-sizing: content-box;
    display: grid;
    z-index: 10;
    order: 1;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 0.2fr 1fr 0.2fr;
    max-width: var(--max-width);
    margin: 0 auto;
    justify-content: center;
    align-items: center;
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
  margin: 0 !important;
  color: inherit;
}

.hero__scroll {
  padding: 0 var(--gutter-h);

  @include media($specific-breakpoint) {
    padding: calc(var(--gutter-h) / 2) 0;
    grid-column: 8 / span 4;
    grid-row: 3;
  }
}

.hero__phone {
  display: none;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  right: -0.25rem;
  height: auto;
  line-height: 1;
  transform: rotate(-90deg);
  z-index: 10;

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