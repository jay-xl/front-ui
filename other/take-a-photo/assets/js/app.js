'use strict';
(function () {
    var userMedia = {};
    /**
     * 功能初始化
     */
    userMedia.init = function () {
        var getUserMediaSupport = navigator.mediaDevices.getUserMedia || navigator.getUserMedia ||
            navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

        this.video = document.querySelector('#video');
        this.canvas = document.querySelector('#canvas');
        var context = this.canvas.getContext('2d');
        // 重置 Canvas 大小
        userMedia.resizeCanvas();
        // 判断当前浏览器是否支持 getUserMedia
        var _video = this.video;
        if (getUserMediaSupport) {
            var constraints = { video: { width: _video.offsetWidth, height: _video.offsetHeight } };
            this.callGetUserMedia(constraints, function (stream) {
                // 兼容 webkit 内核浏览器 获取 URL 对象
                var CompleURL = window.URL || window.webkitURL;
                video.src = CompleURL.createObjectURL(stream);
                video.onloadedmetadata = function (e) {
                    video.play();
                }
            }, function (e) {
                alert('Error:' + e.name + " " + e.message);
            });
        } else {
            alert('当前浏览器不支持 getUserMedia API');
        }

        // Capture 点击事件
        document.querySelector('#capture').addEventListener('click',function(){
            alert('fdsafdsafsd');
            context.drawImage(_video,0,0,_video.width,_video.height);
        },false);
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
            navigator.mediaDevices.getUserMedia(constraints).then(success).catch(error);
        }
        // 内核为 Webkit 的浏览器
        else if (navigator.webkitGetUserMedia) {
            navigator.webkitGetUserMedia(constraints, success, error);
        }
        // Firfox 的浏览器
        else if (navigator.mozGetUserMedia) {
            navigator.mozGetUserMedia(constraints, success, error);
        }
        //旧版 getUserMedia API 调用方法
        else {
            navigator.getUserMedia(constraints, success, error);
        }
    }
    userMedia.init();
    window.onresize = userMedia.resizeCanvas;
})();
