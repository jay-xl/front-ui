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
        //获取传入月份的第一天

        // while(){}


        //获取一个月的第一天
        // var firstDay = new Date(year,month - 1,1);
        // //获取一个月当天是星期几
        // var firstDayWeekDay = firstDay.getDay();

        // console.log(firstDayWeekDay)

        //获取上月的最后一天
        // var lastDayOfLastMonth = new Date(year,month - 1,0);
        // //获获取上月的最后一天是星期几
        // var lastDayWeekDayOfLastMonth = lastDayOfLastMonth.getDay();
        // //显示上月剩余的总天数
        // var preMonthDayCount = firstDayWeekDay - 1;

        // //获取一个月的最后一天
        // var lastDay = new Date(year,month,0);
        // //获取一个月的最后一天是星期几
        // var lastDayWeekDay = lastDay.getDate();

    };


    window.datepicker = datepicker;
})()