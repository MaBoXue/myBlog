<!--
 * @Description: Learning Record
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-08-31 11:42:24
 * @LastEditors: bx.m
 * @LastEditTime: 2021-09-06 10:56:23
-->
<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <NavList :listData="refromTOC" @changeSelect="handleSelect" />
  </div>
</template>

<script>
import NavList from "./navList.vue";
// 导入防抖函数
import debounce from "@/utils/debounce.js";
export default {
  components: {
    NavList,
  },
  data() {
    return {
      currentAnchor: "",
    };
  },
  props: {
    toc: {
      type: Array,
    },
  },
  computed: {
    refromTOC() {
      const refrom = (toc = []) => {
        return toc.map((item) => {
          return {
            ...item,
            isSelected: this.currentAnchor === item.anchor,
            children: refrom(item.children),
          };
        });
      };

      return refrom(this.toc);
    },
    doms() {
      const domArr = [];
      const addToDomArr = (arr) => {
        for (const item of arr) {
          const domId = item.anchor;
          domArr.push(document.getElementById(domId));
          if (item.children && item.children.length) {
            addToDomArr(item.children);
          }
        }
      };
      addToDomArr(this.toc);
      return domArr;
    },
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
    changeCurrentAnchor(dom) {
      if (!dom) {
        return;
      }
      this.currentAnchor = ""; // 由于后续要重新设置，先清空之前的状态
      const dis = 200;
      for (const d of this.doms) {
        // 得到元素离视口顶部的距离
        const top = d.getBoundingClientRect().top;

        if (top > 0 && top <= dis) {
          // 在规定的范围内
          this.currentAnchor = d.id;
          return;
        } else if (top > dis) {
          // 在规定的范围下方
          return;
        } else {
          // 先假设自己是激活的，然后继续看后面
          // 元素top是负的 在规定的范围上方
          this.currentAnchor = d.id;
        }
      }
    },
  },
  mounted() {
    this.debounceChangeCurrentAnchor = debounce(this.changeCurrentAnchor, 120);
    this.$bus.$on("scroll", this.debounceChangeCurrentAnchor);
  },
  destroyed() {
    this.$bus.$off("scroll", this.debounceChangeCurrentAnchor);
  },
};
</script>

<style scoped lang="less">
.blog-toc-container {
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>
