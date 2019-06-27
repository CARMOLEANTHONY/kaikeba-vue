import Vue from 'vue'
import GlobalComponentClass from './global-component-class'
import RForm from '@/components/common/form/r-form.vue'
import RFormItem from '@/components/common/form/r-form-item.vue'
import RInput from '@/components/common/form/r-input.vue'

let components = [
  new GlobalComponentClass('RForm', RForm),
  new GlobalComponentClass('RFormItem', RFormItem),
  new GlobalComponentClass('RInput', RInput)
]

// 使用Vue.component()注册
// components
//   .forEach(item => {
//     Vue.component(item.name, item.component)
//   })

// 使用Vue.use()来注册
components
  .forEach(item => {
    console.log('item', item)
    Vue.use(item)
  })
