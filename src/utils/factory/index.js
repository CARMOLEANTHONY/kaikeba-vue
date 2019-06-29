import Vue from 'vue'
import Dispatch from './dispatch'
import Broadcast from './broadcast'
import Create from './popup'

const methods = [
  {
    fnName: '$dispatch',
    fn: Dispatch
  },
  {
    fnName: '$broadcast',
    fn: Broadcast
  },
  {
    fnName: '$create',
    fn: Create
  }
]

// 遍历向Vue原型链上挂载方法
methods.forEach(item => {
  Vue.prototype[item.fnName] = item.fn
})
