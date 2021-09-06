/*
 * @Description: Learning Record
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-09-04 15:09:58
 * @LastEditors: bx.m
 * @LastEditTime: 2021-09-04 22:03:47
 */

// import { set } from "core-js/core/dict"

// const eventArr = {};

// export default {
//     $on(eventName, handler) {
//         if (!eventArr[eventName]) {
//             eventArr[eventName] = new set();
//         }
//         eventArr[eventName].add(handler);
//     },
//     $off(eventName, handler) {
//         if (!eventArr[eventName]) {
//             return;
//         }
//         eventArr[eventName].delete(handler);
//     },
//     $emit(eventName, ...arg) {
//         if (!eventArr[eventName]) {
//             return;
//         }
//         for (const h of eventArr[eventName]) {
//             h(...arg);
//         }
//     }
// }



import Vue from "vue";

Vue.prototype.$bus = new Vue();

// $bus对象
// {
//     $on(){},
//     $off(){},
//     $emit(){},
// }