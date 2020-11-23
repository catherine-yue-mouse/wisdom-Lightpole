<template>
  <div id="container"></div>
</template>
<script>
import mapMarkerControl from './mapMarkerControl'
import AMap from 'AMap'
export default {
  props: {
    lightControlType: {
      type: String,
      default: () => 'IntelligentLightPole',
    },
  },
  // components:{
  //   mapMarkerControl
  // },
  data() {
    return {
      map: null,
      icon:null,
      sizeWith:50,
      sizeHeight:50,
      markerContent:null,
      IntelligentLightPole: {
        normal: require('../../assets/normal.png'),
        offLine: require('../../assets/offLine.png'),
        stopWork: require('../../assets/stopWork.png'),
        fault: require('../../assets/fault.png'),
      },
      IntelligentLight: {
        normal: require('../../assets/IntelligentLightPole_normal@2x.png'),
        offLine: require('../../assets/IntelligentLightPole_offline@2x.png'),
        stopWork: require('../../assets/IntelligentLightPole_stopwork@2x.png'),
        fault: require('../../assets/IntelligentLightPole_fault@2x.png'),
      },
      markList: [
        { lat: 121.472763, lng: 31.232106, type: 'normal' },
        { lat: 121.422763, lng: 31.231612, type: 'offLine' },
        { lat: 121.55, lng: 31.22, type: 'stopWork' },
        { lat: 121.4, lng: 31.25, type: 'fault' },
      ],
    }
  },
  watch: {
    lightControlType: {
      handler(newName, oldName) {
        this.changeMarkeIcon(newName, oldName)
      },
    },
  },
  methods: {
    initMap() {
      this.map = new AMap.Map('container', {
        zoom: 11, //级别
        mapStyle: 'amap://styles/darkblue',
        center: [121.472763, 31.232106], //中心点坐标
        viewMode: '3D', //使用3D视图
      })
      this.getMarkList()
    },
    changeMarkeIcon(type) {
      this.map.remove(this.markerList);
      this.sizeWith=100;
      this.sizeHeight=130;
      switch(type){
        case 'IntelligentLight':this.icon=this.IntelligentLight;break;
        case 'IntelligentLightPole':{this.icon=this.IntelligentLightPole;this.sizeWith=50;this.sizeHeight=50;break;}
      }
      this.getMarkList();
    },
    getMarkList() {
      this.markerList = this.markList.map((item) => {
        let icon = new AMap.Icon({
          size: new AMap.Size(this.sizeWith, this.sizeHeight), // 图标尺寸
          image: this.icon[item.type], // Icon的图像
          imageSize: new AMap.Size(this.sizeWith, this.sizeHeight), // 根据所设置的大小拉伸或压缩图片
        })
        return (item = new AMap.Marker({
          icon: icon,
          content:this.getContent(),
          position: new AMap.LngLat(item.lat, item.lng), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        }))
      })
      // 将创建的点标记添加到已有的地图实例：
      this.map.add(this.markerList)
    },
    getContent(){
    
      return  '<div>123</div>';
    }
  },
  mounted() {
    this.icon=this.IntelligentLightPole;
    console.log(mapMarkerControl)
    this.initMap();
  },
}
</script>
<style lang="less" scoped>
#container {
  width: 100%;
  height: 100%;
  opacity: 0.6;
  // z-index: 1;
}
</style>
