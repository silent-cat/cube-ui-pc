<template>
  <div>
    <wy-row>
      <wy-button type="primary" disabled>主要</wy-button>
      <wy-button type="success" disabled>成功</wy-button>
      <wy-button type="info" disabled>信息</wy-button>
      <wy-button type="warning" disabled>警告</wy-button>
      <wy-button type="danger" disabled>危险</wy-button>
    </wy-row>
  </div>
</template>

<script>
import Button from '../../../src/Button'
import Row from '../../../src/Row'
export default {
  components: {
    'wy-button': Button,
    'wy-row': Row
  },
  methods: {},
  data() {
    return {}
  }
}
</script>

<style></style>
