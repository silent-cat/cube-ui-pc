<template>
  <div>
    <wy-button @click="$toast(`<h3>显示toast</h3>`,{enableHtml:true})">支持HTML</wy-button>
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
  }
}
</script>

<style></style>
