/**
 * add a common method to Vue.
 * dispatch event from low-level components to high-level ones.
 * @param {*} eventName event name
 * @param {*} data  the data you wanna transfer
 * @param {*} componentName the name of your target component.
 */
export default function (eventName, data, componentName) {
  let parentComponent = this.$parent || null

  componentName = componentName || this.$root

  while (parentComponent) {
    if (parentComponent) {
      parentComponent.$emit(eventName, data)

      parentComponent = parentComponent.name === componentName
        ? null
        : parentComponent.$parent
    } else {
      break
    }
  }
}
