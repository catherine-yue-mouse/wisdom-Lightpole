<template>
  <div class="mention_detail">
    <div class="mention_title">故障统计</div>
    <div id="chart_content"></div>
    </div>
</template>
<script>
import echarts from 'echarts';
export default {
  data(){
    return{
      myChart:null
    }
  },
  methods:{
    initEchart(){
      this.myChart=echarts.init(document.getElementById('chart_content'));
      let option = {
        color: ['#f44'],
        tooltip : {
          trigger: 'axis',
          axisPointer : {
            type : 'shadow'
          }
        },
        xAxis : [
          {
            type : 'category',
            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月',],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis : [
          {
            type : 'value'
          }
        ],
        series : [
          {
            name:'每月花费',
            type:'bar',
            barWidth: '60%',
            data:[995,666,444,858,654,236,645,546,846,225,547,356]
          }
        ]
      };
      this.myChart.setOption(option);
    }
  }
}
</script>
<style lang="less" scoped>
#chart_content{

  height: calc(100% - 70px);
  width: 100%;
}
</style>