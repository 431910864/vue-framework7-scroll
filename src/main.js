//引入vue
import Vue from 'vue'
//初始化页面
import App from './App.vue'
//懒加载
import VueLazyload from 'vue-lazyload'
// vuex
import store from './store'
//样式文件
import 'src/common/css/base.css'
import 'src/assets/css/f7app.css'
//rem 配置
import 'src/common/js/rem'
//本地缓存插件
import 'src/common/js/locache'
//路由文件
import routes from './routes';
//全局变量
import api from 'src/base/Api'
//全局变量放入Vue中
for(var i in api){
  Vue.prototype[i] = api[i];
}
//Framework7 框架
//import Framework7 from 'framework7/dist/framework7.esm.bundle'
// import Framework7 from 'framework7/framework7.esm.bundle';
//Framework7-vue UI框架组件
//const Framework7Vue = require('framework7-vue/framework7-vue.esm.bundle.js')
// import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';
//Framework7 框架样式
// import Framework7Styles from 'framework7/css/framework7.css';
//设置为 false，以禁止在 Vue 启动时的生产提示。


import Framework7 from 'framework7/dist/framework7.esm.bundle'
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle.js'
import Framework7Styles from 'framework7/dist/css/framework7.css'
Vue.use(Framework7Vue, Framework7)

Vue.config.productionTip = false
//注册Framework7 框架
//Vue.use(Framework7Vue.default, new Framework7);
//Vue.use(Framework7Vue, Framework7);
// Framework7.use(Framework7Vue, { Vue });
//注册懒加载 并设置默认图片
Vue.use(VueLazyload, {
	loading: require('common/image/default.png'), // 默认图片
})
//自定义Framework7加载和跳转时的配置和方法
import  { themes, pageBefore, hideWeixin } from './base/Framework7/f7JsBridge'
//实例化
new Vue({
  store,
  framework7: {
	id: 'io.framework7.testapp', //项目ID
	name: 'Framework7', //项目名称
	theme: themes, //自动主题检测
	root: '#app',//初始化ID
	routes: routes,//路由
	on: {
		pageBeforeIn: function (event, page) {
			pageBefore(event, page)
		},
		pageInit: function (event, page) {
			hideWeixin();
		},
		pageBeforeOut: function (event, page) {
			pageBefore(event, page)
		}
    }
  },
  render: h => h(App)//渲染的页面
}).$mount('#app')
