<!--
 * @Description: Learning Record
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-08-24 11:37:43
 * @LastEditors: bx.m
 * @LastEditTime: 2021-08-24 23:59:37
-->

<template>
  <div
    class="carousel-item-container"
    ref="container"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div class="carousel-img" ref="carousel" :style="carouselPos">
      <ImageLoader
        @load="showWords"
        :src="carousel.bigImg"
        :placeholder="carousel.midImg"
      />
    </div>
    <div class="title" ref="title">{{ carousel.title }}</div>
    <div class="desc" ref="desc">{{ carousel.description }}</div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";

export default {
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
      containeSize: null,
      carouselSize: null,
      mousePos: null,
    };
  },
  props: ["carousel"],
  computed: {
    carouselPos() {
      let width = 0;
      let height = 0;
      if (this.containeSize && this.mousePos) {
        const disWidth = this.containeSize.width - this.carouselSize.width;
        const disHeight = this.containeSize.height - this.carouselSize.height;
        width = (this.mousePos.x / this.containeSize.width) * disWidth;
        height = (this.mousePos.y / this.containeSize.height) * disHeight;
      }
      // const disWidth = this.containeSize.width - this.carouselSize.width;
      // const disHeight = this.containeSize.height - this.carouselSize.height;
      // const width = (this.mousePos.x / this.containeSize.width) * width;
      // const height = (this.mousePos.y / this.containeSize.height) * height;
      // console.log(width, height);
      return {
        transform: `translate(${width}px, ${height}px)`,
      };
    },
  },
  components: {
    ImageLoader,
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;

    // console.log(this.titleWidth, this.descWidth);

    // this.containeSize.width = this.$refs.container.clientWidth;
    // this.containeSize.height = this.$refs.container.clientHeight;
    this.getSize();
    // 默认鼠标在图片中间
    this.mousePos = {
      x: this.containeSize.width / 2,
      y: this.containeSize.height,
    };
    // 窗口改变 重新获取容器width height
    window.addEventListener("resize", this.getSize);
  },
  destroyed() {
    console.log("remove");
    window.removeEventListener("resize", this.getSize);
  },
  methods: {
    showWords() {
      this.$refs.title.style.width = 0;
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.transition = "2s";
      this.$refs.title.clientWidth;

      this.$refs.title.style.width = this.titleWidth + "px";

      this.$refs.desc.style.width = 0;
      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.style.transition = "2.2s 2s";
      this.$refs.desc.clientWidth;

      this.$refs.desc.style.width = this.descWidth + "px";
    },
    getSize() {
      // 容器width height
      this.containeSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
      };
      //  图片 width height
      this.carouselSize = {
        width: this.$refs.carousel.clientWidth,
        height: this.$refs.carousel.clientHeight,
      };

      // console.log(this.containeSize, this.carouselSize);
    },
    handleMouseMove(e) {
      const rect = this.$refs.container.getBoundingClientRect();
      this.mousePos = {
        x: e.x - rect.left,
        y: e.y - rect.top,
      };
    },
    handleMouseLeave() {
      this.mousePos = {
        x: this.containeSize.width / 2,
        y: this.containeSize.height,
      };
    },
  },
};
</script>

<style lang="less" scoped>
.carousel-item-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  .carousel-img {
    width: 110%;
    height: 110%;
    position: absolute;
    transition: 0.3s linear;
  }

  .title,
  .desc {
    position: absolute;
    left: 30px;
    z-index: 5;
    letter-spacing: 2px;
    color: #fff;
    text-shadow: -1px 0 0 rgba(0, 0, 0, 0.5), 1px 0 0 rgba(0, 0, 0, 0.5),
      0 -1px 0 rgba(0, 0, 0, 0.5), 0 1px 0 rgba(0, 0, 0, 0.5);

    opacity: 0;
    overflow: hidden;
    white-space: nowrap;
  }

  .title {
    font-size: 2em;
    top: calc(50% - 30px);
  }
  .desc {
    font-size: 1.2em;
    top: calc(50% + 30px);
  }
}
</style>