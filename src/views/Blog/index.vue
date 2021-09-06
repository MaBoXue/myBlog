<!--
 * @Description: Learning Record
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-08-23 10:28:59
 * @LastEditors: bx.m
 * @LastEditTime: 2021-08-27 12:55:12
-->

<template>
  <Layout>
    <BlogList />

    <template #right>
      <BlogCategory />
    </template>
  </Layout>
</template>

<script>
// 导入布局组件
import Layout from "@/components/Layout";
// 导入 文章列表
import BlogList from "./components/BlogList.vue";
// 导入文章分类
import BlogCategory from "./components/BlogCategory.vue";
export default {
  components: {
    Layout,
    BlogList,
    BlogCategory,
  },
};
</script>

<style>
</style>