if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
	var version = parseFloat(RegExp.$1);
	if (version > 2.3) {
		var phoneScale = parseInt(window.screen.width) / 750;
		document.write('<meta name="viewport" content="width=750, minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi">');
	} else {
		document.write('<meta name="viewport" content="width=750, target-densitydpi=device-dpi">');
	}
} else if(screen.width > 450){
	var phoneScale = parseInt(window.screen.width) / 750;
	document.write('<meta content="width=device-width,initial-scale=1.0,maximum-scale=0.77,user-scalable=no" id="viewport" name="viewport">');
} else if(/Version\/(10)/.test(navigator.userAgent)){
	document.write('<meta name="viewport" content="width=750, user-scalable=no, target-densitydpi=device-dpi">');
	document.documentElement.addEventListener('touchstart', function (event) {
	  //event.preventDefault();
	  if (event.touches.length > 1) {
	    event.preventDefault();
	  }
	}, false);
	var click_time=0;
	document.documentElement.addEventListener('touchend', function (event) {
	  	var nowtime = new Date().getTime();
	  	if(nowtime-click_time<400){
	  		event.preventDefault();	
	  	}
	  	click_time = nowtime;
	}, false);
	
} else{
	document.write('<meta name="viewport" content="width=750, user-scalable=no, target-densitydpi=device-dpi">');
}

//$(function(){
////	document.body.addEventListener('touchstart', function () {});
//	document.addEventListener('touchend',function(){},false);
//	$.get("newmenu.html", function(data) {
//			$("#menu").html(data);
//	});
//});
function breadcrumb(){
	$('.wrap').append('<div class="breadcrumb"><a href="javascript:history.go(-1);" class="sk_return"></a><h1 class="titel"></h1><a href="xiaoxizhongxin.html" class="sk_notice number bg_blue" data-num="83"></a></div>');
 	$(".breadcrumb .titel").html(document.title);
};

$(function(){
	MenuFooter();
});
//<span class="sidebar_minmenu fl"></span> 左航行入口
function MenuFooter(){
	var host = "http://192.168.1.20/";
	$(".wrap").prepend('<div class="mob_nav cf"><h1 class="fl"><span class="sidebar_minmenu fl" onclick="SidebarShow()"></span><a href="'+host+'xgm.html" class="sk_navlogo">西瓜妹</a></h1><a href="javascript:void(0)" class="nav_btntry fr" onclick="QRcodeShow()">开始试玩</a></div>\
	<div class="tinyboxbj" onclick="SidebarHide();"></div>\
		<div class="sidebarbox">\
			<div class="cf sidebar_top">\
				<span class="closesidebar" onclick="SidebarHide()"></span>\
				<a href="'+host+'xgm.html" class="sk_navlogo">西瓜妹</a>\
			</div>\
			<span class="sidebar_btntryplay" onclick="SidebarHide();QRcodeShow();">开始试玩</span>\
			<div class="menulis">\
				<p><a href="'+host+'mob/html/operation.html">业务分类</a></p>\
				<p><a href="'+host+'mob/html/gamelist.html">游戏列表</a></p>\
				<p><a href="'+host+'mob/html/cooperation.html">合作模式</a></p>\
				<p><a href="'+host+'mob/html/recruiting.html">招募</a></p>\
			</div>\
		</div>');
	$(".wrap").append('<footer class="footlayout cf" id="attachmentfooter"><div class="service cf"><a href="'+host+'xgm.html" class="footlogo">西瓜妹</a>\
				<ul class="service_lis fl">\
					<li>\
						<label>公司名称</label>\
						北京久如科技股份有限公司\
					</li>\
					<li>\
						<label>公司地址</label>\
						北京市朝阳区望京soho塔1b座701\
					</li>\
					<li>\
						<label>商业合作</label>\
						service@xiguamei.com\
					</li>\
					<li>\
						<label>官方微博</label>\
						西瓜妹小工具\
					</li>\
				</ul>\
			</div>\
			<p class="copyright">（暂无）Copyright © 2017 appshike.com, All rights reserved.京ICP备12011038号-5</p>\
		</footer>');
}
//左侧菜单开关
function SidebarShow(){
	$(".tinyboxbj").css("left","0%");
	$(".sidebarbox").css("left","0%");
}
function SidebarHide(){
	$(".tinyboxbj").css("left","-100%");
	$(".sidebarbox").css("left","-80%");
}//end

//二维码弹层
function QRcodeShow(){
	location.href="http://commapi.xiguamei.com/api/share.jsp?invite=18601042108";
	//location.href="http://shotgun.appshike.com/orochi/invite/shareback/u7VH5GcD3KCPIDZ3dokXDg__?utm_source=website&utm_medium=url&utm_campaign=phone";
	//$(".wrap").append('<div class="tinybox_h"><div class="tinybox_con"><div class="qrcodebox"><img src="/m/images/qrcode1025.png" alt=""/><p>保存图片 微信扫码</p></div><span class="close_off" onclick="$(\'.tinybox_h\').remove()"></span></div></div>');
}
function gaEvent(event) {
 /* ga('send', 'event', {
    eventCategory: 'index_m',
    eventAction: 'click',
    eventLabel: event.target.href
  });*/
  QRcodeShow();
}
//视频教程
function playmp4(){
	ga('send', {
  hitType: 'event',
  eventCategory: 'index_m',
  eventAction: 'play',
  eventLabel: 'video'
});
	if($('.playbox').length==0){
	$('.wrap').append('<div class="playbox">\
			<div class="tinybox">\
				<video controls="controls" autoplay="autoplay" src="http://gslb.miaopai.com/stream/GSLtU1g~VUPoWBfWn0lBHQ__.mp4" height="360px" poster="http://static.appshike.com/pc/images/videocover.jpg"></video>\
				<span class="close_off" onclick="$(\'.playbox\').remove()"></span>\
			</div>\
		</div>');
   }
};

//百度统计
/*
 var _hmt = _hmt || [];
 (function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?dad90ae125e44a3bbb3c9576169be319";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);

  var hm1 = document.createElement("script");
  hm1.src = "//hm.baidu.com/hm.js?bdac52987907ba51f2a8d1092a3f6e95";
  var s1 = document.getElementsByTagName("script")[0]; 
  s1.parentNode.insertBefore(hm1, s1);

  var hm2 = document.createElement("script");
  hm2.src = "https://hm.baidu.com/hm.js?fd90d696af3a682872d9c1717b2fe5f6";
  var s2 = document.getElementsByTagName("script")[0]; 
  s2.parentNode.insertBefore(hm2, s2);

  var hm3 = document.createElement("script");
  hm3.src = "https://hm.baidu.com/hm.js?ae31417bca17cdac6ecffa21c4b36556";
  var s3 = document.getElementsByTagName("script")[0]; 
  s3.parentNode.insertBefore(hm3, s3);
})();
*/
//获取
/*
$(function(){
	$(".article").css("min-height",$(window).height()-$(".footlayout").height()-220);
});
*/






















