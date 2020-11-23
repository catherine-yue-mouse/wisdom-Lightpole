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
        color: ['#007EFF', '#008A21', '#6E008A', '#8A5E00'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        xAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#576385',
            },
          },
          splitLine: {
            show: false,
          },
          boundaryGap: [0, 0.01],
        },
        grid: {
          left: '0%',
          right: '5%',
          bottom: '0%',
          top:"5%",
          containLabel: true,
        },
        yAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#576385',
            },
          },
          data: ['年', '月', '周', '日'],
        },
        series: [
          {
            name: '2011年',
            type: 'bar',
            data: [3200, 800, 300, 50],
          },
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
  height: calc(100% - 45px);
  width: 100%;
}
</style>
