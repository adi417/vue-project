import VueRouter from "vue-router"

import Vue from "vue"

//使用Vue.use方法加载VueRouter模块
Vue.use(VueRouter)


import home from "../components/home.vue"
import member from "../components/member.vue"
import cart from "../components/cart.vue"
import search from "../components/search.vue"


//新闻组件
import newlist from "../components/news/newlist.vue"
import newinfo from "../components/news/newinfo.vue"

// import HelloVue from "../components/HelloVue.vue"

export default new VueRouter({
    routes: [
       {path: "/home",  component:home},
       {path: "/member",  component:member},
       {path: "/cart",  component:cart},
       {path: "/search",  component:search},
       {path: "/",  redirect:"/home"},
       {path: "/home/newlist", component:newlist},
       {path: "/home/newinfo/", component:newinfo}
    ]
});

