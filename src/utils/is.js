export function getType(val) {
  return Object.prototype.toString.call(val).slice(8, -1)
}

export function isFunction(val) {
  return getType(val) === 'Function'
}
