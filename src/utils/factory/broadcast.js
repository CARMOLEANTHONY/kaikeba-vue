/**
 * broadcast event from high-level components to low-level ones.
 * actually we can use provider/inject to do something like this.
 * @param {*} eventName
 * @param {*} data the data you wanna transfer.
 * @param {*} componentName the name of your target component, optional.
 */
export default function (eventName, data, componentName) {
  let children = this.$children

  if (children.length) {
    emitEvent(children, eventName, data, componentName)
  }
}

function emitEvent(children, eventName, data, componentName) {
  const len = children.length
  let stop = false

  for (let i = 0; i < len; i++) {
    const item = children[i]

    item.$emit(eventName, data)

    stop = item.$options.name === componentName
    const nextGeneration = stop ? [] : item.$children

    if (stop) {
      break
    }

    if (nextGeneration.length) {
      emitEvent(nextGeneration, eventName, data, componentName)
    }
  }
}
