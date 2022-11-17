<template>
  <div>
    <wy-collapse :selected.sync="selectedTab" accordion>
      <wy-collapse-item title="水果" name="fruits">Fruits</wy-collapse-item>
      <wy-collapse-item title="蔬菜" name="vegetables">Vegetables</wy-collapse-item>
      <wy-collapse-item title="牛奶" name="milk">Milk</wy-collapse-item>
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
      selectedTab: ['fruits']
    }
  }
}
</script>

<style></style>
