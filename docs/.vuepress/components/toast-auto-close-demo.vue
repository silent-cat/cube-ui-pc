<template>
  <div>
    <c-button @click="showToast">关闭自动关闭</c-button>
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
    'c-button': Button,
    'c-toast': Toast
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
