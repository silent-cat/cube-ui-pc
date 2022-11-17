<template>
  <section class="wy-container" :class="{ hasAside: bool }">
    <slot></slot>
  </section>
</template>

<script>
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import Aside from './Aside'

export default {
  components: {
    'wy-aside': Aside,
    'wy-header': Header,
    'wy-content': Content,
    'wy-footer': Footer
  },
  data() {
    return {
      bool: false
    }
  },
  mounted() {
    console.log(this.$slots.default)
    this.$slots.default.forEach(item => {
      // console.log()
      if (item.componentOptions && item.componentOptions.tag === 'wy-aside') {
        this.bool = true
      }
    })
  }
}
</script>

<style lang="scss">
.wy-container {
  display: flex;
  flex: auto;
  flex-direction: column;
  min-height: 0;
  color: #fff;
}
.hasAside {
  flex-direction: row;
}
</style>
