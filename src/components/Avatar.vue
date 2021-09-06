<!--
 * @Description: 头像组件
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-08-21 12:41:21
 * @LastEditors: bx.m
 * @LastEditTime: 2021-08-22 23:27:41
-->
<template>
  <img
    class="avatar-img avatar-container"
    :src="imgSrc"
    alt=""
    :style="{ width: size + 'px', height: size + 'px' }"
  />
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    // width: {
    //   type: Number,
    //   default: 100,
    // },
    // height: {
    //   type: Number,
    //   default: 100,
    // },
    size: {
      type: Number,
      default: 100,
    },
  },
};
</script>

<style scoped>
.avatar-img {
  border-radius: 50%;
  display: block;
}
</style>