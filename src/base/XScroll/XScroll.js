/* jshint esversion: 6 */
import BScroll from './'
import { MouseScrollAddEvent }  from 'src/base/Framework7/f7Config';
var Timeout = '';
export default {
	BScroll:{
		inserted: function(el, binding, vnode) {
			vnode.context.$nextTick(()=>{
				el.BScroll = new BScroll(el, binding.value, vnode);
				if((el.BScroll && el.BScroll.options && !el.BScroll.options.scrollX && el.BScroll.options.scrollY)){
					MouseScrollAddEvent(el, "mousewheel", function(event) {
					    el.BScroll.handleEvent(event);
					});
				}
			})
		},
		componentUpdated: function(el, binding, vnode) {
			clearTimeout(Timeout);
			Timeout = null;
			Timeout = setTimeout(()=>{
				if(vnode.context.update && typeof vnode.context.update == 'function'){
					vnode.context.update(el,binding,vnode)
				}
			},10)
		},
		unbind: function(el, binding, vnode) {
			vnode.context.$nextTick(()=>{
				el.BScroll = null;
			})
		},
		update: function(el, binding, vnode) {
			
		},	
	},
	ScrollableTabView: {
		inserted: function(el, binding, vnode) {
			vnode.context.$nextTick(()=>{
				
			})
		},
		update: function(el, binding, vnode) {
			vnode.context.$nextTick(()=>{
				
			})
		},
		handleEvent: function(AlloyFinger, e){
			
		},
		unbind: function(el, binding, vnode) {
			vnode.context.$nextTick(()=>{
				
			})
		},
	},
	MouseScroll: {
		inserted: function(el, binding, vnode) {
			vnode.context.$nextTick(()=>{
				if(el.AlloyFinger && !el.isAlloyFinger){
					el.isAlloyFinger = true;
					MouseScrollAddEvent(el, "mousewheel", function(event) {
						
					});
				}
			})
		},
		update: function(el, binding, vnode) {
			vnode.context.$nextTick(()=>{
				if(el.AlloyFinger && !el.isAlloyFinger){
					el.isAlloyFinger = true;
					MouseScrollAddEvent(el, "mousewheel", function(event) {
						binding.def.handleEvent(el.AlloyFinger, event)
					    //binding.value.handleEvent(event);
					});
				}
			})
		},
		handleEvent: function(AlloyFinger, e){
			AlloyFinger.touchStart.handlers[0](e);
		},
		unbind: function(el, binding, vnode) {
			vnode.context.$nextTick(()=>{
				el.AlloyFinger = null;
			})
		},
	}
}