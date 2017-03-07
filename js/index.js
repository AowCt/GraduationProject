$(function(){
	var banner = {
		init:function(){
			this.load();
		},
		load:function(){
			$(".head").load("head.html");//添加head.html
		}
	}
	banner.init();
})
