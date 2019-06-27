<template>
  <div class="container">
    <div class="main-item">
      <span v-if="label">{{label}}</span>
      <slot></slot>
    </div>
    <div class="warning-message" v-if="message">{{message}}</div>
  </div>
</template>
<script>
import Schema from 'async-validator'
export default {
  name: 'RFormItem',
  inject: ['form'],
  props: {
    prop: {
      type: String
    },
    label: {
      type: String
    }
  },
  data() {
    return {
      message: ''
    }
  },
  mounted() {
    this.$on('validate', this.validate)
  },
  methods: {
    validate() {
      const value = this.form.model[this.prop]
      const rules = this.form.rules[this.prop]
      const description = { [this.prop]: rules }
      const schema = new Schema(description)

      return schema.validate({ [this.prop]: value }, error => {
        this.message = error && error[0].message || ''
      })
    }
  }
};
</script>
<style scoped>
.container {
  margin: 0 0 10px 0;
}
.warning-message {
  color: red;
  font-size: 14px;
  line-height: 16px;
}
</style>
