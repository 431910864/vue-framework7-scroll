function getRandomInt(min, max) {
  // 返回min到max之间的随机数(含max) max-min+1 其中+1表示可以取上限值
  return Math.floor(min + (max - min + 1) * Math.random()) // [min, max]
}

// 洗牌函数(打乱数组)
export function shuffle(arr) {
  let _arr = arr.slice() // 保存数组的副本(不改变原来的arr)
  for (let i = 0; i < _arr.length; i++) {
  	let j = getRandomInt(0, i)
  	let t = _arr[i]
  	_arr[i] = _arr[j]
  	_arr[j] = t
  }

  return _arr
}