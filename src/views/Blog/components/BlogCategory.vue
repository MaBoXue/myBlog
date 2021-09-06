<!--
 * @Description: Learning Record
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-08-27 12:39:43
 * @LastEditors: bx.m
 * @LastEditTime: 2021-08-30 17:09:29
-->
<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h2>文章分类</h2>
    <navList :listData="handleList" @changeSelect="handleChangeSelect" />
  </div>
</template>

<script>
import navList from "./navList.vue";
import { getBlogType } from "@/api/getBlog.js";
import fetchData from "@/mixins/fetchData.js";
export default {
  components: {
    navList,
  },
  computed: {
    routeInfo() {
      let categoryId = +this.$route.params.categoryId || -1;
      let page = +this.$route.query.page || 1;
      let limit = +this.$route.query.limit || 10;
      return {
        categoryId,
        page,
        limit,
      };
    },
    handleList() {
      // 文章总数
      const totalArticleCount = this.data.reduce(
        (a, b) => a + b.articleCount,
        0
      );
      //
      const result = [
        { name: "全部", id: -1, articleCount: totalArticleCount },
        ...this.data,
      ];
      return result.map((it) => {
        return {
          ...it,
          isSelected: it.id === this.routeInfo.categoryId,
        };
      });
    },
  },
  mixins: [fetchData([])],
  methods: {
    async fetchData() {
      return await getBlogType();
    },
    // 点击改变路由
    handleChangeSelect(item) {
      console.log(item);
      const query = {
        page: 1,
        limit: this.routeInfo.limit,
      };
      if (item.categoryId === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: item.id,
          },
        });
      }
    },
  },
};
</script>

<style scoped lang="less">
.blog-category-container {
  width: 300px;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;

  position: relative;
  overflow-y: auto;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>