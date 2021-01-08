<template>
  <div class="section" :class="computedClass">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Section',
  props: {
    size: {
      type: String,
      required: false,
    },
    variant: {
      type: String,
      default: 'white',
      required: false,
    },
  },
  computed: {
    computedClass(props) {
      return {
        'section--small': this.size === 'small',
        'section--medium': this.size === 'medium',
        'section--large': this.size === 'large',
        'section--white': this.variant === 'white',
        'section--black': this.variant === 'black',
        'section--muted': this.variant === 'muted',
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.section {
  position: relative;
  display: block;
  padding: rfs(6rem 0);
}

.section--small {
  padding: rfs(4rem 0);
}

.section--large {
  padding: rfs(8rem 0);
}

.section--black {
  color: var(--color-white);
  background: var(--color-black);

  * {
    color: inherit;
  }
}

.section--white {
  @include inverse-white;
}

.section--muted {
  color: var(--color-black);
}
</style>