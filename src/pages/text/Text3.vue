<template>
  <f7-page>
	<div style="height: 100%;overflow: hidden;background-color: #FFF;">
		<div v-BScroll="options" ref="Text" class="wrapper" style="height: 100%;overflow: hidden;">
			<ul class="content">
				<div class="pt_8">
			        	<div class="pl_10 pr_10 mb_8" v-for="(item,index) in data">
			        		<div class="flex bg_ban bt_1 bb_1 br_7 o_h br_1 bl_1" v-if="item">
				        		<div class="pr ">
				        			<div class="flex ai_c ja_c w_90 h_90 pr bg_ban">
				        				<Img :src="item.imgurl || ''" height="80px" width="80px" class="v_b" v-if="item.imgurl"/>
				        				<label class="pa bt_0 rt_0 c_bai bg_t_hei_3 fz_11 pl_8 pr_8 pb_2 pt_2 mb_5 mr_5">{{item.listennum}}</label>
				        			</div>
				        		</div>
				        		<div class="pt_5 pb_5 w_100s o_h">
				        			<div class="w_100s">
				        				<p class="text-ell h_20">撒打算打算的阿斯顿阿斯顿阿斯顿阿斯顿安德森打死啊大师赛</p>
				        				<!--<p class="h_20 flex ai_l text-ell w_100s">{{item.dissname}}</p>-->
					        			<p class="h_30 flex ai_c fz_12">{{item.createtime}}</p>
					        			<div class="h_30 flex ai_r flex_10 fz_12">
					        				<p class="">听众 {{item.listennum}}</p>
					        				<p class="pl_10">关注 {{item.version}}</p>
					        			</div>
				        			</div>
				        		</div>
				        	</div>
			        </div>
		        </div>
				<!--<div @click="$router.push({path:'Text1',query:{openid:'123'}})">前进</div>
			    <li style="height: 300px;background-color: #000000;"></li>
			    <li style="height: 300px;background-color: #555;"></li>
			    <li style="height: 300px;background-color: #ccc;"></li>
			    <input type="text" name="" id="" value="" />
			    <li style="height: 300px;background-color: #666;"></li>
          		<li v-for="i in data">{{i}}</li>-->
			</ul>
		</div>
	</div>
  </f7-page>
</template>

<script>
import {getRecommend, getDiscList, activitylist} from 'src/base/Axios/recommend'
import {ERR_OK} from 'src/base/Axios/config'
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
        pullDownRefresh: {
        	  threshold: 40,
        },
        pullingUp: function (e) {
          console.info(e)
        },
        pullingDown: function (e) {
          console.info(e)
        },
      }
    }
  },
  mounted () {
    var _this2 = this;
    var Interval = setInterval(()=>{
      if(this.$refs.Text.BScroll){
        clearInterval(Interval)
        this.$refs.Text.BScroll.on('pullingUp', function(){
          console.info('pullingUp');
          _this2.getlist();
        })
        this.$refs.Text.BScroll.on('pullingDown', function()  {
          setTimeout(()=>{
            this.finishPullDown();
          },1000)
          console.info('pullingDown')
        })
      }
    })
    this.getlist();
  },
  methods: {
  	getlist(){
  		var cont = 0;
	      var data = [];
	      let DiscList = locache.get('DiscList');
	      if(DiscList){
	      	let res = DiscList;
  	  		if (res.code === ERR_OK) {
			      var Interval = setInterval(()=>{
			        for(var i = 0;i<10;i++){
			          cont += 1;
			          data.push(res.data.list[cont]);
			          if(cont >= res.data.list.length){
				        this.data = this.data.concat(data);
				        var Intervals = setInterval(()=>{
				        		try{
					            if(!this.$refs.Text.BScroll.moved){
					              this.$refs.Text.BScroll.refresh();
					              clearInterval(Intervals);
					              this.$refs.Text.BScroll.finishPullUp();
					            }
				            }catch(err){
					              clearInterval(Intervals);
				            }
				         });
			            clearInterval(Interval);
			          }
			        }
			      },300);
	      	  }
	      	return;
	      }
	      getDiscList().then((res) => {
	  	  	if (res.code === ERR_OK) {
			      var Interval = setInterval(()=>{
			        for(var i = 0;i<10;i++){
			          cont += 1;
			          data.push(res.data.list[cont]);
			          if(cont >= res.data.list.length){
				        this.data = this.data.concat(data);
				        var Intervals = setInterval(()=>{
				        		try{
					            if(!this.$refs.Text.BScroll.moved){
					              this.$refs.Text.BScroll.refresh();
					              clearInterval(Intervals);
					              this.$refs.Text.BScroll.finishPullUp();
					            }
				            }catch(err){
					              clearInterval(Intervals);
				            }
				         });
			            clearInterval(Interval);
			          }
			        }
			      },300);
	      	  }
	      })
  	}
  }
}
</script>

<style>
</style>





