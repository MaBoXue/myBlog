<!--
 * @Description: Learning Record
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-08-22 22:57:37
 * @LastEditors: bx.m
 * @LastEditTime: 2021-08-22 23:32:17
-->
<template>
  <div class="siteAside-container">
    <Avatar
      imgSrc="https://i.loli.net/2021/08/22/MqFYP8s5UoZzyO9.jpg"
      :size="150"
    />

    <Menu />

    <Contact />
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";

export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.siteAside-container {
  width: 100%;
  height: 100%;
  padding: 20px 0;
  box-sizing: border-box;
  background: @dark;
  overflow-x: hidden;
  overflow-y: auto;

  .avatar-container {
    margin: 0 auto;
  }
}
</style>