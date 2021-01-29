import Vue from 'vue'
import App from './App'
import router from './router/router'
import axios from 'axios'
import Vuex from 'vuex'

// 引入element 样式库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './assets/reset.css'


// 引入echarts 
import echarts from 'echarts'
// 挂载至原型

Vue.prototype.$echarts = echarts
Vue.prototype.$http = axios


Vue.use(ElementUI)
Vue.use(Vuex)

// 创建一个公共对象
const store = new Vuex.Store({
  state: {
    localhost: 'http://localhost:3300',
    // 
    recommendData: '',
    proportion:[]
    
  },
  mutations: {//同步
    
  },
  actions: {//异步
    async asyRecommend(context) {
      let { data : recom } = await new Vue().$http.get(`${context.state.localhost}/get?get=recommend`)
      // let{}
      let { data: prop } = await new Vue().$http.get(`${context.state.localhost}/num`)
      
      context.state.recommendData = recom
      context.state.proportion = prop
    }
  },
  gerters: {//计算或过滤
    
  }
})


// import{Button,Select} from 'element-ui'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})


// 禁止选中文本
