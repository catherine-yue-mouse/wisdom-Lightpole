<template>
  <div class="mention_detail mention_detail_clear_padding">
    <div class="mention_title">当前播放</div>
    <div class="mention_content">
      <!-- <Aplayer :music="audioData"/> -->
      <!-- <audio controls autoplay loop src="../../assets/test_audio.mp3">
        <p>Your browser does not support the <code>audio</code> element.</p>
      </audio> -->
      <div id="waveform" ref="waveform"></div>
      <div class="paly_caontrol">
        <div class="control_item">
          <PlayCircleFilled
            v-show="displayType === 'pause'"
            :style="{ fontSize: '16px', color: '#3FFCE6' }"
          />
          <PauseCircleFilled
            v-show="displayType === 'display'"
            :style="{ fontSize: '16px', color: '#3FFCE6' }"
          />
        </div>
        <div class="control_slider">
          <a-slider id="test" :default-value="dispalyValue" />
        </div>
        <div class="control_item">
          <a-icon type="sound" />
          <SoundFilled :style="{ fontSize: '16px', color: '#3FFCE6' }" />
        </div>
      </div>
      <!-- <div id="wave-timeline" ref="wave-timeline"></div> -->
    </div>
  </div>
</template>
<script>
import WaveSurfer from 'wavesurfer.js' //导入wavesurfer.js
// import Timeline from 'wavesurfer.js/dist/plugin/wavesurfer.timeline.js'
import {
  SoundFilled,
  PlayCircleFilled,
  PauseCircleFilled,
} from '@ant-design/icons-vue'
export default {
  components: {
    SoundFilled,
    PlayCircleFilled,
    PauseCircleFilled,
  },
  name: 'Details',
  data() {
    return {
      displayType: 'pause',
      dispalyValue: 0,
      wavesurfer: null,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.wavesurfer = WaveSurfer.create({
        container: this.$refs.waveform,
        waveColor: '#409EFF',
        progressColor: 'blue',
        backend: 'MediaElement',
        mediaControls: false,
        audioRate: '1',
        //使用时间轴插件
        // plugins: [
        //   Timeline.create({
        //     container: '#wave-timeline',
        //   }),
        // ],
      })
      // 特别提醒：此处需要使用require(相对路径)，否则会报错
      this.wavesurfer.load(require('../../assets/test_audio.mp3'))
    })
  },
  methods: {
    playMusic() {
      //"播放/暂停"按钮的单击触发事件，暂停的话单击则播放，正在播放的话单击则暂停播放
      this.wavesurfer.playPause.bind(this.wavesurfer)()
    },
  },
}
</script>
<style lang="less" scoped>
#waveform {
  width: 100%;
  height: 80%;
  overflow: hidden;
}
.paly_caontrol {
  width: 100%;
  display: flex;
  > div {
    height: 28px;
    line-height: 28px;
  }
  .control_slider {
    width: 80%;
    #test{
      margin: 8px 5px;
    }
  }
  .control_item {
    width: 10%;
    margin: auto;
    -webkit-display: flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
  }
}
</style>
