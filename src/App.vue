<template>
  <div id="app" class="flex pr" :style="{height:winHeight+'px'}">
    <f7-statusbar></f7-statusbar>
    <div class="AppMain w_380 flex_10" v-if="theme == 'pc'">
      <div class="iframeMain">
      	<div class="pa tp_0 lt_0 w_100s zi_4 iframeHeader">
	      	<div class="iframeTitle pr">
	      		<span class="iframeTitleBack flex ai_c pl_8 c_p" @click="$f7.router.back()">
	      			<label class="BackIconHei w_15 h_25 c_p pr tp_1s"></label>
	      			<label class="flex ai_c fz_16 h_100s pl_2 c_p">返回</label>
	      		</span>
	      		<span class="iframeTitleSpan">标题</span>
	      		<span class="iframeTitleShare"></span>
	      	</div>
      	</div>
      	<div class="zi_1 pr iframeContent bl_1 br_1 bt_1">
    			<f7-view id="main-view" url="/" main></f7-view>
      	</div>
      </div>
      <div class="cover1"></div>
    </div>
    <div class="viewer w_100s" v-else>
    		<f7-view id="main-view" url="/" main></f7-view>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { isType } from 'src/common/js/utils';
export default {
	data () {
	  var _this2 = this;
      return {
        url: null,
        addEvents: ['dragstart','keydown','contextmenu','selectstart','mousedown','mouseup','cut','copy'],
        Interval: null,
        winWidth: _this2.winWidth,
        winHeight: _this2.winHeight,
      }
    },
	components:{
		
	},
    created(){
    		var _this2 = this;
		window.refreshSize = function(){
			let winHeights = window.innerHeight;
			let winWidths = window.innerWidth;
			_this2.winWidth = winWidths;
			if(winWidths === 375 && winHeights === 724 && window.devicePixelRatio === 3){
				_this2.winHeight = winHeights - 34;
				try{
					if(getJsBridge()){
						document.getElementsByTagName('html')[0].className = 'has-topbar has-bottombar';
					}
				}catch(err){
					
				}
			}else{
				_this2.winHeight = winHeights;
			}
		}
    		window.popstate = ()=>{
    			if(window.routerHistory.length <= 1){
    				window.opener = null;
				window.close();
				try{
					WeixinJSBridge.call('closeWindow');
				}catch(e){
					
				}
    			}else{
    				this.$f7.router.back();
    			}
    		}
    		locache.set('DiscList',{"code":0,"subcode":0,"message":"","default":0,"data":{"uin":0,"categoryId":10000000,"sortId":5,"sum":6160,"sin":0,"ein":29,"list":[{"dissid":"3664579116","createtime":"2018-01-18","commit_time":"2018-01-18","dissname":"拯救低头族！跟着节奏甩头活动颈椎","imgurl":"http://p.qpic.cn/music_cover/0GgOOrIBQ14wNzmVraZQ5VvoKI1EH6HtnlJhu3IDmMQ6neJ54IQrOw/600?n=1","introduction":"","listennum":195570,"score":0,"version":0,"creator":{"type":0,"qq":1209430845,"encrypt_uin":"oK-zNKvioecP7v**","name":"DesTiny","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3845151813","createtime":"2018-04-23","commit_time":"2018-04-23","dissname":"十字军之王合集丨绿帽之王II","imgurl":"http://p.qpic.cn/music_cover/QlZibnBVmII60BjTttickJO4CNjYBQqfsBjUSAwsE62fNPzAJ6zXTic2g/600?n=1","introduction":"","listennum":15140,"score":0,"version":0,"creator":{"type":2,"qq":1171516704,"encrypt_uin":"oK6loK457wSz7n**","name":"D.Va","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"3808683179","createtime":"2018-04-02","commit_time":"2018-04-02","dissname":"欧洲胶片电影原声 | 光影留声机 ","imgurl":"http://p.qpic.cn/music_cover/OxYJ3e12Q1MiaibkTa8iaSjoIdgUDKfsx30x3l9hlB7xAocmX4xibyibFdg/600?n=1","introduction":"","listennum":25812,"score":0,"version":0,"creator":{"type":0,"qq":3538848850,"encrypt_uin":"oi4iNecPNeckon**","name":"趵突泉边上的小屁孩","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3827851479","createtime":"2018-04-13","commit_time":"2018-04-13","dissname":"作曲家笔下关于大海的故事","imgurl":"http://p.qpic.cn/music_cover/oTVicCll2ic4QLktJAkDJRJfOGW8DvS3AhKTwmr78F1UeR9U4ObAznfw/600?n=1","introduction":"","listennum":12971,"score":0,"version":0,"creator":{"type":0,"qq":2741225920,"encrypt_uin":"owSPoK-A7KEAon**","name":"静静的顿河","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3809028774","createtime":"2018-04-19","commit_time":"2018-04-19","dissname":"4月民谣新歌推荐","imgurl":"http://p.qpic.cn/music_cover/T0qpeJj1MpLkoxkZMuVVxic7MH8T5D7MgRh2NTjc0DkQWuy6MHefynQ/600?n=1","introduction":"","listennum":57240,"score":0,"version":0,"creator":{"type":2,"qq":810360741,"encrypt_uin":"Ne6zoiCz7iv5","name":"被嫌弃的唐唐的一生","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"3835023326","createtime":"2018-04-17","commit_time":"2018-04-17","dissname":"撩人声线：日系女声City Pop精选","imgurl":"http://p.qpic.cn/music_cover/xJLWlNicFPzWw3p1m4U86ncfFpu811aOnDSN9iasXyfZ3DIlgicb0U3bQ/600?n=1","introduction":"","listennum":29634,"score":0,"version":0,"creator":{"type":0,"qq":2817694990,"encrypt_uin":"owc57iCq7eEqon**","name":"Jane&Danny","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3845423350","createtime":"2018-04-24","commit_time":"2018-04-24","dissname":"明天还要收拾房间 ","imgurl":"http://p.qpic.cn/music_cover/bXpRzyzUiaqz3ARviaOawe6Niab7GuGfNJ8whfTbiaQibXMtVzOXw3fphCg/600?n=1","introduction":"","listennum":1542,"score":0,"version":0,"creator":{"type":0,"qq":1355416359,"encrypt_uin":"oKok7Kv57wokNv**","name":"大卫-懒鬼","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3836691141","createtime":"2018-04-18","commit_time":"2018-04-18","dissname":"Jessica和Krystal竟然是亲姐妹？","imgurl":"http://p.qpic.cn/music_cover/J64RvyhQtdjd9bWzGSbsoJgFaib9AGRGAoncWYjIaZ4lovuPmfRxmUA/600?n=1","introduction":"","listennum":23034,"score":0,"version":0,"creator":{"type":2,"qq":2123143040,"encrypt_uin":"ow6Aoi6PoinPon**","name":"一阵春风","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"3827865584","createtime":"2018-04-13","commit_time":"2018-04-13","dissname":"独立爵士厂牌 Casa del Jazz","imgurl":"http://p.qpic.cn/music_cover/xJLWlNicFPzWw3p1m4U86nRH7VG5jeT2bk3Mc9upxEH24Gq8qnrlPwA/600?n=1","introduction":"","listennum":14887,"score":0,"version":0,"creator":{"type":0,"qq":2817694990,"encrypt_uin":"owc57iCq7eEqon**","name":"Jane&Danny","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3656657990","createtime":"2018-04-18","commit_time":"2018-04-18","dissname":"『古风戏腔』惊鸿一瞥 落笺千叹","imgurl":"http://p.qpic.cn/music_cover/UCJDptU3vGgQt6PS5Hn6Cib3ZmXdq8VJqozib5kO7dt96ibd1DZv9CWeQ/600?n=1","introduction":"","listennum":58780,"score":0,"version":0,"creator":{"type":2,"qq":188651765,"encrypt_uin":"oKcF7w457iCk","name":"生如夏花","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"3712595171","createtime":"2018-03-02","commit_time":"2018-03-02","dissname":"静谧空间 | 远离浮华的欧美民谣","imgurl":"http://p.qpic.cn/music_cover/llTQ9l2AeicK2OLIORnsUdpyuMfy3yNouuHiaOlBo84Evf3cx94XQPzw/600?n=1","introduction":"","listennum":578440,"score":0,"version":0,"creator":{"type":2,"qq":348361207,"encrypt_uin":"oivFoiC5ownl","name":"风少","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"3825611853","createtime":"2018-04-18","commit_time":"2018-04-18","dissname":"独享悠闲时光：日系爵士纯音乐","imgurl":"http://p.qpic.cn/music_cover/zWAjtOcnpLTJ07iacJUgayyibleUpyKYRkV6WOBLJYicc4uibfWK4kfzuA/600?n=1","introduction":"","listennum":117019,"score":0,"version":0,"creator":{"type":2,"qq":1250888122,"encrypt_uin":"oK-koecFNe6Aoc**","name":"Awakening","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"3824574448","createtime":"2018-04-11","commit_time":"2018-04-11","dissname":"独而不孤 凭海听涛 | 亮调后摇","imgurl":"http://p.qpic.cn/music_cover/OxYJ3e12Q1MiaibkTa8iaSjoBoTBbtsoGBynU2ejH1KN272StiaylviatUA/600?n=1","introduction":"","listennum":128668,"score":0,"version":0,"creator":{"type":0,"qq":3538848850,"encrypt_uin":"oi4iNecPNeckon**","name":"趵突泉边上的小屁孩","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3821134102","createtime":"2018-04-08","commit_time":"2018-04-08","dissname":"韩式独特的Progressive House","imgurl":"http://p.qpic.cn/music_cover/Rr0IZmbreXIMFy0ZRd8cGEeFjRoWCNxuGgOI82QQicyZLtNqFZnTfWQ/600?n=1","introduction":"","listennum":121288,"score":0,"version":0,"creator":{"type":0,"qq":1730342560,"encrypt_uin":"oKSioeoPow4son**","name":"Coco_雪梨冰糖","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3821016940","createtime":"2018-04-08","commit_time":"2018-04-08","dissname":"冷门精品 | 中提琴协奏曲作品","imgurl":"http://p.qpic.cn/music_cover/oTVicCll2ic4QLktJAkDJRJYBiauUbdyibpQTcib5dghghQWicOko9tKRH0A/600?n=1","introduction":"","listennum":54473,"score":0,"version":0,"creator":{"type":0,"qq":2741225920,"encrypt_uin":"owSPoK-A7KEAon**","name":"静静的顿河","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3845086366","createtime":"2018-04-23","commit_time":"2018-04-23","dissname":"《西部世界》系列原声集","imgurl":"http://p.qpic.cn/music_cover/CXricxSibts8cC0Pl3TdOV0NZar9WUOppcR4YeYSztsKhw3vyc41bzMQ/600?n=1","introduction":"","listennum":32635,"score":0,"version":0,"creator":{"type":0,"qq":3378926890,"encrypt_uin":"oiolNeEA7wcqon**","name":"Emilie Austen","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3791579509","createtime":"2018-04-08","commit_time":"2018-04-08","dissname":"低吟浅唱兮 | 古风诗词另类背诵法","imgurl":"http://p.qpic.cn/music_cover/UCJDptU3vGgQt6PS5Hn6CwOCwXOGKGyUYql7nHIjBWL1YOeficH8AUA/600?n=1","introduction":"","listennum":1583698,"score":0,"version":0,"creator":{"type":2,"qq":188651765,"encrypt_uin":"oKcF7w457iCk","name":"生如夏花","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"3826539519","createtime":"2018-04-12","commit_time":"2018-04-12","dissname":"法式浪漫主义歌剧的优雅绚丽","imgurl":"http://p.qpic.cn/music_cover/4y7iatwYqHbpo2iaJPyJiaantbPeaAegMAj48Vz6KHn3XPacLoumKicsjw/600?n=1","introduction":"","listennum":106050,"score":0,"version":0,"creator":{"type":0,"qq":485293608,"encrypt_uin":"7eckowEi7wnF","name":"古典指弹大湿","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3823672157","createtime":"2018-04-10","commit_time":"2018-04-10","dissname":"撩姐小奶狗！韩剧姐弟恋盘点","imgurl":"http://p.qpic.cn/music_cover/4fNUrZe1KnJJVic1Aq97mkt0bW1rhfibZo7jhq0D5kic1Wxibpc0GiaSiaBw/600?n=1","introduction":"","listennum":1143257,"score":0,"version":0,"creator":{"type":2,"qq":747867769,"encrypt_uin":"7ivlNeCl7iCq","name":"JTY起风了","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"3794481986","createtime":"2018-04-13","commit_time":"2018-04-13","dissname":"ACG催泪向女声：此时无言更有泪","imgurl":"http://p.qpic.cn/music_cover/zWAjtOcnpLTJ07iacJUgayibMf7wfmqlmgbx3PFte7ZvVevQibuQ0Badw/600?n=1","introduction":"","listennum":240143,"score":0,"version":0,"creator":{"type":2,"qq":1250888122,"encrypt_uin":"oK-koecFNe6Aoc**","name":"Awakening","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"3805537149","createtime":"2018-04-17","commit_time":"2018-04-17","dissname":"另类电子：映入脑海里的奇特幻象","imgurl":"http://p.qpic.cn/music_cover/aaxX4Babic4VicBPicJOwr5xia9JlSv0tkIMHG4ib4XTPWA6VxsqNgP0ibPg/600?n=1","introduction":"","listennum":240129,"score":0,"version":0,"creator":{"type":2,"qq":1600189472,"encrypt_uin":"oKCzoe6FNKvloc**","name":"默笙","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"3824574438","createtime":"2018-04-11","commit_time":"2018-04-11","dissname":"孤独者的落寞寻欢 | 鼓点后摇","imgurl":"http://p.qpic.cn/music_cover/OxYJ3e12Q1MiaibkTa8iaSjoKTaj1NtVA1R6zO44ibXeibNYJ1BCNOPNwvg/600?n=1","introduction":"","listennum":144597,"score":0,"version":0,"creator":{"type":0,"qq":3538848850,"encrypt_uin":"oi4iNecPNeckon**","name":"趵突泉边上的小屁孩","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3835109514","createtime":"2018-04-17","commit_time":"2018-04-17","dissname":"腾讯音乐人丨100位男歌手原创作品集","imgurl":"http://p.qpic.cn/music_cover/ibJJngZRP5m8ksRvDkGZxdTxNKQibxRRibZibNdGKT55FSaqzhPJicTRiaNg/600?n=1","introduction":"","listennum":729165,"score":0,"version":0,"creator":{"type":2,"qq":793407810,"encrypt_uin":"7iEi7enlNe6z","name":"谈谈心恋恋爱 *","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"3757338409","createtime":"2018-03-27","commit_time":"2018-03-27","dissname":"「鬼畜神曲集」100％高能洗脑系列 ","imgurl":"http://p.qpic.cn/music_cover/yaia4XHb3AGPLHhav50fjlqXPbkno6Y9v4TCkiaZes6FR8IbZd6ZWhNQ/600?n=1","introduction":"","listennum":559016,"score":0,"version":0,"creator":{"type":0,"qq":3272692537,"encrypt_uin":"oi-lowCqow4i7z**","name":"Ḳiller Yao","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3765659270","createtime":"2018-03-09","commit_time":"2018-03-09","dissname":"日系电音 | 元气满满的插电小甜嗓","imgurl":"http://p.qpic.cn/music_cover/ibNMbicCEicLRhTg32suCmEQdvSQkooKvwRUwvEnoPbBNdE9hkmxse7tA/600?n=1","introduction":"","listennum":259011,"score":0,"version":0,"creator":{"type":2,"qq":2490563258,"encrypt_uin":"owvqoe4soi-kNn**","name":"鹿角大王。","isVip":2,"avatarUrl":"","followflag":0}},{"dissid":"2690617595","createtime":"2017-11-28","commit_time":"2017-11-28","dissname":"云雾中的古老传说：传统彝族民谣","imgurl":"http://p.qpic.cn/music_cover/ULH0NLW4u55E7T2PEnniavRBkibwPr5gdlCAH15lPXCECTHc1aJONyqw/600?n=1","introduction":"","listennum":86655,"score":0,"version":0,"creator":{"type":0,"qq":3052336326,"encrypt_uin":"oinkowoi7woA7c**","name":"你的耳机是我的","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"2691705909","createtime":"2018-03-01","commit_time":"2018-03-01","dissname":"搞笑 · 翻唱丨从未听过的船薪坂夯","imgurl":"http://p.qpic.cn/music_cover/20Dr6sBicc57lmu46SAQthngYK9GDlyxSiax554WtQZ2jDWbDjrJen6w/600?n=1","introduction":"","listennum":141495,"score":0,"version":0,"creator":{"type":0,"qq":819975016,"encrypt_uin":"Ne6qNKSkoe6s","name":"我是爱音乐的Dawn.","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3790412494","createtime":"2018-03-30","commit_time":"2018-03-30","dissname":"「治愈系」别致的轻柔电子乐","imgurl":"http://p.qpic.cn/music_cover/VQ8yMSml5z5dGccvtM2j53UPiaVt3zd8DkfpQUMLaeI7efoAFAohHAg/600?n=1","introduction":"","listennum":512258,"score":0,"version":0,"creator":{"type":0,"qq":168180239,"encrypt_uin":"oKCFoKczowoq","name":"Evephy-Z","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3821237029","createtime":"2018-04-08","commit_time":"2018-04-08","dissname":"30~40年代爵士蓝调女歌手代表作","imgurl":"http://p.qpic.cn/music_cover/Vtuicy0GCNEGeuTPTK8G2iagCGq3A2lh4eJ9dM8A3o0h9RS8H9baK6iaQ/600?n=1","introduction":"","listennum":28850,"score":0,"version":0,"creator":{"type":0,"qq":2514853234,"encrypt_uin":"ow457eckoi-i7n**","name":"达令","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3810346406","createtime":"2018-04-03","commit_time":"2018-04-03","dissname":"30首清新韩语Tropical House","imgurl":"http://p.qpic.cn/music_cover/Rr0IZmbreXIMFy0ZRd8cGEeFjRoWCNxuuibbX1eSuGL9vPxIsGUnYhg/600?n=1","introduction":"","listennum":172234,"score":0,"version":0,"creator":{"type":0,"qq":1730342560,"encrypt_uin":"oKSioeoPow4son**","name":"Coco_雪梨冰糖","isVip":0,"avatarUrl":"","followflag":0}}]}})
		if(window.location.pathname.indexOf('.') <= -1){
			this.url = window.location.pathname;
		}else if(window.location.pathname){
			
		}
		this.init();
		if(this.url){
			clearInterval(this.Interval);
			this.Interval = null;
			this.Interval = setInterval(()=>{
				if(this.$f7){
					this.$f7.router.navigate(this.url,{
						reloadAll: true
					});
					clearInterval(this.Interval);
				}
			})
		}
    },
	mounted(){
	    this.phone();
	},
	methods: {
	  init(){
	  	var theRequest = this.getSrc();
		if(theRequest.src){
			var src =  theRequest.src;
			if(src.indexOf('url=') > -1){
				var http = '?' + src.split('?')[1];
				var str = this.getSrc(http);
				var urls =  str.url;
				var strs = "?";
				for(var i in theRequest){
					if(i != 'url' && i != 'src'){
						strs += i + '=' + theRequest[i] + '&'
					}
				}
				this.url = urls+strs;
			}else{
				var http = '?' + (src.split('?')[1] || '') + '&';
				for(var i in theRequest){
					if(i != 'url' && i != 'src'){
						http += i + '=' + theRequest[i] + '&'
					}
				}
				this.url = src.split('?')[0] + http;
			}
		}
	  },
	  getSrc(src){
		   var url = src || location.search; //获取url中"?"符后的字串
		   var theRequest = new Object();
		   if (url.indexOf("?") != -1) {
		      var str = url.substr(1);
		      var strs = str.split("&");
		      for(var i = 0; i < strs.length; i ++) {
		      	if(strs[i].split("=").length > 1){
		      		theRequest[strs[i].split("=")[0]] = strs[i].replace((strs[i].split("=")[0] + '='),'')
		      	}else{
		        		theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
		      	}
		      }
		   }
		   return theRequest;
	  },
      phone(){
        document.body.addEventListener('touchmove',function(e){if (event.cancelable && !event.defaultPrevented) {event.preventDefault();}},{ passive: false });
        var addEvents = this.addEvents;
        for(var i = 0;i<addEvents.length;i++){
          document.addEventListener(addEvents[i],this,false);
        }
      },
      handleEvent(e){
        let type = ["input","textarea","seach"];if(e.target && type.indexOf(e.target.localName) > -1){if(e.target.type && e.target.type != "text"){return false;}}else{return false;}
      },
    }
}
</script>
<style lang="scss" rel="stylesheet/scss">
@import "~@/common/scss/base.scss";
body,html,#app{
	font-family: arial,sans-serif!important;
	// touch-action: none!important;
}
.AppMain {
  height: 840px;
  position: relative;
  overflow: hidden;
  /*zoom: 0.86;*/
}
.BackIconBai{
	background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTA1ODc3MTY3NzUxIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ5NDEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjgiIGhlaWdodD0iMjgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM1Mi43NzQ1NzkgNTMzLjgxODkzNWMtNS42MjcxNjEgMC0xMS4yMjU2NjktMi4xNDE3OC0xNS41MTAyNTItNi40MjYzNjMtOC41NjkxNjYtOC41NjkxNjYtOC41NjkxNjYtMjIuNDUwMzE1IDAtMzEuMDE5NDgxTDY1NS43MTUxNjkgMTc3LjkzNTU1MmM4LjU2OTE2Ni04LjU2OTE2NiAyMi40NTAzMTUtOC41NjkxNjYgMzEuMDE5NDgxIDAgOC41NjkxNjYgOC41NjkxNjYgOC41NjkxNjYgMjIuNDUwMzE1IDAgMzEuMDE5NDgxTDM2OC4yODM4MDggNTI3LjM5MjU3MkMzNjMuOTk5MjI1IDUzMS42NzcxNTUgMzU4LjQwMDcxNiA1MzMuODE4OTM1IDM1Mi43NzQ1NzkgNTMzLjgxODkzNXoiIHAtaWQ9IjQ5NDIiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNNjcwLjA0OTY0MiA4NTEuMDk1MDIyYy01LjYyNzE2MSAwLTExLjIyNTY2OS0yLjE0MTc4LTE1LjUxMDI1Mi02LjQyNjM2M0wzMzcuMjY0MzI3IDUyNy4zOTI1NzJjLTguNTY5MTY2LTguNTY5MTY2LTguNTY5MTY2LTIyLjQ1MDMxNSAwLTMxLjAxOTQ4MXMyMi40NTAzMTUtOC41NjkxNjYgMzEuMDE5NDgxIDBsMzE3LjI3NTA2NCAzMTcuMjc1MDY0YzguNTY5MTY2IDguNTY5MTY2IDguNTY5MTY2IDIyLjQ1MDMxNSAwIDMxLjAxOTQ4MUM2ODEuMjc1MzExIDg0OC45NTIyMTggNjc1LjY3NjgwMyA4NTEuMDk1MDIyIDY3MC4wNDk2NDIgODUxLjA5NTAyMnoiIHAtaWQ9IjQ5NDMiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4=");
}
.BackIconHei{
	background: url("~src/assets/images/back.png");	
}
.BackIconBai,.BackIconHei{
	background-size: cover;
	display: block;
    display: inline-block;
    vertical-align: middle;
    background-position: center;
    background-repeat: no-repeat;
    font-style: normal;
    position: relative;
}
.cover1{
  height: 640px;
  width: 340px;
  border: 1px solid #E8E8E8;
  border-radius: 30px;
  position: absolute;
  top: 0;
  left: 0;
  background-size: 100% 100%;
  z-index: 1111;
}
.iframeMain {
  position: relative;
  width: 320px; 
  height: 520px;
  overflow: hidden;
  margin-top: 30px;
  margin-left: 10px;
  padding-top: 59px;
  border-bottom: 1px solid #E8E8E8;
  z-index: 111111;
}
.iframeContent{
   width: 318px; 
   height: 520px;
   position: relative;
   z-index: 9999;
   overflow: hidden;
}
.pt_80{
	padding-top: 80px;
}
.h_34{
	height: 34px;
}
.iframeHeaderDg{
	border-radius: 50px 50px 0 0;
	background-color: #FFFFFF;
	width: 100%;
	top: 0;
}
.iframeHeader{
	position: absolute;
	z-index: 9999;
	overflow: hidden;
	border-top: 1px solid #E8E8E8;
	overflow: hidden;
	border-left: 1px solid #E8E8E8;
	border-right: 1px solid #E8E8E8;
	left: 0;
	width: 318px; 
	.iframeTitle:after{
		content: "";
		background: url('http://zhuihuituiguang-card.oss-cn-shenzhen.aliyuncs.com/wxcard/admin_black.png') no-repeat center;
		background-size: 100% auto;
		height: 20px;
		position: absolute;
		top: 0;
		width: 100%;
		left: 0;
	}
	.iframeTitle:before{
		content: "";
		background: url('http://zhuihuituiguang-card.oss-cn-shenzhen.aliyuncs.com/wxcard/admin_right.png') no-repeat center;
		background-size: 100% auto;
		height: 20px;
		width: 60px;
		position: absolute;
		right: 8px;
		bottom: 10px;
	}
	
	.iframeTitle{
		background-size: 100% auto;
		height: 60px;
		color: #222a2c;
		width: 100%;
		display: flex;
		display: -webkit-flex;
		align-items: center;
		justify-content: center;
		position: relative;
		z-index: 9999;
		.iframeTitleBack{
			position: absolute;
			width: 100px;
			left: 0;
			height: 40px;
			bottom: 0;
			cursor: pointer;
		}
		.iframeTitleSpan{
			padding-top: 18px;
			font-size: 16px;
		}
		.iframeTitleShare{
			position: absolute;
			display: inline-block;
			width: 100px;
			right: 0;
			height: 40px;
			bottom: 0;
			cursor: pointer;
		}
	}
}


.form-radio input[type="radio"]:checked ~ i,
label.label-radio input[type="checkbox"]:checked ~ .item-inner,
label.label-radio input[type="radio"]:checked ~ .item-inner {
    background: no-repeat center;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2013%2010'%3E%3Cpolygon%20fill%3D'%23007aff'%20points%3D'11.6%2C0%204.4%2C7.2%201.4%2C4.2%200%2C5.6%204.4%2C10%204.4%2C10%204.4%2C10%2013%2C1.4%20'%2F%3E%3C%2Fsvg%3E");
    -webkit-background-size: 13px 10px;
    background-size: 13px 10px;
    padding-right: 35px;
    background-position: 90% center;
    background-position: -webkit-calc(100% - 15px) center;
    background-position: calc(100% - 15px) center;
}

.theme-black .back span{
	font-weight: 400!important;
}
.list-block{
	margin: 0!important;
}
.index_loading {width: .4rem;height: .4rem;display: inline-block;vertical-align: middle;-webkit-animation: weuiLoading 1s steps(12, end) infinite;animation: weuiLoading 1s steps(12, end) infinite;background: transparent url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=") no-repeat;background-size: 100%;}
@-webkit-keyframes weuiLoading {0% {transform: rotate3d(0, 0, 1, 0deg);}100% {transform: rotate3d(0, 0, 1, 360deg);}}
@keyframes weuiLoading {0% {transform: rotate3d(0, 0, 1, 0deg);}100% {transform: rotate3d(0, 0, 1, 360deg);}}
*{     
	-webkit-touch-callout:none;   
	-webkit-user-select:none; 
	-khtml-user-select:none;   
	-moz-user-select:none;
	-ms-user-select:none; 
	user-select:none;     
}
input {-webkit-appearance:none; /*去除input默认样式*/}
[contenteditable = "true"], input, textarea {
    -webkit-user-select: auto!important;
    -khtml-user-select: auto!important;
    -moz-user-select: auto!important;
    -ms-user-select: auto!important;
    -o-user-select: auto!important;
    user-select: auto!important;
}
input,textarea {      
	-webkit-touch-callout:auto!important;  /*系统默认菜单被禁用*/     
	-webkit-user-select:auto!important; /*webkit浏览器*/     
	-khtml-user-select:auto!important; /*早期浏览器*/     
	-moz-user-select:auto!important;/*火狐*/     
	-ms-user-select:auto!important; /*IE10*/     
	user-select:auto!important;        
}
p{
	padding: 0;
	margin: 0!important;
}
</style>