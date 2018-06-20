import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'
import axios from 'axios'

// export default function xx() {} ====> ES6语法(模块化加载)
// 获取轮播图数据
export function getRecommend() {
  // jsonp跨域请求QQ音乐的推荐数据
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

// 获取热门歌曲推荐数据(ajax请求)
export function getDiscList() {
  const url = '/api/getPlaylist'

  const data = Object.assign({}, commonParams, {
  	picmid: 1,
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })

  return axios.get(url, {
  	params: data
  }).then((res) => {
  	// 可以先new Promise()一个对象,也可以直接Promise.resolve(data)返回一个promise对象
  	// 返回的promise对象可以再调用then方法。promise.then((data) => {console.log(data)})
    return Promise.resolve(res.data)
  }).catch((err) => {
  	console.log(err)
  })
}


// 获取热门歌曲推荐数据(ajax请求)
export function activitylist() {
  const url = '/api/activity/list'

  const data = Object.assign({}, {}, {
  	
  })
console.info(url)
  return axios.get(url, {
  	params: data
  }).then((res) => {
  	console.info(res)
  	// 可以先new Promise()一个对象,也可以直接Promise.resolve(data)返回一个promise对象
  	// 返回的promise对象可以再调用then方法。promise.then((data) => {console.log(data)})
    return Promise.resolve(res.data)
  }).catch((err) => {
  	console.log(err)
  })
}

// 获取歌曲详情列表
export function getSongList(id) {
  const url = '/api/getSongList'

  const data = Object.assign({}, commonParams, {
    disstid: id,
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    g_tk: 1804245971,
    platform: 'yqq',
    hostUin: 0,
    format: 'json',
    needNewCode: 0
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    console.log(err)
  })
}




























