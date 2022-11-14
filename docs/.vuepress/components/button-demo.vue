<template>
  <div>
    <c-row>
      <c-button type="primary">主要</c-button>
      <c-button type="success">成功</c-button>
      <c-button type="info">信息</c-button>
      <c-button type="warning">警告</c-button>
      <c-button type="danger">危险</c-button>
    </c-row>
    <c-row>
      <c-button type="primary" round>主要</c-button>
      <c-button type="success" round>成功</c-button>
      <c-button type="info" round>信息</c-button>
      <c-button type="warning" round>警告</c-button>
      <c-button type="danger" round>危险</c-button>
    </c-row>
  </div>
</template>

<script>
import Button from '../../../src/Button'
import Row from '../../../src/Row'
export default {
  components: {
    'c-button': Button,
    'c-row': Row
  },
  methods: {},
  data() {
    return {}
  }
}
</script>
