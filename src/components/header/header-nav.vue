<template>
  <nav class="header-nav">
    <ul class="header-nav-ul">
      <li class="header-nav-ul-li" v-for="item in navList" :key="item.value">
        <button>
          <div>
            <span>
              <IconSvg
                v-if="item.icon"
                :iconName="item.icon"
                className="icon"
              />{{item.label}}
            </span>
          </div>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'HeaderNav',
  components: {},
  mixins: [],
  props: {},
  data () {
    return {
      navList: [
        {
          label: '简体中文 (CN)',
          value: 'language',
          icon: 'language'
        },
        {
          label: '￥ CNY',
          value: 'currency'
        },
        {
          label: '手机端',
          value: 'app'
        },
        {
          label: '出租房源',
          value: 'homes'
        },
        {
          label: '开展体验',
          value: 'experiences'
        },
        {
          label: '历史足迹',
          value: 'browsing-history'
        },
        {
          label: '帮助',
          value: 'help'
        },
        {
          label: '注册',
          value: 'register'
        },
        {
          label: '登录',
          value: 'login'
        }
      ]
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
  .header-nav {
    &-ul {
      display: flex;
      &-li {
        button {
          padding: 0 4px;
          height: 80px;
          background: transparent;
          border: 0;
          color: #fff;
          font-family: inherit;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          & > div {
            box-sizing: border-box;
            display: flex;
            align-items: center;
            height: 100%;
            border-bottom: 2px solid transparent;
            span {
              padding: 8px;
            }
            .icon {
              margin-right: 6px;
              width: 12px;
              height: 12px;
            }
          }
        }
      }
    }
  }
</style>
