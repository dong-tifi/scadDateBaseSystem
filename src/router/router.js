import Vue from 'vue'
import Router from 'vue-router'
// 解决 Avoided redundant nvigation to cuttent loation 报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


Vue.use(Router)

import Info from '../components/public/Info'
import Tabs from '../components/home/Tabs'
import Add from '../components/home/add'
// import Table from '@/components/public/Table'
// import Dd from '@/components/home/dd'


export default new Router({
    mode:'history',
    routes: [
        {
            path: '/',
            redirect:'/home'
        },
        {
        path: '/home',
            component: Tabs,
            children: [{
                path: 'add',
                component:Add
            },
            {
                path: 'table/:num',
                props:true,
                component: resolve => require(['@/components/public/Table.vue'],resolve)             
            },
           ]
    },
        {
            path: '/home/recom',
            name:'info',
            component: Info,
            props:true
    }]
})