<template>
  <div>
    <wy-switch v-model="value" active-color="#ee0a24" inactive-color="#dcdee0"></wy-switch>
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
      value: true
    }
  }
}
</script>

<style></style>
