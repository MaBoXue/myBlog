/*
 * @Description: Learning Record
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-08-23 23:00:25
 * @LastEditors: bx.m
 * @LastEditTime: 2021-09-06 09:58:59
 */

module.exports = {
    // publicPath: './',
    devServer: {
        proxy: {
            "/api": {
                target: "https://test.my-site.com"
            }
        }
    }
}