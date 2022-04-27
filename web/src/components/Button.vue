<template>
  <a v-if="link" class="button">
    <slot />
  </a>
  <button class="button" v-else><slot /></button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    link: false
  }
}
</script>

<style lang="scss" scoped>
button,
.button {
  @include body-s;
  letter-spacing: rfs(2px);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  outline: 0;
  background: transparent;
  border: 0;
  cursor: pointer;
  color: inherit;
  padding: rfs(1rem 2rem);
  border: 2px solid transparent;
}

.button--black {
  background: var(--color-black);
  color: var(--color-white);

  &.button--outline {
    color: var(--color-black);
    border-color: var(--color-black);
  }
}

a.button.button--white {
  color: var(--color-black);
  text-decoration: none;
}

.button--white,
a.button--white {
  color: var(--color-black);
  background: var(--color-white);

  &.button--outline {
    color: var(--color-white);
    border-color: var(--color-white);
  }
}

.button--large {
  padding: rfs(2rem 2.5rem);
}

.button--outline {
  border: 2px solid inherit;
  background: transparent;
}
</style>
