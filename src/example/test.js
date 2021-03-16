function test() {
  // 什么是拷贝
  let arr = [1, 2, 3]
  let newArr = arr
  newArr[0] = 100

  console.log(arr)

  //什么是浅拷贝
  let arr2 = [2, 3, 4, { val: 5 }]
  let newArr2 = arr2.slice()
  newArr2[3].val = 1000
  console.log(arr2)

  const a = { val: 2 }
  a.target = a
  console.log(a)
  return arr[0]
}

export { test }
