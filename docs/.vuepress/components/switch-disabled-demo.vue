<template>
  <div>
    <wy-switch disabled></wy-switch>
    <wy-switch disabled v-model="value"></wy-switch>
  </div>
</template>

<script>
import Switch from '../../../src/Switch'
export default {
  components: {
    'wy-switch': Switch
  },
  data(){
    return {
      value:true
    }
  }
}
</script>
