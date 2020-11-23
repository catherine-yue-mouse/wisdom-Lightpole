<template>
  <div class="mention_detail">
    <div class="mention_title">能耗趋势</div>
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
        textStyle: {
          fontFamily: 'Microsoft YaHei',
        },
        color: ['#C64C1C', '#00B43B'],
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['去年', '本月'],
          top:"20",
          right:"20",
          icon: 'circle',
          textStyle:{
            color:'#DCDCDC'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
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
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#576385'],
              type: 'dashed',
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
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: '本月',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310],
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
