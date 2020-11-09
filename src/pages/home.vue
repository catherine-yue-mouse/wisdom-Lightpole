<template>
  <div class="sys_content">
    <div class="sys_top">
      <span>
        AI可视化管理平台
      </span>
    </div>
    <div class="sys_main_menu">

    </div>
     <div class="sys_content_main">
       <div class="sys_content_main_left"></div>
        <div class="sys_content_main_right"></div>
        <div class="sys_content_main_bttom"></div>
     </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
.sys_content{
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  .sys_top{
    text-align: center;
    height: 70px;
    width: 100%;
    background-image: url('../assets/sys_top_bg.png');
     background-size: cover; 
            
  }
}
</style>