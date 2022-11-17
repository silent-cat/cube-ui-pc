# 快速上手

## 安装

```bash
npm install wy-ui-vue2
```
或
```bash
yarn add wy-ui-vue2
```

## 使用
在main.js中
### 支持按需引入
main.js
```js
import {
    Button,
    ButtonGroup,
    Switch,
    Collapse,
    CollapseItem,
    Icon,
    Row,
    Col,
    Pagination,
    Tabs,
    TabsHead,
    TabsBody,
    TabsItem,
    TabsPanel,
    Toast,
    plugin,
    Popover,
    }  from "wy-ui-vue2"; // 引入组件
import "wy-ui-vue2/dist/index.css"; // 引入样式
Vue.component('wy-button', Button)
Vue.component('wy-button-group', ButtonGroup)
Vue.component('wy-switch', Switch)
Vue.component('wy-collapse', Collapse)
Vue.component('wy-collapse-item', CollapseItem)
Vue.component('wy-icon', Icon)
Vue.component('wy-row', Row)
Vue.component('wy-col', Col)
Vue.component('wy-pagination', Pagination)
Vue.component('wy-tabs', Tabs)
Vue.component('wy-tabs-head', TabsHead)
Vue.component('wy-tabs-body', TabsBody)
Vue.component('wy-tabs-item', TabsItem)
Vue.component('wy-tabs-panel', TabsPanel)
Vue.component('wy-toast',Toast)
Vue.use(plugin)
Vue.component('wy-popover',Popover)
```
