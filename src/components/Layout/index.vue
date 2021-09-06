<!--
 * @Description: Learning Record
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-08-23 09:46:26
 * @LastEditors: bx.m
 * @LastEditTime: 2021-08-23 09:50:46
-->

<template>
  <div class="layout-container">
    <div class="layout-left">
      <slot name="left"></slot>
    </div>
    <div class="layout-main">
      <slot></slot>
    </div>
    <div class="layout-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.layout-container {
  width: 100%;
  height: 100%;
  display: flex;

  .layout-left,
  .layout-right {
    flex: 0 0 auto;
  }
  .layout-main {
    flex: 1 1 auto;
  }
}
</style>