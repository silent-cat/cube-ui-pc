<template>
  <div>
    <wy-button @click="showToast('top')">上方显示</wy-button>
    <wy-button @click="showToast('center')">中间显示</wy-button>
    <wy-button @click="showToast('bottom')">下方显示</wy-button>
  </div>
</template>

<script>
import Vue from 'vue'
import Toast from '../../../src/Toast'
import Button from '../../../src/Button'
import plugin from '../../../src/plugin'
Vue.use(plugin)
export default {
  components: {
    'wy-button': Button,
    'wy-toast': Toast
  },
  methods: {
    showToast(position) {
      this.$toast(`${position}显示`, {
        position: position
      })
    }
  }
}
</script>

<style></style>
