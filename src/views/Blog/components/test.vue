<!--
 * @Description: Learning Record
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-08-26 14:10:03
 * @LastEditors: bx.m
 * @LastEditTime: 2021-08-26 14:38:21
-->
<template>
  <div class="test-container">
    <NavList :listData="data" @changeSelect="handleChangeSelect" />
  </div>
</template>

<script>
import NavList from "./navList.vue";

export default {
  data() {
    return {
      data: [
        { name: "a", isSelected: false },
        {
          name: "b",
          isSelected: true,
          children: [
            { name: "b-1", isSelected: false },
            { name: "b-2", isSelected: false },
            { name: "b-3", isSelected: false },
            { name: "b-4", isSelected: true },
            { name: "b-5", isSelected: false },
            { name: "b-6", isSelected: false },
          ],
        },
        { name: "c", isSelected: false },
        { name: "d", isSelected: false },
        { name: "e", isSelected: false },
      ],
    };
  },
  components: {
    NavList,
  },
  methods: {
    handleChangeSelect(data) {
      console.log(data);
    },
  },
};
</script>

<style>
</style>