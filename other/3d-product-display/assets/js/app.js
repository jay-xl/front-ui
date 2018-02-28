'use strict';
(function () {
    const oBox = document.querySelector('.box');
    let mouseDown = false;
    // 旋转角度
    const rotate = { x: 0, y: 0 };

    /**
     * 鼠标按下事件
    */
    oBox.addEventListener('mousedown', function (e) {
        mouseDown = true;
        // 获取鼠标点击后的坐标
        let downX = e.clientX;
        let downY = e.clientY;

        // 鼠标移动事件
        document.addEventListener('mousemove', function (e) {
            if (mouseDown) {
                // 计算鼠标移动的坐标
                let moveX = e.clientX - downX;
                let moveY = e.clientY - downY;

                // 更改鼠标点击的坐标为移动坐标
                downX = e.clientX;
                downY = e.clientY;

                // 计算旋转角度
                rotate.x += moveX * 0.2;
                rotate.y += moveY * 0.2;

                // 设置 box 旋转样式
                oBox.style.transform = 'rotateY(' + rotate.x + 'deg) rotateX(' + rotate.y + 'deg)';
            }
        }, false);

        // 鼠标抬起事件
        document.addEventListener('mouseup', function () {
            mouseDown = false;
        }, false);
    }, false);

})();