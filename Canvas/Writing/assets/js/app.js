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
        // this.isShowBorder = true;
        // this.strokeColor = '#000';
        this.dragging = false;
        this.downLoc = { x : 0, y : 0 }
        return this;
    };

    Writing.initCanvasBorder = function(){
    }
    window.writing = Writing;
})();


window.onload = function(){

    // 初始化 writing
    var writing = window.writing.init('#canvas',400,400);

    //动态绑定事件
    document.querySelector('.color-bar').addEventListener('click',function(e){
        
    },false);
}
