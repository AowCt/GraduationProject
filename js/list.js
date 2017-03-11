$(function(){
	var list = {
		init:function(){
			this.load();
		},
		//页面加载
		load:function(){
			//加载头部尾部
			$(".head").load("head.html");
			$(".footer").load("footer.html");
			
			/**
			 * 加载列表
			 */
			var _self = this;
			$.get("json/list.json",function(data){
				
//				console.log(data);
//				for(var i = 0; i<24; i++){
//					var  strLi = "<li><dl class='m_goods_list dl_hover'><dd><a target='_blank' href='javascript:;'><img src='"+data[i].images+"'></a></dd><dt><div class='s_goods_name'><a href='javascript:;'>"+data[i].name+"</a></div><div class='tPrc'><em class='s_goods_num'>销量"+data[i].discount+"</em><b class='s_price'>"+data[i].price+"</b><i class='red'>【"+data[i].salse+"折】</i></div><div class='hover_info'><a href='javascript:;' class='info_ans pc_to_ntalk' title='询最低价'>询最低价<em></em></a><a href='javascript:;' class='info_comp' id='compare_14652'>对比<input id='product_14652' type='checkbox' value=''></a><input type='hidden' id='goods_id' value='14652'></div></dt></dl></li>";
//					$(".goods_list ul").append(strLi);
//				}
				_self.goodsList(0)
				
				//动态加载span标签（页数）
				for(var i = 0; i<data.length/24; i++){
					var  strSpan = "<span class='page-wrap'>"+(i+1)+"</span>";
					$(".pages .page_nav p").append(strSpan);
				}
				$(".page_nav p span:eq(0)").addClass("current");
				
				console.log($(".pages .page_nav p span").length);
				//点击首页
				$(".page-first").on("click",function(){
					$(".goods_list ul").html("");
					_self.goodsList(0);
				});
				//点击尾页
				$(".page-last").on("click",function(){
					$(".goods_list ul").html("");
					_self.goodsList($(".page_nav p span").length-1);
				});
				//点击下一页
				$(".page-next").on("click",function(){
					$(".goods_list ul").html("");
//					console.log($(".page_nav p").find($(".current")).index());					
					
					
					$(".page_nav p").find($(".current")).next().addClass("current");
					$(".page_nav p").find($(".current")).last().prevAll().removeClass("current");
//					if($(".page_nav p").find($(".current")).index() == 3){
//						$(".goods_list ul").html("");
//						_self.goodsList($(".page_nav p span").length-1);
//					}
					_self.goodsList($(".page_nav p").find($(".current")).index());
				});
				//点击上一页
				$(".page-provide").on("click",function(){
					$(".goods_list ul").html("");
//					console.log($(".page_nav p").find($(".current")).index());					
					
					
					$(".page_nav p").find($(".current")).prev().addClass("current");
					$(".page_nav p").find($(".current")).first().nextAll().removeClass("current");
//					if($(".page_nav p").find($(".current")).index() == 3){
//						$(".goods_list ul").html("");
//						_self.goodsList($(".page_nav p span").length-1);
//					}
					_self.goodsList($(".page_nav p").find($(".current")).index());
				});
				
				//点击确定，跳转到第几页
				$("#btnJtp").on("click",function(){
					$(".goods_list ul").html("");
					
					console.log(parseInt($("#jtp").val())-1)
					$(".page_nav p span").eq(parseInt($("#jtp").val())-1).addClass("current");
					$(".page_nav p span").eq(parseInt($("#jtp").val())-1).siblings().removeClass("current");
					_self.goodsList(parseInt($("#jtp").val())-1);
				});
				
				//点击页数
				$(".page_nav p").on("click","span",function(){
					
					let m = $(".page_nav p span").index($(this));
					
					$(this).siblings().removeClass("current");
					$(this).addClass("current");
					$(".goods_list ul").html("");
					console.log($(".goods_list ul").html())
					_self.goodsList(m);
					
				});
				//判断输入框
				$("#jtp").keyup(function(){
					var n = $("#jtp").val();
					n1 = n?n.replace(/\D/g,""):"";
					$("#jtp").val(n1)
				});
				
			},"json")
				console.log($(".pages .page_nav p span").length)
//				$(".page_nav p span:eq(0)").addClass("current");			
		},
		//ajax加载商品列表
		goodsList:function(m){
			$.get("json/list.json",function(data){
				let _start = m*24;
				let _end = (m+1)*24<data.length?(m+1)*24:data.length;
				for(var i = _start; i<_end; i++){
					var  strLi = "<li><dl class='m_goods_list dl_hover'><dd><a target='_blank' href='javascript:;'><img src='"+data[i].images+"'></a></dd><dt><div class='s_goods_name'><a href='javascript:;'>"+data[i].name+"</a></div><div class='tPrc'><em class='s_goods_num'>销量"+data[i].discount+"</em><b class='s_price'>"+data[i].price+"</b><i class='red'>【"+data[i].salse+"折】</i></div><div class='hover_info'><a href='javascript:;' class='info_ans pc_to_ntalk' title='询最低价'>询最低价<em></em></a><a href='javascript:;' class='info_comp' id='compare_14652'>对比<input id='product_14652' type='checkbox' value=''></a><input type='hidden' id='goods_id' value='14652'></div></dt></dl></li>";
					$(".goods_list ul").append(strLi);
				}
				
			},"json");
		}
		
	};
	list.init();
});
