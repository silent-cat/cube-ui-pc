# Grid 栅格
通过基础的 24 分栏，迅速简便地创建布局

## 基础用法
通过 row 和 col 组件，并通过 col 组件的 span 属性自由组合布局
<ClientOnly>
  <grid-demo></grid-demo>
</ClientOnly>

```vue
  <div class="grid-wrapper">
    <wy-row class="row">
      <wy-col class="item" span="24">col-24</wy-col>
    </wy-row>
    <wy-row>
      <wy-col class="item" span="12">col-12</wy-col>
      <wy-col class="item" span="12">col-12</wy-col>
    </wy-row>
    <wy-row class="row">
      <wy-col class="item" span="8">col-8</wy-col>
      <wy-col class="item" span="8">col-8</wy-col>
      <wy-col class="item" span="8">col-8</wy-col>
    </wy-row>
    <wy-row class="row">
      <wy-col class="item" span="6">col-6</wy-col>
      <wy-col class="item" span="6">col-6</wy-col>
      <wy-col class="item" span="6">col-6</wy-col>
      <wy-col class="item" span="6">col-6</wy-col>
    </wy-row>
  </div>

  <style lang="scss" scoped>
    *{
      box-sizing: border-box;
    }
    .grid-wrapper{
      $background: #3eaf7c;
      > .row{ padding: .2em;
        > .item { text-align: center; color: white;
          &:nth-child(odd){ background: $background; }
          &:nth-child(even){ background: lighten($background,20%); color: black; }
        }
      }
    }
  </style>
```
## 分栏间隔    
分栏之间存在间隔
<ClientOnly>
  <gutter-demo></gutter-demo>
</ClientOnly>

```vue
  <div class="gutter-wrapper">
    <wy-row gutter="30">
      <wy-col class="item" span="8"> <span> col-8; gutter-30;</span> </wy-col>
      <wy-col class="item" span="8"> <span> col-8; gutter-30;</span> </wy-col>
      <wy-col class="item" span="8"> <span> col-8; gutter-30;</span> </wy-col>
    </wy-row>
    <wy-row gutter="20">
      <wy-col class="item" span="8"> <span> col-8; gutter-20;</span> </wy-col>
      <wy-col class="item" span="8"> <span> col-8; gutter-20;</span> </wy-col>
      <wy-col class="item" span="8"> <span> col-8; gutter-20;</span> </wy-col>
    </wy-row>
    <wy-row gutter="10">
      <wy-col class="item" span="8"> <span> col-8; gutter-10;</span> </wy-col>
      <wy-col class="item" span="8"> <span> col-8; gutter-10;</span> </wy-col>
      <wy-col class="item" span="8"> <span> col-8; gutter-10;</span> </wy-col>
    </wy-row>
  </div>

  <style lang="scss" scoped>
    * { box-sizing: border-box; }
    .gutter-wrapper { padding-top: 10px;
      .item { text-align: center; color: white;
        > span { display: block; background: #3eaf7c; }
      }
    }
  </style>
```
## 排列方式
定义每行的排列方式
<ClientOnly>
  <align-demo></align-demo>
</ClientOnly>

```vue
  <div class="align-wrapper">
    <wy-row class="row" align="left">
      <wy-col class="item" span="8">left</wy-col>
      <wy-col class="item" span="8">left</wy-col>
    </wy-row>
    <wy-row class="row" align="center">
      <wy-col class="item" span="8">center</wy-col>
      <wy-col class="item" span="8">center</wy-col>
    </wy-row>
    <wy-row class="row" align="right">
      <wy-col class="item" span="8">right</wy-col>
      <wy-col class="item" span="8">right</wy-col>
    </wy-row>
  </div>

  <style lang="scss" scoped>
    $background: #3eaf7c;
    * { box-sizing: border-box; }
    .align-wrapper{ text-align: center; color: white;
      .row{ padding-top: 10px;
        > .item { text-align: center; color: white;
          &:nth-child(odd){ background: $background; }
          &:nth-child(even){ background: lighten($background,20%); color: black; }
        }
      }
    }
  </style>
```
## 分栏偏移
支持偏移指定的栏数
<ClientOnly>
    <offset-demo></offset-demo>
</ClientOnly>
```vue
  <div class="offset-wrapper">
    <wy-row class="row">
      <wy-col class="item" span="8"> <span>col-8</span> </wy-col>
      <wy-col class="item" span="8"> <span>col-8</span> </wy-col>
      <wy-col class="item" span="4" offset="4"> <span>col-4</span> </wy-col>
    </wy-row>
    <wy-row class="row">
      <wy-col class="item" span="8"> <span>col-8</span> </wy-col>
      <wy-col class="item" span="5" offset="3"> <span>col-5</span> </wy-col>
      <wy-col class="item" span="4" offset="4"> <span>col-4</span> </wy-col>
    </wy-row>
    <wy-row class="row">
      <wy-col class="item" span="2" offset="6"> <span>col-2</span> </wy-col>
      <wy-col class="item" span="5" offset="3"> <span>col-5</span> </wy-col>
      <wy-col class="item" span="4" offset="4"> <span>col-4</span> </wy-col>
    </wy-row>
  </div>

  <style lang="scss" scoped>
    $background: #3eaf7c;
    $wrapper-top: 10px;
    $font-color: white;
    * { box-sizing: border-box; }
    .offset-wrapper { padding-top: $wrapper-top;
      > .row {
        > .item { text-align: center; color: $font-color;
          > span { display: block; background: $background; }
        }
      }
    }
  </style>
```
### ROW 属性
| 参数          | 说明             | 类型    | 可选值                                      | 默认值  |
| :------------ | :--------------- | :------ | :------------------------------------------ | :------ |
| gutter        | 栅格间隔     | number | -                                | 0   |
| align      | 排列方式     | string |  left / center /right                               | left   |

### Col 属性
| 参数          | 说明             | 类型    | 可选值                                      | 默认值  |
| :------------ | :--------------- | :------ | :------------------------------------------ | :------ |
| span        | 栅格占据的列数     | string / number | -                                | 0   |
| offset      | 栅格左侧的间隔格数     | string /number |  -                              | 0   |


