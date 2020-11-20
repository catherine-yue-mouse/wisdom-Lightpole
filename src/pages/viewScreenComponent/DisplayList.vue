<template>
  <div class="mention_detail display_content">
    <div class="mention_title">播放列表</div>
    <div>
      <a-table
        :columns="columns"
        :data-source="data"
        :pagination="false"
        :scroll="{ y: 150 }"
        :rowClassName="'display_list'"
      />
    </div>
  </div>
</template>
<script>
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
]

const data = []
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `播放列表${i + 1}`,
  })
}

export default {
  data() {
    return {
      data,
      columns,
    }
  },
}
</script>
<style lang="less" scoped>
.display_content{
  padding: 15px 0 15px 15px;
}
/deep/.ant-table {
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #ffffff;
  line-height: 18px;
  background: rgba(255, 255, 255, 0);
}
/deep/.ant-table-fixed-header
  > .ant-table-content
  > .ant-table-scroll
  > .ant-table-body {
  background: rgba(255, 255, 255, 0);
}
/deep/.ant-table-header {
  display: none;
}
/deep/.ant-table-tbody > tr > td {
  border-bottom: none;
}
/deep/.display_list:nth-child(even){
  background: #173566;
}
.mention_title {
  margin-bottom: 20px;
}
</style>
