<template>
  <div>
    <wy-collapse :selected.sync="selectedTab">
      <wy-collapse-item title="水果" name="1">Fruits</wy-collapse-item>
      <wy-collapse-item title="蔬菜" name="2">Vegetables</wy-collapse-item>
      <wy-collapse-item title="奶类" name="3">Milk</wy-collapse-item>
    </wy-collapse>
  </div>
</template>

<script>
import Collapse from '../../../src/Collapse'
import CollapseItem from '../../../src/CollapseItem'
export default {
  components: {
    'wy-collapse': Collapse,
    'wy-collapse-item': CollapseItem
  },
  data() {
    return {
      selectedTab: ['1']
    }
  }
}
</script>

<style></style>
