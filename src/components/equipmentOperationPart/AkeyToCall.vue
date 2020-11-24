<template>
  <div class="content">
    <div class="equipment_ctrol_content">
      <a-row>
        <a-col :span="12" class="text_aligin_end">设备名称：</a-col>
        <a-col :span="12">YJHJ03</a-col>
      </a-row>
      <a-row>
        <a-col :span="12" class="text_aligin_end">控制：</a-col>
        <a-col :span="12">
         <a-button class="equipment_ctrol_btn">
            查看监控
          </a-button>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12" class="text_aligin_end">设备编号：</a-col>       
        <a-col :span="12">-- </a-col>
      </a-row>
      <a-row>
        <a-col :span="12" class="text_aligin_end">报警状态：</a-col>
        <a-col :span="12">-- </a-col>
      </a-row>
      <a-row>
        <a-col :span="12" class="text_aligin_end">更新时间：</a-col>
        <a-col :span="12">-- </a-col>
      </a-row>         
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>

</style>