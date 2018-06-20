<template>
  <div
       v-BScroll="options"
       class="t-scroll"
       ref="$scroll"
       :style="{ height: this.scrollViewHeight + 'px' }"

       >
    <!---->
    <!--v-BScroll="options"-->
    <!--@scroll.passive="onScroll"-->
    <div ref="$scrolls">
      <div class="t-scroll-padding-top" :style="{height: scrollData.paddingTop + 'px'}"></div>

      <div ref="$cell" v-for="item in scrollData.displayCells">
        <slot name="cell" :cell="item"></slot>
      </div>

<!--      <div class="t-scroll-padding-bottom" :style="{height: scrollData.paddingBottom + 'px'}"></div>-->
    </div>
  </div>
</template>

<script>
  import ScrollManager from './ScrollManager'

  let manager
  let lastScrollTop = 0
  let heightFixed = true

  export default {
    name: 'InfiniteScroll',
    props: {
      scrollViewHeight: {
        type: Number,
        required: true
      },

      list: {
        type: Array,
        required: true
      },
      // cell缓存数量 即不在可视区域内的预加载数量
      cellCacheNumber: {
        type: Number,
        default: 3
      },
      // cell高度值 如果为0或不传则为动态高度 不为0则为固定高度
      cellHeight: {
        type: Number,
        default: 0
      },

    },
    data () {
      return {
        scrollData: {
          scrollHeight: 0,
          paddingTop: 0,
          paddingBottom: 0,

          displayCells: []
        },
        options: {
          scrollY: true,
          click: true,
          pullUpLoad: {
            threshold: -20
          },
          // pullDownRefresh: {
          //   threshold: 40,
          // },
          // pullingUp: function (e) {
          //   console.info(e)
          // },
          // pullingDown: function (e) {
          //   console.info(e)
          // },
        }
      }
    },

    methods: {
      initScrollManager () {
        manager = new ScrollManager({
          list: this.list,
          scrollViewHeight: this.scrollViewHeight,
          cellHeight: this.cellHeight,
          cellCacheNumber: this.cellCacheNumber,
          firstRenderNumber: 10
        })
      },
      infiniteScroll( scroll, _this ) {
        if(!this.scrollerHeight) this.scrollerHeight = _this.scrollerHeight;
        if(!this.maxScrollY) this.maxScrollY = _this.maxScrollY;
        _this.scrollerHeight = this.scrollerHeight - scroll.y;
        //_this.maxScrollY = this.maxScrollY + scroll.y;
        if(-(this.maxScrollY + scroll.y)  > manager.scrollHeight - manager.scrollViewHeight){
          _this.maxScrollY = - (manager.scrollHeight - manager.scrollViewHeight)
        }else{
          _this.maxScrollY = this.maxScrollY + scroll.y;
        }
      },
      updateScrollRender ( scroll, _this ) {
        this.scrollData = manager.getRenderInfo()
        this.$forceUpdate()
        // if(this.$refs.$scroll.BScroll){
        //   if(!this.scrollerHeight) this.scrollerHeight = _this.scrollerHeight;
        //   if(!this.maxScrollY) this.maxScrollY = _this.maxScrollY;
        //   _this.scrollerHeight = this.scrollerHeight - scroll.y;
        // }
        //this.$refs.$scroll.BScroll && this.$refs.$scroll.BScroll.finishPullUp()
        // 更新完成后矫正滚动条位置
        this.$nextTick(() => {
          if (!heightFixed) manager.updateCellHeight(
            this.$refs.$cell.map(item => item.getBoundingClientRect().height)
          )
          var { scrollHeight, paddingTop,paddingBottom } = this.scrollData,
              { scrollViewHeight } = this;

          if(scrollHeight > scrollViewHeight && lastScrollTop+scrollViewHeight > scrollHeight){
            this.$emit('pullingUp',this)
            var { scrollerHeight,maxScrollY } = this.$refs.$scroll.BScroll
            // console.info(scrollerHeight,maxScrollY)
          }
        })
      },


      onScroll (scroll, bscroll) {
        lastScrollTop = this.$refs.$scroll.scrollTop
        scroll && scroll.y &&  (lastScrollTop = -scroll.y)
        // console.info(bscroll)
        manager.updateScroll(lastScrollTop)
        this.updateScrollRender(scroll, bscroll)
      }


    },
    watch: {
      list () {
        manager.updateList(this.list)
      }
    },
    mounted () {
      var _this = this
      if (!this.cellHeight) heightFixed = false
      this.initScrollManager()
      this.updateScrollRender()
      setTimeout(()=>{
        var BScroll = this.$refs.$scroll.BScroll
        if(BScroll){
          BScroll.refresh()
          BScroll.finishPullUp()
          BScroll.on('scroll', function(scroll)  {
            _this.onScroll(scroll, this)
          })
          BScroll.infiniteScroll = _this.infiniteScroll;
        }

      },20)
    }
  }
</script>

<style scoped>
  .t-scroll  {
    position: relative;
    overflow: scroll;
  }
</style>
