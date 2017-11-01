var count;
var banner;
var timer;
var init=function(){
	
	var banner=$(".banner");
	count=$(".list_item li img").size();
	$(".list_item").css("width",banner.width()*$(".list_item li img").size());
	$(".list_item li").css({"width":banner.width()+"px"}).children("img").css("width",banner.width());
	$(".nav_btn").children().remove();
	for(var i=0;i<count;i++){
		$(".nav_btn").append("<li></li>");
	}
	/*设置两边按钮(.prev,.next)样式*/
	//	banner.css("height",banner.height()-4);
	$(".btn_t span").css({"line-height":banner.height()+"px"});
	$("*").unbind("click");
	timer=clearInterval(timer);
	userEven();
}
var userEven=function(){
	/*按钮事件*/
	
	var now=0;//当前项
	var timed=function(){
		
		timer=setInterval(function(){
			if(now>=(count-1))now=0;
			else now++;
			move();
		},1000);
		
	}
	timed();
	var move=function(){
		console.log(now);
		$(".list_item").animate({"margin-left":$(".banner").width()*now*-1});
		
	}
	$(".nav_btn li").click(function(){
		timer=clearInterval(timer);
		now=$(this).index();
		move();
		timed();
	});
	$(".prev").click(function(){
		timer=clearInterval(timer);
		if(now<=0)now=count-1;
		else now--;
		move();
		timed();
	});
	$(".next").click(function(){
		timer=clearInterval(timer);
		if(now>=(count-1))now=0;
		else now++;
		move();
		timed();
	});
	
}



$(document).ready(function(){
	init();
	
});

$(window).resize(function(){
	init();
	
});