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
        //获取传入月份的第一天是星期几
        var firstDayOfMonth = firstDateOfMonth.getDay();
        
        //获取传入月份的最后一天
        var lastDateOfMonth = new Date(year,month + 1,0);
        var lastDayOfMonth = lastDateOfMonth.getDay();
        
        //判断第一天是否为星期日
        var beginDate = firstDayOfMonth === 0 ? firstDateOfMonth : new Date(firstDateOfMonth.setDate(1 - firstDayOfMonth));
        //判断最后一天是否为星期六
        var endDate = lastDayOfMonth === 6 ? lastDateOfMonth : new Date(lastDateOfMonth.setDate(lastDateOfMonth.getDate() + (6 -  lastDayOfMonth)));

        //循环获取日期
        while(beginDate.getTime() <= endDate.getTime()){
            result.push({
                month:beginDate.getMonth() + 1,
                day : beginDate.getDate(),
                week : beginDate.getDay()
            });
            beginDate = new Date(beginDate.setDate(beginDate.getDate() + 1));
        }  
        return result;
    };
    window.datepicker = datepicker;
})()