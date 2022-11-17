# Button 按钮

常见的按钮

## 不同类型

类型、形状不同的按钮
<ClientOnly>
<button-demo></button-demo>
</ClientOnly>

```vue
  <wy-row>
    <wy-button type="primary">主要</wy-button>
    <wy-button type="success">成功</wy-button>
    <wy-button type="info">信息</wy-button>
    <wy-button type="warning">警告</wy-button>
    <wy-button type="danger">危险</wy-button>
  </wy-row>
  <wy-row>
    <wy-button type="primary" round>主要</wy-button>
    <wy-button type="success" round>成功</wy-button>
    <wy-button type="info" round>信息</wy-button>
    <wy-button type="warning" round>警告</wy-button>
    <wy-button type="danger" round>危险</wy-button>
  </wy-row>
```

## 禁用状态

按钮处于禁用状态
<ClientOnly>
<button-disabled-demo></button-disabled-demo>
</ClientOnly>

```vue
  <wy-row>
    <wy-button type="primary" disabled>主要</wy-button>
    <wy-button type="success" disabled>成功</wy-button>
    <wy-button type="info" disabled>信息</wy-button>
    <wy-button type="warning" disabled>警告</wy-button>
    <wy-button type="danger" disabled>危险</wy-button>
  </wy-row>
```
## 带图标的按钮

图标可以增强辨识度
<ClientOnly>
<button-icon-demo></button-icon-demo>
</ClientOnly>

```vue
  <wy-row>
    <wy-button icon="add" type="success">添加</wy-button>
    <wy-button icon="edit">编辑</wy-button>
    <wy-button icon="delete" type="danger">删除</wy-button>
  </wy-row>
  <wy-row>
    <wy-button icon="add" type="success" icon-position="right">添加</wy-button>
    <wy-button icon="edit" icon-position="right">编辑</wy-button>
    <wy-button icon="delete" type="danger" icon-position="right">删除</wy-button>
  </wy-row>
```

## 按钮组

以按钮组的方式出现，常用于多项类似操作
<ClientOnly>
<button-group-demo></button-group-demo>
</ClientOnly>

```vue
  <wy-button-group>
    <wy-button icon="left">上一页</wy-button>
    <wy-button icon="right" icon-position="right">下一页</wy-button>
  </wy-button-group>
```

## 加载按钮

点击按钮后进行数据加载操作，在按钮上显示加载状态
<ClientOnly>
<button-loading-demo></button-loading-demo>
</ClientOnly>

```vue
  <wy-button type="primary" loading>加载中</wy-button>
```

## 不同尺寸

三种不同尺寸的按钮
<ClientOnly>
<button-size-demo></button-size-demo>
</ClientOnly>

```vue
  <wy-button size="small">小型按钮</wy-button>
  <wy-button size="middle">中型按钮</wy-button>
  <wy-button size="large">大型按钮</wy-button>
  <wy-button size="small" round>小型</wy-button>
  <wy-button size="middle" round>中型</wy-button>
  <wy-button size="large" round>大型</wy-button>
```

## 点击事件

触发click事件
<ClientOnly>
<button-click-demo></button-click-demo>
</ClientOnly>

```vue
  <wy-button @click="clickEvent">点击</wy-button>
  <script>
  export default {
    methods: {
      clickEvent() {
        alert('触发按钮的点击事件')
      }
    },
  }
</script>
```
### Button 属性

| 参数          | 说明             | 类型    | 可选值                                      | 默认值  |
| :------------ | :--------------- | :------ | :------------------------------------------ | :------ |
| type          | 类型             | string  | primary / success / info / warning / danger | primary |
| round        | 是否圆形按钮     | boolean | false / true                                | false   |
| disabled      | 是否禁用按钮     | boolean | false / true                                | false   |
| icon          | 是否有图标       | string  | -                                           | -       |
| icon-position | 图标的位置       | string  | left / right                                | left    |
| loading       | 是否处于加载状态 | boolean | false / true                                | false   |
| size          | 尺寸             | string  | middle / small / large                      | middle  |

### Event 事件

| 事件名          | 说明             | 参数    |
| :------------ | :--------------- | :------ |
| click          | 点击事件            | -  | 



