<!--
 * @Description: Learning Record
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-08-30 17:50:56
 * @LastEditors: bx.m
 * @LastEditTime: 2021-09-06 10:54:48
-->
<template>
  <Layout>
    <div class="main-container" v-loading="isLoading" ref="mainContainer">
      <BlogDetail :blog="data" v-if="data" />

      <BlogComment :blogId="data.id" v-if="data" />
    </div>

    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogTOC :toc="data.toc" v-if="data" />
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail.vue";
import BlogTOC from "./components/BlogTOC.vue";
import { getOneBlog } from "@/api/getBlog.js";
import fetchData from "@/mixins/fetchData.js";
import BlogComment from "./components/BlogComment.vue";
export default {
  mixins: [fetchData(null)],
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
    BlogComment,
  },
  methods: {
    async fetchData() {
      return await getOneBlog(this.$route.params.id);
    },
    emitEventBus() {
      this.$bus.$emit("scroll", this.$refs.mainContainer);
    },
    setScrollHeight(scrollHeight) {
      this.$refs.mainContainer.scrollTop = scrollHeight;
    },
  },
  mounted() {
    this.$bus.$on("setScroll", this.setScrollHeight);
    this.$refs.mainContainer.addEventListener("scroll", this.emitEventBus);
    // window.mainContainer = this.$refs.mainContainer;
    // mainContainer.clientHeight 屏幕显示的高度
    // mainContainer.scrollHeight 所有内容的总高度，包括没有显示在屏幕上的。
    // mainContainer.scrollTop   滚动的距离
  },
  beforeDestroy() {
    this.$bus.$emit("scroll");
    this.$refs.mainContainer.removeEventListener("scroll", this.emitEventBus);
  },
};
</script>

<style scoped lang="less">
.main-container {
  position: relative;
  overflow-y: scroll;
  height: 100%;
  padding: 20px;
  scroll-behavior: smooth;
}
.right-container {
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
}
</style>