<template>
  <div class="align-wrapper">
    <wy-row class="row" align="left">
      <wy-col class="item" span="8">left</wy-col>
      <wy-col class="item" span="8">left</wy-col>
    </wy-row>
    <wy-row class="row" align="center">
      <wy-col class="item" span="8">center</wy-col>
      <wy-col class="item" span="8">center</wy-col>
    </wy-row>
    <wy-row class="row" align="right">
      <wy-col class="item" span="8">right</wy-col>
      <wy-col class="item" span="8">right</wy-col>
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
    },
  }
</script>

<style lang="scss" scoped>
 $background: #409eff;
$wrapper-top: 10px;
$font-color: white;
* {
  box-sizing: border-box;
}
  .align-wrapper{ text-align: center; color: $font-color;
    .row{ padding-top: $wrapper-top;
      > .item { text-align: center;
        &:nth-child(odd){ background: $background; }
        &:nth-child(even){ background: lighten($background,20%); color: $font-color; }
      }
    }
  }
</style>