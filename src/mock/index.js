/*
 * @Description: Learning Record
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-08-23 23:05:25
 * @LastEditors: bx.m
 * @LastEditTime: 2021-08-28 19:42:34
 */

import "@/mock/banner";
import "@/mock/blog";

// 设置请求的响应时间，延迟1-2s
import Mock from "mockjs";
Mock.setup({
    timeout: "1000-2000",
});