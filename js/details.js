$(function(){
	var details = {
		init:function(){
			this.load();
		},
		//加载头尾部分
		load:function(){
			$(".head").load("head.html");
			$(".footer").load("footer.html");
		}
	};
	details.init();
});
