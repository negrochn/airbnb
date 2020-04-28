<template>
  <header class="header">
    <div class="header-left">
      <IconSvg iconName="logo" className="icon-logo" />
    </div>
    <div class="header-center">
      <HeaderSearch />
    </div>
  </header>
</template>

<script>
import HeaderSearch from './header-search'

export default {
  name: 'Header',
  components: {
    HeaderSearch
  },
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
    position: relative;
    display: flex;
    height: 81px;
    background: #ccc;
    &-left {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 82px;
      height: 80px;
      .icon-logo {
        color: #fff;
        font-size: 34px;
      }
    }
    &-center {
      display: flex;
      align-items: center;
    }
  }
</style>
