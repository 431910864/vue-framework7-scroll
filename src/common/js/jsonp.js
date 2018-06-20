// jsonp方法封装
import originJSONP from 'jsonp'

export default function jsonp(url, data, option) {
  // url参数拼接(xxx.com?name="zb")
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  // Promise，就是一个对象，用来传递异步操作的消息。
  // 有三种状态：Pending（进行中）、Resolved（已完成，又称 Fulfilled）和 Rejected（已失败）。
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
  // return Promise.resolve(data).then((data) => {console.log(data)})
}

function param(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : ''
}






















