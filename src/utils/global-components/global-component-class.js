export default class GlobalComponentClass {
  constructor(name, component) {
    this.setName(name)
    this.setComponent(component)
  }

  install(Vue) {
    Vue.component(this.name, this.component)
  }

  setName(name) {
    this.name = name
  }

  setComponent(component) {
    this.component = component
  }
}
