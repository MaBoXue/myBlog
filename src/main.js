/*
 * @Description: Learning Record
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-08-21 12:41:21
 * @LastEditors: bx.m
 * @LastEditTime: 2021-09-04 22:18:13
 */
import Vue from 'vue'
import App from './App.vue';
import router from "@/router/index.js";

//注册全局自定义指令
import vLoading from "@/directives/loading.js";
Vue.directive("loading", vLoading);


// 执行事件总线
import "@/eventBus.js";


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')



import showMessage from "@/utils/showMessage"
Vue.prototype.$showMessage = showMessage;

// mock数据
import "@/mock";




