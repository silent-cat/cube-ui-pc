<template>
  <div>
    <wy-button @click="showToast">关闭自动关闭</wy-button>
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
    showToast() {
      this.$toast(`显示toast`, {
        autoClose: false,
        closeButton: {
          text: '关闭',
          callback: () => {
            console.log('关闭成功')
          }
        }
      })
    }
  }
}
</script>

<style></style>
