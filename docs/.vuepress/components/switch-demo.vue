<template>
  <div>
    <wy-switch v-model="value"></wy-switch>
    <p>switch value: {{value}}</p>
  </div>
</template>

<script>
import Switch from '../../../src/Switch'
export default {
  components: {
    'wy-switch': Switch
  },
  data() {
    return {
      value: false
    }
  }
}
</script>

<style></style>
