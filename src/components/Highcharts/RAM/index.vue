<template src="./index.html"></template>
<script>
import { defineComponent, onMounted } from "vue";
import Highcharts from "highcharts";

export default defineComponent({
  name: "RAM",
  setup() {
    onMounted(() => {
      Highcharts.setOptions({
        global: {
          useUTC: false,
        },
      });
      function activeLastPointToolip(chart) {
        var points = chart.series[0].points;
        chart.tooltip.refresh(points[points.length - 1]);
      }
      var chart = Highcharts.chart("ram", {
        chart: {
          type: "spline",
          marginRight: 10,
          events: {
            load: function () {
              var series = this.series[0],
                chart = this;
              activeLastPointToolip(chart);
              setInterval(function () {
                var x = new Date().getTime(), // 当前时间
                  y = Math.random(); // 随机值
                series.addPoint([x, y], true, true);
                activeLastPointToolip(chart);
              }, 1000);
            },
          },
        },
        title: {
          text: "TPS",
        },
        xAxis: {
          type: "datetime",
          tickPixelInterval: 150,
        },
        yAxis: {
          title: {
            text: null,
          },
        },
        tooltip: {
          formatter: function () {
            return (
              "<b>" +
              this.series.name +
              "</b><br/>" +
              Highcharts.dateFormat("%Y-%m-%d %H:%M:%S", this.x) +
              "<br/>" +
              Highcharts.numberFormat(this.y, 2)
            );
          },
        },
        legend: {
          enabled: false,
        },
        series: [
          {
            name: "tps",
            data: (function () {
              // 生成随机值
              var data = [],
                time = new Date().getTime(),
                i;
              for (i = -19; i <= 0; i += 1) {
                data.push({
                  x: time + i * 1000,
                  y: Math.random(),
                });
              }
              return data;
            })(),
          },
        ],
      });
    });
  },
});
</script>

<style src="./index.scss" lang='scss' scoped>
</style>