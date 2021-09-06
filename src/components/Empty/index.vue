<!--
 * @Description: Learning Record
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-08-22 09:52:22
 * @LastEditors: bx.m
 * @LastEditTime: 2021-08-22 20:19:09
-->
<template>
  <div class="empty-container">
    <Icon type="empty" class="empty-icon" />
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  props: {
    text: {
      type: String,
      default: "无数据",
    },
  },
  components: {
    Icon,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.empty-icon {
  font-size: 100px;
}
.empty-container {
  .self-center();
}
</style>