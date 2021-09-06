<!--
 * @Description: Learning Record
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-08-22 21:39:59
 * @LastEditors: bx.m
 * @LastEditTime: 2021-08-22 21:45:07
-->

<template>
  <div class="test-container">
    <Menu />
  </div>
</template>

<script>
import Menu from "./index.vue";
export default {
  components: {
    Menu,
  },
};
</script>

<style>
.test-container {
  width: 400px;
  height: 400px;
  padding-top: 150px;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>