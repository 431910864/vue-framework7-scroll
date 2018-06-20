<template>
	<div ref="ScrollableTabView" class="h_100s ScrollableTabView">
		<div class="pa w_100s zi_2" ref="headerMain" :style="[DgHeight]">
			<div :style="headerStyle" class="ScrollableTabViewHeaderMain pr zi_2">
				<div ref="header" class="ScrollableTabViewHeader" v-MouseScroll="{}">
					<slot name="header"></slot>
				</div>
				<div :style="[{height:tabHeight+'px',opacity: Number(isMaxY)},tabStyle]" ref="tabBar" class="w_100s bg_qbai">
					<div v-BScroll="{scrollX:true,scrollY:false,click:true}" ref="tablist" class="w_100s ScrollableTabViewHeaderTabList o_h" :style="{height:tabHeight+'px'}">
						<div class="flex_warp flex flexbox" :class="tabType != 'scroll' ? 'jc_sa' : ''" :style="TabStyle">
							<div ref="title" class="flex ja_c ScrollableTabViewHeaderTitle" :class="tabType != 'scroll' ? 'flex_10' : ''" :style="[TabContentStyle,{height:tabHeight+'px'}]" v-for="(item,index) in tabBar" @click="goToPage(index)" :key="index">
								<div :style="[{color:SliderPage ==index ? tabColor||'#000' : '',paddingLeft:(padding ? (padding.left || 0) : 0),paddingRight:(padding ? (padding.right || 0) : 0)}]">
									{{item.title}}
								</div>
							</div>
							<div ref="line" :style="linesStyle" class="ScrollableTabViewHeaderLine">
								<div class="h_100s" :style="[{paddingLeft:(padding ? (padding.left || 0) : 0),paddingRight:(padding ? (padding.right || 0) : 0)}]">
									<div class="w_100s h_100s flex h_3" :style="[lineStyle,{backgroundColor:tabColor||'#000'}]"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div :style="[{height:tabHeight+'px',opacity: Number(!isMaxY)},tabStyle]" ref="tabBar" :class="!isMaxY ? 'zi_2' : ''" class="w_100s bg_qbai  tp_0 pa">
				<slot name="tabBar" v-if="tabBar.tabBarView"></slot>
				<div v-BScroll="{scrollX:true,scrollY:false,click:true}" ref="tablist" class="w_100s ScrollableTabViewHeaderTabList" :style="{height:tabHeight+'px'}" v-else>
					<div class="flex_warp flex flexbox" :class="tabType != 'scroll' ? 'jc_sa' : ''" :style="TabStyle">
						<div ref="title" class="flex ja_c" :class="tabType != 'scroll' ? 'flex_10' : ''" :style="[TabContentStyle,{height:tabHeight+'px'}]" v-for="(item,index) in tabBar" @click="goToPage(index)" :key="index">
							<div :style="[{color:SliderPage ==index ? tabColor||'#000' : '',paddingLeft:(padding ? (padding.left || 0) : 0),paddingRight:(padding ? (padding.right || 0) : 0)}]">
								{{item.title}}
							</div>
						</div>
						<div ref="line" :style="linesStyle" class="ScrollableTabViewHeaderLine">
							<div class="h_100s" :style="[{paddingLeft:(padding ? (padding.left || 0) : 0),paddingRight:(padding ? (padding.right || 0) : 0)}]">
								<div class="w_100s h_100s flex h_3" :style="[lineStyle,{backgroundColor:tabColor||'#000'}]"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="h_100s">
			<Swiper @handleEvent="handleEvent" @slideChangeTransitionEnd="slideChangeTransitionEnd" ref="Swiper" @isTouch="isTouch" @onTabScroll="onTabScroll" @watchPage="watchPage">
				<div slot="swiperSlide" class="pr zi_1 flex h_100s swiper-slide" :key="index" v-for="(item,index) in tabBar" :style="{width:winWidth+'px',paddingTop:(headerHeight == 0 ? tabBarHeight : 0)+'px'}">
					<div v-if="Boptions.type" v-BScroll="Boptions" ref="ScrollTab" class="wrapper pr zi_1 o_h h_100s w_100s">
						<div class="w_100s" :style="[TabViewItemMinHeight]">
							<div :style="[headerHeight == 0 ? {} : DgHeight,{opacity: Number(isMaxY)}]" ref="ScrollDg">
								<div :style="{height:headerHeight+'px'}" class="w_100s"></div>
							</div>
							<div class="w_100s h_100s">
								<slot :name="'view'+index"></slot>
								<div :style="footerStyle"></div>
								<div :style="DgHeight" v-if="headerHeight == 0"></div>
							</div>
						</div>
					</div>
				</div>
			</Swiper>
		</div>
		<slot></slot>
		<div ref="footer" class="pa lt_0 bt_0 bg_ban w_100s zi_3">
			<slot name="footer"></slot>
		</div>
	</div>
</template>

<script>
	const Slider = () => import('../Slider/Slider.vue');
	const Scroll = () => import('../Scroll/Scroll.vue');
	const Swiper = () => import('../Swiper/Swiper.vue');
	import { style } from 'src/base/XScroll/util/dom'
	import { momentum } from 'src/base/XScroll/util/momentum'
	import AlloyFinger from 'src/base/AlloyFinger/alloy_finger';
	export default {
		data() {
			let _this2 = this;
			return {
				dots: [],
				currentPageIndex: 0,
				options: {
					scrollY: true,
					click: true,
					probeType: 3
				},
				headerHeight: 0,
				tabBarHeight: 40,
				ScrollTab: {},
				headerStyle: {},
				y: 0,
				SliderPage: 0,
				tabWidth: 0,
				TabStyle: {},
				footerStyle: {},
				isMaxY: true,
				DgHeight: 0,
				headerTopStyle: {},
				ScrollX: false,
				linesStyle: {},
				af: {},
				tabStyle: {},
				headerMainStyle: {},
				WrapperWidth: 0,
				TabViewItemMinHeight: {},
			}
		},
		props: {
			tabHeight: {
				type: String / Number,
				default: 40,
			},
			tabColor: {
				type: String / Object,
				default: '#000',
			},
			tabType: {
				type: String / Object,
				default: 'default',
			},
			padding: {
				type: Object / Array,
				default: {
					left: '10px',
					right: '10px',
				},
			},
			TabContentStyle: {
				type: Object / Array,
				default: {}
			},
			Boptions: {
				type: Object / Array,
				default: {
					type: true,
					scrollY: true,
					click: true,
					probeType: 3,
	            		type: true,
				}
			},
			lineStyle: {
				type: Object / Array,
				default: {},
			},
			tabBar: {
				type: Object / Array,
				default: []
			},
			loop: {
				type: Boolean,
				default: true
			},
			autoPlay: {
				type: Boolean,
				default: true
			},
			interval: {
				type: Number,
				default: 4000
			},
			pullingUp: null,
			pullingDown: null,
			headerPull: null,
		},
		watch: {
			headerHeight(height){
				this.headerMainStyle['height'] = height + 'px';
			}
		},
		components: {
			Slider,
			Scroll, 
			Swiper,
		},
		mounted() {
			var _this2 = this;
			this.Interval = setInterval(() => {
				if(this.$refs.ScrollTab) {
					clearInterval(this.Interval);
					if(this.$refs.header){
						this.headerHeight = this.$refs.header.offsetHeight;  
						this.headerMainStyle = this.$refs.headerMain.style;
						var touchStart = {},touchMove = {},MoveY = 0,StartY=0;
						this.$refs.header.AlloyFinger = new AlloyFinger(this.$refs.header, {
						    touchStart: function (e) {
						    		_this2.ScrollTab[_this2.SliderPage].BScroll.handleEvent(e);
						    },
						    touchMove: function (e) { 
						    		_this2.ScrollTab[_this2.SliderPage].BScroll.handleEvent(e);
						    },
						    touchEnd:  function (e) {
						    		_this2.ScrollTab[_this2.SliderPage].BScroll.handleEvent(e);
						    },
						    touchCancel: function (e) {
						    		_this2.ScrollTab[_this2.SliderPage].BScroll.handleEvent(e);
						    },
						    tap: function () {
						    		
						    }
						});
						//this.af = af;
					}
					if(this.$refs.tabBar){
						this.tabBarHeight = this.$refs.tabBar.offsetHeight;
					}
					this.footerStyle = {
						height: this.$refs.footer.offsetHeight + 'px'
					}
					this.DgHeight = {
						height: ((this.headerHeight + this.tabBarHeight)) + 'px'
					}
					if(this.$refs.ScrollTab && this.$refs.ScrollTab.length >= 1){
						this.TabViewItemMinHeight = {
							minHeight: (this.$refs.ScrollTab[0].offsetHeight + 1) + 'px',
						}
					}
					this.ScrollTab = this.$refs.ScrollTab;
					_this2.keys = 0;
					for(var i in this.ScrollTab) {
						this.ScrollTab[i].BScroll.keys = i;
						this.ScrollTab[i].BScroll.on('scroll', function(scroll) {
							_this2.y = scroll.y >= -_this2.headerHeight ? scroll.y : -_this2.headerHeight;
							if(!_this2.ScrollX){
								_this2.isMaxY = _this2.headerHeight != 0 ? scroll.y >= -_this2.headerHeight : false;
							}
							_this2.keys = this.keys;
							if(_this2.headerHeight != 0){
								for(var i in _this2.ScrollTab) {
									if(i != this.keys) {
										if(_this2.ScrollTab[i].BScroll.y >= _this2.y || scroll.y > -_this2.headerHeight) {
											_this2.ScrollTab[i].BScroll.scrollTo(0, _this2.y);
										}
									}
								}
							}
							_this2.$emit('scroll', scroll);
							_this2.$emit('headerScroll', scroll);
							_this2.headerScroll(scroll);
							_this2.headerStyle = this.domPlayStyle;
							_this2.tabStyle = {
								//position: 'absolute',
							}
							_this2.headerMainStyle['height'] = (_this2.headerHeight + _this2.tabBarHeight) + _this2.y + 'px';
						})
						this.ScrollTab[i].BScroll.on('pullingUp', function(){
				          console.info('pullingUp');
				          _this2.$emit('pullingUp',()=>{
				          	if(!this.moved){
				              this.refresh();
				              this.finishPullUp();
				            }
				          });
				       })
						this.ScrollTab[i].BScroll.on('pullingDown', function()  {
				          _this2.$emit('pullingDown',()=>{
				          	this.finishPullDown();
				          });
				          console.info('pullingDown')
				       })
				        
					}
					this.tabWidth = 0;
					this.WidthArr = [];
					let title = this.$refs.ScrollableTabView.querySelectorAll('.ScrollableTabViewHeaderTabList .ScrollableTabViewHeaderTitle');
					let wrapper = this.$refs.ScrollableTabView.querySelectorAll('.ScrollableTabViewHeaderTabList')[0];
					this.WrapperWidth = wrapper.offsetWidth;
					for(let i = 0; i < title.length; i++) {
						this.tabWidth += title[i].offsetWidth;
						this.WidthArr[i] = title[i].offsetWidth;
					}
					if(this.tabType == 'scroll'){
						this.TabStyle = {
							width: this.tabWidth + 'px'
						}
					}
					this.onTabScroll();
				}
			}, 0)
		},
		methods: {
			handleEvent(e){
//		    		this.ScrollTab[this.SliderPage].BScroll.handleEvent(e);
			},
			headerScroll(str){
				if(!this.headerPull) return;
				if(!this.headerPulls){
        				this.headerPulls = 0;
        				let header = this.headerPull();
					try{
						header = header.$el;
					}catch(e){
						header = header;
					}
        				if(header){
        					this.headerPulls = {
	    						header,
	    						height: header.offsetHeight,
	    					}
        				}
    					
    				}
        			if(str.y >= 0){
        				this.headerPulls.header.style['height'] = Number(this.headerPulls.height) + str.y + 'px';
        				this.headerPulls.header.style[style.transform] = 'translate(0,'+ -str.y  +'px)';
        			}else{
        				this.headerPulls.header.style['height'] = Number(this.headerPulls.height) + 'px';
        				this.headerPulls.header.style[style.transform] = 'translate(0,0px)';
        			}
			},
			callback(){
			},
			onTabScroll(scroll) {
				let x = 0;
				try{
					x = scroll ? scroll.x : 0;
				}catch(e){
					x = scroll;
				}
				let title = this.$refs.ScrollableTabView.querySelectorAll('.ScrollableTabViewHeaderTabList .ScrollableTabViewHeaderTitle');
				let l = title.length;
				let lineWidth = this.$refs.line.offsetWidth;
				if(!this.tabWidth) {
					this.tabWidth = 0;
					this.WidthArr = [];
					for(let i = 0; i < l; i++) {
						this.tabWidth += title[i].offsetWidth;
						this.WidthArr[i] = title[i].offsetWidth;
					}
					let wrapper = this.$refs.ScrollableTabView.querySelectorAll('.ScrollableTabViewHeaderTabList')[0];
					this.WrapperWidth = wrapper.offsetWidth;
				}
				let line = this.$refs.ScrollableTabView.querySelectorAll('.ScrollableTabView .ScrollableTabViewHeaderLine');
				let tablist = this.$refs.ScrollableTabView.querySelectorAll('.ScrollableTabView .ScrollableTabViewHeaderTabList');
				setTimeout(() => {
					let SlideWidth = this.WidthArr[this.SliderPage];
					let w = this.WrapperWidth / this.tabWidth;

					let s = 0;
					for(let b in this.WidthArr) {
						if(b < this.SliderPage) {
							s += this.WidthArr[b];
						} else {
							break;
						}
					}
					let prev = this.WidthArr[this.SliderPage - 1];
					let tox = (-this.WrapperWidth * this.SliderPage);
					l = this.tabWidth / prev || l;
					let c = (tox + ((s / prev) * this.WrapperWidth));
					x = x - c || x;
					this.funFall(lineWidth,SlideWidth,(width)=>{
						//this.$refs.line && (this.$refs.line.style.width = width + 'px');
						for(var li = 0;li<line.length;li++){
							line[li].style.width = width + 'px';
						}
					})
					
					let tablistX = s - (this.WrapperWidth / 2);
					if(tablistX > 0) {
						let maxtablistX = this.tabWidth - this.WrapperWidth;
						if(tablistX > maxtablistX) {
							tablistX = maxtablistX;
						}
						if(maxtablistX <= 0){
							tablistX = 0;
						}
						//this.$refs.tablist.BScroll && this.$refs.tablist.BScroll.scrollTo(-tablistX, 0, 300)
						for(let a = 0; a < tablist.length;a++){
							tablist[a].BScroll && tablist[a].BScroll.scrollTo(-tablistX, 0, 300)
						}
					} else {
						for(let a = 0; a < tablist.length;a++){
							tablist[a].BScroll && tablist[a].BScroll.scrollTo(0, 0, 300)
							//this.$refs.tablist.BScroll && this.$refs.tablist.BScroll.scrollTo(0, 0, 300)
						}
					}
					/*this.$refs.line.style[style.transitionProperty] = 'transform';
					this.$refs.line.style[style.transitionTimingFunction] = 'cubic-bezier(0.165, 0.84, 0.44, 1)';
					this.$refs.line.style[style.transform] = 'translate('+ ((-x / l) / w )+ 'px,0)';*/
					
					for(let a = 0; a < line.length;a++){
						line[a].style[style.transitionProperty] = 'transform';
						line[a].style[style.transitionTimingFunction] = 'cubic-bezier(0.165, 0.84, 0.44, 1)';
						line[a].style[style.transform] = 'translate('+ ((-x / l) / w )+ 'px,0)';
					}
				}, 20);
				this.x = x;
			},
			funFall(start,during,callback) {
			    var start = start, during = during, fps = (Math.abs(during-start)/10);
			    let _run = function() {
			    		if(start > during){
			    			if(start - fps > during){
			    				start =  start - fps;
			    				requestAnimationFrame(_run);
			    			}else{
			    				start = during;
			    			}
			    		}else if(start < during){
			    			if(start + fps < during){
			    				start =  start + fps;
			    				requestAnimationFrame(_run);
			    			}else{
			    				start = during;
			    			}
			    		}else{
			    			start=during;
			    		}
			    		callback(start)
			    };
			    _run();
			},
			isTouch(bool){
				let line = this.$refs.ScrollableTabView.querySelectorAll('.ScrollableTabView .ScrollableTabViewHeaderLine');
				for(let a = 0; a < line.length;a++){
					line[a].style[style.transitionDuration] = !bool ? (300+ 'ms') : 0 + 'ms';
				}
			},
			watchPage(index) {
				this.ScrollX = false;
				this.isMaxY = this.headerHeight != 0 ? (!( this.y  <= -this.headerHeight) ? true : false) : false;
				this.SliderPage = index;
				this.$emit('watchPage', index);
			},
			refresh(index){
				try{
					let BScroll = this.ScrollTab[index || this.SliderPage].BScroll;
						BScroll.refresh();
						if(BScroll.y >= this.y) {
							BScroll.scrollTo(0, this.y);
						}
				}catch(e){
					
				}
			},
			update(el, binding, vnode){
				try{
					let BScroll = this.ScrollTab[this.SliderPage].BScroll,
						offsetHeight = BScroll.scroller.offsetHeight,
						maxScrollY = BScroll.maxScrollY,
						y = BScroll.y,
						scrollerHeight = BScroll.scrollerHeight,
						wrapperHeight = BScroll.wrapperHeight;
						if(offsetHeight <= wrapperHeight) return;
						if(maxScrollY == -(offsetHeight - wrapperHeight)) return;
						if(Math.abs(Math.floor(y)) < Math.abs(Math.floor(this.y))){
							this.refresh();
						}
						this.refresh();
				}catch(e){
					
				}
			},
			slideChangeTransitionEnd(str){
				clearTimeout(this.Timeout);
				this.Timeout = null;
				this.Timeout = setTimeout(()=>{
					clearTimeout(this.Timeout);
					this.refresh(str.index);
					try{
						this.onTabScroll({
							x: this.$refs.Swiper.swiper.translate,
						})
					}catch(err){
						this.onTabScroll({
							x: str.x,
						})
					}
				},0)
			},
			goToPage(index) {
				this.SliderPage = index;
				this.$emit('watchPage', index);
				try{
					this.$refs.Swiper.swiper.slideTo(index, 300, false);//切换到第一个slide，速度为1秒
				}catch(err){
					this.$refs.Swiper.goToPage(index, 300, false);//切换到第一个slide，速度为1秒
				}
				this.isTouch(false);
			},
			loadImage() {
				if(!this.checkLoaded) {
					this.$refs.scroll.refresh()
					this.checkLoaded = true
				}
			},
			scrollToEnd() {
				this.$emit('scrollToEnd', this.keys)
			}
		},
		// 组件切换时会调用destroy钩子函数
		destroyed() {
			clearInterval(this.Interval);
		}
	}
</script>

<style lang="scss">
	.tscroll_swiper {
		display: -webkit-flex;
		display: flex;
		overflow: hidden;
		position: relative;
		.tscroll_swiper_item {
			display: -webkit-flex;
			display: flex;
			display: -moz-box;
			display: -webkit-box;
			flex-wrap: nowrap;
			.tab-scroll {
				display: block;
			}
		}
	}
	
	.ScrollableTabViewHeaderLine {
		position: absolute;
		bottom: 0;
		left: 0;
	}
	.ScrollableTabView{
		.swiper-container,.swiper-wrapper{
			position: inherit!important;
		}
	}
</style>