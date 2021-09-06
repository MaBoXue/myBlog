/*
 * @Description: Learning Record
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-08-23 22:58:53
 * @LastEditors: bx.m
 * @LastEditTime: 2021-08-26 21:28:17
 */
import ins from "@/api/request.js";


async function getBanner() {
    const req = await ins.get("/api/banner");
    return req;
}

export default getBanner;


