<template>
  <div>
    <wy-row>
      <wy-button type="primary">主要</wy-button>
      <wy-button type="success">成功</wy-button>
      <wy-button type="info">信息</wy-button>
      <wy-button type="warning">警告</wy-button>
      <wy-button type="danger">危险</wy-button>
    </wy-row>
    <wy-row>
      <wy-button type="primary" round>主要</wy-button>
      <wy-button type="success" round>成功</wy-button>
      <wy-button type="info" round>信息</wy-button>
      <wy-button type="warning" round>警告</wy-button>
      <wy-button type="danger" round>危险</wy-button>
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
