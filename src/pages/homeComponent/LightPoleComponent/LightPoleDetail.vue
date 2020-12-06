<template>
  <div
    class="light_pole_detail"
    :class="showType === 1 ? 'background_1' : 'background_2'"
  >
    <div class="table_panel">
      <div class="table_item" @click="changeShow(1)">数据统计</div>
      <div class="table_item" @click="changeShow(2)">灯杆信息</div>
    </div>
    <LightPoleCount v-if="showType === 1" />
    <LightPoleDetail v-else />
  </div>
</template>
<script>
import LightPoleCount from "./LightPoleDetailPart/LightPoleDetailCount";
import LightPoleDetail from "./LightPoleDetailPart/LightPoleDetail";
export default {
  components: {
    LightPoleCount,
    LightPoleDetail,
  },
  data() {
    return {
      showType: 1,
    };
  },
  methods: {
    callback() {},
    changeShow(type) {
      this.showType = type;
    },
  },
};
</script>

<style lang="less" scoped>
.background_1 {
  background-image: url("../../../assets/sys_contrl_right1.png");
}
.background_2 {
  background-image: url("../../../assets/sys_contrl_right2.png");
}
.light_pole_detail {
  // padding: 0 0px 10px 5px;
  background-size: 100% 100%;
  background-position: center center;
  z-index: 100;
  position: relative;
  width: 100%;
  height: 100%;
  .table_panel {
    position: absolute;
    left: 0px;
    top: 8%;
    .table_item {
      // margin-bottom: 5%;
      cursor: pointer;
      // opacity: 0;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #ffffff;
      width: 30px;
      height: 80px;
      // border: 1px solid #3fbcef;
      // background: linear-gradient(
      //   0deg,
      //   rgba(2, 106, 203, 0.5) 30%,
      //   rgba(69, 158, 233, 0.5) 100%
      // );
      writing-mode: vertical-lr;
      writing-mode: tb-lr;
      line-height: 24px;
      text-align: center;
    }
  }
}
</style>
