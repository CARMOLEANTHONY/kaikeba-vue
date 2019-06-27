import Vue from 'vue'
import RForm from '@/components/common/form/r-form.vue'
import RFormItem from '@/components/common/form/r-form-item.vue'
import RInput from '@/components/common/form/r-input.vue'

const components = [
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

components.forEach(item => {
  Vue.component(item.name, item.component)
})
