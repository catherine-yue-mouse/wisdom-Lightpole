<template>
  <div class="content">
    <div class="equipment_ctrol_content">
      <a-row>
        <a-col :span="8">调光：</a-col>
        <a-col :span="16">照明03 </a-col>
      </a-row>
      <a-row>
        <a-col :span="8">回路:</a-col>
        <a-col :span="16">
          <a-checkbox-group v-model:value="checkValue">
            <a-row>
              <a-col
                :span="24"
                :key="index"
                v-for="(item, index) of checkOption"
              >
                <a-checkbox :value="item.value">
                  {{ item.name }}
                </a-checkbox>
              </a-col>
            </a-row>
          </a-checkbox-group>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="8">控制：</a-col>
        <a-col :span="16">
          <a-button class="equipment_ctrol_btn" @click="showModal">
            开灯
          </a-button>
          <a-button class="equipment_ctrol_btn">
            关灯
          </a-button>
          <a-button class="equipment_ctrol_btn">
            取消
          </a-button>
          <a-button class="equipment_ctrol_btn">
            读取
          </a-button>
        </a-col>
      </a-row>
    </div>
    <a-modal
      title="提示"
      width='300px' 
      class="intelligent_light_modal"    
      v-model:visible="modalVisible"
      @ok="handleOk"
      cancelText='取消'
      okText='确定'
      :centered='true'
    >
      <p>确认此操作？</p>
    </a-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkOption: [
        { name: '第一回路', value: '1' },
        { name: '第二回路', value: '2' },
        { name: '第三回路', value: '3' },
      ],
      checkValue: ['1'],
      modalVisible:false
    }
  },
  methods:{
     handleOk() {       
      this.modalVisible = false; 
    },
    showModal() {
      this.modalVisible = true;
    },
  }
}
</script>
<style lang="less">
.intelligent_light_modal{
  .ant-modal-body,.ant-modal-header,.ant-modal-footer,.ant-modal-title{
    background-color:#01275B;
    color:#fff
  }
  .ant-modal-header{
    text-align: center;
  }
}
</style>
