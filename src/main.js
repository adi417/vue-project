import Vue from "vue";

//引入根组件
import App from "./App.vue"

import router from "./routers/router.js"


//引入mint-ui插件
import MintUi from "mint-ui"
//引入mint-ui css样式
import "mint-ui/lib/style.css"
//安装mint-ui插件
Vue.use(MintUi)
//引入mui样式
import "./lib/mui/css/mui.css"
//引入mui图标样式
import "./lib/mui/css/icons-extra.css"
var vm = new Vue({
    el: "#app",
    router,
    template: "<App/>",
    components: {App}
})