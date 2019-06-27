<template>
  <div class="container">
    <!-- v-bind="$attrs" 将父组件中本组件标签上所带的属性都继承过来  -->
    <input @input="inputHandler($event)" :value="value" v-bind="$attrs">
  </div>
</template>
<script>
export default {
  name: 'RInput',

  // 定义是否继承来自父组件的属性
  inheritAttrs: false,

  // 实现自定义双向绑定的属性和事件
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      type: String
    }
  },
  methods: {
    inputHandler(e) {
      this.$emit('input', e.target.value)

      // 如果数据发生变化，通知父组件进行检验
      this.$dispatch('validate', 'start validate', 'RForm')
    }
  }
};
</script>
<style scoped>
.container {
  display: inline-block;
  margin: 0 10px;
}
input {
  height: 25px;
  line-height: 25px;
  font-size: 16px;
  outline: none;
  border: 1px solid #999;
  padding: 3px 5px;
  background: #f9f9f9 !important;
  border-radius: 3px;
}
</style>
