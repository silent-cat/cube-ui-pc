<template>
  <div
    class="wy-toast-wrapper-center"
    :class="toastClasses"
    ref="toastWrapper"
  >
    <div class="wy-toast-wrapper" ref="wrapper">
      <div class="toast-message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <div class="toast-line" ref="line" v-if="closeButton.text"></div>
      <span class="toast-close" @click="onClickClose" v-if="closeButton.text">
        {{ closeButton.text }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    autoClose: {
      type: [Boolean, Number],
      default: 2,
      validator(value) {
        if (value === false || typeof value === 'number') {
          return true
        }
      }
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: '',
          callback: undefined
        }
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'center',
      validator(value) {
        return ['top', 'center', 'bottom'].indexOf(value) >= 0
      }
    },
    zIndex: {
      type: Number,
      default: 20,
      validator(value) {
        return typeof value === 'number'
      }
    }
  },
  mounted() {
    this.$refs.toastWrapper.style.zIndex = this.zIndex
    this.updateStyles()
    this.execAutoClose()
  },
  computed: {
    toastClasses() {
      return {
        [`position-${this.position}`]: true
      }
    }
  },
  methods: {
    close() {
      this.$el.remove()
      this.$emit('beforeClose')
      this.$destroy()
    },
    updateStyles() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${
          this.$refs.wrapper.getBoundingClientRect().height
        }px`
      })
    },
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoClose * 1000)
      }
    },
    log() {
      console.log(
        '测试 Toast 中 onClickClose 事件的 callback,如果要使用就传入 toast，然后toast.log()即可'
      )
    },
    onClickClose() {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback(this)
      }
    }
  }
}
</script>

<style lang="scss">
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: #4d4d4e;
// $toast-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
$toast-radius: 4px;
$space-between: 16px;
$animation-duration: 300ms;
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

.wy-toast-wrapper-center {
  z-index: 20;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);

  &.position-top {
    top: 44px;

    .wy-toast-wrapper {
      animation: slide-down $animation-duration;
    }
  }

  &.position-center {
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    animation: fade-in $animation-duration;
  }

  &.position-bottom {
    bottom: 44px;

    .wy-toast-wrapper {
      animation: slide-up $animation-duration;
    }
  }

  .wy-toast-wrapper {
    font-size: $font-size;
    min-height: $toast-min-height;
    line-height: 1.8em;
    background: $toast-bg;
    // box-shadow: $toast-box-shadow;
    padding: 0 $space-between;
    border-radius: $toast-radius;
    color: white;
    display: flex;
    align-items: center;
    // border: 2px solid #fff;
    // box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
    &:hover {
      cursor: pointer;
    }
    .toast-message {
      padding: $space-between/2 0;
      background: $toast-bg;
      * {
        background: $toast-bg;
      }
    }

    .toast-line {
      height: 100%;
      border-left: 1px solid #666666;
      margin-left: $space-between;
    }

    .toast-close {
      padding-left: $space-between;
      flex-shrink: 0;
      background: $toast-bg;
    }
  }
}
</style>
