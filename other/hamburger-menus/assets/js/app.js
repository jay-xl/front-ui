'use strict';
(function(){
    var sectionList = document.querySelectorAll('section');
    for(let i = 0; i < sectionList.length; i++){
        sectionList[i].addEventListener('click',function(){
            if(this.classList.contains('open')){
                this.classList.remove('open');
                this.classList.add('close');
            }else{
                this.classList.remove('close');
                this.classList.add('open');
            }
        },false);
    };
})();