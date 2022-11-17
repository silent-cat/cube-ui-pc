# Popover 弹出层
在元素附近弹出提示框
## 基础用法
<ClientOnly>
  <popover-demo></popover-demo>
</ClientOnly>

```vue
  <wy-popover position="left">
    <template slot="content">
      popover 中的内容
    </template>
    <wy-button>左方显示内容</wy-button>
  </wy-popover>
  <wy-popover>
    <template slot="content">
      popover 中的内容
    </template>
    <wy-button>点击显示</wy-button>
  </wy-popover>
  <wy-popover trigger="hover">
    <template slot="content">
      popover 中的内容
    </template>
    <wy-button>hover 显示内容</wy-button>
  </wy-popover>
```

### Popover 属性
| 参数              | 说明             | 类型    | 可选值                   | 默认值  |
| :------------    | :--------------- | :------ | :---------- | :------ |
| position        | 设置显示位置             | string  | top / bottom / left / right | top |
| trigger         | 设置触发事件             | string | click / hover | click |