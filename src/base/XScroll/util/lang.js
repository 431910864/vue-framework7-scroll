export function getNow() {
  return window.performance && window.performance.now ? (window.performance.now() + window.performance.timing.navigationStart) : +new Date()
}

export function extend(target, ...rest) {
  for (let i = 0; i < rest.length; i++) {
    let source = rest[i]
    for (let key in source) {
      target[key] = source[key]
    }
  }
  return target
}

export function isUndef(v) {
  return v === undefined || v === null
}

const _css = (function(){
	var styleFilter=function(property){
			switch(property){
				case 'float' : return ("cssFloat" in document.body.style) ? 'cssFloat' : 'styleFloat';
							  break;
				case 'opacity' : return ("opacity" in document.body.style) ? 'opacity' :
								{
									get : function(el,style){
										var ft=style.filter;
										return ft&&ft.indexOf('opacity')>=0&&parseFloat(ft.match(/opacity=([^)]*)/i)[1])/100+''||'1';
									},
									set : function(el,va){
										el.style.filter='alpha(opacity='+va*100+')';
										el.style.zoom=1;
									}
								} ;
							  break;
				default:var arr=property.split('-');
						for(var i = 1; i < arr.length; i++)
							arr[i] = arr[i].substring(0,1).toUpperCase() + arr[i].substring(1);
						property = arr.join('');
						return property;
						break;
			}
		},
		getStyle=function(el,property){
			property=styleFilter(property);
			var value = el.style[property];
			if (!value) {
				var style = document.defaultView && document.defaultView.getComputedStyle && getComputedStyle(el, null) || el.currentStyle || el.style;
				if(typeof property=='string'){
					value=style[property];
				}else value=property.get(el,style);
			}
			return value == 'auto' ? '' : value;
		},
		setStyle=function(el,css){
			var attr;
			for(var key in css){
				attr=styleFilter(key);
				if(typeof attr=='string'){
					el.style[attr]=css[key];
				}else{
					attr.set(el,css[key]);
				}
			}
		}
		return function(el,css){
			return typeof css=='string'?getStyle(el,css):setStyle(el,css);
		}
})();
export {
	_css,
};
		//格式化参数
export function parse_args(r){
	var _default={}, toString=Object.prototype.toString;
	if(r && toString.call(r)=='[object Object]')
		for(var key in this._default){
			_default[key]=typeof r[key]==='undefined' ? this._default[key] : toString.call(this._default[key])=='[object Number]' ? parseInt(parseFloat(r[key])*100)/100 : r[key];
		}
	else _default=this._default;
	return _default;
}

 //绑定事件
export function addListener(e, n, o, u){
	if(e.addEventListener){
		e.addEventListener(n, o, u);
		return true;
	} else if(e.attachEvent){
		e.attachEvent('on' + n, o);
		return true;
	}
	return false;
}
var ADSupportsTouches = ("createTouch" in document) || ('ontouchstart' in window) || 0,
	doc=document.documentElement || document.getElementsByTagName('html')[0],
	ADSupportsTransition = ("WebkitTransition" in doc.style) 
						|| ("MsTransition" in doc.style) 
						|| ("MozTransition" in doc.style) 
						|| ("OTransition" in doc.style) 
						|| ("transition" in doc.style) 
						|| 0,
	ADStartEvent = ADSupportsTouches ? "touchstart" : "mousedown",
	ADMoveEvent = ADSupportsTouches ? "touchmove" : "mousemove",
	ADEndEvent = ADSupportsTouches ? "touchend" : "mouseup";
//获取鼠标坐标
export function getMousePoint(ev) {
	var x = 0,y = 0,
	doc = document.documentElement,
	body = document.body;
	if(!ev) ev=window.event;
	if (window.pageYoffset) {
		x = window.pageXOffset;
		y = window.pageYOffset;
	}else{
		x = (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
		y = (doc && doc.scrollTop  || body && body.scrollTop  || 0) - (doc && doc.clientTop  || body && body.clientTop  || 0);
	}
	if(ADSupportsTouches && ev.touches.length){
		var evt = ev.touches[0];
		x += evt.clientX;
		y += evt.clientY;
	}else{
		x += ev.clientX;
		y += ev.clientY;
	}
	return {'x' : x, 'y' : y};
}