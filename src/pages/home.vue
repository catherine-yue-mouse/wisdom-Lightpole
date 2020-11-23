<template>
  <div class="sys_content">
    <div class="sys_map">
        <MapControl :lightControlType="dataAnalysisType"/>
    </div>
    <SysProjectTop />
    <SysMainMenu @change='changeSysType' />
    <div class="sys_content_main">
      <div class="sys_content_main_left">
        <LightPoleMenu />
      </div>
      <div class="sys_content_main_right">
        <!-- <LightPoleDetail v-if="false"/>    -->
        <DataAnalysisIndex  :lightControlType='dataAnalysisType' />
        <!-- <LightPoleDetail v-if="sysType=='SystemManagement'" /> -->    
      </div>
       
      <div class="sys_content_main_bttom">
        <LightPoleFunSwiper @change='changeDataAnalysisType' />
      </div>
    </div>
  </div>
</template>
<script>
import MapControl from './mapComponent/mapControl'
import SysProjectTop from './homeComponent/SysProjectTop'
import SysMainMenu from './homeComponent/SysMainMenu'
import LightPoleMenu from './homeComponent/LightPoleComponent/LightPoleMenu'
// import LightPoleDetail from './homeComponent/LightPoleComponent/LightPoleDetail'
import LightPoleFunSwiper from './homeComponent/LightPoleFunSwiper'
import DataAnalysisIndex from './dataAnalysis/dataAnalysisIndex'
export default {
  components: {
    MapControl,
    SysProjectTop,
    SysMainMenu,
    LightPoleMenu,
    // LightPoleDetail,
    LightPoleFunSwiper,
    DataAnalysisIndex,
  },
  data() {
    return {
      projectName: '北京项目',
      sysType:'operating',
      dataAnalysisType:'IntelligentLightPole',
    }
  },
  methods:{
    changeSysType(type){
      this.sysType=type;
    },
    changeDataAnalysisType(type){
      this.dataAnalysisType=type;
      console.log(this.dataAnalysisType)
    }
  }
}
</script>
<style lang="less" scoped>
.sys_content {
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  .sys_map {
    height: 100%;
    width: 100%;
    z-index: 99;
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 22, 45, 0.8);
  }
  .sys_content_main {
    // position: absolute;
    width: 100%;
    height: calc(100% - 140px);
    bottom: 0;
    z-index: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .sys_content_main_left {
      background-image: url('../assets/sys_contrl_left.png');
      background-size: 100% 100%;
      background-position: center center;     
    }
    .sys_content_main_right {
      // background-image: url('../assets/sys_contrl_right.png');
    }
    .sys_content_main_left,
    .sys_content_main_right {
      // z-index: 100;
      width: 19%;
      height: 100%;     
       z-index: 99;
    }

    .sys_content_main_bttom {
      z-index: 99;
      width: 100%;
      bottom: 0;
      height: 25%;
      position: absolute;
      background-image: url('../assets/lightPolebg.png');
      background-size: 100% 100%;
      background-position: center center;
    }
  }
}
</style>
