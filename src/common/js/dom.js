// 添加类名和判断是否存在类名的方法封装
// 常用的DOM操作都封装在这里

export function addClass(e, c) {
  if (hasClass(e, c)) {
  	return
  }
  let newClass = e.className.split(' ')
  newClass.push(c)
  e.className = newClass.join(' ')

  // if (!hasClass(e, c)) {
  // 	e.className += ' ' + c
  // }
}

export function hasClass(e, c) {
  let reg = new RegExp('(^|\\s)' + c + '(\\s|$)')
  return reg.test(e.className)	
}

// 获取点击的target
export function getData(el, name, val) {
  const prefix = 'data-'
  name = prefix + name


  if (val) {
    // el.dataset.index = val
    return el.setAttribute(name, val)
  } else {
    // H5实现 el.dataset.index
    return el.getAttribute(name)
  }
}

// 浏览器兼容前缀封装
let elementStyle = document.createElement('div').style

let vendor = (() => { // 立即执行函数(function() {...})()
  let transformNames = {
    webkit: 'webkitTransform', // chrome,safari
    Moz: 'MozTransform', // firefox
    O: 'OTransform', // Opera
    ms: 'msTransform', // IE
    standard: 'transform'// standard
  }

  // 遍历出浏览器支持的前缀并返回
  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key
    }
  }

  return false // 浏览器所有的前缀都不支持返回false
})()

export function prefixStyle(style) {
  if (!vendor) return false
  if (vendor === 'standard') return style
  return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}





















