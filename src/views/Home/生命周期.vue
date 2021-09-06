<!--
 * @Description: Learning Record
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-08-23 10:29:17
 * @LastEditors: bx.m
 * @LastEditTime: 2021-08-24 11:36:09
-->

<template>
  <div class="home-container" ref="container">
    <h1>首页</h1>
    <h2 ref="title">{{ count }}</h2>
    <button @click="handleClick">+1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 1,
    };
  },
  methods: {
    handleClick() {
      this.count++;
    },
  },

  // beforeCreate() {
  //   //注入前，现在拿不到实例上的成员
  //   console.log("beforeCreate", this.count);
  // },
  // created() {
  //   //注入后，可以拿到实例上的成员
  //   console.log("create", this.count);
  // },
  // beforeMount() {
  //   console.log("beforeMount", this.$refs.container);
  // },
  // mounted() {
  //   console.log(
  //     "mounted",
  //     document.getElementsByClassName("home-container")[0],
  //     this.$refs.container
  //   );
  // },
  // beforeUpdate() {
  //   console.log("beforeUpdate", this.count, this.$refs.title.innerText);
  // },
  // updated() {
  //   console.log("updated", this.count, this.$refs.title.innerText);
  // },
  // beforeDestroy() {
  //   console.log("beforeDestory");
  // },
  // destroyed() {
  //   console.log("destoryed");
  // },
};
</script>

<style>
</style>