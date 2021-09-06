<!--
 * @Description: Learning Record
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-08-22 22:57:45
 * @LastEditors: bx.m
 * @LastEditTime: 2021-08-22 23:37:02
-->
<template>
  <div class="test-container">
    <SiteAside />
  </div>
</template>

<script>
import SiteAside from "./index.vue";
export default {
  components: {
    SiteAside,
  },
};
</script>

<style>
.test-container {
  width: 260px;
  height: 800px;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>