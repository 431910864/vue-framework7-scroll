var winHeight = window.innerHeight;
var winWidth = window.innerWidth;
if(winWidth === 375 && winHeight === 724 && window.devicePixelRatio === 3){
	winHeight = winHeight - 34;
	try{
		if(getJsBridge()){
			document.getElementsByTagName('html')[0].className = 'has-topbar has-bottombar';
		}
	}catch(err){
		
	}
}else{
	winHeight = winHeight;
}

var theme = (function(){
	let ua = navigator.userAgent.toLowerCase();
	if (/iphone|ipad|ipod/.test(ua)) {
		return 'ios';
	}else if(/android|midp|rv:1.2.3.4|ucweb|windows ce|windows mobile/.test(ua)){
		return 'material';
	}else{
		return 'pc';
	}
})();

window.theme = theme;

const AppLink = function(facname,data){
  let cc;
  data = data || {'sb':'1'};
  if(!facname){
    return cc;
  }
  try{
    if(theme == 'ios'){
      cc = getJsBridge().call(facname,data);
    }else if(theme == 'material'){
      cc = js[facname](JSON.stringify(data));
    }else{
    }

  }catch(e){}
  return cc;
}

 //格式化参数
const formatParams = function(data) {
    var arr = [];
    for (var name in data) {
        arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
    }
    arr.push(("v=" + Math.random()).replace(".",""));
    return arr.join("&");
}
const $ajax = function(options) {
    options = options || {};
    options.type = (options.type || "GET").toUpperCase();
    options.dataType = options.dataType || "json";
    var params = formatParams(options.data);

    //创建 - 非IE6 - 第一步
    if (window.XMLHttpRequest) {
        var xhr = new XMLHttpRequest();
    } else { //IE6及其以下版本浏览器
        var xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    //接收 - 第三步
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var status = xhr.status;
            if (status >= 200 && status < 300) {
                options.success && options.success(xhr.responseText, xhr.responseXML);
            } else {
                options.fail && options.fail(status);
            }
        }
    }
    //连接 和 发送 - 第二步
    if (options.type == "GET") {
        xhr.open("GET", options.url + "?" + params, true);
        xhr.send(null);
    } else if (options.type == "POST") {
        xhr.open("POST", options.url, true);
        //设置表单提交时的内容类型
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(params);
    }
}

const MouseScrollAddEvent = (function(window, undefined) {        
    var _eventCompat = function(event) {
        var type = event.type;
        if (type == 'DOMMouseScroll' || type == 'mousewheel') {
            event.delta = (event.wheelDelta) ? event.wheelDelta / 120 : -(event.detail || 0) / 3;
        }
        //alert(event.delta);
        if (event.srcElement && !event.target) {
            event.target = event.srcElement;    
        }
        if (!event.preventDefault && event.returnValue !== undefined) {
            event.preventDefault = function() {
                event.returnValue = false;
            };
        }
        /* 
           ......其他一些兼容性处理 */
        return event;
    };
    if (window.addEventListener) {
        return function(el, type, fn, capture) {
            if (type === "mousewheel" && document.mozFullScreen !== undefined) {
                type = "DOMMouseScroll";
            }
            el.addEventListener(type, function(event) {
                fn.call(this, _eventCompat(event));
            }, capture || false);
        }
    } else if (window.attachEvent) {
        return function(el, type, fn, capture) {
            el.attachEvent("on" + type, function(event) {
                event = event || window.event;
                fn.call(el, _eventCompat(event));    
            });
        }
    }
    return function() {};    
})(window);
var DomEdit = true;
window.DomEdit = DomEdit;
export {
	winHeight,
	winWidth,
	theme,
	$ajax,
	AppLink,
	MouseScrollAddEvent,
	DomEdit,
}
