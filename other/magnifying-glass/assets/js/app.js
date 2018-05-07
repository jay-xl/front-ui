window.onload = function () {

    // 获取小图片的对象
    const smallImage = document.querySelector('#samll-image');

    // 绑定小图片鼠标悬浮事件
    smallImage.addEventListener('mouseover', function () {
        smallImage.classList.add('float-box');
    }, false);

    // 绑定小图片鼠标移出事件
    smallImage.addEventListener('mouseout', function () {
        smallImage.classList.remove('float-box');
    }, false);

    // 绑定小图片鼠标移动事件
    smallImage.addEventListener('mousemove', function (e) {
        console.log(e);
    }, false);
}