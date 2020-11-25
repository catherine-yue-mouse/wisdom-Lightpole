<template>
  <div class="menu_content">
    <div class="content">
      <div
        class="light_pole"
        @click="change(item.type, index)"
        :class="activeIndex == index ? 'active' : ''"
        :key="index"
        v-for="(item, index) of list"
      >
        <template v-if="activeIndex == index">
          <img :src="item.activeSrc" />
        </template>
        <template v-else>
          <img :src="item.src" />
        </template>
        <p>{{ item.name }}</p>
      </div>
      <!-- <div class="carousel_content">
        <div class="swiper-container" id="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" :key="index" v-for="(item,index) of list">
              <img :src="item.src" />
              <p>{{item.name}}</p>
            </div>
            <div class="swiper-slide">
              <img src:"../../assets/dengjuzhaoming.png" />
              <p>智慧照明</p>
            </div>
            <div class="swiper-slide">
              <img src:"../../assets/w_pingmu.png" />
              <p>显示屏</p>
            </div>
            <div class="swiper-slide">
              <img src:"../../assets/jiankong.png" />
              <p>视频监控</p>
            </div>
            <div class="swiper-slide">
              <img src:"../../assets/wifi.png" />
              <p>公共WiFi</p>
            </div>
            <div class="swiper-slide">
              <img src:"../../assets/huanjingjiance.png" />
              <p>环境监测</p>
            </div>
            <div class="swiper-slide">
              <img src:"../../assets/dianhua.png" />
              <p>一键呼叫</p>
            </div>
            <div class="swiper-slide">
              <img src:"../../assets/guangbo.png" />
              <p>公共广播</p>
            </div>
            <div class="swiper-slide">
              <img src:"../../assets/jinggai.png" />
              <p>井盖/垃圾桶</p>
            </div>
            <div class="swiper-slide">
              <img src:"../../assets/chongdianzhuang.png" />
              <p>充电桩</p>
            </div>
          </div>
         <div class="swiper-button-prev">
            <img class="nav_button" src:"../../../assets/arrow_left.png" />
          </div> 
         <div class="swiper-button-next">
            <img class="nav_button" src:"../../../assets/arrow_right.png" />
          </div>          
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import { message } from 'ant-design-vue'
export default {
  data() {
    return {
      swiper: null,
      activeIndex: 0,
      list: [
        {
          name: '智慧灯杆',
          type: 'IntelligentLightPole',
          src:  require('@/assets/swiper_linght_pole.png'),
          activeSrc: require('@/assets/swiper_linght_pole_active.png'),
        },
        {
          name: '智慧照明',
          type: 'IntelligentLight',
          src: require('@/assets/dengjuzhaoming.png'),
           activeSrc: require('@/assets/dengjuzhaoming_active.png'),
        },
        {
          name: '显示屏',
          type: 'viewScreen',
          src: require('@/assets/w_pingmu.png'),
           activeSrc: require('@/assets/w_pingmu_active.png'),
        },
        {
          name: '视频监控',
          type: 'monitoring',
          src: require('@/assets/jiankong.png'),
           activeSrc: require('@/assets/jiankong_active.png'),
        },
        {
          name: '公共WiFi',
          type: 'monitoring',
          src: require('@/assets/wifi.png'),
           activeSrc: require('@/assets/wifi_active.png'),
        },
        {
          name: '环境监测',
          type: 'environmentalMonitoring',
          src: require('@/assets/huanjingjiance.png'),
           activeSrc: require('@/assets/huanjingjiance_active.png'),
        },
        {
          name: '一键呼叫',
          type: 'akeyToCall',
          src: require('@/assets/dianhua.png'),
           activeSrc: require('@/assets/dianhua_active.png'),
        },
        {
          name: '公共广播',
          type: 'publicBroadcast',
          src: require('@/assets/guangbo.png'),
           activeSrc: require('@/assets/guangbo_active.png'),
        },
        {
          name: '井盖',
          type: 'manholeCover',
          src: require('@/assets/jinggai.png'),
           activeSrc: require('@/assets/jinggai_active.png'),
        },
        {
          name: '充电桩',
          type: 'chargingPile',
          src: require('@/assets/chongdianzhuang.png'),
           activeSrc: require('@/assets/chongdianzhuang_active.png'),
        },
      ],
      activeIconList: {},
    }
  },
  mounted() {
    this.swiper = new Swiper('#swiper', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  },
  methods: {
    change(type, index) {
      this.activeIndex = index
      if (index === 1) {
        message.info('提示：请先选中要操作的灯杆')
      }
      this.$emit('change', type)
    },
  },
}
</script>
<style lang="less" scoped>
.menu_content {
  width: 52%;
  margin: 0 auto;
  height: 100%;
  position: relative;
  overflow: hidden;
  .content {
    width: 100%;
    padding-top: 10px;
    position: absolute;
    display: flex;
    justify-content: space-between;
    bottom: 0;
    height: 70px;
    .light_pole {
      width: 60px;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #79c8ff;
      // color: #f7bcbf;
      text-align: center;
      // margin-left: 35px;
      img {
        width: 30px;
        height: 30px;
      }
    }
    .active {
      color: #f77986;
      text-shadow: 0px 0px 2px #ee6e79;      
    }
    .carousel_content {
      overflow: hidden;
      margin-left: 60px;
      display: inline-block;
      width: calc(100% - 65px);
      padding: 10px 0;
    }
  }
  // .nav_button {
  //   width: 11px;
  //   height: 21px;
  // }
  // .swiper-slide {
  //   width: 80px !important;
  //   text-align: center;
  //   font-size: 14px;
  //   font-family: Microsoft YaHei;
  //   font-weight: 400;
  //   color: #79c8ff;
  //   margin-left: 20px;
  //   img {
  //     width: 30px;
  //     height: 30px;
  //   }
  // }
  // .swiper-button-prev:after,
  // .swiper-button-next:after {
  //   content: none;
  // }
  // .swiper-button-next{
  //     right: 0px;
  // }
}
</style>
