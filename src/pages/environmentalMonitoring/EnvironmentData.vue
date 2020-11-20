<template>
  <div class="mention_detail mention_detail_clear_padding">
    <div class="mention_title">实时环境数据</div>
    <div class="display_content">
      <div class="environment_data">
        <div class="environment_value">136</div>
        <div class="degree_of_pollution"><span></span>轻度污染</div>
        <div>温度：30℃</div>
        <div>湿度：60%</div>
        <div>西北风：1级</div>
        <div>风速：1.2m/s</div>
      </div>
      <div class="environment_data_list">
        <div class="item" :key="index" v-for="(item, index) of environmentData">
          <div>
            <span>{{ item.name }}</span>
            {{ item.intro }}
          </div>
          <div class="num">
            {{ item.value }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {},
      environmentData: [
        { name: 'PM2.5', intro: '可入肺颗粒物', value: 136 },
        { name: 'PM10', intro: '可吸入颗粒物', value: 136 },
        { name: 'O3', intro: '臭氧', value: 136 },
        { name: 'SO2', intro: '二氧化碳', value: 136 },
        { name: 'NO2', intro: '二氧化氮', value: 136 },
        { name: 'CO', intro: '一氧化碳', value: 136 },
      ],
    }
  },
}
</script>
<style lang="less" scoped>
.display_content {
  margin-top: 5px;
  height: calc(100% - 48px);
  display: flex;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #fefeff;
  line-height: 24px;
  justify-content: space-between;
  padding-right: 15px;
  .environment_data {
    line-height: 30px;
    .environment_value {
      font-size: 28px;
      font-family: FZLanTingHeiS-R-GB;
      font-weight: 400;
      color: #fefeff;
      line-height: 30px;
    }
    border: 2px solid;
    border-image: linear-gradient(55deg, #00ffd1, #0026ff) 10 10;
    border-background: linear-gradient(55deg, #00ffd1 0%, #0026ff 100%);
    width: 34%;
    padding: 5px;
    .degree_of_pollution {
      height: 20px;
      line-height: 20px;
      width: 100%;
      span {
        display: inline-block;
        width: 16px;
        height: 16px;
        margin-right: 5px;
        vertical-align: middle;
        border-radius: 50%;
        background-color: #e8641b;
      }
    }
  }
  .environment_data_list {
    display: flex;
    width: 65%;
    justify-content: space-between;
    flex-flow: wrap;
    .item {
      width: 48%;
      height: 35px;
       flex-flow: nowrap;    
       border-bottom: 2px solid #FFC71C; 
       position: relative;
       line-height: 14px;
      >div:first-child{
        span{
          font-size: 10px;
          display: block;
        }
        font-size: 8px;
      }
      .num {
        position: absolute;
        right: 0;
        bottom: 0;
        font-size: 20px;
        font-family: FZLanTingHeiS-R-GB;
        font-weight: 400;
        color: #fefeff;
        line-height: 30px;
      }
    }
    .item:nth-child(n+3){
      border-bottom: 2px solid #82DA5F; 
    }
  }
}
</style>
