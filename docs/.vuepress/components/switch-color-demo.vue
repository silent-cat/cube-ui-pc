<template>
  <div>
    <c-switch v-model="value" active-color="#ee0a24" inactive-color="#dcdee0"></c-switch>
  </div>
</template>

<script>
import Switch from '../../../src/Switch'
export default {
  components: {
    'c-switch': Switch
  },
  data() {
    return {
      value: true
    }
  }
}
</script>

<style></style>
