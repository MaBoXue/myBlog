/*
 * @Description: Learning Record
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-08-30 15:16:10
 * @LastEditors: bx.m
 * @LastEditTime: 2021-08-30 15:22:01
 */



export default function formatDate(t) {
    const da = new Date(+t);
    const month = (da.getMonth() + 1).toString().padStart(2, "0");
    const day = da.getDate().toString().padStart(2, "0");
    return `${da.getFullYear()}-${month}-${day}`
}