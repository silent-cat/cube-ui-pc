<template>
  <div class="gutter-wrapper">
    <wy-row gutter="30">
      <wy-col class="item" span="8"> <span> col-8; gutter-30;</span> </wy-col>
      <wy-col class="item" span="8"> <span> col-8; gutter-30;</span> </wy-col>
      <wy-col class="item" span="8"> <span> col-8; gutter-30;</span> </wy-col>
    </wy-row>
    <wy-row gutter="20">
      <wy-col class="item" span="8"> <span> col-8; gutter-20;</span> </wy-col>
      <wy-col class="item" span="8"> <span> col-8; gutter-20;</span> </wy-col>
      <wy-col class="item" span="8"> <span> col-8; gutter-20;</span> </wy-col>
    </wy-row>
    <wy-row gutter="10">
      <wy-col class="item" span="8"> <span> col-8; gutter-10;</span> </wy-col>
      <wy-col class="item" span="8"> <span> col-8; gutter-10;</span> </wy-col>
      <wy-col class="item" span="8"> <span> col-8; gutter-10;</span> </wy-col>
    </wy-row>
  </div>
</template>

<script>
import Col from '../../../src/Col'
import Row from '../../../src/Row'

export default {
  components: {
    'wy-col': Col,
    'wy-row': Row
  }
}
</script>

<style lang="scss" scoped>
$background: #409eff;
$wrapper-top: 10px;
$font-color: white;
* {
  box-sizing: border-box;
}
.gutter-wrapper {
  padding-top: $wrapper-top;
  .item {
    text-align: center;
    color: $font-color;
    > span {
      display: block;
      background: $background;
    }
  }
}
</style>
