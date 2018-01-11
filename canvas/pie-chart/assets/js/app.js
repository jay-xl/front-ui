'use strict';
var PieChart = (function () {
    let PieChart = function (selector, options) {
        let canvas = 'string' === typeof selector ? document.querySelector(selector) : null;
        if (canvas === null) return false;
        let defaultOptions = {
            radius: 200,                    // 饼状图半径
            legendParms: {                  // 图例参数 
                font: "24px Arial",         // 图例字体属性
                x: 30,                      // 图例 x 轴坐标
                y: 30,                      // 图例 y 轴 坐标
                margin: 50,                 // 图例距离
                width: 40,                  // 图例宽度
                height: 24                  // 图例高度
            }
        };
        this.context = canvas.getContext('2d'); // 获取 context 环境
        this.width = canvas.getAttribute('width') || 300;
        this.height = canvas.getAttribute('height') || 300;
        this.options = Object.assign(defaultOptions, options)   // 合并参数
    };

    /**
     * 用于载入用户传入的数据
     * @param {JSON} data 
     */
    PieChart.prototype.load = function (data) {
        data.forEach(item => this.count ? this.count += item.value : this.count = item.value);
        this.data = data;
        return this;
    };

    /**
     * 用于对饼图进行渲染
     */
    PieChart.prototype.render = function () {
        /**
         * 用于创建饼图对应的图例
         * @param {Object} item 
         * @param {Number} index 
         */
        let _getnerateLegend = (item, index) => {   // 绘制图例的方法
            this.context.fillRect(                  // 绘制图例图标
                this.options.legendParms.x,
                this.options.legendParms.y + index * this.options.legendParms.margin,
                this.options.width,
                this.options.height
            );
            this.context.font = this.options.legendParms.font;
            this.context.fillText(                  // 绘制图例文字
                item.title,
                this.options.legendParms.y + this.options.legendParms.margin,
                (index + 1) * this.options.legendParms.margin
            );
        };
        let temparc = 0;
        this.data.forEach((item, index) => {    // 遍历绘制饼图扇形区域
            item.color = `#${('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6)}`;
            this.context.beginPath();
            this.context.moveTo(this.width / 2, this.height / 2);
            let startarc = temparc, endarc = startarc + (item.value / this.count) * Math.PI * 2;
            this.context.arc(
                this.width / 2,             // 圆中心点 x 坐标
                this.height / 2,            // 圆中心点 y 坐标
                this.options.radius,        // 饼图半径
                startarc,                   // 开始角度
                endarc,                     // 结束角度
                false                       // 逆时针
            );
            this.context.closePath();
            this.context.fillStyle = item.color;    // 填充颜色
            this.context.fill();
            temparc = endarc;
            if (this.options.legend) {        // 判断是否绘制图例
                _getnerateLegend(item, index);
            }
        });
        return this;
    };
    return PieChart;
})();

window.onload = function () {
    const data = [
        { title: 'Java', value: 1024 },
        { title: 'C#', value: 512 },
        { title: 'JavaScript', value: 1000 },
        { title: 'Go', value: 500 }
    ];

    let pieChart = new PieChart('.pie-chart', { legend: true });
    pieChart.load(data).render();
};