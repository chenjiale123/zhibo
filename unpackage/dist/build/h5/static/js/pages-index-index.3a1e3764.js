(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"54b1":function(e,t,i){"use strict";var n=i("288e"),o=n(i("bd86"));i("28a5"),i("7f7f"),i("b54a"),i("4917");var a=n(i("f499"));i("a481"),function(t,i){e.exports=i(t)}(window,function(e,t){function i(t,i,n){e.WeixinJSBridge?WeixinJSBridge.invoke(t,r(i),function(e){c(t,e,n)}):d(t,n)}function n(t,i,n){e.WeixinJSBridge?WeixinJSBridge.on(t,function(e){n&&n.trigger&&n.trigger(e),c(t,e,i)}):d(t,n||i)}function r(e){return(e=e||{}).appId=M.appId,e.verifyAppId=M.appId,e.verifySignType="sha1",e.verifyTimestamp=M.timestamp+"",e.verifyNonceStr=M.nonceStr,e.verifySignature=M.signature,e}function s(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function c(e,t,i){"openEnterpriseChat"==e&&(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var n=t.errMsg;n||(n=t.err_msg,delete t.err_msg,n=function(e,t){var i=e,n=m[i];n&&(i=n);var o="ok";if(t){var a=t.indexOf(":");"confirm"==(o=t.substring(a+1))&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),"access denied"!=(o=(o=o.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=o||(o="permission denied"),"config"==i&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return i+":"+o}(e,n),t.errMsg=n),(i=i||{})._complete&&(i._complete(t),delete i._complete),n=t.errMsg||"",M.debug&&!i.isInnerInvoke&&alert((0,a.default)(t));var o=n.indexOf(":");switch(n.substring(o+1)){case"ok":i.success&&i.success(t);break;case"cancel":i.cancel&&i.cancel(t);break;default:i.fail&&i.fail(t)}i.complete&&i.complete(t)}function l(e){if(e){for(var t=0,i=e.length;t<i;++t){var n=e[t],o=g[n];o&&(e[t]=o)}return e}}function d(e,t){if(!(!M.debug||t&&t.isInnerInvoke)){var i=m[e];i&&(e=i),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function u(){return(new Date).getTime()}function f(t){x&&(e.WeixinJSBridge?t():h.addEventListener&&h.addEventListener("WeixinJSBridgeReady",t,!1))}if(!e.jWeixin){var p,g={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},m=function(){var e={};for(var t in g)e[g[t]]=t;return e}(),h=e.document,v=h.title,b=navigator.userAgent.toLowerCase(),w=navigator.platform.toLowerCase(),k=!(!w.match("mac")&&!w.match("win")),y=-1!=b.indexOf("wxdebugger"),x=-1!=b.indexOf("micromessenger"),I=-1!=b.indexOf("android"),_=-1!=b.indexOf("iphone")||-1!=b.indexOf("ipad"),S=(N=b.match(/micromessenger\/(\d+\.\d+\.\d+)/)||b.match(/micromessenger\/(\d+\.\d+)/))?N[1]:"",T={initStartTime:u(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},C={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:_?1:I?2:-1,clientVersion:S,url:encodeURIComponent(location.href)},M={},L={_completes:[]},P={state:0,data:{}};f(function(){T.initEndTime=u()});var A=!1,V=[],O=(p={config:function(t){d("config",M=t);var n=!1!==M.check;f(function(){if(n)i(g.config,{verifyJsApiList:l(M.jsApiList)},function(){L._complete=function(e){T.preVerifyEndTime=u(),P.state=1,P.data=e},L.success=function(e){C.isPreVerifyOk=0},L.fail=function(e){L._fail?L._fail(e):P.state=-1};var e=L._completes;return e.push(function(){!function(e){if(!(k||y||M.debug||S<"6.0.2"||C.systemType<0)){var t=new Image;C.appId=M.appId,C.initTime=T.initEndTime-T.initStartTime,C.preVerifyTime=T.preVerifyEndTime-T.preVerifyStartTime,O.getNetworkType({isInnerInvoke:!0,success:function(e){C.networkType=e.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+C.version+"&o="+C.isPreVerifyOk+"&s="+C.systemType+"&c="+C.clientVersion+"&a="+C.appId+"&n="+C.networkType+"&i="+C.initTime+"&p="+C.preVerifyTime+"&u="+C.url;t.src=i}})}}()}),L.complete=function(t){for(var i=0,n=e.length;i<n;++i)e[i]();L._completes=[]},L}()),T.preVerifyStartTime=u();else{P.state=1;for(var e=L._completes,t=0,o=e.length;t<o;++t)e[t]();L._completes=[]}}),O.invoke||(O.invoke=function(t,i,n){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,r(i),n)},O.on=function(t,i){e.WeixinJSBridge&&WeixinJSBridge.on(t,i)})},ready:function(e){0!=P.state?e():(L._completes.push(e),!x&&M.debug&&e())},error:function(e){S<"6.0.2"||(-1==P.state?e(P.data):L._fail=e)},checkJsApi:function(e){i("checkJsApi",{jsApiList:l(e.jsApiList)},(e._complete=function(e){if(I){var t=e.checkResult;t&&(e.checkResult=JSON.parse(t))}e=function(e){var t=e.checkResult;for(var i in t){var n=m[i];n&&(t[n]=t[i],delete t[i])}return e}(e)},e))},onMenuShareTimeline:function(e){n(g.onMenuShareTimeline,{complete:function(){i("shareTimeline",{title:e.title||v,desc:e.title||v,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){n(g.onMenuShareAppMessage,{complete:function(t){"favorite"===t.scene?i("sendAppMessage",{title:e.title||v,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):i("sendAppMessage",{title:e.title||v,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){n(g.onMenuShareQQ,{complete:function(){i("shareQQ",{title:e.title||v,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){n(g.onMenuShareWeibo,{complete:function(){i("shareWeiboApp",{title:e.title||v,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){n(g.onMenuShareQZone,{complete:function(){i("shareQZone",{title:e.title||v,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){i("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){i("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){i("startRecord",{},e)},stopRecord:function(e){i("stopRecord",{},e)},onVoiceRecordEnd:function(e){n("onVoiceRecordEnd",e)},playVoice:function(e){i("playVoice",{localId:e.localId},e)},pauseVoice:function(e){i("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){i("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){n("onVoicePlayEnd",e)},uploadVoice:function(e){i("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){i("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){i("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){i("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(I){var t=e.localIds;try{t&&(e.localIds=JSON.parse(t))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){i(g.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){i("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){i("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===A?(A=!0,i("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(A=!1,0<V.length){var t=V.shift();wx.getLocalImgData(t)}},e))):V.push(e)},getNetworkType:function(e){i("getNetworkType",{},(e._complete=function(e){e=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var n=t.indexOf(":"),o=t.substring(n+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){i("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)}},(0,o.default)(p,"getLocation",function(e){i(g.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))}),(0,o.default)(p,"hideOptionMenu",function(e){i("hideOptionMenu",{},e)}),(0,o.default)(p,"showOptionMenu",function(e){i("showOptionMenu",{},e)}),(0,o.default)(p,"closeWindow",function(e){i("closeWindow",{},e=e||{})}),(0,o.default)(p,"hideMenuItems",function(e){i("hideMenuItems",{menuList:e.menuList},e)}),(0,o.default)(p,"showMenuItems",function(e){i("showMenuItems",{menuList:e.menuList},e)}),(0,o.default)(p,"hideAllNonBaseMenuItem",function(e){i("hideAllNonBaseMenuItem",{},e)}),(0,o.default)(p,"showAllNonBaseMenuItem",function(e){i("showAllNonBaseMenuItem",{},e)}),(0,o.default)(p,"scanQRCode",function(e){i("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(_){var t=e.resultStr;if(t){var i=JSON.parse(t);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e))}),(0,o.default)(p,"openAddress",function(e){i(g.openAddress,{},(e._complete=function(e){var t;(t=e).postalCode=t.addressPostalCode,delete t.addressPostalCode,t.provinceName=t.proviceFirstStageName,delete t.proviceFirstStageName,t.cityName=t.addressCitySecondStageName,delete t.addressCitySecondStageName,t.countryName=t.addressCountiesThirdStageName,delete t.addressCountiesThirdStageName,t.detailInfo=t.addressDetailInfo,delete t.addressDetailInfo,e=t},e))}),(0,o.default)(p,"openProductSpecificView",function(e){i(g.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)}),(0,o.default)(p,"addCard",function(e){for(var t=e.cardList,n=[],o=0,a=t.length;o<a;++o){var r=t[o],s={card_id:r.cardId,card_ext:r.cardExt};n.push(s)}i(g.addCard,{card_list:n},(e._complete=function(e){var t=e.card_list;if(t){for(var i=0,n=(t=JSON.parse(t)).length;i<n;++i){var o=t[i];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=t,delete e.card_list}},e))}),(0,o.default)(p,"chooseCard",function(e){i("chooseCard",{app_id:M.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))}),(0,o.default)(p,"openCard",function(e){for(var t=e.cardList,n=[],o=0,a=t.length;o<a;++o){var r=t[o],s={card_id:r.cardId,code:r.code};n.push(s)}i(g.openCard,{card_list:n},e)}),(0,o.default)(p,"consumeAndShareCard",function(e){i(g.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)}),(0,o.default)(p,"chooseWXPay",function(e){i(g.chooseWXPay,s(e),e)}),(0,o.default)(p,"openEnterpriseRedPacket",function(e){i(g.openEnterpriseRedPacket,s(e),e)}),(0,o.default)(p,"startSearchBeacons",function(e){i(g.startSearchBeacons,{ticket:e.ticket},e)}),(0,o.default)(p,"stopSearchBeacons",function(e){i(g.stopSearchBeacons,{},e)}),(0,o.default)(p,"onSearchBeacons",function(e){n(g.onSearchBeacons,e)}),(0,o.default)(p,"openEnterpriseChat",function(e){i("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)}),(0,o.default)(p,"launchMiniProgram",function(e){i("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var t=e.split("?")[0],i=e.split("?")[1];return t+=".html",void 0!==i?t+"?"+i:t}}(e.path),envVersion:e.envVersion},e)}),(0,o.default)(p,"miniProgram",{navigateBack:function(e){e=e||{},f(function(){i("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)})},navigateTo:function(e){f(function(){i("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)})},redirectTo:function(e){f(function(){i("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)})},switchTab:function(e){f(function(){i("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)})},reLaunch:function(e){f(function(){i("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)})},postMessage:function(e){f(function(){i("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)})},getEnv:function(t){f(function(){t({miniprogram:"miniprogram"===e.__wxjs_environment})})}}),p),E=1,B={};return h.addEventListener("error",function(e){if(!I){var t=e.target,i=t.tagName,n=t.src;if(("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i)&&-1!=n.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var o=t["wx-id"];if(o||(o=E++,t["wx-id"]=o),B[o])return;B[o]=!0,wx.ready(function(){wx.getLocalImgData({localId:n,success:function(e){t.src=e.localData}})})}}},!0),h.addEventListener("load",function(e){if(!I){var t=e.target,i=t.tagName;if(t.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var n=t["wx-id"];n&&(B[n]=!1)}}},!0),t&&(e.wx=e.jWeixin=O),O}var N})},"5dac":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={components:{},data:function(){return{style:{pageHeight:0,contentViewHeight:0,footViewHeight:90,mitemHeight:0},timer:"",contact:"",scrollTop:0,current:1,tabCurrentIndex:0,url:"http://l.qianyipan.com",navList:[],url1:"ws://l.qianyipan.com:9502",page:1,id:"",socketTask:null}},onLoad:function(e){var t=this,n=i("54b1");this.tabCurrentIndex=0,t.hei(),t.socket(),console.log(n),n.ready(function(){console.log("444"),n.updateAppMessageShareData({title:"千艺直播",desc:"",link:"http://l.qianyipan.com/live/index.html#/",imgUrl:"",success:function(){}})})},onShow:function(){var e=this;uni.request({url:e.url+"/h5/live/getData",success:function(t){console.log(t),e.navList=t.data.navList,e.navList[0].orderList=[t.data.navList[0].orderList],e.navList[1].orderList1=[t.data.navList[1].orderList1]}})},methods:{socket:function(){var e=this;this.socketTask=uni.connectSocket({url:this.url1,success:function(e){console.log("websocket连接成功")}}),this.socketTask.onOpen(function(e){}),this.socketTask.onMessage(function(t){var i=t.data;console.log(i),e.navList[0].orderList[0].content.push(JSON.parse(i)),e.hei()}),this.socketTask.onClose(function(){console.log("已经被关闭了")})},goods:function(e){uni.navigateTo({url:"../shop/shop?url="+e,success:function(e){},fail:function(){},complete:function(){}})},reach:function(e){var t=this;console.log(t.navList)},submit:function(e){var t=this;console.log(this.contact),""!==this.contact?uni.request({url:t.url+"/h5/live/addComment",method:"POST",data:{comment:t.contact},success:function(e){console.log(e),t.hei(),t.contact=""}}):uni.showToast({title:"请输入内容",icon:"none"})},hei:function(){var e=this;uni.createSelectorQuery().selectAll(".comIn").boundingClientRect(function(t){console.log(t),console.log(t[t.length-1].top),e.scrollTop=t[t.length-1].top*e.navList[0].orderList[0].content.length,console.log(e.scrollTop)}).exec()},changeTab:function(e){this.tabCurrentIndex=e.target.current},tabClick:function(e){this.tabCurrentIndex=e}}};t.default=n},"894d":function(e,t,i){var n=i("b5b1");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=i("4f06").default;o("b3d391b6",n,!0,{sourceMap:!1,shadowMode:!1})},"9ad4":function(e,t,i){"use strict";i.r(t);var n=i("cc84"),o=i("bb28");for(var a in o)"default"!==a&&function(e){i.d(t,e,function(){return o[e]})}(a);i("c93d");var r=i("2877"),s=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,"7e0b888a",null);t["default"]=s.exports},b54a:function(e,t,i){"use strict";i("386b")("link",function(e){return function(t){return e(this,"a","href",t)}})},b5b1:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".navbar[data-v-7e0b888a]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:%?92?%;position:absolute;top:%?498?%;background:#fff;-webkit-box-shadow:0 6px 16px 0 rgba(0,0,0,.04);box-shadow:0 6px 16px 0 rgba(0,0,0,.04);border-radius:0 0 %?20?% %?20?%;z-index:10000000000000000000}.navbar>.nav-item[data-v-7e0b888a]{width:50%;height:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;line-height:%?92?%;position:relative}.navbar uni-text[data-v-7e0b888a]{text-align:center;display:block;width:100%%;height:100%;font-size:%?26?%;font-family:Microsoft YaHei;font-weight:400;color:#333;position:relative}.navbar uni-image[data-v-7e0b888a]{width:%?132?%;height:%?30?%;position:absolute;left:50%;margin-left:%?-66?%;top:%?50?%;display:none}.list[data-v-7e0b888a]{width:100%;height:70%}.live[data-v-7e0b888a]{width:100%;height:30%;z-index:9999999;position:relative}iframe[data-v-7e0b888a]{display:block;width:100%;height:%?418?%;z-index:9999999;\n\t/* position: relative; */border:none;position:absolute;top:%?98?%\n\t/* background: #007AFF; */}.com[data-v-7e0b888a]{width:100%;height:100%;overflow:auto;padding-top:%?320?%;-webkit-box-sizing:border-box;box-sizing:border-box}#scrollview[data-v-7e0b888a]{width:100%;height:100%}.specialty[data-v-7e0b888a]{width:100%;height:110%;overflow:auto;padding-top:%?300?%;-webkit-box-sizing:border-box;box-sizing:border-box}.specialtyIn[data-v-7e0b888a]{width:94%;margin:%?98?% auto 0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;\n\t/* flex-direction: column; */-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-top:%?20?%}.comIn[data-v-7e0b888a]{width:94%;margin:0 auto;position:relative;margin-bottom:%?20?%;height:auto;overflow:auto}.comIn>uni-image[data-v-7e0b888a]{width:%?80?%;height:%?80?%;\n\t/* position: absolute; */\n\t/* left: 0; */float:left;clear:both}.comIn>.right[data-v-7e0b888a]{display:inline-block;margin-top:%?10?%;\n\t/* position: absolute; */\n\t/* left: 94upx; */float:left;margin-left:%?94?%;clear:both;position:relative;top:%?-100?%}.comIn>.right>uni-text[data-v-7e0b888a]{font-size:%?26?%;font-family:Microsoft YaHei;font-weight:400;color:#333}.comIn>.right>uni-view[data-v-7e0b888a]{width:80%;height:auto;background:#fff;border-radius:10px;padding:%?10?%;margin-top:%?10?%;word-break:break-all;font-size:%?26?%;font-family:Microsoft YaHei;font-weight:400;color:#666}.current>uni-text[data-v-7e0b888a]{font-weight:700;font-size:%?26?%}.current>uni-image[data-v-7e0b888a]{display:block}.commit[data-v-7e0b888a]{width:100%;height:%?98?%;background:#fff;-webkit-box-shadow:0 -6px 16px 0 rgba(0,0,0,.04);box-shadow:0 -6px 16px 0 rgba(0,0,0,.04);position:fixed;bottom:0}.commit>uni-input[data-v-7e0b888a]{display:inline-block;width:70%;height:%?57?%;margin-top:%?20?%;margin-left:%?30?%}.commit>uni-button[data-v-7e0b888a]{display:inline-block;width:%?148?%;height:%?60?%;background:-o-linear-gradient(98deg,#3db3a3 0,#91e673 100%);background:linear-gradient(-8deg,#3db3a3,#91e673);border-radius:%?30?%;font-size:%?26?%;font-family:Microsoft YaHei;font-weight:400;color:#fff;float:right;margin-right:%?30?%;margin-top:%?18?%}uni-button[data-v-7e0b888a]:after{border:none}.list1[data-v-7e0b888a]{width:%?340?%;height:%?450?%;margin-bottom:%?30?%;background:#fff;border-radius:10px}.list1>uni-image[data-v-7e0b888a]{width:%?340?%;height:%?320?%}.list1>.name[data-v-7e0b888a]{font-size:%?26?%;font-family:PingFang SC;font-weight:500;color:#333;width:80%;height:%?34?%;word-wrap:break-word;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;-webkit-box-orient:vertical;-webkit-line-clamp:1;display:block;margin:0 auto;margin-top:%?20?%;white-space:nowrap}.list1>.price[data-v-7e0b888a]{width:80%;display:block;margin:0 auto;margin-top:%?20?%;font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#f53131}uni-video[data-v-7e0b888a]::-webkit-media-controls{display:none!important}.title[data-v-7e0b888a]{width:100%;height:%?98?%;background:#fff;line-height:%?98?%;text-align:center;position:absolute;top:0}.title>uni-text[data-v-7e0b888a]{line-height:%?98?%;text-align:center;font-size:%?32?%;font-weight:700}",""])},bb28:function(e,t,i){"use strict";i.r(t);var n=i("5dac"),o=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,function(){return n[e]})}(a);t["default"]=o.a},c93d:function(e,t,i){"use strict";var n=i("894d"),o=i.n(n);o.a},cc84:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"navbar"},e._l(e.navList,function(t,n){return i("v-uni-view",{key:n,staticClass:"nav-item",class:{current:e.tabCurrentIndex===n},on:{click:function(t){t=e.$handleEvent(t),e.tabClick(n)}}},[i("v-uni-image",{attrs:{src:"../../static/xuanzhong@2x.png"}}),i("v-uni-text",[e._v(e._s(t.text))])],1)}),1),i("iframe",{attrs:{src:e.navList[0].orderList[0].src}}),e._l(e.navList,function(t,n){return e.tabCurrentIndex===n?i("v-uni-view",{key:n,staticClass:"list"},[e._l(t.orderList,function(t,n){return i("v-uni-view",{key:n,staticClass:"live"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-text",[e._v(e._s(t.title))])],1)],1)}),e._l(t.orderList1,function(t,n){return i("v-uni-view",{key:n,staticClass:"live"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-text",[e._v(e._s(t.title))])],1)],1)}),e._l(t.orderList,function(t,n){return i("v-uni-view",{key:n,staticClass:"com"},[i("v-uni-scroll-view",{attrs:{id:"scrollview","scroll-y":"true","scroll-with-animation":!0,"scroll-top":e.scrollTop},on:{scrolltolower:function(t){t=e.$handleEvent(t),e.reach(e.page)}}},e._l(t.content,function(t,n){return i("v-uni-view",{key:n,staticClass:"comIn"},[i("v-uni-image",{attrs:{src:e.url+"/upload/head/"+t.head,mode:""}}),i("v-uni-view",{staticClass:"right"},[i("v-uni-text",[e._v(e._s(t.nickname))]),i("v-uni-view",[e._v(e._s(t.comment))])],1)],1)}),1),i("v-uni-view",{staticClass:"commit"},[i("v-uni-input",{attrs:{type:"text",placeholder:"一起来聊聊吧~"},model:{value:e.contact,callback:function(t){e.contact=t},expression:"contact"}}),i("v-uni-button",{on:{click:function(t){t=e.$handleEvent(t),e.submit()}}},[e._v("发送")])],1)],1)}),e._l(t.orderList1,function(t,n){return i("v-uni-view",{key:n,staticClass:"specialty"},[i("v-uni-view",{key:n,staticClass:"specialtyIn"},e._l(t.content,function(t,n){return i("v-uni-view",{key:n,staticClass:"list1",on:{click:function(i){i=e.$handleEvent(i),e.goods(t.url)}}},[i("v-uni-image",{attrs:{src:"http://dev.static.qianyipan.com/"+t.image,mode:""}}),i("v-uni-text",{staticClass:"name"},[e._v(e._s(t.name))]),i("v-uni-text",{staticClass:"price"},[e._v("￥"+e._s(t.price))])],1)}),1)],1)})],2):e._e()})],2)},o=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return o})}}]);