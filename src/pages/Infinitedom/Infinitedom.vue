<template>
  <div class="flex">
    <InfiniteScroll class="flex_10 bg_hui" @pullingUp="pullingUp" :list="cells" :scrollViewHeight="winHeights">
      <div class="pl_10 pr_10 pb_8"
           slot="cell"
           slot-scope="props">
        <div class="flex bg_ban bt_1 bb_1 br_7 o_h br_1 bl_1" v-if="props.cell">
          <div class="pr ">
            <div class="flex ai_c ja_c w_90 h_90 pr bg_ban">
              <img :src="props.cell.imgurl || ''" height="80px" width="80px" class="v_b" v-if="props.cell.imgurl"/>
              <label class="pa bt_0 rt_0 c_bai bg_t_hei_3 fz_11 pl_8 pr_8 pb_2 pt_2 mb_5 mr_5">{{props.cell.listennum}}</label>
            </div>
          </div>
          <div class="pt_5 pb_5 w_100s o_h">
            <div class="w_100s">
              <p class="text-ell h_20">{{props.cell.dissname}}</p>
              <!--<p class="h_20 flex ai_l text-ell w_100s">{{item.dissname}}</p>-->
              <p class="h_30 flex ai_c fz_12">{{props.cell.createtime}}</p>
              <div class="h_30 flex ai_r flex_10 fz_12">
                <p class="">听众 {{props.cell.listennum}}</p>
                <p class="pl_10">关注 {{props.cell.version}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </InfiniteScroll>
    <div @click="refing = !refing" class="pf bt_0 lt_0 bg_lan c_bai pl_10 pr_10 mb_5 ml_5 pt_3 pb_3 br_3 bxs">{{ !refing ? '停止刷新' : '开启刷新'}} </div>
  </div>
</template>

<script>
  const DiscList = locache.get('DiscList');
  export default {
    name: 'Scroll',
    data(){
      return {
        winHeights: window.innerHeight,
        refing: false,
      }
    },
    components: {

    },
    computed: {
      cells () {
        try{
          return DiscList.data.list.map((item, index) => {
            return {
              ...item
            }
          })
        }catch (e) {
          return {}
        }
      }
    },
    mounted () {
      setTimeout(()=>{
        console.info(this.props)
      },500)
    },
    methods: {
      pullingUp(_this){
        // return;
        if(this.refing) return
        this.refing = true
        var { cells } = this
        DiscList.data.list.map((item, index) => {
          cells.push({
            ...item
          })
        })
        setTimeout(()=>{
          this.refing = false
        },20)
        // console.info(1)
      }
    }
  }
</script>
