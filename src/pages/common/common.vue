<template>
  <div>
    <Header :style="headerStyle" class="common-header" />
    <router-view />
  </div>
</template>

<script>
import Header from 'components/header/header'

export default {
  name: 'Common',
  components: {
    Header
  },
  mixins: [],
  props: {},
  data () {
    return {}
  },
  computed: {
    headerStyle() {
      let style = ''
      if (this.$route.path === '/home') {
        style = 'position: absolute;'
      }
      return style
    }
  },
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang="less" scoped>
</style>
