<!--
 * @Description: 分页组件
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-08-21 21:14:11
 * @LastEditors: bx.m
 * @LastEditTime: 2021-08-23 09:12:56
-->
<template>
  <div class="pager-container" v-if="totalPageNum > 1">
    <a @click="handleClick(1)" :class="{ disabled: current === 1 }"
      >|&lt;&lt;</a
    >
    <a @click="handleClick(current - 1)" :class="{ disabled: current === 1 }"
      >&lt;&lt;</a
    >
    <a
      @click="handleClick(n)"
      v-for="(n, i) in visiblePage"
      :key="i"
      :class="{ active: current === n }"
      >{{ n }}</a
    >
    <a
      @click="handleClick(current + 1)"
      :class="{ disabled: current === totalPageNum }"
      >&gt;&gt;</a
    >
    <a
      @click="handleClick(totalPageNum)"
      :class="{ disabled: current === totalPageNum }"
      >&gt;&gt;|</a
    >
  </div>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      default: 1,
    },
    limit: {
      type: Number,
      default: 10,
    },
    total: {
      type: Number,
      default: 0,
    },
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    // 总页码
    totalPageNum() {
      return Math.ceil(this.total / this.limit);
    },
    minPage() {
      let min = this.current - this.visibleNumber / 2;
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    maxPage() {
      let max = this.minPage + this.visibleNumber - 1;
      if (max > this.totalPageNum) {
        max = this.totalPageNum;
      }
      return max;
    },
    visiblePage() {
      let arr = [];
      for (let i = this.minPage; i <= this.maxPage; i++) {
        arr.push(i);
      }
      return arr;
    },
  },
  methods: {
    handleClick(newPage) {
      // 抛出事件
      if (newPage < 1) {
        newPage = 1;
      }
      if (newPage > this.totalPageNum) {
        newPage = this.totalPageNum;
      }
      if (newPage === this.current) {
        return;
      }
      this.$emit("pageChange", newPage);
    },
  },
};
</script>

<style lang="less" scoped>
@import "../styles/var.less";
.pager-container {
  margin: 20px 0;
  display: flex;
  justify-content: center;

  a {
    padding: 0 3px;
    margin: 0 3px;
    color: @primary;

    &.disabled {
      color: @gray;
      cursor: not-allowed;
    }

    &.active {
      font-weight: bold;
      color: @dark;
    }
  }
}
</style>