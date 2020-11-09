<template>
  <div class="sys_content">
    <div class="sys_top">
      <div class="project_select">
        <a-select size="small" v-model:value="projectName" style="width: 200px">
          <template #suffixIcon>
            <img class="selectIcon" src="../assets/logo.png" />
             <!-- <CaretDownOutlined /> -->
          </template>          
          <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
            {{ (i + 9).toString(36) + i }}
          </a-select-option>
        </a-select>
      </div>
      <div class="project_title">
        <span>
          AI可视化管理平台
        </span>
      </div>
      <div class="project_select">
        <a-time-picker size="small" />
      </div>
    </div>
    <div class="sys_main_menu">
      <a-button>
        运营中心
      </a-button>
      <a-button>
        数据分析
      </a-button>
      <a-button>
        系统管理
      </a-button>
    </div>
    <div class="sys_content_main">
      <div class="sys_content_main_left"></div>
      <div class="sys_content_main_right"></div>
      <div class="sys_content_main_bttom"></div>
    </div>
  </div>
</template>
<script>
// import {CaretDownOutlined} from '@ant-design/icons-vue' 
export default {
  //  components: {
  //  CaretDownOutlined
  // },
  data() {
    return {
      projectName: '北京项目',
    }
  },
}
</script>
<style lang="less" scoped>
.sys_content {
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  .sys_top {
    text-align: center;
    height: 70px;
    width: 100%;
    background-image: url('../assets/sys_top_bg.png');
    background-size: cover;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .project_title,
    .project_select {
      margin-top: 30px;
      position: relative;
    }
    .project_title {
      height: 34px;
      width: 480px;
      background-image: url('../assets/project_title_bg.png');
      background-size: cover;
      font-size: 20px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      line-height: 30px;
      color: #ffffff;
    }
    .project_select {
      height: 38px;
      width: 200px;
      background-image: url('../assets/project_select.png');
      background-size: 100% 100%;
      background-position: center center;
      .ant-select {
        top: 8px;
      }
      /deep/.ant-select-single:not(.ant-select-customize-input)
        .ant-select-selector {
        background: transparent;
        border: none;
      }
      /deep/.ant-select-arrow {
        left: 11px;
        top: 35%;
        right: 0;
      }
      .selectIcon {
        width: 18px;
        height: 18px;
        background-color: #fff;
      }
      /deep/.ant-select-selection-item {
        font-size: 14px;
        font-family: SimHei;
        font-weight: 400;
        color: #ffffff;
      }
    }
  }
}
</style>
