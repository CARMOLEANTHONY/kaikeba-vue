<template>
  <div class="container">
    <div class="main-item">
      <label v-if="label">{{label}}</label>
      <div class="slot">
        <slot></slot>
      </div>
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
    this.$on('validate', () => {
      this.validate()
    })
  },
  methods: {
    validate() {
      // Schema 第三方校验库
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

.slot {
  display: inline-block;
  width: 70%;
  text-align: left;
  padding-left: 20px;
}
.warning-message {
  color: red;
  font-size: 14px;
  line-height: 16px;
}

button {
  padding: 3px 5px;
}
</style>
