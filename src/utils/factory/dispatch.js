/**
 * add a common method to Vue.
 * dispatch event from low-level components to high-level ones.
 * @param {String} eventName event name
 * @param {any} data  the data you wanna transfer
 * @param {String} componentName the name of your target component.
 */
export default function (eventName, data, componentName) {
  let parentComponent = this.$parent || null

  componentName = componentName || this.$root.name

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
