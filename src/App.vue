<!--
 * @Description: Learning Record
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-08-21 12:41:21
 * @LastEditors: bx.m
 * @LastEditTime: 2021-09-06 10:26:17
-->
<template>
  <div class="app-container">
    <Layout>
      <template v-slot:left>
        <div class="app-left">
          <SiteAside />
        </div>
      </template>

      <template #default>
        <RouterView />
      </template>
    </Layout>
    <ToTop />
  </div>
</template>

<script>
import "@/styles/global.less";
import Layout from "@/components/Layout";
import SiteAside from "@/components/SiteAside";
import ToTop from "@/components/ToTop";

export default {
  name: "App",
  components: {
    Layout,
    SiteAside,
    ToTop,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
.app-container {
  width: 100%;
  height: 100vh;

  .app-left {
    width: 260px;
    height: 100%;
  }
}
</style>
