'use strict';

(function(){
    document.querySelector('.container').addEventListener('click',function(e){
        var target = e.target;
        var li = document.querySelector(target.localName);
        if(target.localName === 'i'){
            li = document.querySelector(target.localName).parentNode;
        }
        if(li.nodeName === 'LI'){
            if(li.classList.contains('open')){

            }else{
                li.classList.add('open');
            }
        }
        console.log();
    },false);
})();