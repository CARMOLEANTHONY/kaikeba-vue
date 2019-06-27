import Vue from 'vue'
import RForm from '@/components/common/form/r-form.vue'
import RFormItem from '@/components/common/form/r-form-item.vue'
import RInput from '@/components/common/form/r-input.vue'

let components = [
  {
    name: 'RForm',
    component: RForm
  },
  {
    name: 'RFormItem',
    component: RFormItem
  },
  {
    name: 'RInput',
    component: RInput
  }
]

// 使用Vue.component()注册
// components.forEach(item => {
//   Vue.component(item.name, item.component)
// })

// 使用Vue.use()来注册
components
  .map(item => {
    return {
      install: Vue => {
        Vue.component(item.name, item.component)
      }
    }
  })
  .forEach(item => {
    Vue.use(item)
  })
