<template>
  <div id="container"></div>
</template>
<script>
import AMap from 'AMap'
export default {
  data() {
    return {
      map: null,
      markList: [
        { lat: 116.39, lng: 39.9, type: 'normal' },
        { lat: 115.39, lng: 38.9, type: 'offLine' },
        { lat: 115.39, lng: 36.9, type: 'offLine' },
        { lat: 115.39, lng: 36.9, type: 'fault' },
      ],
    }
  },
  methods: {
    initMap() {
      this.map = new AMap.Map('container', {
        zoom: 11, //级别
        mapStyle: 'amap://styles/darkblue',
        center: [116.397428, 39.90923], //中心点坐标
        viewMode: '3D', //使用3D视图
      })
      this.getMarkList()
    },
    markerIconImg() {},
    getMarkList() {
      // 创建一个 Marker 实例：
      let marker = new AMap.Marker({
        position: new AMap.LngLat(116.39, 39.9), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]       
      })

      // 将创建的点标记添加到已有的地图实例：     
      this.map.add(marker)
    },
  },
  mounted() {
    this.initMap()
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
