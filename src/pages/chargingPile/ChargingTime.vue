<template>
  <div class="mention_detail">
    <div class="mention_title">充电时段</div>
    <div id="chart"></div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  data() {
    return {
      mychart: null,
    }
  },
  mounted() {
    this.initEchart()
  },
  methods: {
    initEchart() {
      this.myChart = echarts.init(document.getElementById('chart'))

      // 指定图表的配置项和数据
      let option = {
        title: {
          text: '24小时充电时段统计',         
          left: 'center',
          bottom: '0%',
          textStyle: {
            fontSize: 14,
            color:'#DCDCDC'
          }
        },
        color: ['#C64C1C'],
        tooltip: {
          trigger: 'axis',
        },
        grid: {
          top: '10%',
          left: '3%',
          right: '4%',
          bottom: '15%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: '#576385',
            },
          },
          data: ['0', '4', '8', '12', '16', '20', '24'],
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#576385'],
            },
          },
          axisLine: {
            lineStyle: {
              color: '#576385',
            },
          },
        },
        series: [
          {
            name: '去年',
            type: 'line',
            stack: '总量',
            data: [10, 5, 13, 15, 8, 10, 20],
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
#chart {
  width: 100%;
  height: calc(100% - 45px);
}
</style>
