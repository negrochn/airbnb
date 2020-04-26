<template>
  <header class="header">
    <div class="header-logo">
      <svg><use xlink:href="#icon-logo" /></svg>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  components: {},
  mixins: [],
  props: {},
  data () {
    return {
    }
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
    }
  }
</style>
