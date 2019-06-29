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
import RToast from '@/components/common/popup/r-toast'
export default {
  name: 'FormSample',
  data() {
    return {
      formModel: {
        userName: '',
        password: ''
      },
      rules: {
        userName: [{ required: true, message: "userName is required!" }, { max: 10, message: "max length is 10!" }],
        password: [{ required: true, message: "password is required!" }]
      }
    }
  },
  methods: {
    submitForm() {
      /**
       * 两种方式处理， 一种直接回调， 一种Promise
       */
      this.$refs.formControl.validate(this.submitHandler)

      // this.$refs.formControl.validate()
      //   .then(result => {
      //     console.log('可以提交')
      //   })
      //   .catch(err => {
      //     console.log('不可以提交')
      //   })
    },

    submitHandler(res) {
      this.$create(RToast, {
        title: `校验${res ? '成功' : '失败'}！`,
        message: `${res ? '' : '不'}可以进行提交`,
        duration: 1000
      }).showToast()
    }
  }
};
</script>
<style scoped>
</style>
