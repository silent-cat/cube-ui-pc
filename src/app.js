import Vue from 'vue'
import Button from './Button'
import Icon from './Icon'
import Switch from './Switch'
import Loading from './Loading'
import Collapse from './Collapse'
import CollapseItem from './CollapseItem'


Vue.component('c-button', Button)
Vue.component('c-icon', Icon)
Vue.component('c-switch', Switch)
Vue.component('c-loading', Loading)
Vue.component('c-collapse', Collapse)
Vue.component('c-collapse-item', CollapseItem)
new Vue({
  el: '#app',
  created() {},
  data() {
    return {
      checked: false,
      checked1: true,
      selectedTab: ['1']
    }
  },
  methods: {
    f1() {
      alert(1)
    }
  }
})
