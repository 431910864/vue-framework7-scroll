<template>
  <f7-page>
  	<Tabbar :tabbar="tabbar" @onRouter="onRouter">
  		<component v-if="item.load" :key="index" :is="item.path" v-show="item.show" v-for="(item,index) in tabbars"></component>
	</Tabbar>
  </f7-page>
</template>

<script>
const home1 = () => import('./home1.vue');
const home2 = () => import('./home2.vue');
const home3 = () => import('./home3.vue');
const home4 = () => import('./home4.vue');
export default {
  data () {
    return {
    		tabbars: [],
    		tabbar: [{
	       src: 'http://zhuihuituiguang-card.oss-cn-shenzhen.aliyuncs.com/wxcard/images/Rectangle 16@3x.png',
	       name: '首页',
	       path: 'home1'
	    },{
	        src: 'http://zhuihuituiguang-card.oss-cn-shenzhen.aliyuncs.com/wxcard/images/Rectangle 16@3x.png',
	        name: '首页',
	      	path: 'home2'
	    },{
	        src: 'http://zhuihuituiguang-card.oss-cn-shenzhen.aliyuncs.com/wxcard/images/Rectangle 16@3x.png',
	        name: '首页',
	      	path: 'home3'
	    },{
	        src: 'http://zhuihuituiguang-card.oss-cn-shenzhen.aliyuncs.com/wxcard/images/Rectangle 16@3x.png',
	        name: '首页',
	      	path: 'home4'
	    }],
    }
  },
  components: {
  	home1,
  	home2,
  	home3,
  	home4
  },
  mounted () {
  	
  },
  methods: {
  	onRouter(tabbars){
  		this.tabbars = tabbars;
  	},
  }
}
</script>

<style>
</style>
