<!--
 * @Description: Learning Record
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-08-23 10:29:17
 * @LastEditors: bx.m
 * @LastEditTime: 2021-08-25 23:15:09
-->

<template>
  <div class="home-container" v-loading="isLoading">
    <ul
      @wheel="handleWheel"
      @transitionend="handletransitionend"
      class="carousel-container"
      :style="{ top: marginTop + 'px' }"
      ref="carousel"
    >
      <li v-for="item in data" :key="item.id">
        <!-- <span>{{ item.title }}</span>
        <p>{{ item.description }}</p>
        <img :src="item.midImg" alt="" /> -->

        <CarouselItem :carousel="item" />
      </li>
    </ul>

    <!-- 上下箭头 -->
    <div
      class="icon icon-up"
      v-show="index >= 1"
      @click="handleClick(index - 1)"
    >
      <Icon type="arrowUp" />
    </div>
    <div
      class="icon icon-down"
      v-show="index < data.length - 1"
      @click="handleClick(index + 1)"
    >
      <Icon type="arrowDown" />
    </div>

    <!-- 指示器 小圆点 -->
    <ul class="indicator">
      <li
        v-for="(item, i) in data"
        :key="item.id"
        :class="{ active: index === i }"
        @click="handleClick(i)"
      ></li>
    </ul>

    <!-- <Loading v-if="isLoading" /> -->
  </div>
</template>

<script>
// 请求数据方法
import getBanner from "@/api/getBanner.js";
// 子组件 轮播图
import CarouselItem from "./Carouselitem.vue";
// Icon 组件
import Icon from "@/components/Icon";
// loading组件
// import Loading from "@/components/Loading";

// 导入混入配置
import fetchData from "@/mixins/fetchData.js";

export default {
  mixins: [fetchData([])],
  name: "home",
  data() {
    return {
      index: 0,
      carouselHeight: 0,
      changing: false,
    };
  },
  components: {
    CarouselItem,
    Icon,
    // Loading,
  },
  methods: {
    //给混入配置提供方法
    async fetchData() {
      return await getBanner();
    },
    handleClick(i) {
      this.index = i;
    },
    changeSize() {
      const h = this.$refs.carousel.clientHeight;
      this.carouselHeight = h;
    },
    handleWheel(e) {
      // e.deltaY  100  - 100
      if (this.changing) {
        // 正在切换中....
        return;
      }
      if (e.deltaY > 0 && this.index < this.data.length - 1) {
        this.index++;
        this.changing = true;
      } else if (e.deltaY < 0 && this.index > 0) {
        this.index--;
        this.changing = true;
      }
    },
    handletransitionend() {
      this.changing = false;
      // console.log("切换完成");
    },
  },
  mounted() {
    const h = this.$refs.carousel.clientHeight;
    this.carouselHeight = h;

    window.addEventListener("resize", this.changeSize);
  },
  computed: {
    marginTop() {
      return -this.index * this.carouselHeight;
    },
  },
  destroyed() {
    window.removeEventListener("resize", this.changeSize);
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.home-container {
  position: relative;

  width: 100%;
  height: 100%;

  .icon {
    position: absolute;

    left: 50%;
    transform: translateX(-50%);
    transition: 0.5s;

    font-size: 55px;
    color: @gray;
    cursor: pointer;

    &.icon-up {
      top: 25px;
      animation: icon-up 1.5s infinite;
    }
    &.icon-down {
      bottom: 25px;
      animation: icon-down 1.5s infinite cubic-bezier(0.03, 0.49, 0.41, 1.15);
    }
  }
}
.carousel-container {
  width: 100%;
  height: 100%;
  transition: 0.7s;
  position: absolute;

  li {
    width: 100%;
    height: 100%;
  }
}
.indicator {
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);

  li {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: cadetblue;
    padding: 1px;
    margin: 10px;
    transition: 0.5s;
    cursor: pointer;

    &.active {
      transform: scale(1.5);
    }
    &:hover {
      transform: scale(1.5);
    }
  }
}

@keyframes icon-up {
  0% {
    top: 55px;
  }
  50% {
    top: 5px;
  }
  100% {
    top: 55px;
  }
}

@keyframes icon-down {
  0% {
    bottom: 55px;
  }
  50% {
    bottom: 5px;
  }
  100% {
    bottom: 55px;
  }
}
</style>