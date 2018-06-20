<template>
	<div v-BScroll="options" ref="wrapper">
		<div>
			<slot></slot>
		</div>
	</div>
</template>

<script>
  // 多次要用到滚动(better-scroll),故封装成一个组件(利用插槽)

  export default {
  	data(){
  		return {
  	  	  options: {
  	  	  	probeType: 3, // 可扩展性
	        scrollY: true,
  	  	  	type: true,
  	  	  	click: true
  	  	  },
  	  	  scroll: {},
  	    }
  	},
  	props: {
  	  probeType: {
  	  	type: Number,
  	  	default: 1
  	  },
  	  click: {
  	  	type: Boolean,
  	  	default: true
  	  },
  	  data: {
  	  	type: Array,
  	  	default: null
  	  },
      // 是否监听滚动
  	  listenScroll: { 
  	  	type: Boolean,
  	  	default: false
  	  },
      // 是否开启上拉刷新功能
      pullup: {
        type: Boolean,
        default: false
      }
  	},
  	mounted() {
  	  // 确保DOM渲染完毕(可用this.$nextTick())
  	  setTimeout(() => {
  	  	this._initScroll()
  	  }, 20)
  	},
  	methods: {
  	  _initScroll() {
  	  	if (!this.$refs.wrapper) {
  	  	  return
  	  	}

  	  	this.scroll = this.$refs.wrapper.BScroll;
  	  	
  	  	// 如果监听滚动事件(不断获取滚动的距离)
  	  	if (this.listenScroll) {
  	  	  let me = this
  	  	  this.scroll.on('scroll', (pos) => {
  	  	  	me.$emit('scroll', pos)
  	  	  })
  	  	}

        // 如果开启上拉刷新(监听better-scroll事件)
        if (this.pullup) {
          // 监听scrollEnd事件(滚动结束(一次)时派发)
          this.scroll.on('scrollEnd', () => {
            if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
              this.$emit('scrollToEnd') // 滚动到底部了
            }
          })
        }
  	  },
  	  // 启用better-scroll,默认开启
  	  enable() {
  	  	this.scroll && this.scroll.enable()
  	  },
  	  // 禁用better-scroll;destroy() 销毁better-scroll,解绑事件
  	  disable() {
  	  	this.scroll && this.scroll.disable()
  	  },
  	  // 重新计算better-scroll,当DOM结构发生变化时调用确保滚动效果正常
  	  refresh() {
  	  	this.scroll && this.scroll.refresh()
  	  },
  	  // 为什么要用apply()?
  	  scrollTo() {
  	  	this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
  	  },
  	  scrollToElement() {
  	  	this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
  	  }
  	},
  	watch: {
  	  // 当数据发生变化时,更新better-scroll
  	  data() {
  	  	setTimeout(() => {
	  	  this.refresh()
	  	}, 20)
  	  }
  	}
  }
</script>