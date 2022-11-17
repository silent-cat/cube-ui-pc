<template>
  <div>
    <wy-container>
      <wy-header>header</wy-header>
      <wy-content>content</wy-content>
      <wy-footer>footer</wy-footer>
    </wy-container>
  </div>
</template>

<script>
import Header from '../../../src/Header'
import Content from '../../../src/Content'
import Footer from '../../../src/Footer'
import Aside from '../../../src/Aside'
import Container from '../../../src/Container'
export default {
  components: {
    'wy-aside': Aside,
    'wy-header': Header,
    'wy-content': Content,
    'wy-footer': Footer,
    'wy-container': Container
  }
}
</script>

<style></style>
