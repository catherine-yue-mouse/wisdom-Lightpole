<template>
  <div class="light_pole_detail_count">   
    <div class="comment_title">
      <img class="title_icon" src="../../../../assets/light_pole_list_icon.png" />
      数量统计
    </div>
    <div class="count_grid">
      <div
        class="grid_item"
        :key="index"
        v-for="(item, index) of lightPoleCount"
      >
        <span>{{ item.title }}</span>
        <div>
          <span :style="{ color: lightPoleCountColor[index] }">{{
            item.count
          }}</span
          >台
        </div>
      </div>    
    </div>
    <div class="broken_count_content">
      <div class="comment_title padding_top_20">
        <img
          class="title_icon"
          src="../../../../assets/light_pole_list_icon.png"
        />
        故障统计
      </div>
      <div class="broken_list">
        <div
          class="broken_list_item"
          :class="item.type == 'warring' ? 'warring_color' : ''"
          :key="index"
          v-for="(item, index) of brokenList"
        >
          <span :class="item.type == 'warring' ? 'warring_bg_color' : ''"></span
          >{{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lightPoleCountColor: [
        '#40C8B5',
        '#FFD553',
        '#008B47',
        '#008B47',
        '#F98343',
        '#40C8B5',
        '#FFE94C',
        '#C263F3',
      ],
      lightPoleCount: [
        { title: '智慧照明总数', count: 28 },
        { title: '显示屏总数', count: 28 },
        { title: '视频监控总数', count: 28 },
        { title: 'WIFI总数', count: 28 },
        { title: '环境检测总数', count: 28 },
        { title: '一键呼叫总数', count: 28 },
        { title: '广播总数', count: 28 },
        { title: '井盖总数', count: 28 },
      ],
      brokenList: [
        {
          title:
            '2020-03-10 16:35:39   【一键呼叫】[世邦]【AIDG-一键呼叫(100001)】',
          type: 'normal',
        },
        {
          title:
            '2020-03-10 16:35:39   【一键呼叫】[世邦]【AIDG-一键呼叫(100001)】',
          type: 'normal',
        },
        {
          title:
            '2020-03-10 16:35:39   【一键呼叫】[世邦]【AIDG-一键呼叫(100001)】',
          type: 'normal',
        },
        {
          title:
            '2020-03-10 16:35:39   【一键呼叫】[世邦]【AIDG-一键呼叫(100001)】',
          type: 'normal',
        },
        {
          title:
            '2020-03-10 16:35:39   【一键呼叫】[世邦]【AIDG-一键呼叫(100001)】',
          type: 'normal',
        },
        { title: '报警：线路一灯杆02一键呼叫出故障', type: 'warring' },
      ],
    }
  },
  methods: {
    callback() {},
  },
}
</script>

<style lang="less" scoped>
.light_pole_detail_count {
  padding: 0 0px 10px 5px;
  .linear_text {
    font-size: 22px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #ffffff;
    line-height: 28px;
    background: linear-gradient(0deg, #9dffff 0%, #3398ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .count_grid {
    padding: 10px 25px;
    display: flex;
    position: relative;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    .grid_item {
      width: 48%;
      height: 67px;
      background: rgba(15, 102, 172, 0.37);
      border: 1px solid #0258c1;
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #ffffff;
      line-height: 25px;
      padding: 9px 9px 11px 9px;
      margin-bottom: 22px;
      > div {
        text-align: center;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #06843b;
        line-height: 25px;
        span {
          margin-right: 9px;
          font-size: 30px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #40c8b5;
          line-height: 25px;
        }
      }
    }
    
  }
  .broken_count_content {
    border-top: 1px solid #06e4c6;
    height: 300px;
    overflow-y: scroll;

    .broken_list {
      padding: 10px 25px;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #ffffff;
      line-height: 18px;
      .broken_list_item {
        margin-bottom: 9px;
      }
      span {
        display: inline-block;
        width: 32px;
        height: 14px;
        background-color: #06ffda;
        margin-right: 6px;
      }
    }
  }
  .broken_count_content::-webkit-scrollbar {
    width: 15px;
    background: rgba(39, 40, 92, 10.8);
    border-radius: 10px;    
  }
  // .broken_count_content::-webkit-scrollbar-thumb {
  //   background: #06ffda;
  //   border-radius: 10px;
  //   height: 10px;
  //   background-image: url('../../../assets/logo.png');
  //   height: 20px;
  // }
  // .broken_count_content::-webkit-scrollbar-track {
  //   background: #27285c;
  //   border-radius: 2px;
  // }
  .broken_count_content::-webkit-scrollbar-button {
    // background-color: #06ffda;
    // background-image: url('../../../assets/scroll_bar_top.png');
  }

  // .broken_count_content::-webkit-scrollbar-thumb:hover {
  //   background: #333;
  // }

  // .broken_count_content::-webkit-scrollbar-corner {
  //   background: #179a16;
  // }
}
</style>
