import * as types from './mutation-types'
import {playMode} from 'common/js/config'
import {shuffle} from 'common/js/util'


function findIndex(list, song) {
  // find(返回第一个符合条件的数组成员)
  // findIndex(返回第一个符合条件的数组成员的位置)
  return list.findIndex((item) => {
  	return item.id === song.id
  })
}

// 多次修改mutations,使用actions来封装
// 提交mutation去修改我们的数据
export const selectPlay = function({commit, state}, {list, index}) {
  commit(types.SET_SEQUENCE_LIST, list)
  // 随机播放时
  if (state.mode === playMode.random) {
  	let randomList = shuffle(list) // 打乱歌曲播放数组
  	commit(types.SET_PLAYLIST, randomList)
  	// 顺序播放的歌曲id对应到随机播放中该歌曲并返回在该数组中的索引
  	index = findIndex(randomList, list[index])
  } else {
  	commit(types.SET_PLAYLIST, list)
  }
  commit(types.SET_CURRENT_INDEX, index)
  commit(types.SET_FULL_SCREEN, true)
  commit(types.SET_PLAYING_STATE, true)
}

export const randomPlay = function({commit}, {list}) {
  commit(types.SET_PLAY_MODE, playMode.random)
  commit(types.SET_SEQUENCE_LIST, list)
  let randomList = shuffle(list)
  commit(types.SET_PLAYLIST, randomList)
  commit(types.SET_CURRENT_INDEX, 0)
  commit(types.SET_FULL_SCREEN, true)
  commit(types.SET_PLAYING_STATE, true)
}