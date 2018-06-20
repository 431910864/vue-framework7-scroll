<template>
  <f7-page>
  	<!--<f7-navbar title="详情" back-link="返回"></f7-navbar>-->
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
         @watchPage="watchPage" 
         @pullingUp="pullingUp"
         @pullingDown="pullingDown"
      >
        <div slot="header">
        	<!-- style="height: 800px;"-->
          <div class="bg_shong">
           <div class="pt_20 pr">
           	<div class="pl_10 w_30" @click="$f7router.back()">
           		<div class="iconBacks pa"></div>
           	</div>
             <div class="bg_hui w_70 h_70 br_100 m_a"></div>
             <div class="c_bai t_c fz_16 pt_10">终极心学</div>
             <div class="c_bai t_c fz_16 pt_15">关注12</div>
             <div class="c_bai t_c fz_12 pt_15 pb_40">终极心学，得道助中国梦</div>
           </div>
          </div>
        </div>
        
        <div slot="view0" class="w_100s">
          <div v-for="i in 10" class="w_100s">
            <div class="pl_10 pr_10 bg_ban mb_8">
              <div class="flex w_100s jc_sb ai_c pt_10 pb_10">
                <div class="flex">
                  <div>
                    <div class="w_45 h_45 bg_hui br_100"></div>
                  </div>
                  <div class="pl_10 flex jc_c fd_c">
                    <div class="flex ai_c h_25">
                      <span class="fz_16 pr_10 flex ja_c h_25 cshei">终极心学</span>
                      <span class="fz_12 c_shong flex ja_c pt_1 pl_3 pr_3 pb_1 b_shong_1 br_3 mb_3">帖子</span>
                    </div>
                    <div class="fz_12 c_hui">2018-04-09 09:27:32</div>
                  </div>
                </div>
                <div>
                  <div class="pl_15 pr_15 flex fz_14 ai_c pt_2 pb_2 br_50 b_hui_1">
                    <span class="w_12 h_12 bg_hui flex"></span>
                    <span class="pl_2 flex ai_c">收藏</span>
                  </div>
                </div>
              </div>
              <div class="w_100s pb_8">
                <div class="fz_16 fw_b">
                  中国文化真玄妙 大学三岗传真到
                </div>
                <div class="fz_14 w_100s text_2 pt_5">
                  塞哦大家说的吉萨大叫i 萨大叫死啊吉萨大吉萨大吉萨大叫阿斯顿撒旦撒旦塞哦大家说的吉萨大叫i 萨大叫死啊吉萨大吉萨大吉萨大叫阿斯顿撒旦撒旦
                </div>
              </div>
              <div class="pb_10">
                <div class="h_200 bg_hui w_100s">
					<Img :src="'123'" :height="'100%'"></Img>
                </div>
              </div>
              <div class="flex jc_sb ai_c fz_12">
              	<div class="flex ai_c pb_10">
              		<span class="mr_5 w_10 h_10 bg_hui flex"></span>
              		484
              	</div>
              	<div class="flex ai_c pb_10">
              		<div class="flex ai_c pb_10 pr_15">
              			<span class="mr_5 w_10 h_10 bg_hui flex"></span>
              			9
              		</div>
              		<div class="flex ai_c pb_10">
              			<span class="mr_5 w_10 h_10 bg_hui flex"></span>
              			0
              		</div>
              	</div>
              </div>
            </div>
          </div>
        </div>
        <div slot="view1">
          <div class="bg_ban pl_8 pr_8">
          	<div class="flex jc_sb pt_13 pb_13 bb_1">
          		<div class="fz_14 cshei">昵称</div>
          		<div class="fz_14 ">终极心学</div>
          	</div>
          	<div class="flex jc_sb pt_13 pb_13 bb_1">
          		<div class="fz_14 cshei">昵称</div>
          		<div class="fz_14 ">终极心学</div>
          	</div>
          	<div class="flex jc_sb pt_13 pb_13 bb_1">
          		<div class="fz_14 cshei">昵称</div>
          		<div class="fz_14 ">终极心学</div>
          	</div>
          	<div class="flex jc_sb pt_13 pb_13 bb_1">
          		<div class="fz_14 cshei">昵称</div>
          		<div class="fz_14 ">终极心学</div>
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
            	  tabType: '',
              lineStyle: {height: '2px'},
              TabContentStyle: {width:'50%'},
              tabBar: [{'title':'发布'},{'title':'个人资料'}],
              options: {
	            probeType: 3,
	            type: true,
                scrollY: true,
                click: true,
		        pullUpLoad: {
		          threshold: -20
		        },
		        pullDownRefresh: {
		        		threshold: 40,
		        },
              },
              index: 0,
            }
        },
        computed: {
            ...mapState({})
        },
        async mounted() {
        		
        },
        activated() {

        },
        methods: {
        		pullingUp(callback){
      			callback && callback();
		    },
        		pullingDown(callback){
        			setTimeout(()=>{
        				callback && callback();
        			},1000)
		    },
		    watchPage(index){
	     	  this.index = index;
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
