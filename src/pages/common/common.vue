<template>
  <div>
    <Header />
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
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang="less" scoped>
</style>
