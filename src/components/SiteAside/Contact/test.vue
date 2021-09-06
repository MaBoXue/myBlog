<!--
 * @Description: Learning Record
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-08-22 16:18:52
 * @LastEditors: bx.m
 * @LastEditTime: 2021-08-22 21:21:38
-->

<template>
  <div class="test-container">
    <Contact />
  </div>
</template>

<script>
import Contact from "./index.vue";
export default {
  components: {
    Contact,
  },
};
</script>

<style>
.test-container {
  padding-top: 200px;
  width: 400px;
  height: 600px;
  background-color: rgba(0, 0, 0, 0.5);

  position: relative;
  left: 0;
  top: 0;
}
</style>