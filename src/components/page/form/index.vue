<template>
  <div>
    <r-form :model="formModel" :rules="rules" ref="formControl">
      <r-form-item prop="userName" label="USERNAME">
        <r-input v-model="formModel.userName" type="text" placeholder="请输入用户名"></r-input>
      </r-form-item>
      <r-form-item prop="password" label="PASSWORD">
        <r-input v-model="formModel.password" type="password" placeholder="请输入密码"></r-input>
      </r-form-item>
      <r-form-item>
        <button @click="submitForm">submit</button>
      </r-form-item>
    </r-form>
    {{formModel}}
  </div>
</template>
<script>

export default {
  name: 'FormSample',
  data() {
    return {
      formModel: {
        userName: '',
        password: ''
      },
      rules: {
        userName: [{ required: true, message: "userName is required!" }],
        password: [{ required: true, message: "password is required!" }]
      }
    }
  },
  methods: {
    submitForm() {
      console.log(this.$refs)
      this.$refs.formControl.validate(result => {
        if (result) {
          console.log('可以提交')
        } else {
          console.log('校验失败')
        }
      })
    }
  }
};
</script>
<style scoped>
</style>
