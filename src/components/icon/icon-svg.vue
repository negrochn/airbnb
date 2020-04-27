<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="svgName"></use>
  </svg>
</template>

<script>
export default {
  name: 'IconSvg',
  props: {
    iconName: {
      type: String,
      required: true
    },
    className: {
      type: String
    }
  },
  computed: {
    svgName () {
      return `#icon-${this.iconName}`
    },
    svgClass () {
      if (this.className) {
        return `icon-svg ${this.className}`
      } else {
        return 'icon-svg'
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .icon-svg {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
