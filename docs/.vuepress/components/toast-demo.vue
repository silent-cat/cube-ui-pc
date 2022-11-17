<template>
  <div>
    <wy-button @click="$toast(`显示toast`)">基础使用</wy-button>
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
