# Toast 提示

在整个屏幕范围显示

## 基础使用

toast 两秒后自动消失
<ClientOnly>
<toast-demo></toast-demo>
</ClientOnly>

```vue
<wy-button @click="$toast(`显示toast`)">显示toast</wy-button>
```

## 关闭自动关闭并设定按钮的文本与回调

toast 默认是自动关闭的，启动 autoClose 为 true 关闭自动关闭，只允许手动关闭。
手动关闭则还需要启动 closeButton,用于设定按钮的文本与回调
<ClientOnly>
<toast-auto-close-demo></toast-auto-close-demo>
</ClientOnly>

```vue
<wy-button @click="showToast">关闭自动关闭</wy-button>

<script>
export default {
  methods: {
    showToast() {
      this.$toast(`显示toast`, {
        autoClose: false,
        closeButton: {
          text: '关闭',
          callback: () => {
            console.log('关闭成功')
          }
        }
      })
    }
  }
}
</script>
```

## 支持 HTML

让 toast 的内容部分支持 HTML
<ClientOnly>
<toast-enable-html-demo></toast-enable-html-demo>
</ClientOnly>

```vue
<wy-button @click="$toast(`<h3>显示toast</h3>`, { enableHtml: true })">支持HTML</wy-button>
```

## 不同位置

通过指定 position 生成不同位置的 toast
<ClientOnly>
<toast-position-demo></toast-position-demo>
</ClientOnly>

```vue
<wy-button @click="showToast('top')">上方显示</wy-button>
<wy-button @click="showToast('center')">中间显示</wy-button>
<wy-button @click="showToast('bottom')">下方显示</wy-button>

<script>
export default {
  methods: {
    showToast(position) {
      this.$toast(`${position}显示`, {
        position: position
      })
    }
  }
}
</script>
```

### Toast 属性

| 参数        | 说明                                           | 类型             | 可选值               | 默认值                             |
| :---------- | :--------------------------------------------- | :--------------- | :------------------- | :--------------------------------- |
| autoClose   | 根据传入的数值确定多长时间后自动关闭，单位：秒 | boolean / number | -                    | 2                                  |
| enableHtml  | toast 的内容是否支持 html                      | boolean          | false / true         | false                              |
| position    | 生成的位置                                     | string           | top / center /bottom | top                                |
| zIndex      | 设定 Toast 组件在当前堆叠上下文中的堆叠层级    | number           | -                    | 20                                 |
| closeButton | 确定关闭按钮的文字 text 与 callback 函数       | object           | -                    | {text: '关闭',callback: undefined} |
