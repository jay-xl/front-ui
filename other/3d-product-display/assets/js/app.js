'use strict';
(function () {
    const oBox = document.querySelector('.box');
    let mouseDown = false;
    // 鼠标按下
    const mousePoint = { x: 0, y: 0 };

    /**
     * 鼠标按下事件
    */
    oBox.addEventListener('mousedown', function (e) {
        mouseDown = true;
        // 获取鼠标点击后的坐标
        let downX = e.clientX;
        let downY = e.clientY;

        // 鼠标移动事件
        document.addEventListener('mousemove',function(e){
            if(mouseDown){
                console.log('实时');
            }
        },false);

        // 鼠标抬起事件
        document.addEventListener('mouseup',function(){
            mouseDown = false;
        },false);
    }, false);

})();