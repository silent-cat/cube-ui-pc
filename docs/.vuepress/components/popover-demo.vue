<template>
  <div class="popover-wrapper">
    <wy-popover position="left">
      <template slot="content">
        popover 中的内容
      </template>
      <wy-button>左方</wy-button>
    </wy-popover>
    <wy-popover>
      <wy-button>click</wy-button>
      <template slot="content">
        popover 中的内容
      </template>
    </wy-popover>
    <wy-popover trigger="hover">
      <template slot="content">
        popover 中的内容
      </template>
      <wy-button>hover</wy-button>
    </wy-popover>
  </div>
</template>

<script>
  import Popover from '../../../src/Popover'
  import Button from '../../../src/Button'

  export default {
    components:{
      'wy-popover':Popover,
      'wy-button': Button
    }
  }
</script>

<style lang="scss" scoped>

</style>