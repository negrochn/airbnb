<template>
  <div :class="headerSearchClass">
    <div class="header-search-wrap">
      <IconSvg iconName="search" className="icon-search" />
      <input
        :class="inputClass"
        type="text"
        :placeholder="placeholder"
        v-model="inputValue"
        @focus="isExpanded = true"
        @blur="isExpanded = false"
      />
      <!-- 
        1.事件优先级： mousedown > blur > click ，所以使用 mousedown;
        2.在 IconSvg 组件的根元素上监听 mousedown 事件，需要用到 .native
       -->
      <IconSvg
        v-show="isExpanded && inputValue"
        iconName="delete"
        className="icon-delete"
        @mousedown.native.prevent="onInputClear"
      />
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
      isExpanded: false,
      inputValue: ''
    }
  },
  computed: {
    headerSearchClass () {
      return [
        'header-search',
        { expanded: this.isExpanded }
      ]
    },
    inputClass () {
      return [
        'input',
        { 'input-expanded': this.isExpanded }
      ]
    }
  },
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onInputClear () {
      this.inputValue = ''
    }
  }
}
</script>

<style lang="less" scoped>
  .header-search {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-top: -2px; // @效果一致性处理
    margin-left: -2px; // @效果一致性处理
    width: 460px;
    height: 48px;
    background: #FFF;
    border: 1px solid #EBEBEB;
    border-radius: 4px;
    transition: width 200ms ease-in; // @new ，增加动画效果
    &-wrap {
      position: relative;
      display: flex;
      align-items: center;
      padding: 0 4px 0 12px;
      width: 100%;
      .icon-search {
        margin-top: 2px; // @效果一致性处理
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
        margin-top: -2px; // @效果一致性处理
        height: 22px;
        font-family: inherit;
        font-size: 17px;
        font-weight: 800;
        border: 0;
        outline: none; // @new ，去掉 input 输入框选中时的边框
        &-expanded {
          padding-right: 36px;
        }
      }
      .icon-delete {
        position: absolute;
        right: 0;
        padding: 1px 6px 1px 12px;
        font-size: 12px;
        color: #767676;
        cursor: pointer;
      }
    }
  }
  .expanded {
    width: 600px !important;
  }
</style>
