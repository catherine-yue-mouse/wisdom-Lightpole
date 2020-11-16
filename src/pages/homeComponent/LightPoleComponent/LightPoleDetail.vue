<template>
  <div class="light_pole_detail">
    <div class="table_panel">
      <div class="table_item" :class="showType===1?'active_index':''" @click="changeShow(1)">
        数据统计
      </div>
      <div class="table_item" :class="showType===2?'active_index':''"  @click="changeShow(2)">
        灯杆信息
      </div>
    </div>
    <LightPoleCount v-if="showType === 1" />
    <LightPoleDetail v-else />
  </div>
</template>
<script>
import LightPoleCount from './LightPoleDetailPart/LightPoleDetailCount'
import LightPoleDetail from './LightPoleDetailPart/LightPoleDetail'
export default {
  components: {
    LightPoleCount,
    LightPoleDetail,
  },
  data() {
    return {
      showType: 1,
    }
  },
  methods: {
    callback() {},
    changeShow(type) {
      this.showType = type;
    },
  },
}
</script>

<style lang="less" scoped>
.light_pole_detail {
  padding: 0 0px 10px 5px;
  position: relative;
  .table_panel {
    position: absolute;
    left: -25px;
    top: 90px;
    .table_item {
      margin-bottom: 9px;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #ffffff;
      width: 30px;
      height: 66px;
      border: 1px solid #3fbcef;
      background: linear-gradient(
        0deg,
        rgba(2, 106, 203, 0.5) 30%,
        rgba(69, 158, 233, 0.5) 100%
      );
      writing-mode: vertical-lr;
      writing-mode: tb-lr;
      line-height: 24px;
      text-align: center;
    }
    .active_index {
      background: transparent;
      border-right: none;
    }
  }
}
</style>
