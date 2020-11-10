<template>
  <div class="sys_main_menu">
    <div :class="activeIndex==0?'active_menu':''">
      运营中心
    </div>
    <div>
      数据分析
    </div>
    <div>
      系统管理
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      activeIndex:0
    }
  }
}
</script>
<style lang="less" scoped>
.sys_main_menu {
  width: 25%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 0;
  div {
    width: 142px;
    height: 42px;
    background-color: transparent;
    padding: 0;
    background-image: url('../../assets/btn_active_bg.png');
    color: rgba(157, 255, 255, 1);
    background-size: 100% 100%;
    background-position: center center;
    border: none;
    font-size: 18px;
    text-align: center;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #ffffff;
    line-height: 42px;
    text-shadow: 0px 3px 2px #020c13;
    touch-action: none;
  }
  .active_menu {
    background-image: url('../../assets/btn_bg.png');
    background-size: 100% 100%;
    background-position: center center;
    color: #ffffff;
  }
}
</style>
