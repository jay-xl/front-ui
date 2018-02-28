window.onload = function() {


    var distX, degX = 0,
        distY, degY = 0;
    var oBox = document.querySelector('.box');

    oBox.onmousedown = function(e) {
        var sX = e.clientX,
            sY = e.clientY;

        document.body.style.cursor = 'url("data:image/gif;base64,R0lGODlhEAAQAJECAAAAAP///////wAAACH5BAEAAAIALAAAAAAQABAAQAI3lC8AeBDvgosQxQtne7yvLWGStVBelXBKqDJpNzLKq3xWBlU2nUs4C/O8cCvU0EfZGUwt19FYAAA7"), ew-resize';

        document.onmousemove = function(e) {
            distX = e.clientX - sX;
            distY = e.clientY - sY;

            sX = e.clientX;
            sY = e.clientY;

            degX += distX * .2;
            degY -= distY * .2;

            oBox.style.transform = 'rotateY(' + degX + 'deg) rotateX(' + degY + 'deg)';
        }
    }
    document.onmouseup = function() {
        document.onmousemove = null;
        document.body.style.cursor = 'default';

    }
}
