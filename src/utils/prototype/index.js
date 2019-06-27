import Vue from 'vue'
import Dispatch from './dispatch'

const methods = [
  {
    fnName: '$dispatch',
    fn: Dispatch
  }
]

methods.forEach(item => {
  Vue.prototype[item.fnName] = item.fn
})
