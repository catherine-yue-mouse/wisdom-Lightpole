<template>
  <div class="menu_content">
    <div class="content">
      <div class="light_pole">
        <img src="../../../assets/swiper_linght_pole.png" />
        <p>智慧灯杆</p>
      </div>
      <div class="carousel_content">
        <div class="swiper-container" id="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../../../assets/dengjuzhaoming.png" />
              <p>智慧照明</p>
            </div>
            <div class="swiper-slide">
              <img src="../../../assets/w_pingmu.png" />
              <p>显示屏</p>
            </div>
            <div class="swiper-slide">
              <img src="../../../assets/jiankong.png" />
              <p>视频监控</p>
            </div>
            <div class="swiper-slide">
              <img src="../../../assets/wifi.png" />
              <p>公共WiFi</p>
            </div>
            <div class="swiper-slide">
              <img src="../../../assets/huanjingjiance.png" />
              <p>环境监测</p>
            </div>
            <div class="swiper-slide">
              <img src="../../../assets/dianhua.png" />
              <p>一键呼叫</p>
            </div>
            <div class="swiper-slide">
              <img src="../../../assets/guangbo.png" />
              <p>公共广播</p>
            </div>
            <div class="swiper-slide">
              <img src="../../../assets/jinggai.png" />
              <p>井盖/垃圾桶</p>
            </div>
            <div class="swiper-slide">
              <img src="../../../assets/chongdianzhuang.png" />
              <p>充电桩</p>
            </div>
          </div>
          <div class="swiper-button-prev">
            <img class="nav_button" src="../../../assets/arrow_left.png" />
          </div>
          <div class="swiper-button-next">
            <img class="nav_button" src="../../../assets/arrow_right.png" />
          </div>          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
export default {
  data() {
    return {
      swiper: null,
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
    position: absolute;
    bottom: 0;
    height: 70px;
    .light_pole {      
      width: 60px;     
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #f7bcbf;
      text-align: center;
      position: absolute;
      img {
        width: 43px;
        height: 43px;
      }
    }
    .carousel_content { 
      overflow: hidden;
      margin-left: 60px;    
      display: inline-block;
      width: calc(100% - 65px);
      padding: 10px 0;
    }
  }
  .nav_button {
    width: 11px;
    height: 21px;
  }
  .swiper-slide {
    width: 80px !important;    
    text-align: center;
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #79c8ff;
    margin-left: 20px;
    img {
      width: 30px;
      height: 30px;
    }
  }
  .swiper-button-prev:after,
  .swiper-button-next:after {
    content: none;
  }
  .swiper-button-next{
      right: 0px;
  }
}
</style>
