import Toast from './Toast'
function createToast({ Vue, message, propsData ,onClose}) {
  // Vue.extend() 创建 Toast 的构造器
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({
    propsData: propsData
  })
  toast.$slots.default = [message]
  // 并调用 Vue 实例上的 $mount() 手动挂载
  toast.$mount()
  toast.$on('close',onClose)
  document.body.appendChild(toast.$el)
  return toast
}
let currentToast
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function(message, toastOptions) {
      if(currentToast){
        currentToast.close()
      }
      currentToast = createToast({ Vue, message, propsData: toastOptions ,onClose:()=>{
        currentToast = null
      }})
    }
  }
}
