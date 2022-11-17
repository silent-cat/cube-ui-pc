<template>
  <div>
    <wy-button @click="clickEvent">点击</wy-button>
  </div>
</template>

<script>
import Button from '../../../src/Button'
export default {
  components: {
    'wy-button': Button
  },
  methods: {
    clickEvent() {
      alert('触发按钮的点击事件')
    }
  },
  data() {
    return {}
  }
}
</script>
