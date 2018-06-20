import Vue from 'vue'

import Image from 'src/components/Image/Image.vue'
import List from 'src/components/List/List.vue'
import BScroll from 'src/base/XScroll/XScroll'
import ScrollableTabView from 'src/components/ScrolllableTabView/ScrollableTabView'
import InfiniteScroll from 'src/components/InfiniteScroll/InfiniteScroll'
import $ from 'jquery'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)

window.$ = $;
window.jQuery = $;

Vue.component('List',List);
Vue.component('Img',Image);
Vue.component('ScrollableTabView',ScrollableTabView);
Vue.directive('BScroll',BScroll['BScroll']);
Vue.directive('ScrollableTabView',BScroll['ScrollableTabView']);
Vue.directive('MouseScroll',BScroll['MouseScroll']);
Vue.component('InfiniteScroll', InfiniteScroll);

import ViewItem from 'src/base/ViewItem'
for(var i in ViewItem){
	Vue.component(i,ViewItem[i]);
}

import NotFoundPage from 'src/pages/f7Demo/not-found.vue';

import home from 'src/pages/home/tabbar.vue'
import Text1 from 'src/pages/text/Text1.vue'
import Text2 from 'src/pages/text/Text2.vue'
import Text3 from 'src/pages/text/Text3.vue'
import MyDetails from 'src/pages/text/MyDetails.vue'
import Mobiscroll from 'src/pages/text/Mobiscroll.vue'
import JSBridge from 'src/pages/JSBridge/JSBridge.vue'
import Infinitedom from 'src/pages/Infinitedom/Infinitedom.vue';
export default [
	{
	    path: '/',
	    component: home,
	},
	{
	  	path: '/Infinitedom',
	  	component: Infinitedom,
	},
	{
	    path: '/home',
	    component: home,
	},
	{
	    path: '/Text1',
	    component: Text1,
	},
	{
	    path: '/Text2',
	    component: Text2,
	},
	{
	    path: '/Text3',
	    component: Text3,
	},
	{
	    path: '/MyDetails',
	    component: MyDetails,
	},
	{
	    path: '/Mobiscroll',
	    component: Mobiscroll,
	},
	{
		path: '/JSBridge',
		component: JSBridge
	},
	//{
	//	path: '/Singer',
	//	component: Singer
	//},
	{
	    path: '(.*)',
	    component: NotFoundPage,
	},
];

//"dependencies": {
//  "axios": "^0.18.0",
//  "framework7": "^3.0.0-beta.6",
//  "framework7-vue": "^3.0.0-beta.6",
//  "jquery": "^3.3.1",
//  "jsonp": "^0.2.1",
//  "stylus": "^0.54.5",
//  "vue": "^2.5.16",
//  "vue-awesome-swiper": "^3.1.3",
//  "vue-lazyload": "^1.2.4",
//  "vuex": "^3.0.1"
//},
//"devDependencies": {
//  "node-sass": "^4.5.2",
//  "sass-loader": "^6.0.3",
//  "stylus-loader": "^2.4.0",
//  "@vue/cli-plugin-babel": "^3.0.0-beta.15",
//  "@vue/cli-plugin-eslint": "^3.0.0-beta.15",
//  "@vue/cli-service": "^3.0.0-beta.15",
//  "vue-template-compiler": "^2.5.16"
//},