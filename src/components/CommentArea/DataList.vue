<!--
 * @Description: Learning Record
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-09-02 15:22:51
 * @LastEditors: bx.m
 * @LastEditTime: 2021-09-04 13:13:59
-->
<template>
  <div class="data-list-container">
    <ul>
      <li v-for="item in data" :key="item.id">
        <Avatar :imgSrc="item.avatar" :size="38" />
        <div class="data">
          <div class="nickname">{{ item.nickname }}</div>
          <div class="content">{{ item.content }}</div>
          <div class="time">{{ formatDate(item.createDate, true) }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar.vue";
import formatDate from "@/utils/formatDate.js";
export default {
  methods: {
    formatDate,
  },
  components: {
    Avatar,
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.data-list-container {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  display: flex;
  border-bottom: 1px solid lighten(@gray, 20%);
  padding: 15px 0;
}
.avatar-container {
  margin-right: 15px;
}
.nickname {
  color: darken(@success, 10%);
  margin-bottom: 10px;
}
.content {
  font-size: 14px;
}
.data {
  flex: 1 1 auto;
  position: relative;
}
.time {
  position: absolute;
  right: 0;
  top: 5px;
  font-size: 12px;
  color: @gray;
}
</style>