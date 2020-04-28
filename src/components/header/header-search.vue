<template>
  <div :class="headerSearchClass">
    <div class="header-search-wrap">
      <IconSvg iconName="search" className="icon-search" />
      <input
        :class="inputClass"
        type="text"
        :placeholder="placeholder"
        @focus="isExpanded = true"
        @input="isExpanded = true"
        @blur="isExpanded = false"
      />
      <IconSvg iconName="delete" className="icon-delete" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderSearch',
  components: {},
  mixins: [],
  props: {
    placeholder: {
      type: String,
      default: '按城市、地址、地标搜索'
    }
  },
  data () {
    return {
      isExpanded: false
    }
  },
  computed: {
    headerSearchClass () {
      let className = 'header-search'
      if (this.isExpanded) {
        className += ' expanded'
      }
      return className
    },
    inputClass () {
      let className = 'input'
      if (this.isExpanded) {
        className += ' input-expanded'
      }
      return className
    }
  },
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang="less" scoped>
  .header-search {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-left: -2px; // @效果一致性处理
    width: 460px;
    height: 48px;
    background: #FFF;
    border: 1px solid #EBEBEB;
    border-radius: 4px;
    &-wrap {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 0 4px 0 12px;
      .icon-search {
        margin-left: 5px;
        margin-right: 16px;
        width: 18px;
        height: 18px;
        font-size: 14px;
        color: #484848;
      }
      .input {
        box-sizing: border-box;
        flex: 1;
        margin-top: -3px; // @效果一致性处理
        height: 22px;
        font-size: 17px;
        font-weight: 800;
        border: 0;
        outline: none; // @new ，去掉 input 输入框选中时的边框
        &-expanded {
          padding-right: 36px;
        }
      }
      .icon-delete {
        font-size: 12px;
      }
    }
  }
  .expanded {
    width: 600px !important;
  }
</style>
