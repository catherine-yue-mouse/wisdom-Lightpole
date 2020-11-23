<template>
   <div class="sys_top">
      <div class="project_select">
        <a-select size="small" v-model:value="projectName" style="width: 200px">
          <template #suffixIcon>
            <img class="selectIcon" src="../../assets/logo.png" />         
          </template>
          <a-select-option v-for="(item,index) in projectList" :key="index">
            {{ item.name}}
          </a-select-option>
        </a-select>
      </div>
      <div class="project_title">
        <span>
          AI可视化管理平台
        </span>
      </div>
      <div class="project_select">
        上午 07:00 11月11日
      </div>
    </div>
</template>
<script>
export default {
   name:'SysProjectTop',
  data() {
    return {
      projectList:[{name:'北京项目'},{name:'上海项目'}],
      projectName: '北京项目',
    }
  },
}
</script>
<style lang="less" scoped>
 .sys_top {
   z-index: 99;
    text-align: center;
    height: 70px;
    position: relative;
    width: 100%;
    background-image: url('../../assets/sys_top_bg.png');
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
      background-image: url('../../assets/project_title_bg.png');
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
      line-height: 38px;
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #ffffff;

      background-image: url('../../assets/project_select.png');
      background-size: 100% 100%;
      background-position: center center;     
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
</style>