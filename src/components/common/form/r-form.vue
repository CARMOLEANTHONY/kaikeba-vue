<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>

export default {
  name: 'RForm',
  provide() {
    return {
      form: this
    }
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  },
  data() {
    return {

    }
  },
  methods: {
    validate(validatedCallback) {
      const validateFormItem = this.$children
        .filter(item => item.prop)
        .map(item => item.validate())

      return validatedCallback
        ? Promise.all(validateFormItem)
          .then(res => {
            this.excuteCallback(validatedCallback, true)
          })
          .catch(error => {
            this.excuteCallback(validatedCallback, false)
          })
        : Promise.all(validateFormItem)
    },

    excuteCallback(validatedCallback, resultBoolean) {
      typeof validatedCallback === 'function' && validatedCallback(resultBoolean)
    }
  }
};
</script>
<style scoped>
</style>
