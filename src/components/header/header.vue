<template>
  <header class="header">
    <div class="header-logo">
      <IconSvg iconName="logo" className="icon-logo" />
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  mixins: [],
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang="less" scoped>
  .header {
    display: flex;
    height: 81px;
    background: #ccc;
    &-logo {
      width: 82px;
      height: 80px;
      .icon-logo {
        color: #fff;
        font-size: 34px;
      }
    }
  }
</style>
