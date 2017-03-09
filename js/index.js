$(function(){
	var homepage = {
		init:function(){
			this.load();
			this.trans();
			this.exchange();
			this.bigImg();
		},
		/**
		 * 添加网页
		 */
		load:function(){
//			$.ajaxsetup ({
//		        cache: false
//		    });
			$(".head").load("head.html");//添加head.html
			$(".footer").load("footer.html");//添加footer.html
		},
		/**
		 * 鼠标移入移出，图片上下移动
		 */
		trans:function(){
			$(".zoonRightUl").on("mouseenter","img",function(){
				$(this).animate({"bottom":"0"},500);
			});
			$(".zoonRightUl").on("mouseleave","img",function(){
				$(this).animate({"bottom":"-15px"},500);
			});
		},
		/**
		 * 鼠标移入移出，图片文字交换
		 */
		exchange:function(){
			/**
				 * 专区图文交换
				 */
			$(".zoonBtRoot").on("mouseenter","li",function(){
//				console.log($(this).find("img"))
				$(this).find("img").css("display","none");
				$(this).find("i").css("display","inline-block");
			});
			$(".zoonBtRoot").on("mouseleave","li",function(){
				
				$(this).find("img").css("display","inline-block");
				$(this).find("i").css("display","none");
			});
			
			/**
			 * 热门品牌图文交换及线条变化
			 */
			$(".fifavBot").on("mouseenter",".hotBrand",function(){
				$(this).find(".exchangeImg").css("opacity",1);
				$(this).find("img").css("opacity",0);
				$(this).find(".hotTop").animate({"width":"166px"},500);
				$(this).find(".hotBottom").animate({"width":"166px"},500);
				$(this).find(".hotLeft").animate({"height":"85px"},500);
				$(this).find(".hotRight").animate({"height":"85px"},500);
			});
			$(".fifavBot").on("mouseleave",".hotBrand",function(){
				$(this).find(".exchangeImg").css("opacity",0);
				$(this).find("img").css("opacity",1);
				$(this).find(".hotTop").animate({"width":"0"},500);
				$(this).find(".hotBottom").animate({"width":"0"},500);
				$(this).find(".hotLeft").animate({"height":"0"},500);
				$(this).find(".hotRight").animate({"height":"0"},500);
				
			});
		},
		//图片放大
		bigImg:function(){
			
			$(".p1").on("mouseenter","img",function(){
				$(this).animate({"width":"103%","height":"103%"},500);
				
			});
			$(".p1").on("mouseleave","img",function(){
				$(this).animate({"width":"100%","height":"100%"},500);
			});
		}
		
		
	}
	homepage.init();
})
