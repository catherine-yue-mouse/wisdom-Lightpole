<template>
  <div class="content">
    <div class="equipment_ctrol_content">
      <a-row>
        <a-col :span="12" class="text_aligin_end">设备名称：</a-col>
        <a-col :span="12">监控03 </a-col>
      </a-row>
      <a-row>
        <a-col :span="12" class="text_aligin_end">设备状态：</a-col>
        <a-col :span="12">监控03 </a-col>
      </a-row>
      <a-row>
        <a-col :span="12" class="text_aligin_end">电流：</a-col>
        <a-col :span="12">监控03 </a-col>
      </a-row>
      <a-row>
        <a-col :span="12" class="text_aligin_end">电压：</a-col>
        <a-col :span="12">监控03 </a-col>
      </a-row>
      <a-row>
        <a-col :span="12" class="text_aligin_end">亮度：</a-col>
        <a-col :span="12">监控03 </a-col>
      </a-row>
      <a-row>
        <a-col :span="12" class="text_aligin_end">音量：</a-col>
        <a-col :span="12">监控03 </a-col>
      </a-row>
       <a-row>   
        <a-col :span="6"></a-col>    
        <a-col :span="16">
          <a-button class="equipment_ctrol_btn" @click="openLight">
            开启
          </a-button>
          <a-button class="equipment_ctrol_btn">
            关闭
          </a-button>
          <a-button class="equipment_ctrol_btn" @click="showModal">
            发送
          </a-button>
          <a-button class="equipment_ctrol_btn">
            截图
          </a-button>
        </a-col>
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