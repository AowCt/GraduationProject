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
			$.get("json/list.json",function(data){
				
//				console.log(data);
				for(var i = 0; i<16; i++){
					var  strLi = "<li><dl class='m_goods_list dl_hover'><dd><a target='_blank' href='javascript:;'><img src='"+data[i].images+"'></a></dd><dt><div class='s_goods_name'><a href='javascript:;'>"+data[i].name+"</a></div><div class='tPrc'><em class='s_goods_num'>销量"+data[i].discount+"</em><b class='s_price'>"+data[i].price+"</b><i class='red'>【"+data[i].salse+"折】</i></div><div class='hover_info'><a href='javascript:;' class='info_ans pc_to_ntalk' title='询最低价'>询最低价<em></em></a><a href='javascript:;' class='info_comp' id='compare_14652'>对比<input id='product_14652' type='checkbox' value=''></a><input type='hidden' id='goods_id' value='14652'></div></dt></dl></li>";
					$(".goods_list ul").append(strLi);
				}
				
			},"json")
				
				
				for(var i=0; i<$(".page_nav p span").length/16;i++){
					$(".page_nav p").on("click","span",function(){
						let m = $(".page_nav p span").index($(this));
						
						$(this).siblings().removeClass("current");
						$(this).addClass("current");
						$(".goods_list ul").html("");
						console.log($(".goods_list ul").html())
						$.get("json/list.json",function(data){
							let _start = m*16;
							let _end = (m+1)*16<data.length?(m+1)*16:data.length;
							for(var i = _start; i<_end; i++){
								var  strLi = "<li><dl class='m_goods_list dl_hover'><dd><a target='_blank' href='javascript:;'><img src='"+data[i].images+"'></a></dd><dt><div class='s_goods_name'><a href='javascript:;'>"+data[i].name+"</a></div><div class='tPrc'><em class='s_goods_num'>销量"+data[i].discount+"</em><b class='s_price'>"+data[i].price+"</b><i class='red'>【"+data[i].salse+"折】</i></div><div class='hover_info'><a href='javascript:;' class='info_ans pc_to_ntalk' title='询最低价'>询最低价<em></em></a><a href='javascript:;' class='info_comp' id='compare_14652'>对比<input id='product_14652' type='checkbox' value=''></a><input type='hidden' id='goods_id' value='14652'></div></dt></dl></li>";
								$(".goods_list ul").append(strLi);
							}
							
						},"json");
						
					});
				}			
		}
		
	};
	list.init();
});
