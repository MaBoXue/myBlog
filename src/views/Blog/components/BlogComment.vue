<!--
 * @Description: Learning Record
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-09-04 12:53:58
 * @LastEditors: bx.m
 * @LastEditTime: 2021-09-06 10:34:23
-->
<template>
  <div class="blog-comment-container">
    <CommentArea
      title="评论列表"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      @submit="handleSubmit"
      :isListLoading="isLoading"
    />
  </div>
</template>

<script>
import CommentArea from "@/components/CommentArea";
import fetchData from "@/mixins/fetchData.js";
import { getComment, postComment } from "@/api/getBlog.js";

export default {
  mixins: [fetchData({ title: "评论列表", total: 0 })],
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  mounted() {
    this.$bus.$on("scroll", this.scrollToBottom);
  },
  destroyed() {
    this.$bus.$off("scroll", this.scrollToBottom);
  },
  methods: {
    async fetchData() {
      return await getComment(this.blogId, this.page, this.limit);
    },
    async fetchMore() {
      if (this.data.rows.length >= this.data.total) {
        return;
      }
      this.isLoading = true;
      this.page++;
      const resp = await getComment(this.blogId, this.page, this.limit);
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    },
    scrollToBottom(dom) {
      if (this.isLoading || !dom) {
        return;
      }
      const range = 100;
      const des = dom.scrollHeight - dom.clientHeight - dom.scrollTop;
      if (des <= range) {
        this.fetchMore();
      }
    },
    async handleSubmit(commentInfo, callback) {
      const resp = await postComment({
        blogId: this.blogId,
        nickname: commentInfo.nickname,
        content: commentInfo.content,
      });
      this.data.rows.unshift(resp);
      this.data.total++;

      callback("评论成功");
    },
  },
  components: {
    CommentArea,
  },
  props: {
    blogId: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
.blog-comment-container {
  position: relative;
}
</style>