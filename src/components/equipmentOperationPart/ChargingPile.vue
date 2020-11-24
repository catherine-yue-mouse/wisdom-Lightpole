<template>
  <div class="content">
    <div class="equipment_ctrol_content">
      <a-row>
        <a-col :span="12" class="text_aligin_end">设备名称：</a-col>
        <a-col :span="12">充电桩03 </a-col>
      </a-row>
      <a-row>
        <a-col :span="12" class="text_aligin_end">设备状态：</a-col>
        <a-col :span="12" class="green_color">充电中 </a-col>
      </a-row>
       <a-row>
        <a-col :span="12" class="text_aligin_end">电流：</a-col>
        <a-col :span="12">28A </a-col>
      </a-row>
      <a-row>
        <a-col :span="12" class="text_aligin_end">电压：</a-col>
        <a-col :span="12">36v </a-col>
      </a-row>
      <a-row>
        <a-col :span="12" class="text_aligin_end">充电速度：</a-col>
        <a-col :span="12">50% </a-col>
      </a-row>
      <a-row>
        <a-col :span="12" class="text_aligin_end">消费金额：</a-col>
        <a-col :span="12">5元 </a-col>
      </a-row>
      <a-row>
        <a-col :span="12" class="text_aligin_end">余额：</a-col>
        <a-col :span="12">32元 </a-col>
      </a-row>       
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
.green_color{
  color: #08D0A4;
}
</style>