$(function(){
//	console.log($(".low_box"))
	$(".bot_low").find("dl").last().css("border-bottom","2px solid #b01330");
	$(".bot_low").on("mouseenter","dl",function(){
		$(this).addClass("active");
		$(this).find("dt a").css("color","#000");
		$(this).find(".dd_one a").css("color","#352e2f");
		$(this).find(".dd_two").show();
//		console.log($(this))
	});
	$(".bot_low").on("mouseleave","dl",function(){
		$(this).removeClass("active");
		$(this).find("dt a").css("color","#fff");
		$(this).find(".dd_one a").css("color","#ccc");
		$(this).find(".dd_two").hide();
//		console.log($(this))
	});
})
