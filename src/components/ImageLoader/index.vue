<!--
 * @Description: Learning Record
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-08-22 10:35:55
 * @LastEditors: bx.m
 * @LastEditTime: 2021-08-22 20:23:49
-->

<template>
  <div class="imageLoader-container">
    <img class="placeholder" :src="placeholder" alt="" v-if="!everythingDone" />
    <img
      @load="handleLoad"
      :src="src"
      alt=""
      :style="{ opacity: isAllLoaded, transition: `${duration}ms` }"
    />
  </div>
</template>

<script>
// 计算属性里不能有时间函数 setInterval settimeout 都不能使用
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      isLoaded: false,
      everythingDone: false,
    };
  },
  computed: {
    isAllLoaded() {
      return this.isLoaded ? 1 : 0;
    },
  },
  methods: {
    handleLoad() {
      console.log("图片loaded");
      this.isLoaded = true;
      setTimeout(() => {
        this.everythingDone = true;
        this.$emit("load");
      }, this.duration);
    },
  },
};
</script>

<style scoped lang="less">
// 导入 css样式

@import "~@/styles/mixin.less";
.imageLoader-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    .self-fill();
  }

  .placeholder {
    filter: blur(1vw);
  }
}
</style>
