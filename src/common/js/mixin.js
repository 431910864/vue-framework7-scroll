import {mapGetters} from 'vuex'

/* 多个组件都需要处理某个问题(这里是有小播放器时歌曲列表重新计算高度),
   而且处理问题的逻辑都是类似的 */
// 组件中调用时会被组件相同的钩子函数覆盖(mixin中的代码会添加到组件中)
export const playlistMixin = {
  computed: {
    ...mapGetters([
      'playlist'
    ])
  },
  mounted() {
    this.handlePlaylist(this.playlist)
  },
  // keep-alive组件激活时调用的钩子函数
  activated() {
    this.handlePlaylist(this.playlist)
  },
  watch: {
    playlist(newVal) {
      this.handlePlaylist(newVal)
    }
  },
  methods: {
  	handlePlaylist() {
      throw new Error('component must implement handlePlaylist method')
  	}
  }
}