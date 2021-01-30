// import Vue from 'vue'
import Router from 'vue-router'

// 解决 Avoided redundant nvigation to cuttent loation 报错
// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }


Vue.use(Router)

import Add from '../components/home/add'


export default new Router({
    mode:'history',
    routes: [
        {
            path: '/',
            component: Add,
        },
        {
            path: '/:num',
            props: true,
            component: resolve => require(['@/components/public/Table.vue'],resolve)       
            // component:Dd
        },
       ]
})