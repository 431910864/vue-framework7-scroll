<template>
	<div>
		<div class="share_bg" @click="hide"></div>
		<div class="share">
			<div class="share_title">选择要分享到平台</div>
			<div class="swiper_container">
		        <swiper :options="swiperOption">
		        	<swiper-slide v-for="(vo,key) in data" v-if="vo" key="key">
		        		<ul class="share_list clearfix">
							<li class="share_item" v-if="v" v-for="(v,k) in vo">
								<div class="iconfont"><img :src="v.icon"/></div>
								<p class="share_name">{{v.name}}</p>
							</li>
						</ul>
		        	</swiper-slide>
		        </swiper>
	   		</div>
	   		<div class="share_btn" @click="hide">取消分享</div>
		</div>
	</div>
</template>

<script>
// swiper options example:
export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
            //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true  
            notNextTick: true,  
            pagination: '.swiper-pagination',  
            slidesPerView: 'auto',  
            centeredSlides: true,  
            paginationClickable: true,  
            spaceBetween: 30,  
            paginationBulletRender: function (swiper, index, className) {
			    return '<span class="swiper-pagination-bullet swiper-pagination-bullet1"></span>';
			},
            onSlideChangeEnd: swiper => {  
                //这个位置放swiper的回调方法  
                this.page = swiper.realIndex+1;  
                this.index = swiper.realIndex;  
            }  
      	},
      	temp: [{
    		name: "微信",
    		icon: require("src/assets/img/share/wx.png"),
    		style: {}
    	},{
    		name: "微信朋友圈",
    		icon: require("src/assets/img/share/py.png"),
    		style: {}
    	},{
    		name: "QQ空间",
    		icon: require("src/assets/img/share/qqkj.png"),
    		style: {}
    	},{
    		name: "QQ",
    		icon: require("src/assets/img/share/qq.png"),
    		style: {}
    	}]
      }
    },
    // you can find current swiper instance object like this, while the notNextTick property value must be true
    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      },
      data(){
      	let k = 0,data = [];
    	this.temp.forEach((o,i)=>{
	  		if(i%4 == 0 && i != 0){
	  			k++;
	  		}
	  		
	  		if(data[k]){
	  			data[k].push(o);
	  		}else{
	  			data[k] = [];
	  			data[k].push(o);
	  		}
	  	})
    	return data;
      }
    },
    mounted() {
    	
    },
    methods: {
		hide(){
   			this.$store.dispatch("setShare",false);
   		},
	},
}
</script>