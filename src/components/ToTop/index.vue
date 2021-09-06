<!--
 * @Description: totop 组件
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-09-06 10:24:09
 * @LastEditors: bx.m
 * @LastEditTime: 2021-09-06 10:53:10
-->
<template>
  <div @click="handleClick" v-show="isShow" class="to-top-container">Top</div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    show(dom) {
      if (!dom) {
        this.isShow = false;
        return;
      }
      const range = 500;
      this.isShow = dom.scrollTop > range;
    },
    handleClick() {
      this.$bus.$emit("setScroll", 0);
    },
  },
  created() {
    this.$bus.$on("scroll", this.show);
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.to-top-container {
  background: @primary;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: fixed;
  z-index: 99;
  right: 50px;
  bottom: 50px;
  cursor: pointer;
  line-height: 50px;
  color: #fff;
  text-align: center;
}
</style>