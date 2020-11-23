<template>
  <div class="mention_detail">
    <div class="mention_title">使用状态</div>
    <div id="akeyToCallUsingChart"></div>
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
      this.myChart = echarts.init(
        document.getElementById('akeyToCallUsingChart')
      )

      // 指定图表的配置项和数据
     let option = {
       color:["#FFF100"],
        title: {
          text: '24小时连接数分析',
          bottom: 0,
          left: 'center',
          textStyle: {
            color: '#DCDCDC',
            fontSize: 14,
            fontWeight: 400,
          },
        },
        grid: {
          left: '0%',
          right: '5%',
          bottom: '15%',
          top:"10%",
          containLabel: true,
        },
        xAxis: {
          type: 'category',
           axisLine: {
            lineStyle: {
              color: '#FFFFFF',
            },
          },
          splitLine: {
            show: false,
          },
          data: ['4', '8', '12', '16', '20', '24'],
        },
        yAxis: {
           axisLine: {
            lineStyle: {
              color: '#FFFFFF',
            },
          },         
          type: 'value',
        },
        series: [
          {
            data: [10,15,30,5,33,50],
            type: 'line',
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
#akeyToCallUsingChart {
  width: 100%;
  height: calc(100% - 45px);
}
</style>
