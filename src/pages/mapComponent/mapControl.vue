<template>
  <div id="container"></div>
</template>
<script>
import AMap from 'AMap'
export default {
  data() {
    return {
      map: null,
      markList: [{lat:116.39,lng:39.9},{lat:115.39,lng:38.9},{lat:115.39,lng:36.9}],
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
    },
    getMarkList() {
      // this.markList.map((item)=>{

      // })
      this.map.add(this.markerList)
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
