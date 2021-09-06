/*
 * @Description: Learning Record
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-09-04 22:40:46
 * @LastEditors: bx.m
 * @LastEditTime: 2021-09-04 22:42:36
 */

export default function debounce(fn, duration = 60) {
    let timer = null;
    return (...arg) => {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...arg);
        }, duration);

    }
}