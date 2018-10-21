$(function(){
    //    ======================导航栏============================
    var nav = $(".nav_ul li")
             for(let i = 0 ; i < nav.length ; i++){
                    //   console.log(i)
                    nav.eq(i).mouseover(function(){
                        //    console.log(i);
                        nav.eq(i).find("a").css({
                                color:"red"
                            })
                            .end()
                            .siblings().find("a")
                            .css({
                                color:"black"
                            })
                           
                        }.bind(this))
                  }
//    ======================导航栏============================

// =======================放大镜======================
var big = $("#big");
       var small = $("#small");
       var frame = $("#frame");
       var big_img = $("#big img");
       var small_img = $("#small img");
      //鼠标移入-显现，移出-隐藏，移动-跟着走
      small.mouseover(function(){
          frame[0].style.display = "block";
          big[0].style.display = "block";
        //   small_img[0].style.opacity = "0.3";
      })
      small.mouseout(function(){
          frame[0].style.display = "none";
          big[0].style.display = "none";
        //   small_img[0].style.opacity = "1";
      })
      small.mousemove(function(event){
          var e = event || wndow.event;
        //    frame[0].style.top = e.offsetY - 50 + "px";
        //    frame[0].style.left = e.offsetX - 50 + "px";

        //边框检测
        //不大于最大值,不小于最小值
        var nTop = e.offsetY - size/2 ;
        var nLeft = e.offsetX - size/2 ;
        //最小值
        if(nTop <= 0){
            nTop = 0;
        };
        if(nLeft <= 0){
            nLeft = 0;
        }
        //最大值
        var maxTop = small[0].offsetHeight - frame[0].offsetHeight;
        var maxLeft = small[0].offsetWidth - frame[0].offsetWidth;
        if(nTop >= maxTop){
            nTop = maxTop;
        };
        if(nLeft >= maxLeft){
            nLeft = maxLeft;
        };
        frame[0].style.top = nTop + "px";
        frame[0].style.left = nLeft + "px";
        //在鼠标移动过程中,放大镜移到哪里,放大框就显现哪里
        // var big_img = $("#big img")
        var proX = big[0].offsetWidth/frame[0].offsetWidth;
        var proY = big[0].offsetWidth/frame[0].offsetWidth;
        big_img[0].style.left = - nLeft*proX + "px";
        big_img[0].style.top = - nTop*proY + "px";
		//效果：原始框区域模糊,放大镜区域清楚
        // frame[0].style.backgroundPosition = `${-nLeft}px ${-nTop}px`
        // var small_img = $("#small img"),移入移出，清晰模糊
      })
        //鼠标滚轮放大缩小
        //初始值与放大镜等大
        var size = 100;
         //handleEvent触发事件的处理函数
	   if(document.addEventListener){
	   		document.addEventListener('DOMMouseScroll',handleEvent,false);
	   }
	   window.onmousewheel = document.onmousewheel = handleEvent;
	   function handleEvent(event){
	   		var e = event || window.event;
	   		var flag = true 
	   		if(e.detail != 0 ){ 
				    //浏览器是火狐
	   				if(e.detail > 0){
	   						flag = false// 向下;
	   				}else{
	   						flag = true; // 向上;
	   				}
	   		}else{//说明浏览器是IE/Opera/Chrome
	   				if(e.deltaY > 0){
	   						flag = false// 向下;
	   				}else{
	   						flag = true; // 向上;
	   				}
	   		}
			//向上是放大,向下是缩小
	   		if(flag){
	   				// 放大;
	   				size ++;
	   		}else{
	   			// 缩小;
	   				size --;
	   		}
			//放大镜放大或者缩小时的变化大小
			frame[0].style.width =  size + "px";
			frame[0].style.height = size + "px";
			// 为什么要加上mousemove; ****;
            //当鼠标放在原始框上一动不动时,放大镜也不会再增大了
       
            small.mousemove(function(e){});
            	// 根据比例缩放图片
			var prop = 400 / size;
			big_img[0].style.width = 400 * prop + "px";
            big_img[0].style.height = 400 * prop + "px";
        }
// =======================放大镜======================
// =====================左侧和购物车======================
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
$(".back_buy").mouseenter(function(){
    $(".back_buy_span").css({
        background : "white",
        color:"tomato"
    })
    $("#shopslist").css({
        display : "block"
    })
})
$(".back_buy").mouseleave(function(){
    $("#shopslist").css({
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
// =========================加入购物车==============
function ShopCar(){}
$.extend(ShopCar.prototype , {
    init:function(opts){
        // 参数合并;
        // opts 假定  会传入一个对象;
        //      假定  什么都没有;
        // opts = $.extend({mian:".container ul"} , typeof opts == "object" ? opts : {} );
        // opts = {main : "hello"}
        // $.extend({main:".container ul"},opts);
        // 列表结构;
        this.main = $(".magnifier_container_buy");
        // 购物车图标;
        this.shopCarIcon = $(".back_buy").children(); 
        // 购物车商品展示容器;
        this.goodsList = $("#shopslist");
        // 商品数量容器;
        this.showNumEle = $(".back_buy_span");
        this.loadJson()
        .then(function(res){
            // console.log(res,this);
            // 数据加载成功
            this.json = res.subjects;
            // this.renderPage();
            this.bindEvent();
        })

        // this.bindEvent();
        this.showNum();
    },
    loadJson:function(){
        var opt = {
            url:"http://localhost:8080/data.json",
            data:{start:0 , count:47},
            context:this
        };
        return $.ajax(opt);
    },
    // renderPage:function(){
    //     var html = "";
    //     for(var i = 0 ; i < this.json.length ; i++){
    //         html += `<li>
    //                     <img src="${this.json[i].images.small}" alt="">
    //                     <h3>${this.json[i].title}</h3>
    //                     <button data-id="${this.json[i].id}">加入购物车</button>
    //                 </li> `;
    //     }
    //     this.main.html(html);
    // },
    bindEvent:function(){
        this.main.on( "click" , "button" , this.addCar.bind(this));
        // 查看;
        // 隐藏;
        // 清空购物车;
        this.shopCarIcon.on( "mouseenter" , this.showCar.bind(this) )
        this.shopCarIcon.on( "mouseleave" , this.hideCar.bind(this) )
        this.shopCarIcon.on( "click" , this.clearCar.bind(this) )
    },
    addCar:function(event){
        // ==========var target = event.target;
        // 当前商品的id;
        // ==========var goodsId = $(target).attr("data-id");
        // 把商品存入cookie之中;
        // $.cookie("shopCar",goodsId);
        // 以数组的规则去创建字符串;
        //  逻辑 ; 创建数组结构; => 购物车内容为空的时候;
        //       操作结构的增删改查 => 购物车内容不为空的时候;
        var cookie;
        if(!(cookie = $.cookie("shopCar")) || cookie == "[]"){
            // 建立结构;
            $.cookie("shopCar",`[{"id":${getCookie("id")},"num":1}]`);
            this.showNum();
            return 0;
        }
        // 数据添加;
        var cookieArray = JSON.parse(cookie);
        
        // 当前商品是否存在;
        var flag = false;
        // 判定是否存在当前商品;
        for(var i = 0 ; i < cookieArray.length ; i ++){
            if(cookieArray[i].id == getCookie("id")){
                // 当前商品存在;
                flag = true;
                cookieArray[i].num ++;
            }
        }
        if(flag == false){
            // 创建商品cookie
            cookieArray.push({
                id : getCookie("id"),
                num : 1
            });
        }
        // 操作之后的数组转换成字符串放入cookie之中;
        $.cookie("shopCar",JSON.stringify(cookieArray));
        // console.log($.cookie("shopCar"));
        this.showNum();
    },
    showCar:function(){
        // 如果为空不渲染;
        var cookie;
        if(!(cookie = $.cookie("shopCar"))){
            return 0;
        }
        var cookieArray = JSON.parse(cookie);
        var html = "";
        for(var i = 0 ; i < cookieArray.length ; i ++){


            console.log(getCookie("img"));
            // var item = this.getItem(cookieArray[i].id);
            html += `<li>
                        <img src="${getCookie("img")}" alt="">
                        <h3>${getCookie("title")}</h3>
                        <strong>${cookieArray[i].num}</strong>
                    </li>`;
        }
        this.goodsList.html(html);

    },
    getItem:function(id){
        // 根据id在this.json之中查找数据的
        for(var i = 0 ; i < this.json.length ; i ++){
            if(this.json[i].id == id){
                return this.json[i];
            }
        }
    },
    hideCar:function(){
        this.goodsList.children().remove();
    },
    clearCar:function(){
        var flag = confirm("是否清空购物车?");
        if(flag){
            $.cookie("shopCar","");
            this.hideCar();
        }
        this.showNum()
    },
    showNum:function(){
        // 如果为空不计算;
        var cookie;
        if(!(cookie = $.cookie("shopCar"))){
            this.showNumEle.html(0)
            return 0;
        }
        var cookieArray = JSON.parse($.cookie("shopCar"));
        var sum = 0;
        for(var i = 0 ; i < cookieArray.length ; i ++){
            sum += Number(cookieArray[i].num);
        }

        console.log(sum);
        this.showNumEle.html(sum);
    }
})

var shopCar = new ShopCar();
shopCar.init();
})