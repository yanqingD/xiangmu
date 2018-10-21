function move(dom,attr,target){
    //  opacity 的 target 是小数;
    //  属性为opacity 的时候 target 值 和 iNow值 都放大 100;
    if(attr == "opacity"){
        target = parseInt(target * 100);
    }
    clearInterval(dom.timer);
    dom.timer = setInterval(function(){
        // 2. 
        // 是否需要放大 iNow 一百倍;
        if(attr == "opacity"){
            var iNow = parseInt(getStyle(dom,attr) * 100);
        }else{
            var iNow = parseInt(getStyle(dom,attr));
        }
        var speed = (target - iNow) / 8 ;

        if(speed > 0){
            speed = Math.ceil(speed);
        }else{
            speed = Math.floor(speed);
        }
        // 3. 
        if(iNow == target){
            clearInterval(dom.timer);
            return 0;
        }
        // 4.
        // 设置属性的时候;
        // 1. 非 opacity 属性 ;  + px;
        // 2. opacity 属性的  / 100;
        if(attr == "opacity"){
            dom.style[attr] = (iNow + speed) / 100 ;
        }else{
            dom.style[attr] = iNow + speed + "px";
        }
    },50)
}

function getStyle(dom,attr){
    // 封装原则;
    // 哪里可能改变就把哪里提取成参数;
    if(getComputedStyle){
        return getComputedStyle(dom)[attr];
    }else{
        return dom.currentStyle[attr];
    }
}