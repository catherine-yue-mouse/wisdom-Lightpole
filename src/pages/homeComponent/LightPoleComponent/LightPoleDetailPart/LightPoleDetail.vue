<template>
  <div class="light_detail_content">
    <div class="light" @click="showModal">
      <!-- <img src="../../../../assets/light_pole.png"> -->
    </div>
    <div class="light_bg_img">
      <img src="../../../../assets/light_bg.png" />
    </div>
    <LightPoleListSwiper @closemodal='closeModal' :modalVisible='modalVisible'/>
  </div>
</template>
<script>
import LightPoleListSwiper from './LightPoleListSwiper'
export default {
  components:{
    LightPoleListSwiper
  },
  data(){
    return{
      modalVisible:false
    }
  },
  methods:{
    showModal(){
      this.modalVisible=true;
    },
    closeModal(){      
      this.modalVisible=false;
    }
  }

}
</script>
<style lang="less" scoped>
.light_detail_content {
  position: relative;
  width: 100%;
  height: 100%;
  .light{
    position: absolute;
    width: 40%;   
    bottom: 7%;
    height: 70%;
    left: 30%;
    border:1px solid #06E3C5;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .light_bg_img{
    position: absolute;   
    bottom: 0; 
    img{
      width: 100%;
    }
  }
}
</style>
