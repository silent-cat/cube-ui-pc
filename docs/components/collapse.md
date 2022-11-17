# Collapse 折叠面板
通过折叠面板收纳内容区域
## 基础用法
可同时展开多个面板，面板之间不影响
<ClientOnly>
<collapse-demo></collapse-demo>
</ClientOnly>

```vue
    <wy-collapse :selected.sync="selectedTab" accordion>
      <wy-collapse-item title="水果" name="fruits">Fruits</wy-collapse-item>
      <wy-collapse-item title="蔬菜" name="vegetables">Vegetables</wy-collapse-item>
      <wy-collapse-item title="牛奶" name="milk">Milk</wy-collapse-item>
    </wy-collapse>

    <script>
    export default {
        data() {
            return {
                selectedTab: ['fruits']
            }
        }
    }
    </script>
```

## 手风琴
每次只能展开一个面板

<ClientOnly>
<collapse-accordion-demo></collapse-accordion-demo>
</ClientOnly>

```vue
    <wy-collapse :selected.sync="selectedTab" single>
      <wy-collapse-item title="水果" name="1">Fruits</wy-collapse-item>
      <wy-collapse-item title="蔬菜" name="2">Vegetables</wy-collapse-item>
      <wy-collapse-item title="奶类" name="3">Milk</wy-collapse-item>
    </wy-collapse>

    <script>
    export default {
        data() {
            return {
                selectedTab: ['1']
            }
        }
    }
    </script>
```

### Collapse 属性
| 参数          | 说明             | 类型    | 可选值                   | 默认值  |
| :------------ | :--------------- | :------ | :---------- | :------ |
| selected         | 选中的菜单            | array | - | - |
| accordion         | 进入手风琴模式             | boolean | false /true  | false |

### CollapseItem 属性

| 参数          | 说明             | 类型    | 可选值                   | 默认值  |
| :------------ | :--------------- | :------ | :---------- | :------ |
| title         |      面板标题       | string | - | - |
| name         | 唯一标识符          | string | -  | - |