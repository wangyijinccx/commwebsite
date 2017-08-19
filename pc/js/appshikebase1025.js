$(function(){
	menushop();
});
function menushop(){
	$('body').prepend('<nav class="menubox cf">\
		<div class="menu w1200 cf">\
			<h1 style="display: inline-block;float: left;margin-left:112px"><a href="http://appshike.com" class="sk_logo">应用试客</a></h1>\
			<ul class="menulis">\
				<li><a href="http://appshike.com/pc/sk_news/news_lis.html">试客新闻</a></li>\
				<li><a href="http://appshike.com/pc/sk_strategy/strategy_list.html">试客攻略</a></li>\
				<li><a href="http://appshike.com/pc/sk_service/service_lis.html">客服 Q&A</a></li>\
				<li><a href="http://weibo.com/p/1006065041946604/home?profile_ftype=1&amp;is_all=1#_rnd1470646525100" target="_blank">关注微博</a></li>\
			</ul>\
		</div>\
	</nav>');
	$('body').append('<footer>\
		<div class="w1200 cf footerbox">\
			<h2 class="fl"><a href="http://appshike.com" class="footlogo">应用试客</a></h2>\
			<div class="fl ml162">\
				<span class="footinfo">\
					<h4>公司名称</h4>\
					北京多点科技股份有限公司\
				</span>\
				<span class="footinfo">\
					<h4>公司地址</h4>\
					北京市朝阳区朝阳路85号院5号楼C座\
				</span>	\
				<span class="footinfo">\
					<h4>商业合作</h4>\
					business@itry.com\
				</span>	\
				<span class="footinfo">\
					<h4>关注我们</h4>\
					<a href="http://weibo.com/p/1006065041946604/home?profile_ftype=1&is_all=1#_rnd1470646525100" target="_blank">@应用试客</a>\
				</span>\
			</div>\
		</div>\
		<p class="Copyright">Copyright © 2017 appshike.com, All rights reserved. 京ICP备12011038号-5</p>\
	</footer>');
};
$(function(){
	$(".Joinsk .btn_join").mouseout(function(){
		ga('send', {
  hitType: 'event',
  eventCategory: 'index_pc',
  eventAction: 'view',
  eventLabel: 'qr'
});
    	$(".sk_qrcode").addClass("fadeInDown")
    })
})
//视频
function playmp4show(){
	ga('send', {
  hitType: 'event',
  eventCategory: 'index_pc',
  eventAction: 'play',
  eventLabel: 'video'
});
	$('body').append('<div class="videobox">\
			<div class="playmp4">\
			<video controls="controls" autoplay="autoplay" src="http://gslb.miaopai.com/stream/HlBFfzTL0eVn3lwExhQw1yHhTz02hZr4.mp4" width="640px" height="360px" poster="images/videocover.jpg"></video>\
				<span class="close_off" onclick="$(\'.videobox\').remove()"></span>\
			</div>\
		</div>');
};
$(document).ready(function(){
	$(window).bind("scroll", function () {
        if ($(this).scrollTop() > 760) {
            $(".menubox").addClass('now');
        } else {
           $(".menubox").removeClass('now');
        }
    });
 });
 