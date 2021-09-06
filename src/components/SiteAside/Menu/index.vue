<!--
 * @Description: Learning Record
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-08-22 21:39:51
 * @LastEditors: bx.m
 * @LastEditTime: 2021-08-23 16:41:56
-->

<template>
  <nav class="menu-container">
    <RouterLink
      v-for="item in items"
      :key="item.link"
      :to="item.link"
      active-class="selected"
      :exact="item.exact"
      exact-active-class=""
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>

      <span>{{ item.title }}</span>
    </RouterLink>
  </nav>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          link: "/",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          link: "/blog",
          title: "文章",
          icon: "blog",
          exact: false,
        },
        {
          link: "/about",
          title: "关于我",
          icon: "about",
          exact: true,
        },
        {
          link: "/project",
          title: "项目",
          icon: "code",
          exact: true,
        },
        {
          link: "/message",
          title: "留言板",
          icon: "chat",
          exact: true,
        },
      ],
    };
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/global.less";
@import "~@/styles/var.less";

.menu-container {
  margin: 24px 0;

  a {
    padding: 0 50px;
    display: flex;
    align-items: center;
    height: 45px;
    color: @lightWords;

    .icon {
      width: 24px;
      font-size: 16px;
    }

    &:hover {
      color: #fff;
    }

    &.selected {
      background: darken(@dark, 20%);
    }
  }
}
</style>