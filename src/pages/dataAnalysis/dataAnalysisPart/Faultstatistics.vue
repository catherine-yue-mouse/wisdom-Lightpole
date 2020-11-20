<template>
  <div class="mention_detail">
    <div class="mention_title">故障统计</div>
    <div id="chart_content"></div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  data() {
    return {
      myChart: null,
    }
  },
  mounted() {
    this.initEchart()
  },
  methods: {
    initEchart() {
      this.myChart = echarts.init(document.getElementById('chart_content'))

      // 指定图表的配置项和数据
      let option = {       
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        legend: {
          data: ['2011年', '2012年'],
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 1200],
        },
        yAxis: {
          type: 'category',
          data: [ '年', '月','周', '日'],
        },
        series: [
          {           
            type: 'bar',
            data: [10,20,30,40],
          }         
        ],
      }

      // 使用刚指定的配置项和数据显示图表。
      this.myChart.setOption(option)
    },
  },
}
</script>
<style lang="less" scoped>
#chart_content {
  height: calc(100% - 70px);
  width: 100%;
}
</style>
