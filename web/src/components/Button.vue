<template>
  <button class="button">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
}
</script>

<style lang="scss" scoped>
button,
.button {
  @include heading-5;
  letter-spacing: rfs(2px);
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

.button--white {
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