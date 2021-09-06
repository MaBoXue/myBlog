/*
 * @Description: Learning Record
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-08-23 23:21:25
 * @LastEditors: bx.m
 * @LastEditTime: 2021-08-23 23:27:23
 */
import axios from "axios";
import showMessage from "@/utils/showMessage";

const ins = axios.create();
// 添加响应拦截器
ins.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if (response.data.code !== 0) {
        showMessage({
            message: response.data.msg,
            type: "error",
            duration: 4000,
        })
        return null
    }
    return response.data.data;
});


export default ins;