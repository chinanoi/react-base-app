// 手动实现浅拷贝的方法
function shallowCopy(target) {
  //首先判断是否是object类型  null也算作object类型（JS历史遗留问题）
  if (typeof target === 'object' && typeof target !== null) {
    const newTarget = Array.isArray(target) ? [] : {}
    for (let props in target) {
      if (target.hasOwnProperty(props)) {
        newTarget[props] = target[props]
      }
    }
    return newTarget
  } else {
    return target
  }
}
