import Vue from 'vue'

export default function (component, options) {
  const vm = new Vue({
    render: h => h(component, { props: options })
  }).$mount()

  // 不能在实例化的时候直接挂载在body上，vue不允许这样做。
  // $el 是经过$mount之后的真实dom
  // render函数返回的是一个存储虚拟dom的JS对象
  document.body.appendChild(vm.$el)

  // 要使用挂载后的组件实例，不能使用传进来的组件
  // 没有经过mount的组件实例上不具备methods里面的方法，也就是this.showToast不能被调用
  const comp = vm.$children[0]

  // remove方法写在这里而不是组件内部是因为这是一个公共方法，传进来的每一个不同的component都应该具有这个方法。
  comp.remove = () => {
    document.body.removeChild(vm.$el)
    vm.$destroy()
  }

  return comp
}
