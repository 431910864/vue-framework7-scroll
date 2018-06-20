<template>
  <f7-page>
    <div class="h_100s bg_qhui o_h w_100s">
      <ScrollableTabView
      	ref="ScrollableTabView"
        :TabContentStyle="TabContentStyle"
        :padding="{left:'10px',right:'10px'}"
        :tabColor="'#a00016'"
        :tabHeight="'50'"
        :tabType="tabType"
        :lineStyle="lineStyle"
        :tabBar="tabBar"
        :Boptions="options"
        :headerPull="()=>$refs.headerPull"
         @headerPull="pullingDown"
         @watchPage="watchPage" 
         @pullingDown="pullingDown"
         @pullingUp="pullingUp"
      >
        <div slot="header">
        	<!--height: 500px;-->
          <div class="bg_shong pr"  style="height: 230px;">
		  	<Img ref="headerPull" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1376298280,4152470831&fm=27&gp=0.jpg" class="pa" height="100%" width="100%">
	  			<div class="pt_20 pr">
	           	  <div class="pl_10 w_30" @click="$f7router.back()">
	           		<div class="iconBacks pa"></div>
	              </div>
	            </div>
		  	</Img>
   	   	    <div class="pa bt_0 lt_0 bg_t_hei_3 w_100s">
   	   	   	  <div class="p_10 flex flex_10">
	   			  <div class="w_50 h_50 bg_hui br_100 o_h mr_10">
	   			  	<Img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1376298280,4152470831&fm=27&gp=0.jpg"  height="100%" width="100%"/>
	   			  </div>
	   			  <div class="flex flex_10 fd_c">
	   			  	<div class="w_100s h_20 flex jc_sb ai_c">
	   			  		<div class="w_100 h_20 fz_14 flex ai_c c_bai">飞翔的企鹅</div>
	   			  		<div class="w_50 h_20 fz_12 flex ai_c jc_r c_bai">04-20</div>
	   			  	</div>
	   			  	<div class="w_100s h_20 mt_8 fz_12 ai_c flex c_bai">
	   			  		暂无个性签名
	   			  	</div>
	   			  </div>
   			  </div>
   	   	    </div>
          </div>
        </div>
        <div :slot="'view'+key" v-for="(vo,key) in tabBar">
	        <div class="pt_8">
		        	<div class="pl_10 pr_10 mb_8" v-for="(item,index) in tabBar[key].data">
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
        </div>
        <div slot="footer" class="h_45 flex ja_c bt_1">
        		关注
        </div>
      </ScrollableTabView>
    </div>
  </f7-page>
</template>
<script>
    import {mapState, mapGetters, mapActions} from 'vuex'
//	import {isData,getImgSrc,mobil,content,oss} from "src/common/js/utils"
	import {getLyric} from "src/base/Axios"
    import {getRecommend, getDiscList, activitylist} from 'src/base/Axios/recommend'
    import {ERR_OK} from 'src/base/Axios/config'
    export default {
        data() {
            return {
            	  tabType: 'scroll',
              lineStyle: {
                height: '2px',
              },
              TabContentStyle: {
//	              width:'50%',
              },
              headerStyle: {
              	height: '230px',
              },
              tabBar: [{
                  'title':'发布',
                },
                {
                  'title':'个人资料',
                },{
                  'title':'发布',
                },
                {
                  'title':'个人资料',
                },{
                  'title':'发布',
                },
                {
                  'title':'个人资料',
                },{
                  'title':'发布',
                },
                {
                  'title':'个人资料',
                },{
                  'title':'发布',
                },
                {
                  'title':'个人资料',
                }],
              options: {
	            probeType: 3,
	            type: true,
                scrollY: true,
                click: true,
		        pullUpLoad: {
		          threshold: -20
		        },
//		        pullDownRefresh: {
//		        		threshold: 40,
//		        },
              },
              index: 0,
              headerHeight: 0,
            }
        },
        computed: {
            ...mapState({})
        },
        async mounted() {
        	 	this.setlist(0);
			this.scroll({
				y: 0,
			})
//			let list = await getLyric("1479277555");
//			//let list = await activitylist();
//			console.info(list.data.list)
//			getDiscList().then((res) => {
//	      	  if (res.code === ERR_OK) {
//	      	  	console.info(res)
//	      	  	this.discList = res.data.list
//	      	  }
//	      	})
        },
        activated() {
        },
        methods: {
        		scroll(str){
//      			if(!this.headerHeight){
//      				this.headerHeight = 0;
//	        			if(this.headerStyle && this.headerStyle.height){
//	        			 this.headerHeight = this.headerStyle.height.replace('px','');
//	        			}
//      			}
//      			let headerHeight = this.headerHeight;
//      			if(str.y >= 0){
//      				this.headerStyle = {
//      					height: Number(headerHeight) + str.y + 'px',
//      					top: -str.y + 'px'
//      				};
//      			}else{
//      				this.headerStyle = {
//      					height: Number(headerHeight) + 'px',
//      					top: '0px'
//      				};
//      			}
        		},
			getUserInfos(){
				this.ajax({
					url: 'activity/fans/personalInfo',
					data: {
						createByUserID: this.$router.currentRoute.query.id
					},
					success: res=>{
						this.UserInfos = res;
					},
					error: err=>{
						console.info(err)
					}
				})
			},
        		pullingUp(callback){
        			this.setlist(this.index,callback);
        			//callback && callback();
		    },
        		pullingDown(callback){
        			setTimeout(()=>{
        				callback && callback();
        			},1000)
		    },
		    watchPage(index){
	     	  this.index = index;
		      this.setlist(index);
		    },
		    setlist(key,callback){
		      key = key || 0;
		      if(this.tabBar[key].load && !callback) return;
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
				            this.tabBar[key].load = true;
				            clearInterval(Interval);
				          }
				        }
				        if(!callback){
				        		this.tabBar[key].data = data;
				        }else{
				        		this.tabBar[key].data = this.tabBar[key].data.concat(data);
				        }
				        this.$set(this.tabBar, key, this.tabBar[key]);
		        			callback && callback();
				      },300);
		      	  }
		      	return;
		      }
		      getDiscList().then((res) => {
		      	locache.set('DiscList',res);
	      	  	if (res.code === ERR_OK) {
				      var Interval = setInterval(()=>{
				        for(var i = 0;i<10;i++){
				          cont += 1;
				          data.push(res.data.list[cont]);
				          if(cont >= res.data.list.length){
				            this.tabBar[key].load = true;
				            clearInterval(Interval);
				          }
				        }
				        if(!callback){
				        		this.tabBar[key].data = data;
				        }else{
				        		this.tabBar[key].data = this.tabBar[key].data.concat(data);
				        }
				        this.$set(this.tabBar, key, this.tabBar[key]);
		        			callback && callback();
				      },300);
		      	  }
		      	})
		    },
            async init() {
                return new Promise(async (resolve, reject) => {

                });
            },
        },
    }
</script>

<style lang="scss">

.iconBacks{
	background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTA1ODc3MTY3NzUxIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ5NDEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjgiIGhlaWdodD0iMjgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM1Mi43NzQ1NzkgNTMzLjgxODkzNWMtNS42MjcxNjEgMC0xMS4yMjU2NjktMi4xNDE3OC0xNS41MTAyNTItNi40MjYzNjMtOC41NjkxNjYtOC41NjkxNjYtOC41NjkxNjYtMjIuNDUwMzE1IDAtMzEuMDE5NDgxTDY1NS43MTUxNjkgMTc3LjkzNTU1MmM4LjU2OTE2Ni04LjU2OTE2NiAyMi40NTAzMTUtOC41NjkxNjYgMzEuMDE5NDgxIDAgOC41NjkxNjYgOC41NjkxNjYgOC41NjkxNjYgMjIuNDUwMzE1IDAgMzEuMDE5NDgxTDM2OC4yODM4MDggNTI3LjM5MjU3MkMzNjMuOTk5MjI1IDUzMS42NzcxNTUgMzU4LjQwMDcxNiA1MzMuODE4OTM1IDM1Mi43NzQ1NzkgNTMzLjgxODkzNXoiIHAtaWQ9IjQ5NDIiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNNjcwLjA0OTY0MiA4NTEuMDk1MDIyYy01LjYyNzE2MSAwLTExLjIyNTY2OS0yLjE0MTc4LTE1LjUxMDI1Mi02LjQyNjM2M0wzMzcuMjY0MzI3IDUyNy4zOTI1NzJjLTguNTY5MTY2LTguNTY5MTY2LTguNTY5MTY2LTIyLjQ1MDMxNSAwLTMxLjAxOTQ4MXMyMi40NTAzMTUtOC41NjkxNjYgMzEuMDE5NDgxIDBsMzE3LjI3NTA2NCAzMTcuMjc1MDY0YzguNTY5MTY2IDguNTY5MTY2IDguNTY5MTY2IDIyLjQ1MDMxNSAwIDMxLjAxOTQ4MUM2ODEuMjc1MzExIDg0OC45NTIyMTggNjc1LjY3NjgwMyA4NTEuMDk1MDIyIDY3MC4wNDk2NDIgODUxLjA5NTAyMnoiIHAtaWQ9IjQ5NDMiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4=")!important;
	background-size: cover!important;
    height: 30px !important;
    width: 12px !important;
    color: #000!important;
    display: block;
    display: inline-block;
    vertical-align: middle;
    background-position: center!important;
    background-repeat: no-repeat!important;
    font-style: normal;
    position: relative;
}
</style>
