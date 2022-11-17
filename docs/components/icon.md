# Icon 图标

提供了一套常用的图标集合

## 基础用法
直接使用图标组件
<ClientOnly>
  <icon-demo></icon-demo>
</ClientOnly>

```vue
    <wy-icon name="add"></wy-icon>
    <wy-icon name="edit"></wy-icon>
    <wy-icon name="delete"></wy-icon>
```

## Button使用
在按钮中使用
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

### Icon 属性

| 参数              | 说明             | 类型    | 可选值                   | 默认值  |
| :------------    | :--------------- | :------ | :---------- | :------ |
| name        | 设置图标名称             | string  | - | - |
