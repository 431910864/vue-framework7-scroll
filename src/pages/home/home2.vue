<template>
  <f7-page>
	  <div class="h_100s bg_hui_1 o_h">
	    <div v-BScroll="options" ref="Text" class="h_100s o_h" >
	      <div class="m_10 bd_1 o_h">
	      	<List @click="$f7router.navigate('/MyDetails')" title="默认ScrollableTab"></List>
	      	<List @click="$f7router.navigate('/Text1')" title="自定义ScrollableTab"></List>
	      	<List @click="$f7router.navigate('/Text2')" title="无Header ScrollableTab"></List>
	      	<List @click="$f7router.navigate('/Text3')" title="普通Scroll"></List>
	      	<List @click="$f7router.navigate('/Mobiscroll')" title="省市区"></List>
	      	<List @click="$f7router.navigate('/ViewEditer')" title="添加"></List>
	      	<!--<List @click="$f7router.navigate('/Singer')" title="Singer"></List>-->
	      	<List @click="$f7router.navigate('/JSBridge')" title="JSBridge"></List>
	      	<List @click="$f7router.navigate('/Infinitedom')" title="无限滚动"></List>
	      </div>
	    </div>
	  </div>
  </f7-page>
</template>

<script>
  export default {
    data () {
      return {
        data: [],
        options: {
          scrollY: true,
          click: true,
          pullUpLoad: {
            threshold: -20
          },
          pullDownRefresh: true
        }
      }
    },
    mounted () {
	  //console.info(this.$f7.router)
      var _this2 = this;
    },
    methods: {
    		
    }
  }
</script>

<style>
</style>





