<template>
  <button
    class="cube-button"
    :round="round"
    :class="{
      [`cube-button-${size}`]: true,
      [`cube-button-${type}`]: true,
      [`cube-icon-${iconPosition}`]: true
    }"
    @click="$emit('click')"
  >
    <c-icon v-if="icon && !loading" :name="icon" class="icon" :style="{ background: backgroundColor }"></c-icon>
    <c-icon v-if="loading" name="loading" class="cube-icon loading" :style="{ background: backgroundColor }"></c-icon>

    <div class="cube-content" :style="{ background: backgroundColor }">
      <slot />
    </div>
  </button>
</template>
<script>
import Icon from './Icon'
export default {
  computed: {
    backgroundColor() {
      switch (this.type) {
        case 'success':
          return 'rgb(99, 206, 99)'
        case 'info':
          return 'rgb(154, 158, 167)'
        case 'warning':
          return '#ffab85'
        case 'info':
          return '#ffab85'
        case 'danger':
          return 'rgb(245, 108, 108)'
        default:
          return '#409eff'
      }
    }
  },
  components: {
    'c-icon': Icon
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium'
    },
    round: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'primary'
    },
    iconPosition: {
      type: String,
      default: 'left',
      // 对传入的不合法iconPositon进行校验
      validator(val) {
        return val === 'left' || val === 'right'
      }
    }
  },
  data() {
    return {
      show: false
    }
  }
}
</script>
<style lang="scss">
$height: 36px;
$small-height: $height * 0.8;
$large-height: $height * 1.2;
$bg: #409eff;
$forbidden-bg: #65b2ff;
$font-color: #fff;
$font-size: 16px;
$border-style: solid;
$border-color: #fff;
$border-width: 2px;
$border-radius: 4px;
.cube-button {
  margin: 2px 6px 2px 0px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle; //让inline-flex的元素对齐
  font-size: $font-size;
  height: $height;
  background: $bg;
  padding: 0 1em;
  box-shadow: none;
  color: $font-color;
  border-style: $border-style;
  border-color: $border-color;
  border-width: $border-width;
  border-radius: $border-radius;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
    &:active {
      background-color: $bg;
      box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
    }
  }
  &[round] {
    border-radius: $height / 2;
  }
  &:active {
    background-color: #56aaff;
    box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.15) inset,
      1px 1px 3px rgba(0, 0, 0, 0.3);
  }
  &:focus {
    outline: none;
  }
  // size
  &-small {
    padding: 0 0.8em;
    height: $small-height;
    font-size: $font-size * 0.8;
    border-width: $border-width * 0.8;
    &:active {
      box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15) inset,
        1px 1px 2px rgba(0, 0, 0, 0.3);
    }
    &[round] {
      border-radius: $small-height / 2;
    }
  }
  &-large {
    padding: 0 1.2em;
    height: $large-height;
    font-size: $font-size * 1.2;
    border-width: $border-width * 1.2;
    &:active {
      box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.15) inset,
        1px 1px 4px rgba(0, 0, 0, 0.3);
    }
    &[round] {
      border-radius: $large-height / 2;
    }
  }
  // type
  &-success {
    background-color: rgb(99, 206, 99);
    &[disabled] {
      &:active {
        background-color: rgb(99, 206, 99);
      }
    }
    &:active {
      background-color: rgb(121, 209, 121);
    }
  }
  &-info {
    background-color: rgb(154, 158, 167);
    &[disabled] {
      &:active {
        background-color: rgb(154, 158, 167);
      }
    }
    &:active {
      background-color: rgb(165, 166, 170);
    }
  }
  &-warning {
    background-color: #ffab85;
    &[disabled] {
      &:active {
        background-color: #ffab85;
      }
    }
    &:active {
      background-color: #faaf8d;
    }
  }
  &-danger {
    background-color: rgb(245, 108, 108);
    &[disabled] {
      &:active {
        background-color: rgb(245, 108, 108);
      }
    }
    &:active {
      background-color: rgb(243, 124, 124);
    }
  } // 控制图标位置的类
  &.cube-icon-left {
    > .cube-icon {
      order: 1;
      margin-right: 0.4em;
    }
    > .cube-content {
      order: 2;
      //   background: $bg;
    }
  }
  &.cube-icon-right {
    > .cube-icon {
      order: 2;
      margin-left: 0.4em;
    }
    > .cube-content {
      order: 1;
    }
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  > .loading {
    animation: spin 500ms infinite linear;
  }
}
</style>
