$(function(){
         $(".header_two_one").mouseover(function(){
               $(".header_two_two").css({
                     display : "block"
		   })
         })
         $(".header_two_one").mouseout(function(){
            $(".header_two_two").css({
                  display : "none"
            })
	})	
	
// =====================================导航栏===============================
           function Tab(){};
		Tab.prototype.init = function(btn_selector,item_selector){
			this.abtn = document.querySelectorAll(btn_selector);	
			this.aitem = document.querySelectorAll(item_selector);	
			this.handleEvent()
		}
		Tab.prototype.handleEvent = function(){
			for(var i = 0 ;i < this.abtn.length ; i ++){
				this.abtn[i].index = i;
				this.abtn[i].onmouseover = this.changeIndex.bind(this);
			}
		}
		Tab.prototype.changeIndex = function(event){
			var e = event || window.event;
			var target = e.target || e.srcElement;
			this.nowIndex = target.index;
			this.show();
		}
		Tab.prototype.show = function(){
			for(var i = 0 ; i < this.aitem.length ; i++){
				this.aitem[i].style.display = "none";
			}
			  this.aitem[this.nowIndex].style.display = "block";
		}
		var tab = new Tab();
	  tab.init("#btn_list>ul>li","#item_list>ul>li")
 //选项卡=========================================
		function Banner(){};
		$.extend(Banner.prototype,{
			init : function(options){
		this.item_list = $(options.item_list);
				this.left_btn = $(options.left_btn);
				this.right_btn = $(options.right_btn);
				this.list_btn = $(options.list_btn);
				this.list = this.item_list.parent();
				this.nowIndex = 0 ;
				this.item_num = this.item_list.length;
				if(this.left_btn.length == 0 && this.right_btn.length == 0 && this.list_btn.length == 0){
					this.autoPlay()
				}else{
					this.handleEvent()
				}
				if(options.autoPlay){
					this.autoPlay()
				}
		},
		handleEvent : function(){
			this.left_btn.click($.proxy(this.prev,this));
			this.right_btn.click($.proxy(this.next,this));
			this.list_btn.mouseover($.proxy(this.toIndex,this));
		},
		next :function(){
			if(this.nowIndex == this.item_num - 1){
				this.list.css({
					left : 0 
				})
				this.nowIndex = 1;
			}else{
				this.nowIndex++;
			}
			this.animate()
		},
		prev : function(){
			if(this.nowIndex == 0){
				this.nowIndex = this.item_num - 2;
				this.list.css({
					left : -570 * (this.item_num - 1)
				})
			}else{
				this.nowIndex -- 
			}
			this.animate();
		},
		toIndex : function(event){
			var target = event.target;
			this.nowIndex =$(target).index();
			this.animate();
		},
		autoPlay : function(){
			$("#item_center_box").mouseenter(function(){
					clearInterval(this.bannerTimer)
			}.bind(this)) 
			$("#item_center_box").mouseleave(function(){ 
				this.bannerTimer = setInterval(function(){
				this.next()
			}.bind(this),3000)
			}.bind(this)).trigger("mouseleave")
		},
		animate : function(){
			this.list
			.stop()
			.animate({
				left : -570 *this.nowIndex
			})
			this.list_btn.removeClass("active");
			var index 
			if(this.nowIndex == this.item_num - 1){
				index = 0 ;
			}else{
				index = this.nowIndex;
			}
			this.list_btn.eq(index).addClass("active")
		}
	})
	var banner = new Banner();
	banner.init({
		//必需元素
		item_list : "#item_center_box_list li",
		//非必需元素
		left_btn : "#left" ,
		right_btn : "#right" ,
		list_btn : "#item_center_box_btn button" ,
		autoPlay : true
	})
//轮播图=========================================
// =======================================================倒计时==========	
	function time(end,hour,minute,second){
			function foo(){
				//获取截止时间到现在的时间的毫秒数
				var now = new Date()
				var endMs = end.getTime();
				var nowMs = now.getTime();
				//获取差值
				var reduceMs = endMs - nowMs
				var nHour = parseInt(reduceMs/1000/60/60);
				var nMinute = parseInt((reduceMs - nHour * 1000 * 3600) / 1000 / 60);
				var nSecond = parseInt((reduceMs-nHour * 1000 * 3600-nMinute*1000*60)/1000);
				//赋值
				// if(nHour <10){
				// 	nHour = "0" + nHour
				// }
				// if(nMinute < 10){
				// 	nMinute = "0" + nMinute
				// }                                                                              
				// if(nSecond < 10){
				// 	nSecond = "0" + nSecond
				// }  
				hour.innerHTML = nHour;
				minute.innerHTML= nMinute;
				second.innerHTML = nSecond;
			}
			foo()//防止刷新时,出现00:00:00的状况
			setInterval(function(){
				foo()
			},1000)
		}
		var end_one = new Date("2018/10/26");
           time(end_one,hour_one,minute_one,second_one)
// ===========================================================倒计时==========
var flag = false ;
$(window).scroll(function(){
	var scrollTop = $("html,body").scrollTop();
	if(scrollTop >=500){
		if(flag) {return 0};
		flag = true ;
		$(".mount").stop().animate({
			top:0
		},function(){
			flag = false
		})
	}else{
		$(".mount").stop(true,true);
		$(".mount").css({
			top : -55
		})
	}		   
})		    		   		   			   
// ============================吸顶菜单===========================
	$(".back_head").mouseenter(function(){
		     $(".back_head_show").css({
				    display : "block"
			 })
	})
	$(".back_head").mouseleave(function(){
		$(".back_head_show").css({
			   display : "none"
		})  
   })
   //登录============
		$(".back_collect").mouseenter(function(){
			$(".back_collect_show").css({
				display : "block"
			})
		})
		$(".back_collect").mouseleave(function(){
			$(".back_collect_show").css({
				display : "none"
			})  
		})
//收藏=====================
	$(".back_quan").mouseenter(function(){
		$(".back_quan_show").css({
			display : "block"
		})
	})
	$(".back_quan").mouseleave(function(){
		$(".back_quan_show").css({
			display : "none"
		})  
	})
//优惠券======================
$(".back_yijian").mouseenter(function(){
	$(".back_yijian_show").css({
		display : "block"
	})
})
$(".back_yijian").mouseleave(function(){
	$(".back_yijian_show").css({
		display : "none"
	})  
})
//意见===================
$(".back_Code").mouseenter(function(){
	$(".back_Code_show").css({
		display : "block"
	})
})
$(".back_Code").mouseleave(function(){
	$(".back_Code_show").css({
		display : "none"
	})  
})
//二维码=======================
$(".back_top").mouseenter(function(){
	$(".back_top_show").css({
		display : "block"
	})
})
$(".back_top").mouseleave(function(){
	$(".back_top_show").css({
		display : "none"
	})  
})
$(window).scroll(function(){
	this.scrollTop = $("html,body").scrollTop();
		$(".back_top").click(function(){
		   document.documentElement.scrollTop  = 0;
		 // $("body,html").animate({ scrollTop:0},1000);
		})
})
//回到顶部====================
var end_two = new Date("2018/10/24");
 time(end_two,hour_two,minute_two,second_two);
 var end_three = new Date("2018/10/25");
 time(end_three,hour_three,minute_three,second_three);
 //==============瀑布流上的两屏的定时器===================
 
 //========登录========
 var oGo = $("#go");
 if(getCookie("yonghu")){
	oGo[0].innerHTML = "欢迎您" + getCookie("yonghu");
	return 0;
 }
// ===========活动页========
var oBtn=document.querySelector(".close");
var oAD=document.querySelector(".AD_bg");
oBtn.onclick=function(){
    oAD.style.display="none";
}
})