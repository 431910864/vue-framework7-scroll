import {
  style,
} from '../util/dom'
const Drop = {
	init(that){
		var div = document.createElement('div');
		var content = that.content = document.createElement('div');
			content.innerHTML = '下拉可以刷新';
			content.style.cssText = "text-align: center;padding-right:25px";
			div.style.cssText = "display: flex;display: -webkit-flex;align-items: center;justify-content: center;position: absolute;top: -40px;left: 0;right: 0;margin: auto;position: absolute;height: 40px;background-color: transparent;z-index: 111;"
   		var canvas = document.createElement('canvas');  //获取canvas元素
	        canvas.width = 40;
	        canvas.height = 40;
    		var context = canvas.getContext('2d'),  //获取画图环境，指明为2d
	        centerX = canvas.width/2,   //Canvas中心点x轴坐标
	        centerY = canvas.height/2,  //Canvas中心点y轴坐标
	        rad = Math.PI*2/40, //将360度分成100份，那么每一份就是rad度
	        speed = 0.1; //加载的快慢就靠它了 
	        //canvas.style.cssText = "width: 40px;height: 40px;";
			div.appendChild(canvas);
			that.canvas = canvas;
			that.canvasStyle = canvas.style;
	        //绘制蓝色外圈
	        function blueCircle(n){
	            context.save();
	            context.strokeStyle = "#fc3756"; //设置描边样式
	            context.lineWidth = 1; //设置线宽
	            context.beginPath(); //路径开始
	            context.arc(centerX, centerY, 8 , -Math.PI/2, -Math.PI/2 +n*rad, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
	            context.stroke(); //绘制
	            context.closePath(); //路径结束
	            context.restore();
	        }
	        //绘制白色外圈
	        function whiteCircle(){
	            context.save();
	            context.beginPath();
	            context.strokeStyle = "transparent";
	            context.arc(centerX, centerY, 8 , 0, Math.PI*2, false);
	            context.stroke();
	            context.closePath();
	            context.restore();
	        }  
	        //百分比文字绘制
	        that.drawFrame = function(speed){
	            context.clearRect(0, 0, canvas.width, canvas.height);
	            whiteCircle();
	            blueCircle(speed);
	        }
		   	div.appendChild(content);
		   	that.scroller.appendChild(div);
		   	that.scroller.style.zIndex = '1111';
		    that.scroller.style.position = 'relative';
		    that.scroller.style.overflow ="initial";
		   	that.on('scroll',function(scroll){
		   		if(scroll.y <= 0) return;
		    		if(this.content && this.content.innerHTML == "正在刷新数据") return;
		    		if(scroll.y * 1.5 <= 60){
		    			this.content && (this.content.innerHTML = "下拉可以刷新");
		    		}else{
		    			this.content && (this.content.innerHTML = "松开立即刷新");
		    		}
		    		this.drawFrame && this.drawFrame(scroll.y);
		   	})
	},
    canvasTransfrom: function(that){
    		let i = 0;
    		that.drawFrame && that.drawFrame(36);
    		clearInterval(that.Interval)
    		that.Interval = null;
    		let run = ()=>{
    			setTimeout(()=>{
    				i++;
	    			if(that.content.innerHTML != "正在刷新数据"){
	    				that.canvasStyle[style.transform] = 'rotate(0deg) ';
	    				that.drawFrame && that.drawFrame(0);
	    				return;
	    			}
	    			that.canvasStyle[style.transform] = 'rotate('+(90/20 * i)+'deg) ';
    				requestAnimationFrame(run)
    			},300/20)
    		}
    		requestAnimationFrame(run);
    },
}
export default Drop;