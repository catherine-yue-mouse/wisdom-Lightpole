<template>
  <div>
    <TrendOfEnergy/>
    <IntelligentLighting/>
    <Faultstatistics/>
  </div>
</template>
<script>
import TrendOfEnergy from './dataAnalysisPart/TrendOfEnergy'
import IntelligentLighting from './dataAnalysisPart/IntelligentLighting'
import Faultstatistics from './dataAnalysisPart/Faultstatistics'
export default {
  components: {
    TrendOfEnergy,
    IntelligentLighting,
    Faultstatistics,
  },
}
</script>
