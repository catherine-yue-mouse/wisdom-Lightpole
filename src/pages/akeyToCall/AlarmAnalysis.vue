<template>
  <div class="mention_detail mention_detail_clear_padding">
    <div class="mention_title">报警分析</div>
    <div class="chart_box">
      <div id="alarmAnalysisChart1"></div>
      <div id="alarmAnalysisChart2"></div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  data() {
    return {
      mychart: null,
      myChart2:null,
    }
  },
  mounted() {
    this.initEchart()
  },
  methods: {
    initEchart() {
      this.myChart = echarts.init(document.getElementById('alarmAnalysisChart1'))
      this.myChart2 = echarts.init(document.getElementById('alarmAnalysisChart2'))
      // 指定图表的配置项和数据
      let option = {
        color: ['#FFCC1B', '#385BFF', '#5439D4'],
        title: {
          text: '年龄层次分析',
          bottom: 0,
          left: 'center',
          textStyle: {
            color: '#DCDCDC',
            fontSize: 14,
            fontWeight: 400,
          },
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        series: [
          {
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data: [
              { value: 535, name: '成人' },
              { value: 510, name: '儿童' },
              { value: 634, name: '老人' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      }
      let option2 = {
        color: ['#1CACDB', '#E7EA7C', '#26E9A5'],
        title: {
          text: '报警类型分析',
          top: 0,
          left: 'center',
          textStyle: {
            color: '#DCDCDC',
            fontSize: 14,
            fontWeight: 400,
          },
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        series: [
          {
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data: [
              { value: 535, name: '寻人寻物' },
              { value: 510, name: '其他' },
              { value: 634, name: '寻求帮助' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      }
      this.myChart.setOption(option)
      this.myChart2.setOption(option2)
    },
  },
}
</script>
<style lang="less" scoped>
.chart_box {
  width: 100%;
  height: calc(100% - 45px);
  display: flex;
  > div {
    width: 50%;
  }
  >div:first-child{
    border-right: 1px solid RGBA(38, 233, 165, 0.1) ;
  }
}
</style>
