<template>
  <div class="offset-wrapper">
    <wy-row class="row">
      <wy-col class="item" span="8"> <span>col-8</span> </wy-col>
      <wy-col class="item" span="8"> <span>col-8</span> </wy-col>
      <wy-col class="item" span="4" offset="4"> <span>col-4</span> </wy-col>
    </wy-row>
    <wy-row class="row">
      <wy-col class="item" span="8"> <span>col-8</span> </wy-col>
      <wy-col class="item" span="5" offset="3"> <span>col-5</span> </wy-col>
      <wy-col class="item" span="4" offset="4"> <span>col-4</span> </wy-col>
    </wy-row>
    <wy-row class="row">
      <wy-col class="item" span="2" offset="6"> <span>col-2</span> </wy-col>
      <wy-col class="item" span="5" offset="3"> <span>col-5</span> </wy-col>
      <wy-col class="item" span="4" offset="4"> <span>col-4</span> </wy-col>
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
  .offset-wrapper { padding-top: $wrapper-top;
    > .row {
      > .item { text-align: center; color: $font-color;
        > span { display: block; background: $background; }
      }
    }
  }
</style>