<template>
  <div>
    <Chart :option="chartOption" style="height: 400px"></Chart>
  </div>
</template>

<script>
import Chart from "../../components/Chart";
// import random from "lodash/random";
// 也可以直接挂在到Vue原型中
import request from "./../../utils/request";

export default {
  name: "Analysis",
  components: {
    Chart
  },
  data() {
    return {
      chartOption: {}
    };
  },

  mounted() {
    this.getChartDataNew();
    // this.getChartData();
    this.interval = setInterval(() => {
      this.getChartDataNew();
      // this.getChartData()
      // this.chartOption.series[0].data = this.chartOption.series[0].data.map(
      //     () => random(100)
      // );
      console.log("request");
      this.chartOption = { ...this.chartOption };
    }, 3000);
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  methods: {
    getChartDataNew() {
      console.log("getChartDataNew....");
      this.$http.get(this.$api.Chart.chart, false).then(response => {
        this.chartOption = {
          title: {
            text: "ECharts 入门示例"
          },
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [
            {
              name: "销量",
              type: "bar",
              data: response.data
            }
          ]
        };
      });
    },

    getChartData() {
      request({
        path: "/api/dashboard/chart",
        method: "get",
        params: { ID: 123 }
      }).then(response => {
        this.chartOption = {
          title: {
            text: "ECharts 入门示例"
          },
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [
            {
              name: "销量",
              type: "bar",
              data: response.data
            }
          ]
        };
      });
    }
  }
};
</script>

<style scoped></style>
