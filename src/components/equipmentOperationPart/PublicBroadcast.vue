<template>
  <div>
    <div class="equipment_ctrol_content">
      <a-row>
        <a-col :span="8">名称：</a-col>
        <a-col :span="16">广播03 </a-col>
      </a-row>
      <a-row>
        <a-col :span="8">调音：</a-col>
        <a-col :span="16">
          <a-slider id="test" v-model:value="voiceValue" />
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="8">控制：</a-col>
        <a-col :span="16">
          <a-button class="equipment_ctrol_btn" @click="showModal">
            发送
          </a-button>
          <a-button class="equipment_ctrol_btn">
            停止
          </a-button>
        </a-col>
      </a-row>
    </div>
    <a-modal
      :centered="true"
      width="100%"
      class="public_broad_send_modal"
      v-model:visible="modalVisible"
      :footer="null"
      @ok="handleOk"
    >
      <div class="send_content">
        <div class="title">
          广播媒体库播放
        </div>
        <div class="display_list">
          <a-tree showLine :defaultExpandedKeys="['0-0-0']" @select="onSelect">
            <!-- <template #switcherIcon><CarryOutOutlined /></template> -->
            <a-tree-node title="parent 1" key="0-0">
               <template #icon><CarryOutOutlined /></template>
              <a-tree-node title="parent 1-0" key="0-0-0">
                <a-tree-node title="leaf" key="0-0-0-0" />
                <a-tree-node title="leaf" key="0-0-0-1" />
                <a-tree-node title="leaf" key="0-0-0-2" />
              </a-tree-node>
              <a-tree-node key="0-0-1" title="parent 1-1">
                <a-tree-node key="0-0-1-0" title="leaf" />
              </a-tree-node>
              <a-tree-node key="0-0-2" title="parent 1-2">
                <a-tree-node key="0-0-2-0" title="leaf" />
                <a-tree-node key="0-0-2-1" title="leaf" />
              </a-tree-node>
            </a-tree-node>
          </a-tree>
        </div>
        <div class="footer">
          <a-button class="equipment_ctrol_btn" @click="sendVideo">
            发送
          </a-button>
        </div>
      </div>
    </a-modal>
  </div>
</template>
<script>
import { CarryOutOutlined } from '@ant-design/icons-vue';
export default {
   components: {
    CarryOutOutlined,
  },
  data() {
    return {
      modalVisible: false,
      lightValue: 30,
      voiceValue: 50,
      displayList: [
        { name: '爱智慧', imgList: ['', ''], owner: '所属人' },
        { name: '爱智慧', imgList: ['', ''], owner: '所属人' },
        { name: '爱智慧', imgList: ['', ''], owner: '所属人' },
      ],
    }
  },
  methods: {
    onSelect(keys, event) {
      console.log('Trigger Select', keys, event)
    },
    onExpand() {
      console.log('Trigger Expand')
    },
    showModal() {
      this.modalVisible = true
    },
    sendVideo(item) {
      console.log(item)
    },
  },
}
</script>
<style lang="less">
.public_broad_send_modal {
  /deep/.ant-modal-close {
    top: -150px;
  }
  /deep/.ant-modal-content {
    background-image: none;
  }
  /deep/.ant-modal-body {
    padding: 0 !important;
  }
  .send_content {
    width: 30%;
    margin: 0 auto;
    background: RGBA(2, 23, 66, 0.9);
    box-shadow: 0 8px 30px #2d86e1;
    border-radius: 5px;

    /deep/.ant-tree-title {
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #bec6c8;
    }
    .title {
      text-align: center;
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #04d9ff;
      padding: 15px 0;
      border-bottom: 1px solid rgba(4, 217, 255, 0.3);
    }
    .display_list {
      max-height: 580px;
      overflow: scroll;
      padding: 20px;
    }
    .footer {
      border-top: 1px solid rgba(4, 217, 255, 0.3);
      padding: 20px;
    }
    .display_list::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
