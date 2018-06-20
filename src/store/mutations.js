// 4.修改数据
// types.SET_SINGER获取mutations,本质上是一个函数

import * as types from './mutation-types'

const matutations = {
  // state: state对象; singer: 修改对象
  [types.SET_SINGER](state, singer) {
  	state.singer = singer
  },

  // ES6允许使用"[]"访问对象的字面量表示法来访问"属性",还可以定义方法名,上一段代码等价于
  // 'SET_SINGER': function(state, singer) {
  //   state.singer = singer;
  // }

  [types.SET_PLAYING_STATE](state, flag) {
  	state.playing = flag
  },
  [types.SET_FULL_SCREEN](state, flag) {
  	state.fullScreen = flag
  },
  [types.SET_PLAYLIST](state, list) {
  	state.playlist = list
  },
  [types.SET_SEQUENCE_LIST](state, list) {
  	state.sequenceList = list
  },
  [types.SET_PLAY_MODE](state, mode){
  	state.mode = mode
  },
  [types.SET_CURRENT_INDEX](state, index) {
  	state.currentIndex = index
  },
  [types.SET_DISC](state, disc) {
    state.disc = disc
  },
  [types.SET_RANK_LIST](state, rank) {
    state.rankList = rank
  }
}

export default matutations