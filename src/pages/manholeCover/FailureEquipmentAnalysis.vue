<template>
  <div class="mention_detail mention_detail_clear_padding">
    <div class="mention_title">故障设备分析</div>
    <div class="chart_content" id='manholeCoverfailureEquipmentChart'>
     
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  data() {
    return {
      data:[],
       mychart: null,
    }
  },
    mounted() {
    this.initEchart()
  },
  methods:{
     initEchart() {
      this.myChart = echarts.init(document.getElementById('manholeCoverfailureEquipmentChart'))     
      // 指定图表的配置项和数据
      let option = {
        color: ['#FFCC1B', '#385BFF', '#5439D4',"#D439C4","#00D8FF"],       
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
              { value: 222, name: 'vv' },
              { value: 333, name: 'xx' },
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
    },
  }
}
</script>
<style lang="less" scoped>
#manholeCoverfailureEquipmentChart{
    width: 100%;
  height: calc(100% - 45px);
}
</style>
