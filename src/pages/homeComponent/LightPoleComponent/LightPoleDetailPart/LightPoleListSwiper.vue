<template>
  <div class="light_pole_list">
    <div id="components-modal-demo-position">
      <a-modal
        width="100%"
        height="100%"
        :visible="modalVisible"
        :bodyStyle="bodyStyle"
        centered
        @cancel="closeModal"
        :maskClosable="false"
        :footer="null"
      >
        <div id="certify">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                :key="index"
                v-for="(item, index) of lightList"
              >
                <a-popover placement="rightBottom">
                  <template #content>
                    <p>设备名称：{{ lightDetail.name }}</p>
                    <p>灯杆高度：{{ lightDetail.name }}</p>
                    <p>材质：{{ lightDetail.name }}</p>
                    <p>厚度：{{ lightDetail.name }}</p>
                    <p>光源：{{ lightDetail.name }}</p>
                    <p>LED显示屏尺寸：{{ lightDetail.name }}</p>
                    <p>功率：{{ lightDetail.name }}</p>
                  </template>
                  <template #title>
                    <span>设备信息</span>
                  </template>
                  <img src="../../../../assets/light_pole.png" />
                </a-popover>
              </div>
            </div>
          </div>
           <div class="prevButton" style="cursor: pointer">
            <img src="../../../../assets/left.png" />
          </div>
          <div class="nextButton">
            <img src="../../../../assets/right.png" />
          </div>

          <!-- <div class="swiper-container">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                :key="index"
                v-for="(item, index) of lightList"
              >
                <a-popover placement="rightBottom">
                  <template #content>
                    <p>设备名称：{{ lightDetail.name }}</p>
                    <p>灯杆高度：{{ lightDetail.name }}</p>
                    <p>材质：{{ lightDetail.name }}</p>
                    <p>厚度：{{ lightDetail.name }}</p>
                    <p>光源：{{ lightDetail.name }}</p>
                    <p>LED显示屏尺寸：{{ lightDetail.name }}</p>
                    <p>功率：{{ lightDetail.name }}</p>
                  </template>
                  <template #title>
                    <span>设备信息</span>
                  </template>
                  <img src="../../../../assets/light_pole.png" />
                </a-popover>
              </div>
            </div>
          </div> -->
          <!-- <div class="prevButton" style="cursor: pointer">
            <img src="../../../../assets/left.png" />
          </div>
          <div class="nextButton">
            <img src="../../../../assets/right.png" />
          </div> -->
        </div>
      </a-modal>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  props: {
    modalVisible: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      bodyStyle: {
        background: "transparent",
        height: "100%",
      },
      lightList: [{ img: "" }, { img: "" }, { img: "" }],
      lightDetail: {
        name: "智慧路灯",
      },
      swiper: null,
    };
  },
  methods: {
    closeModal() {
      this.$emit("closemodal");
    },
    initSwiper() {
      this.swiper = new Swiper("#certify .swiper-container", {
        watchSlidesProgress: true,
        slidesPerView: "auto",
        centeredSlides: true,
        loop: true,
        loopedSlides: 5,
        autoplay: false,
        navigation: {
          nextEl: ".nextButton",
          prevEl: ".prevButton",
        },
        on: {
          progress: function () {
            for (let i = 0; i < this.slides.length; i++) {
              var slide = this.slides.eq(i);
              var slideProgress = this.slides[i].progress;
              let modify = 1;
              if (Math.abs(slideProgress) > 1) {
                modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
              }
              let translate = slideProgress * modify * 260 + "px";
              let scale = 1 - Math.abs(slideProgress) / 5;
              let zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
              slide.transform(
                "translateX(" + translate + ") scale(" + scale + ")"
              );
              slide.css("zIndex", zIndex);
              slide.css("opacity", 1);
              if (Math.abs(slideProgress) > 3) {
                slide.css("opacity", 0.2);
              }
            }
          },
          setTransition: function (transition) {
            for (var i = 0; i < this.slides.length; i++) {
              var slide = this.slides.eq(i);
              slide.transition(transition);
            }
          },
        },
      });
    },
  },
  updated() {
    //在获取数据之后再调用initSwiper,在之前可以显示loading
    let self = this;
    window.setTimeout(function () {
      self.initSwiper();
    }, 800);
  },
};
</script>
<style lang="less">
// .light_pole_list {

/deep/.ant-modal,
.detail_content {
  height: 100% !important;
}
.ant-popover-placement-rightBottom > .ant-popover-content > .ant-popover-arrow {
  border-bottom-color: #0042ff;
  border-left-color: #0042ff;
}
.ant-popover-title,
.ant-popover-inner-content {
  background-color: #0042ff;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #ffffff;
  line-height: 20px;
}
.ant-popover-title {
  text-align: center;
  border-bottom: none;
}
.ant-modal-content {
  height: 100% !important;
  background-color: transparent !important;
  background-image: url("../../../../assets/light_detail_swiper_bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 0 100%;
  opacity: 0.8;
}
// .swiper-container {
//   height: 80%;
// }
// #certify {
//   position: relative;
//   width: 90%;
//   margin: 0 auto;
//   padding: 0 80px;
// }

// #certify .swiper-container {
//   padding-bottom: 60px;
// }

// #certify .swiper-slide {
//   width: 400px;
//   height: 680px;
//   background-image: url("../../../../assets/light_detail_item_bg.png");
//   background-size: 100% 100%;
//   text-align: center;
// }
// #certify .swiper-slide img {
//   // display:block;
//   width: 80%;
//   height: 90%;
//   margin-top: 40px;
// }
// #certify .swiper-slide p {
//   line-height: 98px;
//   padding-top: 0;
//   text-align: center;
//   color: #636363;
//   font-size: 1.1em;
//   margin: 0;
// }

// #certify .swiper-pagination {
//   width: 100%;
//   bottom: 20px;
// }

// #certify .swiper-pagination-bullets .swiper-pagination-bullet {
//   margin: 0 5px;
//   border: 3px solid #fff;
//   background-color: #d5d5d5;
//   width: 10px;
//   height: 10px;
//   opacity: 1;
// }

// #certify .swiper-pagination-bullets .swiper-pagination-bullet-active {
//   border: 3px solid #00aadc;
//   background-color: #fff;
// }

.nextButton,
.prevButton{
  position: absolute;
  width: 72px;
  height: 100px;
  display: inline-block;
  top: 30%;
  z-index: 100;
  cursor: pointer;
  img {
    width: 100%;
  }
}
.prevButton {
  left: 0;
}
.nextButton {
  right: 0;
}

.swiper-container {
  height: 80%;
}
#certify {
  position: relative;
  width: 90%;
  margin: 0 auto;
  padding: 0 80px;
}

#certify .swiper-container {
  padding-bottom: 60px;
  height: 100%;
}

#certify .swiper-slide {
  width: 520px;
  height: 680px;
  text-align: center;
  background-image: url("../../../../assets/light_detail_item_bg.png");
  background-size: 100% 100%;
  //   text-align: center;
  // background: #fff;
  // box-shadow: 0 8px 30px #ddd;
}
#certify .swiper-slide img {
  width: 50%;
  height: 90%;

  margin-top: 40px;
}
#certify .swiper-slide p {
  line-height: 98px;
  padding-top: 0;
  text-align: center;
  color: #636363;
  font-size: 1.1em;
  margin: 0;
}

#certify .swiper-pagination {
  width: 100%;
  bottom: 20px;
}

#certify .swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0 5px;
  border: 3px solid #fff;
  background-color: #d5d5d5;
  width: 10px;
  height: 10px;
  opacity: 1;
}

#certify .swiper-pagination-bullets .swiper-pagination-bullet-active {
  border: 3px solid #00aadc;
  background-color: #fff;
}

// #certify .swiper-button-prev {
//   left: -30px;
//   width: 45px;
//   height: 45px;
//   // background: url(../images/wm_button_icon.png) no-repeat;
//   background-position: 0 0;
//   background-size: 100%;
// }

// #certify .swiper-button-prev:hover {
//   background-position: 0 -46px;
//   background-size: 100%;
// }

// #certify .swiper-button-next {
//   right: -30px;
//   width: 45px;
//   height: 45px;
//   // background: url(../images/wm_button_icon.png) no-repeat;
//   background-position: 0 -93px;
//   background-size: 100%;
// }

// #certify .swiper-button-next:hover {
//   background-position: 0 -139px;
//   background-size: 100%;
// }
</style>
