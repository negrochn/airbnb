<template>
  <main class="home">
    <!-- 首页顶部背景图，暂时这么处理 -->
    <a class="home-a">
      <div class="home-a-div">
        <div id="fmp-target"></div>
      </div>
    </a>
  </main>
</template>

<script>
export default {
  name: 'Home',
  components: {},
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
  .home {
    height: 529px;
    background: #241411;
    &-a {
      &-div {
        position: relative;
        box-sizing: border-box;
        padding: 62px 80px 0 80px;
        height: 100%;
        #fmp-target {
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(to bottom, rgba(0, 0, 0, .3) 0%, rgba(0, 0, 0, .0) 300px, rgba(0, 0, 0, 0) 100%), url(https://z1.muscache.cn/pictures/carson/carson-1587915067054/original/aad16e09-d997-4272-a473-9c05f1779713.jpg);
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
      }
    }
  }
</style>
