/*
 * @Description: Learning Record
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-08-25 23:09:30
 * @LastEditors: bx.m
 * @LastEditTime: 2021-08-25 23:16:39
 */



export default function (fetchData = null) {


    return {
        data() {
            return {
                isLoading: true,
                data: fetchData,   // 需要提供默认值
            }
        },
        async created() {
            this.data = await this.fetchData();   // methods中提供一个fetchData方法。
            this.isLoading = false;
        },

    }
}