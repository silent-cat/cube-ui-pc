<p align="center">
  <a href="https://silent-cat.github.io/wy-ui-vue2/" target="_blank">
    <img width="100" src="https://z3.ax1x.com/2021/04/03/cnNHMT.png" alt="logo">
  </a>
</p> 
<h1 align="center">物语UI</h1>
<p align="center">
  <a href="https://travis-ci.org/silent-cat/wy-ui-vue2" target="_blank">
    <img alt="Travis (.org)" src="https://travis-ci.org/silent-cat/wy-ui-vue2.svg?branch=main" target="_blank">
  </a>
</p>



作者： silent-cat 

## 介绍
一款基于 Vue2 实现的桌面端组件库
## 使用
1. 安装 wy-ui-vue2
    ```
   npm install wy-ui-vue2
    ```
    或
    ```
   yarn add wy-ui-vue2
    ```
2. 引入 wy-ui-vue2

    main.js
    ```js
    import {
      Button,ButtonGroup,Switch,Collapse,CollapseItem,Icon,Row,Col,Pagination,Tabs,TabsHead,TabsBody,
      TabsItem,TabsPanel,Toast,plugin,Popover,Input,Container,Header,Content,Footer,Aside
    }  from "wy-ui-vue2"; // 引入组件
    import "wy-ui-vue2/dist/index.css"; // 引入样式
    // 注册组件
    Vue.component('wy-button', Button)
    Vue.component('wy-button-group', ButtonGroup)
    Vue.component('wy-icon', Icon)
    Vue.component('wy-switch', Switch)
    Vue.component('wy-collapse', Collapse)
    Vue.component('wy-collapse-item', CollapseItem)
    Vue.component('wy-input', Input)
    Vue.component('wy-col', Col)
    Vue.component('wy-row', Row)
    Vue.component('wy-tabs', Tabs)
    Vue.component('wy-tabs-body', TabsBody)
    Vue.component('wy-tabs-head', TabsHead)
    Vue.component('wy-tabs-item', TabsItem)
    Vue.component('wy-tabs-panel', TabsPanel)
    Vue.component('wy-pagination', Pagination)
    Vue.component('wy-toast',Toast)
    Vue.use(plugin)
    Vue.component('wy-popover',Popover)
    Vue.component('wy-container',Container)
    Vue.component('wy-header',Header)
    Vue.component('wy-content',Content)
    Vue.component('wy-footer',Footer)
    Vue.component('wy-aside',Aside)
    ```
## 文档
[官方文档](https://silent-cat.github.io/wy-ui-vue2/)
## 提问
[issues](https://github.com/silent-cat/wy-ui-vue2/issues)
