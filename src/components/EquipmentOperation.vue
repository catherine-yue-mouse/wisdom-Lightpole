<template>
  <div class="eq_content">
    <div class="title">
      <span>设备操作</span>
    </div>
    <div class="content">
      <IntelligentLight v-if="equipmentType==='IntelligentLight'" />
      <ViewScreen  v-if="equipmentType==='viewScreen'" />
      <Monitoring  v-if="equipmentType==='monitoring'||equipmentType==='environmentalMonitoring'" />
      <!-- <EnvironmentalMonitoring  v-if="equipmentType==='monitoring'" /> -->
      <AkeyToCall  v-if="equipmentType==='akeyToCall'" />
      <PublicBroadcast  v-if="equipmentType==='publicBroadcast'" />
      <ManholeCover  v-if="equipmentType==='manholeCover'" />
      <ChargingPile  v-if="equipmentType==='chargingPile'" />
    </div>
  </div>
</template>
<script>
import IntelligentLight from './equipmentOperationPart/IntelligentLight'
import ViewScreen from './equipmentOperationPart/ViewScreen'
import Monitoring from './equipmentOperationPart/Monitoring'
// import EnvironmentalMonitoring from './equipmentOperationPart/EnvironmentalMonitoring'
import AkeyToCall from './equipmentOperationPart/AkeyToCall'
import PublicBroadcast from './equipmentOperationPart/PublicBroadcast'
import ManholeCover from './equipmentOperationPart/ManholeCover'
import ChargingPile from './equipmentOperationPart/ChargingPile'
export default {
  components: {
    IntelligentLight,
    ViewScreen,
    Monitoring,
    // EnvironmentalMonitoring,
    AkeyToCall,
    PublicBroadcast,
    ManholeCover,
    ChargingPile,
  },
  props:{
    equipmentType:{
      type:String,
       default: () => 'IntelligentLight',
    }
  }
}
</script>
<style lang="less" scoped>
.eq_content {
  position: absolute;
  bottom: 20%;
  right: 30%;
  z-index: 200;
  min-height: 270px;
  width: 210px;
  background-image: url('../assets/marker_icon.png');
  background-size: 100% 100%;
  padding: 15px;
  .title {
    padding-bottom: 10px;
    border-bottom: 1px solid hsla(171, 100%, 51%, 0.3);
    span {
      display: block;
      width: 85px;
      height: 26px;
      background-color: hsla(171, 100%, 51%, 0.5);
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #ffffff;
      text-align: center;
      border-radius: 5px;
    }
  }
}
</style>
