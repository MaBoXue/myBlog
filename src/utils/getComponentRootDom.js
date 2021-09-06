/*
 * @Description: Learning Record
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-08-23 18:12:48
 * @LastEditors: bx.m
 * @LastEditTime: 2021-08-23 18:17:43
 */

import Vue from "vue";

// 获取某个组件渲染的Dom根元素
// 参数 comp 是导入的组件
// 参数 props 一个对象 写传给组件的参数


export default function getComponentRootDom(comp, props) {
    const vm = new Vue({
        render: h => h(comp, { props })
    })
    vm.$mount();
    return vm.$el;
}


// 使用

// import Icon from "@/components/Icon";
// import getComponentRootDom from '@/utils/getComponentRootDom';
// const div = getComponentRootDom(Icon, { type: "success" });
// window.div = div;