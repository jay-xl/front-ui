'use strict'
;(function(){
    var Writing ={};

    /**
     * 初始化 Writing 对象
     * @param {String} canvas 
     * @param {Number} width 
     * @param {Number} height 
     * @returns {Object}
     */
    Writing.init = function(canvas,width,height){
        this.canvas = document.querySelector(canvas);
        this.context = null;
        if(this.canvas){
            this.context = this.canvas.getContext('2d');
            this.canvas.width = width;
            this.canvas.height = height;
        }
        this.isShowBorder = true;
        this.strokeColor = '#000';
        this.lineWidth = 3;
        this.dragging = false;
        this.downLoc = { x : 0, y : 0 }
        this.initCanvasBorder();
        this.drawing();
        return this;
    };

    // 绘制 Canvas 边框
    Writing.initCanvasBorder = function(){
        var canvas = this.canvas;
        if(this.context && this.isShowBorder){
            var context = this.context;
            //绘制边框线
            context.save();
            context.beginPath();
            context.strokeStyle = '#f00';
            context.lineWidth = 2;
            context.moveTo(0,0);
            context.lineTo(canvas.width,0);
            context.lineTo(canvas.width,canvas.height);
            context.lineTo(0,canvas.height);
            context.closePath();
            context.stroke();

            //绘制对角线
            context.beginPath();
            context.moveTo(0,0);
            context.lineTo(canvas.width,canvas.height);
            context.lineTo(canvas.width,0);
            context.lineTo(0,canvas.height);
            context.lineTo(0,canvas.height / 2);
            context.lineTo(canvas.width,canvas.height / 2);
            context.moveTo(canvas.width / 2,0);
            context.lineTo(canvas.width / 2,canvas.height);
            //设置虚线长度
            context.setLineDash([3]);
            context.stroke();
            context.restore();
        }
    };

    // 绘画
    Writing.drawing = function(){
        var _writing = this;
        var canvas = _writing.canvas;
        if(_writing.context && _writing.isShowBorder){
            var context = _writing.context;
            // 鼠标按下事件
            canvas.addEventListener('mousedown',function(e){
                e = e || window.event;
                e.preventDefault();
                _writing.dragging = true;
                _writing.downLoc = _writing.getCanvasByWindowPoint(e.clientX,e.clientY);
            },false);

            // 鼠标移动事件
            canvas.addEventListener('mousemove',function(e){
                e = e || window.event;
                e.preventDefault();
                if(_writing.dragging){
                    let loc =  _writing.getCanvasByWindowPoint(e.clientX,e.clientY);
                    context.save();
                    context.lineWidth = _writing.lineWidth;
                    context.lineCap = 'round';
                    context.lineJoin = 'round';
                    context.strokeStyle = _writing.strokeColor;
                    context.beginPath();
                    context.moveTo(_writing.downLoc.x,_writing.downLoc.y);
                    context.lineTo(loc.x,loc.y);
                    context.stroke();
                    _writing.downLoc = loc;
                    context.restore();
                }
            },false);

            // 鼠标放开事件
            canvas.addEventListener('mouseup',function(e){
                e = e || window.event;
                e.preventDefault();
                _writing.dragging = false;
            },false);

            // 鼠标移出事件
            canvas.addEventListener('mouseout',function(e){
                e = e || window.event;
                e.preventDefault();
                _writing.dragging = false;
            },false);
        }
    };

    // 获取鼠标在 canvas 中真实坐标
    Writing.getCanvasByWindowPoint = function(clientX,clientY){
        var canvasByRect = this.canvas.getBoundingClientRect();
        return {
            x : clientX - canvasByRect.left * (this.canvas.width / canvasByRect.width),
            y : clientY - canvasByRect.top * (this.canvas.height / canvasByRect.height)
        }
    };

    window.writing = Writing;
})();


window.onload = function(){

    // 初始化 writing
    var writing = window.writing.init('#canvas',400,400);

    // 动态绑定事件
    document.querySelector('.color-bar').addEventListener('click',function(e){
        var target = e.target;
        // 绑定画笔颜色事件
        if(target.localName === 'li' && !target.getAttribute('data-click')){
            var colorBarList = document.querySelectorAll('.color-bar li');
            // 设置画笔颜色
            writing.strokeColor = target.innerText;
            // 删除所有选中样式
            for(let i = 0; i < colorBarList.length; i++){
                colorBarList[i].classList.remove('active');
            }
            // 给点击的 target 添加 选中的样式
            target.classList.add('active');
        }
    },false);
}
