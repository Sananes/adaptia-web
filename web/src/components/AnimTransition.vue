<template>
  <div v-observe-visibility="{ callback: visiblityChanged, ...options }">
    <XyzTransition v-bind="this.$attrs" v-bind:on="this.$listeners">
      <slot v-if="isVisible" />
    </XyzTransition>
  </div>
</template>

<script>
export default {
  name: 'AnimTransition',
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

