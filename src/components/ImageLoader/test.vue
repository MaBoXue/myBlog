<!--
 * @Description: Learning Record
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-08-22 10:36:07
 * @LastEditors: bx.m
 * @LastEditTime: 2021-08-22 20:22:49
-->

<template>
  <div class="test-container">
    <ImageLoader
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      :duration="5000"
      @load="loadedOfSon"
    />
  </div>
</template>

<script>
import ImageLoader from "./index.vue";
export default {
  components: {
    ImageLoader,
  },
  methods: {
    loadedOfSon() {
      console.log("子组件图片加载完成");
    },
  },
};
</script>

<style>
.test-container {
  width: 1000px;
  height: 600px;
}
</style>