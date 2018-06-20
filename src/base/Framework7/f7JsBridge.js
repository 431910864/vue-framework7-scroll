let themes = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  themes = document.location.search.split('theme=')[1].split('&')[0];
}
if(theme == 'pc'){
	themes = 'ios';
}

window.fadeTimeout = null;
const pageBefore = function(event, page){
	clearTimeout(fadeTimeout);
	if(fadeTimeout) fadeTimeout = null;
	fadeTimeout = setTimeout((function(val){
		window.routerHistory = event.router.history;
		window.popstateHoust && window.popstateHoust(event.router.history);
		hideWeixin();
	}).bind(this), 0);
}
var maxTime = 5000;
var startTime = 0;
var ua = window.navigator.userAgent.toLowerCase();
const isWeixin = function(name){
	try{
		if(WeixinJSBridge){
			WeixinJSBridge.call('hideToolbar');
			WeixinJSBridge.call('hideOptionMenu');
			WeixinJSBridge.on('menu:share:appmessage', function(argv){
				WeixinJSBridge.invoke('sendAppMessage',{
					"appid":"", //appid 设置空就好了。
					"img_url": "", //分享时所带的图片路径
					"img_width": "120", //图片宽度
					"img_height": "120", //图片高度
					"link":'123', //分享附带链接地址
					"desc":"我是一个介绍", //分享内容介绍
					"title":"标题，再简单不过了。"
				}, function(res){/*** 回调函数，最好设置为空 ***/
				
				});
			});
			clearInterval(window[name]);
			window[name] = null;
			return true;
		}
	}catch(e){
		return false;
	}
	return false;
}
const Interval = function(name,callback){
	startTime = 0;
	clearInterval(window[name]);
	window[name] = null;
	window[name] = setInterval(function(){
		startTime += 20;
		if(startTime >= maxTime){
			clearInterval(window[name]);
		}
		if(callback(name)) return;
	},20)
}
const hideWeixin = function(){
	if(ua.match(/MicroMessenger/i) == 'micromessenger' && !isWeixin('getWeixinJSBridge')) Interval('getWeixinJSBridge',isWeixin);
}

export {
	themes,
	pageBefore,
	hideWeixin,
}
