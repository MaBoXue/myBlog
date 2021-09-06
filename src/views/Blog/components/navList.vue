<!--
 * @Description: Learning Record
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-08-26 14:02:42
 * @LastEditors: bx.m
 * @LastEditTime: 2021-08-31 19:25:16
-->
<template>
  <ul class="nav-list-container">
    <li v-for="(item, i) in listData" :key="i">
      <span
        :class="{ selected: item.isSelected }"
        @click.stop="handleClick(item)"
        >{{ item.name }}</span
      >

      <span v-if="item.articleCount"> {{ item.articleCount }}篇 </span>
      <NavList :listData="item.children" @changeSelect="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "NavList",
  props: {
    listData: {
      type: Array,
    },
  },
  methods: {
    handleClick(title) {
      this.$emit("changeSelect", title);
    },
  },
};
</script>

<style scoped lang="less">
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.nav-list-container {
  li {
    color: #abc;
    font-size: 14px;
    min-height: 40px;
    line-height: 40px;
    font-weight: 700;
    cursor: pointer;
  }
  .selected {
    color: #eee111;
  }
  ul {
    margin-left: 1em;
  }
}
</style>