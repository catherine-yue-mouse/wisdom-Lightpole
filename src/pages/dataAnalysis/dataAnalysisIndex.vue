<template>
  <div class="data_analysiy_index">
    <template v-if="lightControlType === 'IntelligentLightPole'">
      <LightPoleDetail />
    </template>
    <!-- 智慧照明 -->
    <template v-if="lightControlType === 'IntelligentLight'">
      <TrendOfEnergy />
      <IntelligentLighting />
    </template>
    <!-- 屏幕显示 -->
    <template v-if="lightControlType === 'viewScreen'">
      <NewsBroadcast />
      <ViewScreenDisplayList />
    </template>
    <!-- 视频监控 -->
    <template v-if="lightControlType === 'monitoring'">
      <Equipmentmonitoring />
      <MonitorDisplayList />
    </template>
    <!-- 环境监测 -->
    <template v-if="lightControlType === 'environmentalMonitoring'">
      <EnvironmentData />
      <UsingState />
    </template>
    <!-- 一键呼叫 -->
    <template v-if="lightControlType === 'akeyToCall'">
      <AlarmAnalysis />
      <CallUsingState />
    </template>
    <!-- 公共广播 -->
    <template v-if="lightControlType === 'publicBroadcast'">
      <AcitveDisplayBroadcast />
      <PublicBroadDisplayList />
    </template>
    <!-- 井盖 -->
    <template v-if="lightControlType === 'manholeCover'">
      <FaultCauseAnalysis />
      <FailureEquipmentAnalysis />
    </template>
    <!-- 充电桩 -->
    <template v-if="lightControlType === 'chargingPile'">
      <ChargingTime />
      <ChargingUseState />
    </template>
    <Faultstatistics v-if="lightControlType !== 'IntelligentLightPole'" />
  </div>
</template>
<script>
import LightPoleDetail from '../homeComponent/LightPoleComponent/LightPoleDetail'
import TrendOfEnergy from './dataAnalysisPart/TrendOfEnergy'
import IntelligentLighting from './dataAnalysisPart/IntelligentLighting'
import Faultstatistics from './dataAnalysisPart/Faultstatistics'
import Equipmentmonitoring from '../monitoringComponent/Equipmentmonitoring'
import MonitorDisplayList from '../monitoringComponent/DisplayList'
import ViewScreenDisplayList from '../viewScreenComponent/DisplayList'
import NewsBroadcast from '../viewScreenComponent/NewsBroadcast'
import EnvironmentData from '../environmentalMonitoring/EnvironmentData'
import UsingState from '../environmentalMonitoring/UsingState'
import AlarmAnalysis from '../akeyToCall/AlarmAnalysis'
import CallUsingState from '../akeyToCall/UsingState'
import AcitveDisplayBroadcast from '../publicBroadcast/AcitveDisplayBroadcast'
import PublicBroadDisplayList from '../publicBroadcast/displayList'
import FaultCauseAnalysis from '../manholeCover/FaultCauseAnalysis'
import FailureEquipmentAnalysis from '../manholeCover/FailureEquipmentAnalysis'
import ChargingTime from '../chargingPile/ChargingTime'
import ChargingUseState from '../chargingPile/ChargingUseState'
export default {
  components: {
    ChargingTime,
    ChargingUseState,
    FaultCauseAnalysis,
    FailureEquipmentAnalysis,
    LightPoleDetail,
    AcitveDisplayBroadcast,
    PublicBroadDisplayList,
    AlarmAnalysis,
    CallUsingState,
    EnvironmentData,
    UsingState,
    ViewScreenDisplayList,
    NewsBroadcast,
    TrendOfEnergy,
    IntelligentLighting,
    Faultstatistics,
    Equipmentmonitoring,
    MonitorDisplayList,
  },
  props: {
    lightControlType: {
      type: String,
      default: () => 'IntelligentLightPole',
    },
  },
  data() {
    return {}
  },
}
</script>
<style>
.data_analysiy_index {
  height: 100%;
}
</style>
