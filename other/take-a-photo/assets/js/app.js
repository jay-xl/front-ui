'use strict';
(function () {
    var userMedia = {};
    /**
     * 功能初始化
     */
    userMedia.init = function () {
        this.getUserMedia = navigator.mediaDevices.getUserMedia || navigator.getUserMedia ||
            navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

        this.video = document.querySelector('#video');
        this.canvas = document.querySelector('#canvas');
        this.context = this.canvas.getContext('2d');
        // 重置 Canvas 大小
        userMedia.resizeCanvas();

        // 判断当前浏览器是否支持 getUserMedia
        if (this.getUserMedia) {
            this.callGetUserMedia({ audio: true, video: true }, function (stream) {
                alert('fdsafsdaf');
            }, function (error) {
                alert('Error:' + error.name);
            });
        } else {
            alert('当前浏览器不支持 getUserMedia API');
        }
    };

    /**
     * 重置 Canvas 大小
     */
    userMedia.resizeCanvas = function () {
        if (this.canvas && this.video) {
            this.canvas.width = this.video.offsetWidth;
            this.canvas.height = this.video.offsetHeight;
        }
    };

    /**
     * 根据 getUserMedia API 的类型 调用其方法
     * @param {Object} constraints 视频与音频的参数 
     * @param {Function} success 成功的回调函数 参数为 stream
     * @param {Function} error  失败的回调函数 参数为 error
     */
    userMedia.callGetUserMedia = function (constraints, success, error) {
        // 新版 getUserMedia API 调用方法
        if (navigator.mediaDevices.getUserMedia) {
            this.getUserMedia(constraints).then(success).catch(error);
        }
        //旧版 getUserMedia API 调用方法
        else {
            this.getUserMedia(constraints, success, error);
        }
    }
    userMedia.init();
    window.onresize = userMedia.resizeCanvas;
})();
