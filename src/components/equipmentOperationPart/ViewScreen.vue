<template>
  <div>
    <div class="equipment_ctrol_content">
      <a-row>
        <a-col :span="8">名称：</a-col>
        <a-col :span="16">显示屏03 </a-col>
      </a-row>
      <a-row>
        <a-col :span="8">调光：</a-col>
        <a-col :span="16">
          <a-slider id="test" v-model:value="lightValue" />
        </a-col>
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
    <a-modal
      :centered="true"
      width="100%"
      class="view_screen_send_modal"
      v-model:visible="modalVisible"
      :footer="null"
      @ok="handleOk"
    >
      <div class="send_content">
        <div class="video_content">
          <video src="../../assets/movie.mp4" controls>
            您的浏览器不支持 video 标签。
          </video>
        </div>
        <div class="display_list">
          <a-table
            :columns="columns"
            :pagination="false"
            :data-source="displayList"
          >
            <template #index="{  index }">
              {{ index }}
            </template>
            <template #imgList="{ text: records }">
              <span>
                <img
                  v-for="(index, item) in records"
                  :key="index"
                  :src="item"
                />
              </span>
            </template> 
            <template #control="{ record  }">
              <span>
               <a-button class="equipment_ctrol_btn" @click="sendVideo(record)">
                发送
              </a-button>
              </span>
            </template>           
          </a-table>
        </div>
      </div>
    </a-modal>
  </div>
</template>
<script>
const columns = [
  {
    title: '序号',
    dataIndex: 'index',
    key: 'index',    
    customRender: ({  index }) => {         
          return {
            children: <span>{index+1}</span>          
          };
        },
  },
  {
    title: '节目名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '图片视频',
    dataIndex: 'imgList',
    key: 'imgList',
    slots: { customRender: 'imgList' },
  },
  {
    title: '所属人',
    dataIndex: 'owner',
    key: 'owner',
  },
  {
    title: '操作',
    dataIndex: 'control',
    key: 'control',
    slots: { customRender: 'control' },
  },
]
import { message } from 'ant-design-vue'
export default {
  data() {
    return {
      modalVisible: false,
      lightValue: 30,
      voiceValue: 50,
      visible: false,
      columns,
      displayList: [
        { name: '爱智慧', imgList: ['', ''], owner: '所属人' },
        { name: '爱智慧', imgList: ['', ''], owner: '所属人' },
        { name: '爱智慧', imgList: ['', ''], owner: '所属人' },
      ],
    }
  },
  methods: {
    openLight() {
      message.error('请配置显示屏')
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
.view_screen_send_modal {
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
    box-shadow: 0 8px 30px #2d86e1;
    border-radius: 5px;
    .video_content {
      height: 250px;
      video {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>
