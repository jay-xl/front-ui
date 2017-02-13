/**
 * Created by H_VK on 2017/2/9.
 */
var canvas = document.getElementById("canvas"), context;
canvas.width = canvas.height = 800;
var dragging = false,downLoc;

window.onload = function () {
    //判断浏览器是否支持 Canvas
    if(canvas.getContext("2d")){
        context = canvas.getContext("2d");
        //鼠标按下事件
        canvas.onmousedown = function (e) {
            e.preventDefault();
            dragging = true;
            downLoc = canvasByWindowPoint(e.clientX,e.clientY);
        }
        //鼠标移动事件
        canvas.onmousemove = function (e) {
            e.preventDefault();
            if(dragging){
                var loc = canvasByWindowPoint(e.clientX,e.clientY);
                context.save();
                context.lineWidth = 30;
                context.lineCap = "round";
                context.lineJoin = "round";
                context.beginPath();
                context.moveTo(downLoc.x,downLoc.y);
                context.lineTo(loc.x,loc.y);
                context.stroke();
                downLoc = loc;
                context.restore();
            }
        }
        //鼠标抬起事件
        canvas.onmouseup = function (e) {
            e.preventDefault();
            dragging = false;
        }
        //鼠标移出事件
        canvas.onmouseout = function (e) {
            e.preventDefault()
            dragging = false;
        }
    }
}

var loadCanvasBorder = function () {
    
}

//获取鼠标在canvas中的真实坐标
var canvasByWindowPoint = function ( clientX,clientY) {
    var canvasByRect = canvas.getBoundingClientRect();
    return {
        x: clientX - canvasByRect.left * (canvas.width / canvasByRect.width),
        y: clientY - canvasByRect.top * (canvas.height / canvasByRect.height)
    }
}



