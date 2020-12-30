<template>
  <XyzTransitionGroup
    v-bind="this.$attrs"
    v-bind:on="this.$listeners"
    v-observe-visibility="{ callback: visiblityChanged, ...options }"
  >
    <slot v-if="isVisible" />
  </XyzTransitionGroup>
</template>

<script>
export default {
  name: 'AnimTransitionGroup',
  props: {
    options: {
      type: Object,
      default() {
        return {
          once: true,
        }
      },
      required: false,
    },
  },
  data() {
    return {
      isVisible: false,
    }
  },
  methods: {
    visiblityChanged(isVisible, event) {
      this.isVisible = isVisible
    },
  },
}
</script>

