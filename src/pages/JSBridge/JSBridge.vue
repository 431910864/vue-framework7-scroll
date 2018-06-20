<template>
	<f7-page>
		<div class="flex h_100s">
			<div v-BScroll="{scrollY:true,click:true}" class="flex_10">
				<div>
					<f7-list class="m_0" >
					  <f7-list-item href="#" @click="JSBridgeItemIndex = index" :class="JSBridgeItemIndex == index && 'accordion-item-opened'" :key="index" v-for="(item,index) in JSBridgeItem" accordion-item :title="item.name">
				        <f7-accordion-content>
				          <f7-list>
				            <f7-list-item link="#" @click="orderlistCheked(vo,key)" :key="key" :title="vo.desc" v-for="(vo,key) in item.list" class="pl_10 fz_16"></f7-list-item>
				          </f7-list>
				        </f7-accordion-content>
				      </f7-list-item>
				  </f7-list>
				</div>
		  </div>
		</div>
	</f7-page>
</template>

<script>
	export default {
		data() {
			return {
				sheetOpened: false,
				JSBridgeItemIndex: 0,
				JSBridgeItem: [
				    	{
					    	name: "基础接口",
					    list: [
					    		{
					    			desc: "判断当前客户端是否支持指定JS接口",
					    			primary: "checkJsApi",
					    		}
					    ]
				    },
				    {
					    	name: "分享接口",
					    list: [
					    		{
					    			desc: "获取“分享到朋友圈”按钮点击状态及自定义分享内容接口",
					    			primary: "onMenuShareTimeline",
					    		},
					    		{
					    			desc: "获取“分享给朋友”按钮点击状态及自定义分享内容接口",
					    			primary: "onMenuShareAppMessage"
					    		},
					    		{
					    			desc: "获取“分享到QQ”按钮点击状态及自定义分享内容接口",
					    			primary: "onMenuShareQQ"
					    		},
					    		{
					    			desc: "获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口",
					    			primary: "onMenuShareWeibo"
					    		},
					    		{
					    			desc: "获取“分享到QZone”按钮点击状态及自定义分享内容接口",
					    			primary: "onMenuShareQZone"
					    		}
					    ]
				    },
				    {
					    	name: "图像接口",
					    list: [
					    		{
					    			desc: "拍照或从手机相册中选图接口",
					    			primary: "chooseImage",
					    		},
					    		{
					    			desc: "预览图片接口",
					    			primary: "previewImage",
					    		},
					    		{
					    			desc: "上传图片接口",
					    			primary: "uploadImage",
					    		},
					    		{
					    			desc: "下载图片接口",
					    			primary: "downloadImage",
					    		}
					    ]
				    },
				    {
					    	name: "音频接口",
					    list: [
					    		{
					    			desc: "开始录音接口",
					    			primary: "startRecord",
					    		},
					    		{
					    			desc: "停止录音接口",
					    			primary: "stopRecord",
					    		},
					    		{
					    			desc: "播放语音接口",
					    			primary: "playVoice",
					    		},
					    		{
					    			desc: "暂停播放接口",
					    			primary: "pauseVoice",
					    		},
					    		{
					    			desc: "停止播放接口",
					    			primary: "stopVoice",
					    		},
					    		{
					    			desc: "上传语音接口",
					    			primary: "uploadVoice",
					    		},
					    		{
					    			desc: "下载语音接口",
					    			primary: "downloadVoice",
					    		}
					    ]
				    },
				    {
					    	name: "智能接口",
					    list: [
					    		{
					    			desc: "识别音频并返回识别结果接口",
					    			primary: "translateVoice",
					    		}
					    ]
				    },
				    {
					    	name: "设备信息接口",
					    list: [
					    		{
					    			desc: "获取网络状态接口",
					    			primary: "getNetworkType",
					    		}
					    ]
				    },
				    {
					    	name: "地理位置接口",
					    list: [
					    		{
					    			desc: "使用微信内置地图查看位置接口",
					    			primary: "openLocation",
					    		},
					    		{
					    			desc: "获取地理位置接口",
					    			primary: "getLocation",
					    		}
					    ]
				    },
				    {
					    	name: "界面操作接口",
					    list: [
					    		{
					    			desc: "隐藏右上角菜单接口",
					    			primary: "hideOptionMenu",
					    		},
					    		{
					    			desc: "显示右上角菜单接口",
					    			primary: "showOptionMenu",
					    		},
					    		{
					    			desc: "关闭当前网页窗口接口",
					    			primary: "closeWindow",
					    		},
					    		{
					    			desc: "批量隐藏功能按钮接口",
					    			primary: "hideMenuItems",
					    		},
					    		{
					    			desc: "批量显示功能按钮接口",
					    			primary: "showMenuItems",
					    		},
					    		{
					    			desc: "隐藏所有非基础按钮接口",
					    			primary: "hideAllNonBaseMenuItem",
					    		},
					    		{
					    			desc: "显示所有功能按钮接口",
					    			primary: "showAllNonBaseMenuItem",
					    		}
					    ]
				    },
				    {
					    	name: "微信扫一扫",
					    list: [
					    		{
					    			desc: "调起微信扫一扫接口(微信处理结果)",
					    			primary: "scanQRCode0",
					    		},
					    		{
					    			desc: "调起微信扫一扫接口(直接返回结果)",
					    			primary: "scanQRCode1",
					    		}
					    ]
				    },
				    {
					    	name: "微信小店接口",
					    list: [
					    		{
					    			desc: "跳转微信商品页接口",
					    			primary: "openProductSpecificView",
					    		}
					    ]
				    },
				    {
					    	name: "微信卡券接口",
					    list: [
					    		{
					    			desc: "批量添加卡券接口",
					    			primary: "addCard",
					    		},
					    		{
					    			desc: "调起适用于门店的卡券列表并获取用户选择列表",
					    			primary: "chooseCard",
					    		},
					    		{
					    			desc: "查看微信卡包中的卡券接口",
					    			primary: "openCard",
					    		}
					    ]
				    },
				    {
					    	name: "微信支付接口",
					    list: [
					    		{
					    			desc: "发起一个微信支付请求",
					    			primary: "chooseWXPay",
					    		}
					    ]
				    },
			    ],
			    sheetData: [],
			    // 3 智能接口
				voice: {
				  localId: '',
				  serverId: ''
				},
				// 5 图片接口
				images: {
			    	  localId: [],
			   	  serverId: []
		  		},
		  		
			    // 12.2 选择卡券
		  		codes: [],
			}
		},
		methods: {
			orderlistCheked(item,index){
				this[item.primary] && this[item.primary]();
			},
			
			// 1 判断当前版本是否支持指定 JS 接口，支持批量判断
			  checkJsApi() {
			    wx.checkJsApi({
			      jsApiList: [
			        'checkJsApi',
			        'onMenuShareTimeline',
			        'onMenuShareAppMessage',
			        'onMenuShareQQ',
			        'onMenuShareWeibo',
			        'onMenuShareQZone',
			        'hideMenuItems',
			        'showMenuItems',
			        'hideAllNonBaseMenuItem',
			        'showAllNonBaseMenuItem',
			        'translateVoice',
			        'startRecord',
			        'stopRecord',
			        'onVoiceRecordEnd',
			        'playVoice',
			        'onVoicePlayEnd',
			        'pauseVoice',
			        'stopVoice',
			        'uploadVoice',
			        'downloadVoice',
			        'chooseImage',
			        'previewImage',
			        'uploadImage',
			        'downloadImage',
			        'getNetworkType',
			        'openLocation',
			        'getLocation',
			        'hideOptionMenu',
			        'showOptionMenu',
			        'closeWindow',
			        'scanQRCode',
			        'chooseWXPay',
			        'openProductSpecificView',
			        'addCard',
			        'chooseCard',
			        'openCard'
			      ],
			      success: function (res) {
			        alert(JSON.stringify(res));
			      }
			    });
			  },
			
			  // 2. 分享接口
			  // 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
			  onMenuShareAppMessage() {
			    wx.onMenuShareAppMessage({
			      title: '互联网之子',
			      desc: '在长大的过程中，我才慢慢发现，我身边的所有事，别人跟我说的所有事，那些所谓本来如此，注定如此的事，它们其实没有非得如此，事情是可以改变的。更重要的是，有些事既然错了，那就该做出改变。',
			      link: 'http://movie.douban.com/subject/25785114/',
			      imgUrl: 'http://demo.open.weixin.qq.com/jssdk/images/p2166127561.jpg',
			      trigger: function (res) {
			        // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
			        alert('用户点击发送给朋友');
			      },
			      success: function (res) {
			        alert('已分享');
			      },
			      cancel: function (res) {
			        alert('已取消');
			      },
			      fail: function (res) {
			        alert(JSON.stringify(res));
			      }
			    });
			    alert('已注册获取“发送给朋友”状态事件');
			  },
			
			  // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
			  onMenuShareTimeline() {
			    wx.onMenuShareTimeline({
			      title: '互联网之子',
			      link: 'http://movie.douban.com/subject/25785114/',
			      imgUrl: 'http://demo.open.weixin.qq.com/jssdk/images/p2166127561.jpg',
			      trigger: function (res) {
			        // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
			        alert('用户点击分享到朋友圈');
			      },
			      success: function (res) {
			        alert('已分享');
			      },
			      cancel: function (res) {
			        alert('已取消');
			      },
			      fail: function (res) {
			        alert(JSON.stringify(res));
			      }
			    });
			    alert('已注册获取“分享到朋友圈”状态事件');
			  },
			
			  // 2.3 监听“分享到QQ”按钮点击、自定义分享内容及分享结果接口
			  onMenuShareQQ() {
			    wx.onMenuShareQQ({
			      title: '互联网之子',
			      desc: '在长大的过程中，我才慢慢发现，我身边的所有事，别人跟我说的所有事，那些所谓本来如此，注定如此的事，它们其实没有非得如此，事情是可以改变的。更重要的是，有些事既然错了，那就该做出改变。',
			      link: 'http://movie.douban.com/subject/25785114/',
			      imgUrl: 'http://img3.douban.com/view/movie_poster_cover/spst/public/p2166127561.jpg',
			      trigger: function (res) {
			        alert('用户点击分享到QQ');
			      },
			      complete: function (res) {
			        alert(JSON.stringify(res));
			      },
			      success: function (res) {
			        alert('已分享');
			      },
			      cancel: function (res) {
			        alert('已取消');
			      },
			      fail: function (res) {
			        alert(JSON.stringify(res));
			      }
			    });
			    alert('已注册获取“分享到 QQ”状态事件');
			  },
			  
			  // 2.4 监听“分享到微博”按钮点击、自定义分享内容及分享结果接口
			  onMenuShareWeibo() {
			    wx.onMenuShareWeibo({
			      title: '互联网之子',
			      desc: '在长大的过程中，我才慢慢发现，我身边的所有事，别人跟我说的所有事，那些所谓本来如此，注定如此的事，它们其实没有非得如此，事情是可以改变的。更重要的是，有些事既然错了，那就该做出改变。',
			      link: 'http://movie.douban.com/subject/25785114/',
			      imgUrl: 'http://img3.douban.com/view/movie_poster_cover/spst/public/p2166127561.jpg',
			      trigger: function (res) {
			        alert('用户点击分享到微博');
			      },
			      complete: function (res) {
			        alert(JSON.stringify(res));
			      },
			      success: function (res) {
			        alert('已分享');
			      },
			      cancel: function (res) {
			        alert('已取消');
			      },
			      fail: function (res) {
			        alert(JSON.stringify(res));
			      }
			    });
			    alert('已注册获取“分享到微博”状态事件');
			  },
			
			  // 2.5 监听“分享到QZone”按钮点击、自定义分享内容及分享接口
			  onMenuShareQZone() {
			    wx.onMenuShareQZone({
			      title: '互联网之子',
			      desc: '在长大的过程中，我才慢慢发现，我身边的所有事，别人跟我说的所有事，那些所谓本来如此，注定如此的事，它们其实没有非得如此，事情是可以改变的。更重要的是，有些事既然错了，那就该做出改变。',
			      link: 'http://movie.douban.com/subject/25785114/',
			      imgUrl: 'http://img3.douban.com/view/movie_poster_cover/spst/public/p2166127561.jpg',
			      trigger: function (res) {
			        alert('用户点击分享到QZone');
			      },
			      complete: function (res) {
			        alert(JSON.stringify(res));
			      },
			      success: function (res) {
			        alert('已分享');
			      },
			      cancel: function (res) {
			        alert('已取消');
			      },
			      fail: function (res) {
			        alert(JSON.stringify(res));
			      }
			    });
			    alert('已注册获取“分享到QZone”状态事件');
			  },
			
			
			  
			  // 3.1 识别音频并返回识别结果
			  translateVoice() {
			    if (this.voice.localId == '') {
			      alert('请先使用 startRecord 接口录制一段声音');
			      return;
			    }
			    wx.translateVoice({
			      localId: this.voice.localId,
			      complete: function (res) {
			        if (res.hasOwnProperty('translateResult')) {
			          alert('识别结果：' + res.translateResult);
			        } else {
			          alert('无法识别');
			        }
			      }
			    });
			  },
			
			  // 4 音频接口
			  // 4.2 开始录音
			  startRecord() {
			    wx.startRecord({
			      cancel: function () {
			        alert('用户拒绝授权录音');
			      }
			    });
			  },
			
			  // 4.3 停止录音
			  stopRecord() {
			    wx.stopRecord({
			      success:  (res)=> {
			        this.voice.localId = res.localId;
			      },
			      fail: function (res) {
			        alert(JSON.stringify(res));
			      }
			    });
			  },
			
			
			  // 4.5 播放音频
			  playVoice() {
			    if (this.voice.localId == '') {
			      alert('请先使用 startRecord 接口录制一段声音');
			      return;
			    }
			    wx.playVoice({
			      localId: this.voice.localId
			    });
			  },
			
			  // 4.6 暂停播放音频
			  pauseVoice() {
			    wx.pauseVoice({
			      localId: this.voice.localId
			    });
			  },
			
			  // 4.7 停止播放音频
			  stopVoice() {
			    wx.stopVoice({
			      localId: this.voice.localId
			    });
			  },
			
			
			  // 4.8 上传语音
			  uploadVoice() {
			    if (this.voice.localId == '') {
			      alert('请先使用 startRecord 接口录制一段声音');
			      return;
			    }
			    wx.uploadVoice({
			      localId: this.voice.localId,
			      success:  (res)=> {
			        alert('上传语音成功，serverId 为' + res.serverId);
			        this.voice.serverId = res.serverId;
			      }
			    });
			  },
			
			  // 4.9 下载语音
			  downloadVoice() {
			    if (this.voice.serverId == '') {
			      alert('请先使用 uploadVoice 上传声音');
			      return;
			    }
			    wx.downloadVoice({
			      serverId: this.voice.serverId,
			      success:  (res)=> {
			        alert('下载语音成功，localId 为' + res.localId);
			        this.voice.localId = res.localId;
			      }
			    });
			  },
			
			  // 5 图片接口
			  // 5.1 拍照、本地选图
			  chooseImage() {
			    wx.chooseImage({
			      success:  (res) => {
			        this.images.localId = res.localIds;
			        alert('已选择 ' + res.localIds.length + ' 张图片');
			      }
			    });
			  },
			
			  // 5.2 图片预览
			  previewImage() {
			    wx.previewImage({
			      current: 'http://img5.douban.com/view/photo/photo/public/p1353993776.jpg',
			      urls: [
			        'http://img3.douban.com/view/photo/photo/public/p2152117150.jpg',
			        'http://img5.douban.com/view/photo/photo/public/p1353993776.jpg',
			        'http://img3.douban.com/view/photo/photo/public/p2152134700.jpg'
			      ]
			    });
			  },
			
			  // 5.3 上传图片
			  uploadImage() {
			    if (this.images.localId.length == 0) {
			      alert('请先使用 chooseImage 接口选择图片');
			      return;
			    }
			    var i = 0, length = this.images.localId.length;
			    this.images.serverId = [];
			    function upload() {
			      wx.uploadImage({
			        localId: this.images.localId[i],
			        success: function (res) {
			          i++;
			          //alert('已上传：' + i + '/' + length);
			          this.images.serverId.push(res.serverId);
			          if (i < length) {
			            upload();
			          }
			        },
			        fail: function (res) {
			          alert(JSON.stringify(res));
			        }
			      });
			    }
			    upload();
			  },
			
			  // 5.4 下载图片
			  downloadImage() {
			    if (this.images.serverId.length === 0) {
			      alert('请先使用 uploadImage 上传图片');
			      return;
			    }
			    var i = 0, length = this.images.serverId.length;
			    this.images.localId = [];
			    var download = ()=> {
			      wx.downloadImage({
			        serverId: this.images.serverId[i],
			        success: function (res) {
			          i++;
			          alert('已下载：' + i + '/' + length);
			          this.images.localId.push(res.localId);
			          if (i < length) {
			            download();
			          }
			        }
			      });
			    }
			    download();
			  },
			
			  // 6 设备信息接口
			  // 6.1 获取当前网络状态
			  getNetworkType() {
			    wx.getNetworkType({
			      success: function (res) {
			        alert(res.networkType);
			      },
			      fail: function (res) {
			        alert(JSON.stringify(res));
			      }
			    });
			  },
			
			  // 7 地理位置接口
			  // 7.1 查看地理位置
			  openLocation() {
			    wx.openLocation({
			      latitude: 23.099994,
			      longitude: 113.324520,
			      name: 'TIT 创意园',
			      address: '广州市海珠区新港中路 397 号',
			      scale: 14,
			      infoUrl: 'http://weixin.qq.com'
			    });
			  },
			
			  // 7.2 获取当前地理位置
			  getLocation() {
			    wx.getLocation({
			      success: function (res) {
			        alert(JSON.stringify(res));
			      },
			      cancel: function (res) {
			        alert('用户拒绝授权获取地理位置');
			      }
			    });
			  },
			
			  // 8 界面操作接口
			  // 8.1 隐藏右上角菜单
			  hideOptionMenu() {
			    wx.hideOptionMenu();
			  },
			
			  // 8.2 显示右上角菜单
			  showOptionMenu() {
			    wx.showOptionMenu();
			  },
			
			  // 8.3 批量隐藏菜单项
			  hideMenuItems() {
			    wx.hideMenuItems({
			      menuList: [
			        'menuItem:readMode', // 阅读模式
			        'menuItem:share:timeline', // 分享到朋友圈
			        'menuItem:copyUrl' // 复制链接
			      ],
			      success: function (res) {
			        alert('已隐藏“阅读模式”，“分享到朋友圈”，“复制链接”等按钮');
			      },
			      fail: function (res) {
			        alert(JSON.stringify(res));
			      }
			    });
			  },
			
			  // 8.4 批量显示菜单项
			  showMenuItems() {
			    wx.showMenuItems({
			      menuList: [
			        'menuItem:readMode', // 阅读模式
			        'menuItem:share:timeline', // 分享到朋友圈
			        'menuItem:copyUrl' // 复制链接
			      ],
			      success: function (res) {
			        alert('已显示“阅读模式”，“分享到朋友圈”，“复制链接”等按钮');
			      },
			      fail: function (res) {
			        alert(JSON.stringify(res));
			      }
			    });
			  },
			
			  // 8.5 隐藏所有非基本菜单项
			  hideAllNonBaseMenuItem() {
			    wx.hideAllNonBaseMenuItem({
			      success: function () {
			        alert('已隐藏所有非基本菜单项');
			      }
			    });
			  },
			
			  // 8.6 显示所有被隐藏的非基本菜单项
			  showAllNonBaseMenuItem() {
			    wx.showAllNonBaseMenuItem({
			      success: function () {
			        alert('已显示所有非基本菜单项');
			      }
			    });
			  },
			
			  // 8.7 关闭当前窗口
			  closeWindow() {
			    wx.closeWindow();
			  },
			
			  // 9 微信原生接口
			  // 9.1.1 扫描二维码并返回结果
			  scanQRCode0() {
			    wx.scanQRCode();
			  },
			  // 9.1.2 扫描二维码并返回结果
			  scanQRCode1() {
			    wx.scanQRCode({
			      needResult: 1,
			      desc: 'scanQRCode desc',
			      success: function (res) {
			        alert(JSON.stringify(res));
			      }
			    });
			  },
			
			  // 10 微信支付接口
			  // 10.1 发起一个支付请求
			  chooseWXPay() {
			    // 注意：此 Demo 使用 2.7 版本支付接口实现，建议使用此接口时参考微信支付相关最新文档。
			    wx.chooseWXPay({
			      timestamp: 1414723227,
			      nonceStr: 'noncestr',
			      package: 'addition=action_id%3dgaby1234%26limit_pay%3d&bank_type=WX&body=innertest&fee_type=1&input_charset=GBK&notify_url=http%3A%2F%2F120.204.206.246%2Fcgi-bin%2Fmmsupport-bin%2Fnotifypay&out_trade_no=1414723227818375338&partner=1900000109&spbill_create_ip=127.0.0.1&total_fee=1&sign=432B647FE95C7BF73BCD177CEECBEF8D',
			      signType: 'SHA1', // 注意：新版支付接口使用 MD5 加密
			      paySign: 'bd5b1933cda6e9548862944836a9b52e8c9a2b69'
			    });
			  },
			
			  // 11.3  跳转微信商品页
			  openProductSpecificView() {
			    wx.openProductSpecificView({
			      productId: 'pDF3iY_m2M7EQ5EKKKWd95kAxfNw',
			      extInfo: '123'
			    });
			  },
			
			  // 12 微信卡券接口
			  // 12.1 添加卡券
			  addCard() {
			    wx.addCard({
			      cardList: [
			        {
			          cardId: 'pDF3iY9tv9zCGCj4jTXFOo1DxHdo',
			          cardExt: '{"code": "", "openid": "", "timestamp": "1418301401", "signature":"f6628bf94d8e56d56bfa6598e798d5bad54892e5"}'
			        },
			        {
			          cardId: 'pDF3iY9tv9zCGCj4jTXFOo1DxHdo',
			          cardExt: '{"code": "", "openid": "", "timestamp": "1418301401", "signature":"f6628bf94d8e56d56bfa6598e798d5bad54892e5"}'
			        }
			      ],
			      success: function (res) {
			        alert('已添加卡券：' + JSON.stringify(res.cardList));
			      },
			      cancel: function (res) {
			        alert(JSON.stringify(res))
			      }
			    });
			  },
			
			  // 12.2 选择卡券
			  chooseCard() {
			    wx.chooseCard({
			      cardSign: '1fdb2640c60e41f8823e9f762e70c531d161ae76',
			      timestamp: 1437997723,
			      nonceStr: 'k0hGdSXKZEj3Min5',
			      success:  (res)=> {
			        res.cardList = JSON.parse(res.cardList);
			        encrypt_code = res.cardList[0]['encrypt_code'];
			        alert('已选择卡券：' + JSON.stringify(res.cardList));
			        this.decryptCode(encrypt_code,  (code)=> {
			          this.codes.push(code);
			        });
			      },
			      cancel: function (res) {
			        alert(JSON.stringify(res))
			      }
			    });
			  },
			
			  // 12.3 查看卡券
			  openCard() {
			    if (this.codes.length < 1) {
			      alert('请先使用 chooseCard 接口选择卡券。');
			      return false;
			    }
			    var cardList = [];
			    for (var i = 0; i < this.codes.length; i++) {
			      cardList.push({
			        cardId: 'pDF3iY9tv9zCGCj4jTXFOo1DxHdo',
			        code: this.codes[i]
			      });
			    }
			    wx.openCard({
			      cardList: cardList,
			      cancel: function (res) {
			        alert(JSON.stringify(res))
			      }
			    });
			  },
			  decryptCode(code, callback) {
			    $.getJSON('/jssdk/decrypt_code.php?code=' + encodeURI(code),  (res)=> {
			      if (res.errcode == 0) {
			        this.codes.push(res.code);
			      }
			    });
			  }
			
		},
		mounted() {
			 /*
			   * 注意：
			   * 1. 所有的JS接口只能在公众号绑定的域名下调用，公众号开发者需要先登录微信公众平台进入“公众号设置”的“功能设置”里填写“JS接口安全域名”。
			   * 2. 如果发现在 Android 不能分享自定义内容，请到官网下载最新的包覆盖安装，Android 自定义分享接口需升级至 6.0.2.58 版本及以上。
			   * 3. 常见问题及完整 JS-SDK 文档地址：http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
			   *
			   * 开发中遇到问题详见文档“附录5-常见错误及解决办法”解决，如仍未能解决可通过以下渠道反馈：
			   * 邮箱地址：weixin-open@qq.com
			   * 邮件主题：【微信JS-SDK反馈】具体问题
			   * 邮件内容说明：用简明的语言描述问题所在，并交代清楚遇到该问题的场景，可附上截屏图片，微信团队会尽快处理你的反馈。
			   */
			  wx.config({
			      debug: false,
			      appId: 'wxf8b4f85f3a794e77',
			      timestamp: 1525685429,
			      nonceStr: 'bp7a4wiuEsJO3jEQ',
			      signature: '181811cccdbae96f51cc435999c86a058c961f86',
			      jsApiList: [
			        'checkJsApi',
			        'onMenuShareTimeline',
			        'onMenuShareAppMessage',
			        'onMenuShareQQ',
			        'onMenuShareWeibo',
			        'onMenuShareQZone',
			        'hideMenuItems',
			        'showMenuItems',
			        'hideAllNonBaseMenuItem',
			        'showAllNonBaseMenuItem',
			        'translateVoice',
			        'startRecord',
			        'stopRecord',
			        'onVoiceRecordEnd',
			        'playVoice',
			        'onVoicePlayEnd',
			        'pauseVoice',
			        'stopVoice',
			        'uploadVoice',
			        'downloadVoice',
			        'chooseImage',
			        'previewImage',
			        'uploadImage',
			        'downloadImage',
			        'getNetworkType',
			        'openLocation',
			        'getLocation',
			        'hideOptionMenu',
			        'showOptionMenu',
			        'closeWindow',
			        'scanQRCode',
			        'chooseWXPay',
			        'openProductSpecificView',
			        'addCard',
			        'chooseCard',
			        'openCard'
			      ]
			  });
			  
			  /*
			 * 注意：
			 * 1. 所有的JS接口只能在公众号绑定的域名下调用，公众号开发者需要先登录微信公众平台进入“公众号设置”的“功能设置”里填写“JS接口安全域名”。
			 * 2. 如果发现在 Android 不能分享自定义内容，请到官网下载最新的包覆盖安装，Android 自定义分享接口需升级至 6.0.2.58 版本及以上。
			 * 3. 完整 JS-SDK 文档地址：http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
			 *
			 * 如有问题请通过以下渠道反馈：
			 * 邮箱地址：weixin-open@qq.com
			 * 邮件主题：【微信JS-SDK反馈】具体问题
			 * 邮件内容说明：用简明的语言描述问题所在，并交代清楚遇到该问题的场景，可附上截屏图片，微信团队会尽快处理你的反馈。
			 */
			wx.ready( ()=> {
			  var shareData = {
			    title: '微信JS-SDK Demo',
			    desc: '微信JS-SDK,帮助第三方为用户提供更优质的移动web服务',
			    link: 'http://demo.open.weixin.qq.com/jssdk/',
			    imgUrl: 'http://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRt8Qia4lv7k3M9J1SKqKCImxJCt7j9rHYicKDI45jRPBxdzdyREWnk0ia0N5TMnMfth7SdxtzMvVgXg/0'
			  };
			  wx.onMenuShareAppMessage(shareData);
			  wx.onMenuShareTimeline(shareData);
			  // 4.4 监听录音自动停止
			  wx.onVoiceRecordEnd({
			    complete:  (res)=> {
			      this.voice.localId = res.localId;
			      alert('录音时间已超过一分钟');
			    }
			  });
			  
			  // 4.8 监听录音播放停止
			  wx.onVoicePlayEnd({
			    complete: function (res) {
			      alert('录音（' + res.localId + '）播放结束');
			    }
			  });
			});
			
			wx.error(function (res) {
			  alert(res.errMsg);
			});


		}
	}
</script>

<style>

</style>