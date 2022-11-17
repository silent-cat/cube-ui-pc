<template>
  <div>
    <wy-button-group>
        <wy-button icon="left">上一页</wy-button>
        <wy-button icon="right" icon-position="right">下一页</wy-button>
    </wy-button-group>
  </div>
</template>

<script>
import Button from '../../../src/Button'
import ButtonGroup from '../../../src/ButtonGroup'
export default {
  components: {
    'wy-button': Button,
    'wy-button-group':ButtonGroup
  },
  methods: {},
  data() {
    return {}
  }
}
</script>

<style></style>
