<template>
  <swiper :options="swiperOption" class="h_100s" ref="mySwiper" @someSwiperEvent="callback" v-if="theme != 'pc'">
	<slot class="swiper-slide" name="swiperSlide"></slot>
  </swiper>
  <Slider ref="Slider" @slideChangeTransitionEnd="slideChangeTransitionEnd" @watchPage="watchPage" @onTabScroll="onTabScroll" v-else>
  	<slot class="swiper-slide" name="swiperSlide"></slot>
  </Slider>
</template>
<script>
import { style } from 'src/base/XScroll/util/dom'
import { ease } from 'src/base/XScroll/util/ease'
import { getNow, isUndef, _css, getMousePoint } from 'src/base/XScroll/util/lang'
import { DIRECTION_DOWN, DIRECTION_UP, DIRECTION_LEFT, DIRECTION_RIGHT } from 'src/base/XScroll/util/const'
import Slider from '../Slider/Slider'
export default {
	data() {
		let _this2 = this;
		return {
			index: 0,
	        swiperOption: {
	        		//preventClicksPropagation: false,
	        		//preventClicks: false,
	        		//touchMoveStopPropagation: false,
	        		//passiveListeners: false,
	        		//touchReleaseOnEdges: true,
	        		//iOSEdgeSwipeDetection: true,//设置为true开启IOS的UIWebView环境下的边缘探测。如果拖动是从屏幕边缘开始则不触发swiper。
	        		//iOSEdgeSwipeThreshold: 20,//IOS的UIWebView环境下的边缘探测距离。如果拖动小于边缘探测距离则不触发swiper。
	        		//resistanceRatio: 0,
	        		//longSwipes: false,
	        		//grabCursor: true,
	        		on: {
	        			init: function(swiper){
	        				
	        			},
	        			sliderMove: function(e){
	        				
	        			},
	        			touchStart: function(e){
	        				_this2.$emit('handleEvent',e);
	        				_this2.$emit('isTouch',true)
						_this2.$emit('onTabScroll',{
							x: this.translate,
						})
				    },
	        			touchMove: function(e){
	        				_this2.$emit('handleEvent',e);
	        				_this2.$emit('isTouch',true)
						_this2.$emit('onTabScroll',{
							x: this.translate,
						})
				    },
	        			touchEnd: function(e){
	        				_this2.$emit('handleEvent',e);
	        				_this2.$emit('isTouch',false)
						_this2.$emit('onTabScroll',{
							x: this.translate,
						})
				    },
				    transitionEnd: function(e){
	        				_this2.$emit('isTouch',false)
						_this2.$emit('watchPage',this.activeIndex)
						_this2.$emit('onTabScroll',{
							x: this.translate,
						})
				    },
				    slidePrevEnd: function(e){
	        				_this2.$emit('isTouch',false)
						_this2.$emit('watchPage',this.activeIndex)
						_this2.$emit('onTabScroll',{
							x: this.translate,
						})
				    },
				    slideNextEnd: function(e){
	        				_this2.$emit('isTouch',false)
						_this2.$emit('watchPage',this.activeIndex)
						_this2.$emit('onTabScroll',{
							x: this.translate,
						})
				    },
				    slideChangeTransitionEnd: function(e){
	        				_this2.$emit('isTouch',false)
						_this2.$emit('watchPage',this.activeIndex)
						_this2.$emit('onTabScroll',{
							x: this.translate,
						})
	        				_this2.$emit('slideChangeTransitionEnd',{
							x: this.translate,
							index: this.activeIndex,
							e: this
	        				})
				    },
				    scroll: function(e){
	        				console.info(e)
				    },
	        		}
	        }
		}
	},
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
	components: {
        Slider
    },
    mounted() {
    		
    },
	methods: {
		goToPage(index){
			if(this.index != index){
				let x = null;
				try{
					x = this.$refs.Slider.$refs.slider.BScroll.x;
				}catch(err){}
				this.$emit('slideChangeTransitionEnd',{
					x,
					index: index
				})
				this.index = index;
				this.$refs.Slider.goToPage(index);	
			}
		},
		onTabScroll(scroll){
			let x = typeof scroll == 'object' ? scroll.x : scroll;
			this.$emit('onTabScroll',{
				x
			})
		},
		slideChangeTransitionEnd(){
			/*this.$emit('slideChangeTransitionEnd',{
				x: this.translate,
				index: this.activeIndex,
				e: this
			})*/
		},
		watchPage(page){
			if(this.index != page){
				let x = null;
				try{
					x = this.$refs.Slider.$refs.slider.BScroll.x;
				}catch(err){}
				this.$emit('slideChangeTransitionEnd',{
					x,
					index: page
				})
				this.index = page;
				this.$emit('watchPage',page);
			}
		},
		callback(){
			console.info(1)	
		}
	}
}
</script>

<style>
</style>