<!--
 * @Description: Learning Record
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-08-27 12:39:43
 * @LastEditors: bx.m
 * @LastEditTime: 2021-09-06 11:10:56
-->
<template>
  <div class="blog-list-container" ref="container" v-loading="isLoading">
    <ul>
      <li v-for="(item, i) in data.rows" :key="i">
        <!-- 图片 -->
        <div class="thumb" v-if="item.thumb">
          <RouterLink
            :to="{
              name: 'DetailBlog',
              params: {
                id: item.id,
              },
            }"
          >
            <img :src="item.thumb" :alt="item.title" :title="item.title" />
          </RouterLink>
        </div>
        <!-- 主体 -->
        <div class="main">
          <!-- 大标题 -->
          <RouterLink
            :to="{
              name: 'DetailBlog',
              params: {
                id: item.id,
              },
            }"
          >
            <h2>{{ item.title }}</h2>
          </RouterLink>
          <!-- 小标题 -->
          <div class="aside">
            <span>日期：{{ formatDate(item.createDate) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论：{{ item.commentNumber }}</span>
            <RouterLink
              :to="{
                name: 'CategoryBlog',
                params: {
                  categoryId: item.category.id,
                },
              }"
              >{{ item.category.name }}</RouterLink
            >
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <!-- 分页组件 -->
    <Pager
      v-if="data.total"
      :total="data.total"
      :current="routeInfo.page"
      :limit="routeInfo.limit"
      :visible="10"
      @pageChange="handlePageChange"
    />
  </div>
</template>

<script>
import Pager from "@/components/Pager";
import fetchData from "@/mixins/fetchData.js";
import { getBlog } from "@/api/getBlog.js";
import formatDate from "@/utils/formatDate.js";

export default {
  mixins: [fetchData({})], // 混入loading data
  components: {
    Pager,
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
  },
  methods: {
    formatDate,
    async fetchData() {
      return await getBlog();
    },
    handlePageChange(newPage) {
      // 点击分页按钮了 要改变路由
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      };
      if (this.routeInfo.categoryId === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: this.routeInfo.categoryId,
          },
        });
      }
    },
    handleScroll() {
      this.$bus.$emit("scroll", this.$refs.container);
    },
    setScroll(scrollHeight) {
      this.$refs.container.scrollTop = scrollHeight;
    },
  },
  mounted() {
    this.$refs.container.addEventListener("scroll", this.handleScroll);
    this.$bus.$on("setScroll", this.setScroll);
  },
  beforeDestroy() {
    this.$bus.$emit("scroll");
    this.$refs.container.removeEventListener("scroll", this.handleScroll);
    this.$bus.$off("setScroll", this.setScroll);
  },
  watch: {
    async $route() {
      this.isLoading = true;
      this.$refs.container.scrollTop = 0;
      this.data = await this.fetchData();
      this.isLoading = false;
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>