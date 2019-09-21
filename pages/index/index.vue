<template>
	<view class="content">
		<!-- 头部 -->

		<view class="navbar">
			<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }"
			 @click="tabClick(index)">
				<image src="../../static/xuanzhong@2x.png"></image>
				<text>{{ item.text }}</text>
			</view>
		</view>

		<iframe :src="navList[0].orderList[0].src"></iframe>

		<view class="list" v-for="(item, index) in navList" :key="index" v-if="tabCurrentIndex === index">

			<view class="live" v-for="(item, index) in item.orderList" :key="index">
				<view class="title">
					<text>{{item.title}}</text>
				</view>
			</view>
			<view class="live" v-for="(item, index) in item.orderList1" :key="index">
				<view class="title">
					<text>{{item.title}}</text>
				</view>
			</view>


			<view class="com" v-for="(item, index) in item.orderList" :key="index">
				<scroll-view id="scrollview" scroll-y="true" :scroll-with-animation="true" :scroll-top="scrollTop" @scrolltolower="reach(page)">
					<view class="comIn" v-for="(item, index) in item.content" :key="index">
						<image :src="url+'/upload/head/'+item.head" mode=""></image>
						<view class="right">
							<text>{{item.nickname}}</text>
							<view>{{item.comment}}</view>
						</view>
					</view>

				</scroll-view>
				<view class="commit">
					<input type="text" placeholder="一起来聊聊吧~" v-model="contact" />
					<button @click="submit()"> 发送</button>
				</view>
			</view>

			<view class="specialty" v-for="(item, index) in item.orderList1" :key="index">
				<view class="specialtyIn" :key="index">
					<view class="list1" v-for="(item, index) in item.content" :key="index" @click="goods(item.url)">

						<image :src="'http://dev.static.qianyipan.com/'+item.image" mode=""></image>
						<text class="name">{{item.name}}</text>
						<text class="price">￥{{item.price}}</text>
					</view>

				</view>
			</view>
		</view>

	</view>
</template>

<script>
	// import share from "../../share.js"
	export default {
		components: {

		},
		data() {
			return {
				style: {
					pageHeight: 0,
					contentViewHeight: 0,
					footViewHeight: 90,
					mitemHeight: 0,
				},
				timer: '',
				contact: '',
				scrollTop: 0,
				current: 1,
				tabCurrentIndex: 0,
				url: 'http://l.qianyipan.com',
				navList: [],
				url1: "ws://l.qianyipan.com:9502",
				page: 1,
				id: '',

				socketTask: null

			};
		},

		onLoad(options) {
			var that = this
			var jweixin = require('jweixin-module')
			this.tabCurrentIndex = 0;
			that.hei()
			that.socket()
	             console.log(jweixin);
			jweixin.ready(function(){ 
				console.log('444');
			     jweixin.updateAppMessageShareData({ 
			        title: '千艺直播', // 分享标题
			        desc: '', // 分享描述
			        link: 'http://l.qianyipan.com/live/index.html#/', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
			        imgUrl: '', // 分享图标
			        success: function () {
			          // 设置成功
			        }
			      })
			});
        
		},

		onShow() {
			var that = this
			uni.request({
				url: that.url + '/h5/live/getData',
				success: function(res) {
					console.log(res);
					that.navList = res.data.navList
					that.navList[0].orderList = [res.data.navList[0].orderList]
					that.navList[1].orderList1 = [res.data.navList[1].orderList1]
		
				}
			})
			
			

		},
		
	

		methods: {
           
           

			socket: function() {

				let _this = this;

				//创建websocket对象
				this.socketTask = uni.connectSocket({
					url: this.url1,
					success(data) {
						console.log("websocket连接成功");
					},
				});

				// 消息的发送和接收必须在正常连接打开中,才能发送或接收【否则会失败】
				this.socketTask.onOpen((res) => {
					// 注：只有连接正常打开中 ，才能正常成功发送消息

				})

				// 注：只有连接正常打开中 ，才能正常收到消息
				this.socketTask.onMessage((res) => {
					let msg = res.data;
					console.log(msg);
					_this.navList[0].orderList[0].content.push(JSON.parse(msg))
					_this.hei()
				})




				// 这里仅是事件监听【如果socket关闭了会执行】
				this.socketTask.onClose(() => {
					console.log("已经被关闭了")
				})

			},
			goods: function(url) {
				uni.navigateTo({
					url: '../shop/shop?url=' + url,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			reach: function(page) {
				var that = this

				console.log(that.navList);
			},
			submit: function(e) {
				var that = this
				console.log(this.contact);
				if (this.contact !== "") {
					uni.request({
						url: that.url + '/h5/live/addComment',
						method: 'POST',

						data: {
							comment: that.contact
						},
						success: function(res) {
							console.log(res);
							that.hei()

							that.contact = ""

						}
					});
				} else {
					uni.showToast({
						title: "请输入内容",
						icon: 'none'
					})
				}


			},
			hei: function() {
				var that = this
				uni.createSelectorQuery().selectAll('.comIn').boundingClientRect(function(e) {
					console.log(e)
					console.log(e[e.length - 1].top);
					// that.$nextTick(function() {
					that.scrollTop = e[e.length - 1].top * that.navList[0].orderList[0].content.length //赋值为0即代表返回顶部
					// });
					console.log(that.scrollTop)
				}).exec()
			},
			changeTab(e) {
				this.tabCurrentIndex = e.target.current;
			},
			//顶部tab点击
			tabClick(index) {
				this.tabCurrentIndex = index;
			}
		}
	};
</script>

<style>
	.navbar {
		display: flex;
		width: 100%;
		height: 92upx;
		position: absolute;
		top: 498upx;

		background: #fff;
		box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.04);
		border-radius: 0px 0px 20upx 20upx;
		z-index: 9999999999999999999;

	}

	.navbar>.nav-item {
		width: 50%;
		height: 100%;
		justify-content: space-between;
		line-height: 92upx;
		position: relative;
	}

	.navbar text {
		text-align: center;
		display: block;
		width: 100%%;
		height: 100%;
		font-size: 26upx;
		font-family: Microsoft YaHei;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		position: relative;

	}

	.navbar image {
		width: 132upx;
		height: 30upx;
		position: absolute;
		left: 50%;
		margin-left: -66upx;
		top: 50upx;
		display: none;
	}

	.list {
		width: 100%;
		height: 70%;
	}

	.live {
		width: 100%;
		height: 30%;
		z-index: 9999999;
		position: relative;

	}

	iframe {
		display: block;
		width: 100%;
		height: 418upx;
		z-index: 9999999;
		/* position: relative; */
		border: none;
		position: absolute;
		top: 98upx;
		/* background: #007AFF; */
	}

	.com {
		width: 100%;
		height: 100%;
		overflow: auto;
		padding-top: 320upx;
		box-sizing: border-box;
	}

	#scrollview {
		width: 100%;
		height: 100%;
	}

	.specialty {
		width: 100%;
		height: 110%;
		overflow: auto;
		padding-top: 300upx;
		box-sizing: border-box;

	}

	.specialtyIn {
		width: 94%;
		margin: 98upx auto 0 auto;
		display: flex;
		/* flex-direction: column; */
		flex-wrap: wrap;
		justify-content: space-between;
		margin-top: 20upx;
	}

	.comIn {
		width: 94%;
		margin: 0 auto;
		position: relative;
		margin-bottom: 20upx;
		height: auto;

		overflow: auto;

	}

	.comIn>image {
		width: 80upx;
		height: 80upx;
		/* position: absolute; */
		/* left: 0; */
		float: left;
		clear: both;
	}

	.comIn>.right {
		display: inline-block;
		margin-top: 10upx;
		/* position: absolute; */
		/* left: 94upx; */
		float: left;
		margin-left: 94upx;
		clear: both;
		position: relative;
		top: -100upx;
	}

	.comIn>.right>text {
		font-size: 26upx;
		font-family: Microsoft YaHei;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
	}

	.comIn>.right>view {
		width: 80%;
		height: auto;
		background: rgba(255, 255, 255, 1);
		border-radius: 10px;
		padding: 10upx;
		margin-top: 10upx;
		word-break: break-all;
		font-size: 26upx;
		font-family: Microsoft YaHei;
		font-weight: 400;
		color: rgba(102, 102, 102, 1);
	}

	.current>text {
		font-weight: bold;
		font-size: 26upx;


	}

	.current>image {
		display: block;
	}

	.commit {
		width: 100%;
		height: 98upx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px -6px 16px 0px rgba(0, 0, 0, 0.04);
		position: fixed;
		bottom: 0
	}

	.commit>input {
		display: inline-block;
		width: 70%;
		height: 57upx;
		margin-top: 20upx;
		margin-left: 30upx;
	}

	.commit>button {
		display: inline-block;
		width: 148upx;
		height: 60upx;
		background: linear-gradient(-8deg, rgba(61, 179, 163, 1) 0%, rgba(145, 230, 115, 1) 100%);
		border-radius: 30upx;
		font-size: 26upx;
		font-family: Microsoft YaHei;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		float: right;
		margin-right: 30upx;
		margin-top: 18upx;
	}

	button::after {
		border: none;
	}

	.list1 {

		width: 340upx;
		height: 450upx;
		margin-bottom: 30upx;
		background: #fff;
		border-radius: 10px;
	}

	.list1>image {
		width: 340upx;
		height: 320upx;

	}

	.list1>.name {
		font-size: 26upx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		width: 80%;
		height: 34upx;
		word-wrap: break-word;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		display: block;
		margin: 0 auto;
		margin-top: 20upx;
		white-space: nowrap;
	}

	.list1>.price {
		width: 80%;
		display: block;
		margin: 0 auto;
		margin-top: 20upx;
		font-size: 28upx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(245, 49, 49, 1);
	}

	video::-webkit-media-controls {
		display: none !important;
	}

	.title {
		width: 100%;
		height: 98upx;
		background: #fff;
		line-height: 98upx;
		text-align: center;
		position: absolute;
		top: 0;
	}

	.title>text {
		line-height: 98upx;
		text-align: center;
		font-size: 32upx;
		font-weight: bold;
	}
</style>
