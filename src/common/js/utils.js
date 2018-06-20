export function $ajax(options) {
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
        		var responseText = xhr.responseText;
        		try{responseText = JSON.parse(responseText);}catch(e){};
            if (status >= 200 && status < 300) {
                options.success && options.success(responseText, xhr.responseXML);
            } else {
                options.fail && options.fail(responseText, xhr.responseXML);
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
//格式化参数
function formatParams(data) {
    var arr = [];
    for (var name in data) {
        arr.push(encodeURIComponent(name) + "=" + (encodeURIComponent(data[name]) != 'null' ? encodeURIComponent(data[name]) : ""));
    }
    //arr.push(("v=" + Math.random()).replace(".",""));
    return arr.join("&");
}
export function isTypeJson(str){
	try{
		JSON.parse(str)
		return JSON.parse(str);
	}catch(err){
		return false;
	}
}
export function isType(str,type){
	try{
		if(type){
			return typeof str == type;
		}
		let data = ["string","object","array","number"];
		let Num = ["Infinity","NaN"];
		let ns = ["undefined","null"];
		for(let s in ns){
			if(str = ns[s]){
				return false;
			}
		}
		for(let n in Num){
			if(str = Num[n]){
				return 0;
			}
		}
		for(let i in data){
			if(typeof str == data[i]){
				return true;
			}
		}
		return false;
	}catch(err){
		return false;
	}
}
export function getlogoUrl( width,height, imgUrl,bool,isMax){
	var config = {
		logoUrl: {
		  	logoImg: "http://zhuihuituiguang-card.oss-cn-shenzhen.aliyuncs.com/h5/herder/zhongxiaowei.png",
		  	logoSave: "",
	  	}
	}
	let url = config.logoUrl.logoImg,
		save = config.logoUrl.logoSave;
		width = remSizes(width) || 0,
		height = remSizes(height) || 0,
		imgUrl = imgUrl || "";
	let urs = url + save.replace("h_600","h_" + Math.floor(height)).replace("w_300","w_" + Math.floor(width));
	let getUrl = (isData(imgUrl) || !IsPicture(imgUrl)) ? urs : imgUrl;
	isMax = !isMax ? 'cover' : 'auto 100%';
	let color = " #E2E1E1";
	return !bool ? 'url("' + getUrl +'") no-repeat center center / ' + isMax + color : getUrl;
}

function IsPicture( res){
    //判断是否是图片 - strFilter必须是小写列举
    let strFilter=".jpeg|.gif|.jpg|.png|.bmp|.pic|";
		res = res.replace('_250x250','');
    if(res.indexOf(".")>-1){
        let p = res.lastIndexOf(".");
        let strPostfix=res.substring(p,res.length) + '|';
        strPostfix = strPostfix.toLowerCase();
        if(strFilter.indexOf(strPostfix)>-1){
            return true;
        }
    }
    return false;
}
function remSizes(size){
	if(!size) return;
	let rems = window.innerWidth/750,
		remSize = (size * rems) * 100;
	return remSize;
}
export function matchs(value) {
	let val = value.toString();
 	val = val.match(/\d+(\.\d{0,2})?/) && val.match(/\d+(\.\d{0,2})?/)[0] || "";
    return val;
}
export function numbers(value,min,max){
	let val = value.toString();
	try{
  		val = value.replace(/\D/g,'');
  	}catch(err){
		
	}
  	if(typeof min == 'number'){
  		if(val <= min){
  			return min;
  		}
  	}
  	if(typeof max == 'number'){
  		if(val >= max){
  			return max;
  		}
  	}
	return val;
}
export function getTime1(nS) {
	if(nS != 0 && nS) {
		let date = new Date(nS * 1000),
			Y = date.getFullYear(),
			M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1),
			D = (date.getDate().toString().length > 1 ? date.getDate() : '0' + date.getDate()),
			h = (date.getHours().toString().length > 1 ? date.getHours() : '0' + date.getHours()),
			m = (date.getMinutes().toString().length > 1 ? date.getMinutes() : '0' + date.getMinutes()),
			s = (date.getSeconds().toString().length > 1 ? date.getSeconds() : '0' + date.getSeconds()),
			ss = date.getMilliseconds(),
			data = {
				t1: Y + '-' +M + '-' +D,
				t2: Y + '-' +M + '-' +D + ' ' + h + ':' + m ,
				t3: Y + '-' +M + '-' +D + ' ' + h + ':' + m + ':' + s,
			};
		return data;
	} else {
		return " ";
	}
}
export async function oss(url,resut,src){
	return new Promise(async (resolve, reject) => {
		let merchantinfoId = merchant.call(this);
		let rs = res =>{
			let data = {}
			let query = GetRequest();
			let ossBaseurl = null;
			let isOss = ['accessKeyId','accessKeySecret','bucket','endpoint','baseurl']
			for(var os in isOss){
				if(!query[isOss[os]]){
					return false;
				}else{
					if(isOss[os] == 'baseurl'){
						ossBaseurl = query[isOss[os]];
					}else{
						console.info()
						data[isOss[os]] = query[isOss[os]];
					}
				}
			}
			return {
				data,
				ossBaseurl
			};
		}
		let isOss = rs();
		let client = new OSS.Wrapper({
	      accessKeyId: 'LTAIMiCbPWCbEUFV',
	      accessKeySecret: 'zOAfX2sSisNKZnQtOckYgMSTs6Fxvg',
	      bucket: 'zhihuituiguang-imgs',
	      endpoint: 'oss-cn-beijing.aliyuncs.com'
	    }),
	    baseurl = "http://zhihuituiguang-imgs.oss-cn-beijing.aliyuncs.com/";
	    if(isOss){
		    	if(isOss.data){
				client = new OSS.Wrapper(isOss.data)
			}
			if(isOss.ossBaseurl){
				baseurl = isOss.ossBaseurl;
			}
	    }
	    if(!url.buffer){
		    let token = GetRequest().token || 'test',
      		data = new Date(),
      		name = url.name,
			storeAs = (src ? src : merchantinfoId + "/h5")+"/"+ data.getTime() + name,
			haibao_url = baseurl + storeAs;
			try{
				let result = await client.multipartUpload(storeAs, url);
				let bool = await getURL(haibao_url);
				if(bool){
					resolve(haibao_url)
				}else{
					reject()
				}
			}catch(e){
				console.info(e)
				reject()
			}
	    }else{
	   	 	try{
		    		let result = await client.put(url.storeAs, url.buffer);
		    		let bool = await getURL(result.url);
		    		if(bool){
					resolve(result.url)
				}else{
					reject()
				}
	        }catch(e){
				console.info(e)
				reject()
			}
	    }
	})
}

async function getURL(url){
	return new Promise((resolve, reject) => {
		try{
            var xmlhttp =new XMLHttpRequest();
            xmlhttp.open("GET",url,false);
            xmlhttp.send();
            if(xmlhttp.readyState==4){
                if(xmlhttp.status!=200){
            	  		resolve(false);
                } else {
            	  		resolve(true);
                }
            }
            resolve(true);
        }catch(e){
			resolve(false);
		}
    })
}

export function GetRequest() {
	return route.currentRoute.query;
   var url = location.search; //获取url中"?"符后的字串
   var theRequest = new Object();
   if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      var strs = str.split("&");
      for(var i = 0; i < strs.length; i ++) {
         theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
      }
   }
   return theRequest;
}
export function content(res){
	if(res){
		c = res;
	    c = escape2Html(c);
	    c = c.replace(/img src=/g,"img class='lazy' data-lazy=");
	    c = c.replace(/preload="none"/g,"preload='metadata'");
	    c = c.replace(/controls=""/g,"controls='' x5-video-player-type='h5' webkit-playsinline poster='http://tjweimi.oss-cn-zhangjiakou.aliyuncs.com/images/weimiApi/h51500453310139videoBgBack4.png'");
		return c;
	};
	return "";
}
function escape2Html(str) {
	let arrEntities = {'lt':'<','gt':'>','nbsp':' ','amp':'&','quot':'"'};
	return str.replace(/&(lt|gt|nbsp|amp|quot);/ig,function(all,t){return arrEntities[t];});
}
export function mobil(tel){
	if(!tel) return;
	return tel.substring(0,3) + '****' + tel.substring(tel.length-4,tel.length)
}
export function getCardNumber(num){
	try{
		return num.substring(num.length - 4,num.length);
	}catch(e){
		return "";
	}
}
export function getJson(res){
	if(!res) return [];
	if(typeof res == 'object' || typeof res == 'array') return res;
	try{
		return JSON.parse(res);
	}catch(e){
		return [res];
	}
}
export function getImgSrc(res,bool){
	if(!res) return "";
	if(typeof res == 'object' || typeof res == 'array'){
		return !bool ? JSON.stringify(res.src) : res.src;
	}else{
		try{
			res = JSON.parse(res);
			if(!res) return "";
			if(typeof res == 'object' || typeof res == 'array'){
				return !bool ? JSON.stringify(res.src) : res.src
			}
		}catch(e){}
	}
	return !bool ? JSON.stringify(res) : res;
}