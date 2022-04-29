<template>
  <a v-bind="this.$attrs" v-on="$listeners" class="button__arrow">
    <span>
      <icon name="chevron-down" size="small" />
    </span>
    <slot />
  </a>
</template>

<script>
import Icon from './Icon'
export default {
  components: { Icon }
}
</script>

<style lang="scss" scoped>
.button__arrow {
  display: inline-flex;
  align-items: center;

  &:hover span::before,
  &:hover span::after {
    opacity: 1;
    transform: scale(1);
  }

  &:hover span::before {
    opacity: 0;
    -webkit-transform: scale(1.6);
    transform: scale(1.6);
  }

  &:hover {
    svg {
      color: var(--color-black);
    }
  }

  svg {
    fill: none;
    z-index: 80;
  }

  span {
    position: relative;
    display: inline-flex;
    align-items: center;
    min-width: 36px;
    min-height: 36px;
    justify-content: center;
    white-space: nowrap;
    margin-right: rfs(1rem);
    box-sizing: border-box;

    &:before,
    &:after {
      content: '';
      position: absolute;
      will-change: transform;
      box-sizing: border-box;
      z-index: 60;
    }

    &:before {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 1px solid #dcdcdd;
      -webkit-transition: opacity 1.45s cubic-bezier(0.19, 1, 0.22, 1),
        -webkit-transform 1.9s cubic-bezier(0.19, 1, 0.22, 1);
      transition: opacity 1.45s cubic-bezier(0.19, 1, 0.22, 1),
        -webkit-transform 1.9s cubic-bezier(0.19, 1, 0.22, 1);
      transition: transform 1.9s cubic-bezier(0.19, 1, 0.22, 1),
        opacity 1.45s cubic-bezier(0.19, 1, 0.22, 1);
      transition: transform 1.9s cubic-bezier(0.19, 1, 0.22, 1),
        opacity 1.45s cubic-bezier(0.19, 1, 0.22, 1),
        -webkit-transform 1.9s cubic-bezier(0.19, 1, 0.22, 1);
    }

    &:after {
      top: -1px;
      left: -1px;
      width: calc(100% + 2px);
      height: calc(100% + 2px);
      background-color: var(--color-white);
      border-radius: 50%;
      transform-origin: center center;
      transition: transform 0.9s cubic-bezier(0.19, 1, 0.22, 1),
        opacity 0.45s cubic-bezier(0.19, 1, 0.22, 1),
        -webkit-transform 0.9s cubic-bezier(0.19, 1, 0.22, 1);
      opacity: 0;
      transform: scale(0.5);
    }
  }
}
</style>
