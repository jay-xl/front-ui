(function(){
    var datepicker = {};
    /**
     * 获取月份数据
     * @param {Number} year 
     * @param {Number} month 
     */
    datepicker.getMonthData = function(year,month){
        var result = [];
        if(!year || !month){
            var today = new Date();
            year = today.getFullYear();
            month = today.getMonth() + 1;
        }
        month -= 1;

        //获取传入月份的第一天
        var firstDateOfMonth = new Date(year,month,1);
        var firstDayOfMonth = firstDateOfMonth.getDay();

        //获取传入月份的最后一天
        var lastDateOfMonth = new Date(year,month + 1,0);
        var lastDayOfMonth = lastDateOfMonth.getDay();
        
        //重新给年月赋值
        year = firstDateOfMonth.getFullYear();
        month = firstDateOfMonth.getMonth();

        //判断第一天是否为星期日
        var beginDate = firstDayOfMonth === 0 ? firstDateOfMonth : new Date(firstDateOfMonth.setDate(1 - firstDayOfMonth));
        //判断最后一天是否为星期六
        var endDate = lastDayOfMonth === 6 ? lastDateOfMonth : new Date(lastDateOfMonth.setDate(lastDateOfMonth.getDate() + (6 -  lastDayOfMonth)));

        //循环获取日期
        while(beginDate.getTime() <= endDate.getTime()){
            result.push({
                year:beginDate.getFullYear(),
                month:beginDate.getMonth() + 1,
                day : beginDate.getDate(),
                week : beginDate.getDay()
            });
            beginDate = new Date(beginDate.setDate(beginDate.getDate() + 1));
        }
        return {
            year : year,
            month : month + 1,
            result : result
        };
    };

    /**
     * 渲染前台页面
     * @param {Number} year 
     * @param {Number} month 
     */
    datepicker.buildUi = function(year,month){
        var dateArr = datepicker.getMonthData(year,month);
            // 日历head
        var newHTML = '<div class="ui-datepicker-header">';
                newHTML += '<a href="#" class="ui-datepicker-btn ui-datepicker-prv-btn">&lt;</a>';
                newHTML += '<a href="#" class="ui-datepicker-btn ui-datepicker-next-btn">&gt;</a>';
                newHTML += '<span class="ui-datepicker-curr-month">' + dateArr.year + '-' + dateArr.month + '</span>';
            newHTML += '</div>';
            //日历body
            newHTML += '<div class="ui-datepicker-body">';
                newHTML += '<table>';
                    newHTML += '<thead>';
                        newHTML += '<tr>';
                            newHTML += '<th>日</th>';
                            newHTML += '<th>一</th>';
                            newHTML += '<th>二</th>';
                            newHTML += '<th>三</th>';
                            newHTML += '<th>四</th>';
                            newHTML += '<th>五</th>';
                            newHTML += '<th>六</th>';
                        newHTML += '</tr>';
                    newHTML += '</thead>';
                    newHTML += '<tbody>';
                    dateArr.result.map(function(item,index){
                        if(item.week === 0) newHTML += '<tr>';
                        newHTML += '<td data-fullDate="' + item.year + '-' + item.month + '-' + item.day + '">'+ item.day +'</td>';  
                        if(item.week === 6) newHTML += '</tr>';    
                    });
                    newHTML += '</tbody>';
                newHTML += '</table>';
            newHTML += '</div>';
        return newHTML;
    }

    /**
     * datepicker 初始化
     * @param {String} input
     */
    datepicker.init = function(input){
        var $input = document.querySelector(input);
        $input.setAttribute('readonly',true);
        var html = datepicker.buildUi();
        var $wrapper = document.createElement('div');
        $wrapper.className = 'ui-datepicker-wrapper';
        //动态设置日历宽度
        $wrapper.style.width = $input.offsetWidth +"px";
        $wrapper.innerHTML = html;
        document.body.appendChild($wrapper);
        //绑定文本事件
        $input.addEventListener('click',function(){
            if($wrapper.classList.contains('ui-datepicker-wrapper-show')){
                $wrapper.classList.remove('ui-datepicker-wrapper-show');
            }else{
                $wrapper.classList.add('ui-datepicker-wrapper-show');
                //设置日历位于文本框位置
                var height = $input.offsetHeight;
                var top = $input.offsetTop;
                var left = $input.offsetLeft;
                $wrapper.style.left = left + 'px';
                $wrapper.style.top = height + top + 2 + 'px';
            }
        },false);
        //绑定日历点击事件
        $wrapper.addEventListener('click',function(e){
            var target = e.target;
            var currentText = document.querySelector('.ui-datepicker-curr-month').innerText.split('-');
            //绑定日历月份切换按钮点击事件
            if(target.classList.contains('ui-datepicker-btn')){
                var year = parseInt(currentText[0]);
                var month = parseInt(currentText[1]);
                //上月
                if(target.classList.contains('ui-datepicker-prv-btn')){
                    month -= 1;
                }
                //下月
                if(target.classList.contains('ui-datepicker-next-btn')){
                    month += 1;
                }
                var html = datepicker.buildUi(year,month);
                $wrapper.style.width = $input.offsetWidth +"px";
                $wrapper.innerHTML = html;
            }
            
            //日期绑定至文本框
            var fullDate = target.getAttribute('data-fullDate');
            if(fullDate != null){
                $input.value = fullDate;
            }
        },false);
    }
    window.datepicker = datepicker;
})()