<template>
  <div class="hero">
    <div class="hero__image-container">
      <div class="hero__image">
        <g-image src="~/assets/images/hero.png" fit="cover" position="right bottom" />
      </div>
    </div>
    <div class="hero__container">
      <div class="hero__content">
        <h1 class="hero__title">Marketing &amp; design agency in san diego, california</h1>
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
.hero {
  display: inline-grid;
  position: relative;
  background: var(--color-black);
  color: var(--color-white);

  @include theme('dark') {
    background: white;
    color: var(--color-black);
  }

  @include media('>phone') {
    height: 75vh;
    width: 100%;
    overflow: hidden;
  }

  @include media('>phone', '<=tablet') {
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    height: 50vh;
    width: 100%;
    overflow: hidden;
  }
}

.hero__container {
  box-sizing: content-box;
  grid-template-rows: 1fr 1fr;
  order: -1;

  @include media('>phone') {
    display: grid;
    order: 1;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    max-width: var(--max-width);
    margin: 0 auto;
    justify-content: center;
    align-items: center;
  }

  @include media('>phone', '<=tablet') {
    grid-template-columns: auto;
    max-width: 100%;
    grid-column: 2 / span 1;
  }
}

.hero__image-container {
  @include media('>phone') {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 75vh;
    display: inline-grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 3.2rem;
    align-items: flex-end;
  }

  @include media('>phone', '<=tablet') {
    position: relative;
    grid-template-columns: none;
    grid-column: 1 / span 1;
    height: 50vh;
  }
}

.hero__image {
  display: flex;
  flex: 1 1 0;

  @include media('>phone') {
    grid-column: 1 / span 6;
    position: relative;
    justify-self: flex-end;
    justify-content: flex-end;
    align-self: flex-end;
  }

  @include media('>phone', '<=tablet') {
    grid-column: 1 / span 5;
  }

  img {
    @include media('>phone') {
      width: 100%;
      max-width: 75vh;
      min-width: 70vh;
    }
    @include media('>phone', '<=tablet') {
      width: 100%;
      max-width: 100%;
      min-width: 100%;
    }
  }
}

.hero__content {
  padding: 1rem;

  @include media('>phone') {
    padding: 0;
    grid-column: 8 / span 4;
    max-width: 30rem;
  }

  @include media('>phone', '<=tablet') {
    grid-column: 9 / span 3;
  }
}

.hero__title {
  @include hero-title;
  color: inherit;
}
</style>