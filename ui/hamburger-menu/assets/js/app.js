'use strict';

(function(){
    document.querySelector('.container').addEventListener('click',function(e){
        var target = e.target;
        var li = document.querySelector(target.localName);
        if(target.localName === 'i'){
            li = document.querySelector(target.localName).parentNode;
        }
        if(li.nodeName.toLowerCase() === 'li'){
            if(li.classList.contains('open')){
                li.classList.remove('open');
                li.classList.add('close');
            }else{
                li.classList.add('open');
                li.classList.remove('close');
            }
        }
    },false);
})();