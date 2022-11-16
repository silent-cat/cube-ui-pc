<template>
  <button
    :class="['cube-switch',{ 'cube-switch-checked': value}]"
    @click="toggle"
    :style="{background:value?activeColor:inactiveColor}"
  >
    <span></span>
  </button>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor:{
        type:String,
        default:'#409eff'
    },
    inactiveColor:{
        type:String,
        default:'#fff'
    }
  },
  methods: {
    toggle() {
      this.$emit('input', !this.value)
    }
  }
}
</script>

<style lang="scss">
$height: 32px;
$width: 84px;
$bg: #fff;
.cube-switch {
  position: relative;
  height: $height;
  width: $width;
  outline: none;
  border: .5px solid #f5f5f5;
//   filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.25));
//   box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25) inset;
  border-radius: 18px;
  & > span {
    width: 28px;
    height: 28px;
    border-radius: 14px;
    position: absolute;
    left: 1.5px;
    top: 1.5px;
    background: #ffffff;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.125);
    border-radius: 14px;
    transition: all 250ms ease-in-out;
  }
  &-checked {
    & > span {
      left: 53px;
      box-shadow: -2px 2px 6px rgba(0, 0, 0, 0.25);
    }
  }
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
}
</style>
