'use strict';
(function(){
    const oBox = document.querySelector('.box');

    /**
     * 鼠标按下事件
     */
    oBox.addEventListener('mousedown',function(e){
        console.log('鼠标按下');
    },false);

    /**
     * 鼠标抬起事件
     */
    oBox.addEventListener('mouseup',function(e){
        console.log('鼠标抬起');
    },false);
})();