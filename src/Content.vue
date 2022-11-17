<template>
  <main class="wy-container-content">
    <slot></slot>
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss">
.wy-container-content {
  flex-grow: 1;
  height: 12rem;
  line-height: 12rem;
  background: #409eff;
  text-align: center;
}
</style>
