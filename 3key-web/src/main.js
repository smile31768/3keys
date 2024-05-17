import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import myEn from './i18n/en'
import myZh from './i18n/zh'

Vue.use(VueI18n)

var notices = ['默认是Ctrl C V和Enter，扫右边的码可以改按键的定义','如果插上电脑不识别，用酒精喷下插口引脚然后刷一刷，晾干再试试看','用的是国产青轴，轴和键帽都可以热插拔，不喜欢可以自己换掉']

const messages = {
  en: {
    ...myEn,
    ...enLocale
  },
  zh: {
    ...myZh,
    ...zhLocale
  }
}

const i18n = new VueI18n({
  locale: localStorage.getItem('lang')||'zh',
  messages, 
})

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

new Vue({
  el: '#app',
  i18n,
  render: h => h(App)
})
