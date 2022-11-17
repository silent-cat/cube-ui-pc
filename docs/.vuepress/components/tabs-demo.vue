<template>
  <wy-tabs :selected.sync="selectedTab">
    <wy-tabs-head>
      <wy-tabs-item name="tab1">
        Tab1
      </wy-tabs-item>
      <wy-tabs-item name="tab2">Tab2</wy-tabs-item>
      <wy-tabs-item name="tab3" disabled>Tab3</wy-tabs-item>
      <wy-tabs-item name="tab4">Tab4</wy-tabs-item>
    </wy-tabs-head>
    <wy-tabs-body>
      <wy-tabs-panel name="tab1">内容1</wy-tabs-panel>
      <wy-tabs-panel name="tab2">内容2</wy-tabs-panel>
      <wy-tabs-panel name="tab3">内容3</wy-tabs-panel>
      <wy-tabs-panel name="tab4">内容4</wy-tabs-panel>
    </wy-tabs-body>
  </wy-tabs>
</template>

<script>
import Tabs from '../../../src/Tabs'
import TabsHead from '../../../src/TabsHead'
import TabsBody from '../../../src/TabsBody'
import TabsItem from '../../../src/TabsItem'
import TabsPanel from '../../../src/TabsPanel'
export default {
    components:{
        'wy-tabs':Tabs,
        'wy-tabs-head':TabsHead,
        'wy-tabs-item':TabsItem,
        'wy-tabs-body':TabsBody,
        'wy-tabs-panel':TabsPanel,
    },
    data(){
        return {
            selectedTab:'tab1'
        }
    }
}
</script>

<style></style>
