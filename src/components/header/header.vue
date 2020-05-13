<template>
  <header class="header">
    <div class="header-left">
      <IconSvg iconName="logo" className="icon-logo" />
    </div>
    <div class="header-center">
      <HeaderSearch />
    </div>
    <div class="header-right">
      <HeaderNav />
    </div>
  </header>
</template>

<script>
import HeaderSearch from './header-search'
import HeaderNav from './header-nav'

export default {
  name: 'Header',
  components: {
    HeaderSearch,
    HeaderNav
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
    width: 100%;
    height: 81px;
    background: transparent;
    z-index: 5;
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
      flex: 1;
      display: flex;
      align-items: center;
    }
  }
</style>
