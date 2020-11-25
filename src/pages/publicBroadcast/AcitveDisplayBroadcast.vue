<template>
  <div class="mention_detail mention_detail_clear_padding">
    <div class="mention_title">当前播放</div>
    <div>
      <audio controls autoplay loop src="../../assets/test_audio.mp3">
        <p>Your browser does not support the <code>audio</code> element.</p>
      </audio>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [],
      columns: [],
    }
  },
}
</script>
<style lang="less" scoped></style>
