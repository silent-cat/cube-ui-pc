<template>
  <div>
      <wy-button size="small">小型按钮</wy-button>
      <wy-button size="middle">中型按钮</wy-button>
      <wy-button size="large">大型按钮</wy-button>
      <wy-button size="small" round>小型</wy-button>
      <wy-button size="middle" round>中型</wy-button>
      <wy-button size="large" round>大型</wy-button>
  </div>
</template>

<script>
import Button from '../../../src/Button'
export default {
  components: {
    'wy-button': Button
  },
}
</script>

<style></style>
