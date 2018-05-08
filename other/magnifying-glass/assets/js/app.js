window.onload = function () {

    // 获取小图片的对象
    const smallImage = document.querySelector('#samll-image');

    // 获取放大镜对象
    const floatBox = document.querySelector('#float-box');

    // 获取大图对象
    const bigImageBox = document.querySelector('#big-image');
    const bigImage = bigImageBox.getElementsByTagName('img')[0];

    // 绑定小图片鼠标悬浮事件
    smallImage.addEventListener('mouseover', function () {
        floatBox.style.display = 'block';
        bigImageBox.style.display = 'block';
    }, false);

    // 绑定小图片鼠标移出事件
    smallImage.addEventListener('mouseout', function () {
        floatBox.style.display = 'none';
        bigImageBox.style.display = 'none';
    }, false);

    // 绑定小图片鼠标移动事件
    smallImage.addEventListener('mousemove', function (e) {

        const left = e.clientX - smallImage.offsetLeft - floatBox.offsetLeft / 2;
        const top = e.clientY - smallImage.offsetTop - floatBox.offsetTop / 2;

        if (left < 0) {
            left = 0;
        } else if (left > (smallImage.offsetWidth - floatBox.offsetWidth)) {
            left = smallImage.offsetWidth - floatBox.offsetWidth;
        }

        if (top < 0) {
            top = 0;
        } else if (top > (smallImage.offsetHeight - floatBox.offsetHeight)) {
            top = smallImage.offsetHeight - floatBox.offsetHeight;
        }
        floatBox.style.left = left + 'px';
        floatBox.style.top = top + 'px';


        const percetX = left / (smallImage.offsetWidth - floatBox.offsetWidth);
        const percetY = top / (smallImage.offsetHeight - floatBox.offsetHeight);

        bigImage.style.left = -percetX * (bigImage.offsetWidth - bigImageBox.offsetWidth) + 'px';
        bigImage.style.top = -percetY * (bigImage.offsetHeight - bigImageBox.offsetHeight) + 'px';

    }, false);
}