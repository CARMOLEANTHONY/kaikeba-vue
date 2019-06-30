/**
 * broadcast event from high-level components to low-level ones.
 * actually we can use provider/inject to do something like this better.
 * @param {*} eventName
 * @param {*} data the data you wanna transfer.
 * @param {*} componentName the name of your target component, optional.
 */
function broadcast(eventName, data, componentName) {
  let children = this.$children
  let stop = false

  const { length } = children

  if (length) {
    for (let i = 0; i < length; i++) {
      const item = children[i]

      item.$emit(eventName, data)

      stop = item.$options.name === componentName
      const nextGeneration = stop ? [] : item.$children

      if (stop) {
        break
      }

      if (nextGeneration.length) {
        broadcast.call(item, eventName, data, componentName)
      }
    }
  }
}

export default broadcast
