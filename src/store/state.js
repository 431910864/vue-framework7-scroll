// 1.定义state =>  (原始数据或底层数据)与组件,模块,项目相关的数据

import {playMode} from 'common/js/config'

const state = {
  singer: {},
  playing: false, // 播放/暂停
  fullScreen: false, // 全屏
  playlist: [], // 播放列表
  sequenceList: [], // 歌曲播放顺序列表
  mode: playMode.sequence, // 播放模式
  currentIndex: -1, // 当前播放歌曲的索引(上一曲/下一曲)
  disc: {},
  rankList: [] // 排行榜歌曲列表
}

export default state