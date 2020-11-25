<template>
  <div class="mention_detail mention_detail_clear_padding">
    <div class="mention_title">播放列表</div>
    <div class="display_list">
      <a-list item-layout="horizontal" :data-source="data">
        <template #renderItem="{ item }">
          <a-list-item>
            <a-list-item-meta :description="null">
              <template #title>
              <span :class="item.type === 'normal'?'normal':'warring'">  {{ item.title }}</span>
              </template>
              <template #avatar>
                <img
                  class="icon"
                  v-if="item.type === 'normal'"
                  src="../../assets/list_icon.png"
                />
                <img class="icon" v-else src="../../assets/list_icon_red.png" />
              </template>
            </a-list-item-meta>
          </a-list-item>
        </template>
      </a-list>
    </div>
  </div>
</template>
<script>
const data = [
  {
    title: 'Ant Design Title 1',
    type: 'normal',
  },
  {
    title: 'Ant Design Title 2',
    type: 'normal',
  },
  {
    title: 'Ant Design Title 3',
    type: 'warring',
  },
  {
    title: 'Ant Design Title 4',
    type: 'normal',
  },
]
export default {
  data() {
    return {
      data,
      columns: [],
    }
  },
}
</script>
<style lang="less" scoped>
.display_list {
  height: calc(100% - 70px);
  overflow-y: scroll;
  .icon {
    width: 17px;
    height: 17px;
  }
  .normal {
    width: 70px;
    height: 14px;
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #ffffff;
    line-height: 18px;
  }
  .warring{
    color:#FF2A2A;
  }
  .ant-list-split .ant-list-item{
    border-bottom: 1px solid rgba(6, 255, 218, 0.3);
  }
}
</style>
