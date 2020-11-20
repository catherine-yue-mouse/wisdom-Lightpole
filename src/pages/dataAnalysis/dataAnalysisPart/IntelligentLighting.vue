<template>
  <div class="mention_detail">
    <div class="mention_title">智慧照明</div>
    <div class="mention_list">
      <div class="mention_item">编号：</div>
      <div class="mention_item">在线：</div>
      <div class="mention_item">状态</div>
      <div class="mention_item">总功率</div>
      <div class="mention_item">电压A：</div>
      <div class="mention_item">电压B：</div>
      <div class="mention_item">电流A：</div>
      <div class="mention_item">电流B：</div>
      <div class="mention_item">回路：</div>
      <div class="mention_item">电压C：</div>
      <div class="mention_item">总电能：</div>
      <div class="mention_item">电流C：</div>
      <div class="mention_item">地址：</div>
      <div class="mention_item">更新时间：</div>
      <div>更新结果：</div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.mention_list {
  width: 100%;
  height: calc(100% - 45px);
  padding: 5px 15px;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  align-items: center;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #ffffff;
  
  .mention_item {
    width: 50%;
    height: 14px;
    margin-bottom:10px ;
    line-height: 25px;
  }
}

</style>
