$(function(){
//	console.log($(".low_box"))
	$(".bot_low").find("dl").last().css("border-bottom","2px solid #2738da");
	$(".bot_low").on("mouseenter","dl",function(){
		$(this).addClass("active");
		$(this).find("dt a").css("color","#2738DA");
		$(this).find(".dd_one a").css("color","#1194E0");
		$(this).find(".dd_two").show();
		console.log($(this))
	});
	$(".bot_low").on("mouseleave","dl",function(){
		$(this).removeClass("active");
		$(this).find("dt a").css("color","#fff");
		$(this).find(".dd_one a").css("color","#ccc");
		$(this).find(".dd_two").hide();
		console.log($(this))
	});
})
