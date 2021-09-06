/*
 * @Description: Learning Record
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-08-23 10:32:20
 * @LastEditors: bx.m
 * @LastEditTime: 2021-09-06 09:59:15
 */

import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routers";

Vue.use(VueRouter);

const router = new VueRouter({
    // 配置

    routes,
    mode: "history",
});


export default router;