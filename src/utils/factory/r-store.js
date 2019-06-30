let Vue

class Store {
  constructor(options) {
    this.$options = options
    this.init(options)
  }

  init(options) {
    this.state = new Vue({
      data: options.state
    })

    this.mutations = options.mutations || {}
    this.actions = options.actions || {}

    options.getters && this.handleGetters(options.getters)
  }

  // 使用箭头函数，确保this指向store
  commit = (...args) => {

    const type = args[0]
    const params = Array.prototype.slice.call(args, 1)

    this.mutations[type](this.state, ...params)
  }

  dispatch = (type, ...args) => {
    this.actions[type](this, ...args)
  }

  handleGetters(getters) {
    this.getters = {}

    Object.entries(getters).forEach(([key, value]) => {
      // 这里不去直接赋值，而是使用Object.defineProperty 是设置属性为只读属性。readonly
      Object.defineProperty(this.getters, key, {
        // 这里要使用箭头函数，确保this指向store
        get: () => {
          return value(this.state)
        }
      })
    })
  }
}

function install(_Vue) {
  Vue = _Vue

  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store
      }
    }
  })
}

export default { Store, install }
