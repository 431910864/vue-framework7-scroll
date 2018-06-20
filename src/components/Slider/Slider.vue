<template>
	<div v-BScroll="Options" class="slider h_100s w_100s" ref="slider">
		<div class="slider-group h_100s w_100s" ref="slideGroup">
			<slot></slot>
		</div>
		<div class="dots" style="display: none;">
			<span class="dot" v-for="(item, index) in dots" :class="{active: currentPageIndex === index}"></span>
		</div>
	</div>
</template>

<script>
	import {addClass} from "src/common/js/dom"
	export default {
	  data() {
	  	return {
	  	  dots: [],
	  	  currentPageIndex: 0,
	  	  Options: {
            probeType: 3,
            scrollX: true,
            scrollY: false,
            momentum: false, // 快速滑动一段距离时,会根据滑动的距离和时间算出动量,并生成滚动动画
            snap: true, // 开启滚动
            snapLoop: true,
            snapThreshold: 0.3,
            snapSpeed: 400
      	  }
	  	}
	  },
      props: {
      	loop: {
      	  type: Boolean,
      	  default: true
      	},
      	autoPlay: {
      	  type: Boolean,
      	  default: false
      	},
      	interval: {
      	  type: Number,
      	  default: 4000
      	}
      },
      mounted() {
        setTimeout(() => {
          this._setSlideWidth()
          this._initDots()
          this._initSlider()

          if (this.autoPlay) {
          	this._play()
          }
        }, 20)

        window.addEventListener('resize', () => {
          if (!this.slider) {
          	return
          }
          this._setSlideWidth(true)
          this.slider.refresh()
        })
      },
      methods: {
      	_setSlideWidth(isResize) {
          // 轮播图片数量
          this.children = this.$refs.slideGroup.children
          let width = 0 // 所有轮播图的宽度(slider-group)
          // 每一张图片宽度(视口)
          let sliderWidth = this.$refs.slider.clientWidth
          for (let i = 0; i < this.children.length; i++) {
            let child = this.children[i]
            addClass(child, 'slider-item') // 给每张轮播图添加样式

            child.style.width = sliderWidth + 'px'
            width += sliderWidth // 轮播图数量 * 每一张的宽度
          }
          this.$refs.slideGroup.style.width = width + 'px';
      	},
      	_initSlider() {
			    this.Options = {
            probeType: 3,
            scrollX: true,
            scrollY: false,
            momentum: false, // 快速滑动一段距离时,会根据滑动的距离和时间算出动量,并生成滚动动画
            snap: true, // 开启滚动
            snapLoop: this.loop,
            snapThreshold: 0.3,
            snapSpeed: 400
      	  }
			    this.slider = this.$refs.slider.BScroll;
			    var _this2 = this;
      	  this.slider.on('scrollEnd', function(){
      	  	// pageX获取横轴方向上的页面数
      	  	let pageIndex = _this2.slider.getCurrentPage().pageX
            _this2.currentPageIndex = pageIndex
            _this2.$emit('watchPage',pageIndex);
      	  	if (_this2.loop) {
      	      pageIndex -= 1
      	  	}
      	  	if (_this2.autoPlay) {
      	  	  clearTimeout(_this2.timer)
              _this2._play()
      	  	}
      	  })
          this.slider.on('scroll', function(scroll){
            _this2.$emit('onTabScroll',scroll);
          });
      	},
      	_initDots() {
      	  this.dots = new Array(this.children.length)
        },
        goToPage(index){
          this.slider.goToPage(index, 0, 400)
        },
      	_play() {
      	  let pageIndex = this.currentPageIndex + 1
      	  if (this.loop) {
      	  	pageIndex += 1
      	  }
      	  this.timer = setTimeout(() => {
      	  	this.slider.goToPage(pageIndex, 0, 400)
      	  }, this.interval)
      	}
      },
      // 组件切换时会调用destroy钩子函数
      destroyed() {
      	clearTimeout(this.timer) // 组件销毁时清除定时器(释放内存)
      }
	}
</script>

<style lang="scss" rel="stylesheet/scss">
@import "~@/common/scss/variable.scss";
  .slider{
    min-height: 1px;
    .slider-group{
      position: relative;
      overflow: hidden;
      .slider-item{
        float: left;
        box-sizing: border-box;
        overflow: hidden;
        /*text-align: center;*/
        a{
          display: block;
          width: 100%;
          overflow: hidden;
          text-decoration: none;
      	}
        img{
          display: block;
          /*width: 100%;*/
      	}
  	   }
  	}
    .dots{
      position: absolute;
      right: 0;
      left: 0;
      bottom: 12px;
      text-align: center;
      font-size: 0;
      .dot{
        display: inline-block;
        margin: 0 4px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: $color-text-l;
        &.active{
          width: 20px;
          border-radius: 5px;
          background: $color-text-ll;
        }
      }
     }
 }
</style>
