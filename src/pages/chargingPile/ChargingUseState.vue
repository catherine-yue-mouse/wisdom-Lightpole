<template>
  <div class="mention_detail mention_detail_clear_padding">
    <div class="mention_title">使用状态</div>
    <div id="ChargingUseStateChart"></div>
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
      this.myChart = echarts.init(document.getElementById('ChargingUseStateChart'))
      // 指定图表的配置项和数据
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)',
        },
         color:["#F67D91","#DDF915","#27F9F1"],
        legend: {         
          orient: 'vertical',        
          top: 10,
          left:0,
          data: ['故障', '充电', '空闲'],
           textStyle:{
            color:'#DCDCDC'
          }
        },
         grid: {
          containLabel: true,
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 335, name: '故障' },
              { value: 310, name: '充电' },
              { value: 234, name: '空闲' },
            ],
          },
        ],
      }

      this.myChart.setOption(option)
    },
  },
}
</script>
<style lang="less" scoped>
#ChargingUseStateChart {
  width: 100%;
  height: calc(100% - 45px);
}
</style>
