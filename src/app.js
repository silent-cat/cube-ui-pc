import Vue from 'vue'
import Button from './Button'
import ButtonGroup from './ButtonGroup'
import Icon from './Icon'
import Switch from './Switch'
import Loading from './Loading'
import Collapse from './Collapse'
import CollapseItem from './CollapseItem'
// import Input from './Input'
import Col from './Col'
import Row from './Row'
import Tabs from './Tabs'
import TabsBody from './TabsBody'
import TabsHead from './TabsHead'
import TabsItem from './TabsItem'
import TabsPanel from './TabsPanel'
import Pagination from './Pagination'
import Toast from './Toast'
import plugin from './plugin'
import Popover from './Popover'
// import Container from './Container'
// import Header from './Header'
// import Content from './Content'
// import Footer from './Footer'
// import Aside from './Aside'

Vue.component('wy-button', Button)
Vue.component('wy-button-group', ButtonGroup)
Vue.component('wy-icon', Icon)
Vue.component('wy-switch', Switch)
Vue.component('wy-loading', Loading)
Vue.component('wy-collapse', Collapse)
Vue.component('wy-collapse-item', CollapseItem)
// Vue.component('wy-input', Input)
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
// Vue.component('wy-container',Container)
// Vue.component('wy-header',Header)
// Vue.component('wy-content',Content)
// Vue.component('wy-footer',Footer)
// Vue.component('wy-aside',Aside)
new Vue({
  el: '#app',
  created() {},
  data() {
    return {
      checked: false,
      checked1: true,
      selected: ['1'],
      value1: '',
      selectedTab: 'tab1',
      // 分页组件
      pageSize: 2, //每页显示20条数据
      currentPage: 1, //当前页码
      count: 0, //总记录数
      items: [],
      // 日历组件

      selMode: 'singleSel', // singleSel, mutiSel, rangeSel
      list: [
        {
          year: '2019',
          month: '8',
          day: '21'
        },
        {
          year: '2019',
          month: '8',
          day: '20'
        },
        {
          year: '2019',
          month: '7',
          day: '10'
        }
      ],
      curSel: {
        year: '2019',
        month: '8',
        day: '23'
      },

      items:[
        {name:'选项一',isChecked:true},
        {name:'选项二',isChecked:false},
        {name:'选项三',isChecked:false},
      ]
    }
  },
  mounted() {
    //请求第一页数据
    this.getList()
  },
  methods: {
    f1() {
      alert(1)
    },
    fn() {
      console.log('事件被触发')
    },
    getList() {
      //模拟
      // let url = `/api/list/?pageSize=${this.pageSize}&currentPage=${this.currentPage}`
      // this.$http.get(url).then(({ body }) => {
      //   //子组件监听到count变化会自动更新DOM
      //   this.count = body.count
      //   this.items = body.list
      // })

      this.count = 25
      this.items = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
        { id: 11 },
        { id: 12 },
        { id: 13 },
        { id: 14 },
        { id: 15 },
        { id: 16 },
        { id: 17 },
        { id: 18 },
        { id: 19 },
        { id: 20 },
        { id: 21 },
        { id: 22 },
        { id: 23 },
        { id: 24 },
        { id: 25 }
      ]
    },

    // //从page组件传递过来的当前page
    pageChange(page) {
      console.log(page)
      this.currentPage = page
      this.getList()
    },

    showToast() {
      this.$toast(`<strong style="color:#fff">验证有误，请重新输入</strong>`, {
        enableHtml: true,
        position: 'top',
        autoClose:false,
        closeButton: {
          text: '关闭',
          callback: () => {
            console.log('关闭成功')
          }
        },
      })
    },
  }
})
