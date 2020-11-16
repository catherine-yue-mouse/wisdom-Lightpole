<template>
  <div class="sys_content">
    <div class="sys_map"></div>
    <SysProjectTop />
    <SysMainMenu />
    <div class="sys_content_main">
      <div class="sys_content_main_left">
        <LightPoleMenu />
      </div>
      <div class="sys_content_main_right">
        <LightPoleDetail />
      </div>
      <div class="sys_content_main_bttom">
        <LightPoleFunSwiper />
      </div>
    </div>
  </div>
</template>
<script>
import SysProjectTop from './homeComponent/SysProjectTop'
import SysMainMenu from './homeComponent/SysMainMenu'
import LightPoleMenu from './homeComponent/LightPoleComponent/LightPoleMenu'
import LightPoleDetail from './homeComponent/LightPoleComponent/LightPoleDetail'
import LightPoleFunSwiper from './homeComponent/LightPoleComponent/LightPoleFunSwiper'
export default {
  components: {
    SysProjectTop,
    SysMainMenu,
    LightPoleMenu,
    LightPoleDetail,
    LightPoleFunSwiper,
  },
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
  .sys_map {
    height: 100%;
    width: 100%;
    z-index: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 22, 45, 0.8);
  }
  .sys_content_main {
    position: absolute;
    width: 100%;
    height: calc(100% - 140px);
    bottom: 0;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .sys_content_main_left {
      background-image: url('../assets/sys_contrl_left.png');
    }
    .sys_content_main_right {
      background-image: url('../assets/sys_contrl_right.png');
    }
    .sys_content_main_left,
    .sys_content_main_right {
      z-index: 100;
      width: 19%;
      height: 100%;     
      background-size: 100% 100%;
      background-position: center center;
    }

    .sys_content_main_bttom {
      z-index: 0;
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
