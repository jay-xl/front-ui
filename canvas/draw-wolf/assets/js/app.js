'use strict';

(function(){
    var Draw = {};

    /**
     * 初始化 Draw 对象
     * @param {String} canvas 
     * @param {Number} width 
     * @param {Number} height 
     */
    Draw.init = function(canvas,width,height){
        this.canvas = document.querySelector(canvas);
        if(this.canvas){
            this.context= this.canvas.getContext('2d');
            this.canvas.width = width;
            this.canvas.height = height;
            //绘制灰太狼的头部
            this.drawHeader();
            //绘制灰太狼的面部特征
            this.drawFacialFeatures();
        }
    };

    /**
     * 绘制灰太狼的头部
     */
    Draw.drawHeader = function(){
        var context = this.context;
        context.beginPath();
        context.lineWidth = 2;
        context.strokeStyle = 'gray';
        context.moveTo(33,43);
        /**
         * quadraticCurveTo() 方法通过使用表示二次贝塞尔曲线的指定控制点，向当前路径添加一个点。
         * context.quadraticCurveTo(cpx,cpy,x,y);
         * cpx  贝塞尔控制点的 x 坐标
         * cpy  贝塞尔控制点的 y 坐标
         * x    结束点的 x 坐标
         * y    结束点的 y 坐标
         */
        context.quadraticCurveTo(55,40,120,73);
        context.moveTo(33,43);
        context.lineTo(68,142);
        context.moveTo(33,43);
        context.quadraticCurveTo(73,92,89,130);
        context.quadraticCurveTo(75,127,81,136);
        context.lineTo(73,136);
        context.lineTo(73,139);
        context.quadraticCurveTo(36,164,24,213);
        /**
         * bezierCurveTo() 方法通过使用表示三次贝塞尔曲线的指定控制点，向当前路径添加一个点。
         * context.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);
         * cp1x 第一个贝塞尔控制点的 x 坐标
         * cp1y 第一个贝塞尔控制点的 y 坐标
         * cp2x 第二个贝塞尔控制点的 x 坐标
         * cp2y 第二个贝塞尔控制点的 2 坐标
         * x    结束点的 x 坐标
         * y    结束点的 y 坐标
         */
        context.bezierCurveTo(52,215,49,223,41,233);
        context.quadraticCurveTo(61,235,76,243);
        context.bezierCurveTo(88,350,290,350,309,252);
        context.quadraticCurveTo(320,239,353,234);
        context.bezierCurveTo(338,223,354,215,371,214);
        context.quadraticCurveTo(360,169,325,144);
        context.lineTo(333,121);
        context.quadraticCurveTo(317,100,341,97);
        context.lineTo(361,43);
        context.quadraticCurveTo(307,48,266,75);
        context.moveTo(361,43);
        context.quadraticCurveTo(332,72,304,133);
        context.quadraticCurveTo(318,127,313,134);
        context.quadraticCurveTo(323,132,318,140);
        context.quadraticCurveTo(324,136,325,144);
        context.moveTo(266,75);
        context.quadraticCurveTo(265,90,243,94);
        context.lineTo(133,112);
        context.quadraticCurveTo(90,116,107,91);
        context.quadraticCurveTo(147,29,223,27);
        context.quadraticCurveTo(272,38,266,75);
        context.moveTo(107,91);
        context.quadraticCurveTo(111,110,144,100);
        context.lineTo(244,80);
        context.quadraticCurveTo(264,76,267,61);
        context.moveTo(196,30);
        context.lineTo(176,51);
        context.quadraticCurveTo(224,43,240,66);
        context.quadraticCurveTo(252,55,264,53);
        context.moveTo(186,38);
        context.lineTo(198,37);
        context.moveTo(186,38);
        context.lineTo(198,37);
        context.moveTo(176,43);
        context.lineTo(190,43);
        context.moveTo(186,53);
        context.lineTo(194,45);
        context.moveTo(200,45);
        context.lineTo(196,54);
        context.moveTo(210,47);
        context.lineTo(205,54);
        context.moveTo(219,49);
        context.lineTo(213,54);
        context.moveTo(229,50);
        context.lineTo(222,59);
        context.moveTo(237,52);
        context.lineTo(232,65);
        context.moveTo(244,56);
        context.lineTo(250,66);
        context.moveTo(252,52);
        context.lineTo(261,62);
        context.stroke();
        context.beginPath();
        context.lineWidth = 10;
        context.moveTo(99,123);
        context.lineTo(169,164);
        context.moveTo(220,172);
        context.lineTo(291,130);
        context.stroke();
    };

    /**
     * 绘制灰太狼的面部特征
     */
    Draw.drawFacialFeatures = function(){
        var context = this.context;
        context.beginPath();
        context.stroke();
    };

    /**
     * 绘制灰太狼的身体
     */
    Draw.drawBody = function(){

    };

    window.draw = Draw;
})();

window.onload = function(){
    window.draw.init('#canvas',400,500);
}