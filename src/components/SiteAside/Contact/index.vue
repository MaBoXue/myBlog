<!--
 * @Description: Learning Record
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-08-22 16:18:47
 * @LastEditors: bx.m
 * @LastEditTime: 2021-08-23 15:43:02
-->
<template>
  <ul class="contact-container">
    <!-- github -->
    <li>
      <a href="https://username-bx.github.io/ZhaoYue/index.html">
        <div class="icon">
          <Icon type="github" />
        </div>
        <span>username-bx</span>
      </a>
    </li>

    <!-- mail -->
    <li>
      <a href="mailto:15297605350@163.com">
        <div class="icon">
          <Icon type="mail" />
        </div>
        <span>15297605350@163.com</span>
      </a>
    </li>

    <!-- qq -->
    <li>
      <a
        href="tencent://message/?Menu=yes&uin=767478014&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"
      >
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span @mouseenter="showImg('qq')" @mouseleave="hiddenImg('qq')"
          >767478014</span
        >
      </a>

      <div class="pop" :style="{ transform: `scaleY(${changeQQScale})` }">
        <img src="https://i.loli.net/2021/08/22/lNQYF7mWVOA63kd.jpg" />
      </div>
    </li>

    <!-- weixin -->
    <li>
      <a>
        <div class="icon weixin">
          <Icon type="weixin" />
        </div>
        <span @mouseenter="showImg" @mouseleave="hiddenImg">15297605350</span>
      </a>

      <div class="pop" :style="{ transform: `scaleY(${changeWeiScale})` }">
        <img src="https://i.loli.net/2021/08/22/GgQcasWkE7KZ3I5.jpg" alt="" />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  data() {
    return {
      changeQQScale: 0,
      changeWeiScale: 0,
    };
  },
  components: {
    Icon,
  },
  methods: {
    showImg(type) {
      if (type === "qq") {
        this.changeQQScale = 1;
      } else {
        this.changeWeiScale = 1;
      }
    },
    hiddenImg(type) {
      if (type === "qq") {
        this.changeQQScale = 0;
      } else {
        this.changeWeiScale = 0;
      }
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/global.less";
@import "~@/styles/var.less";

.contact-container {
  padding: 20px;
  color: @gray;
  li {
    height: 30px;
    line-height: 30px;
    margin: 14px 0;
    position: relative;

    // &:hover {
    //   .pop {
    //     transform: scaleY(1);
    //   }
    // }
  }
  a {
    display: flex;
    align-items: center;
    color: lighten(@words, 10%);

    .icon {
      font-size: 26px;
      width: 36px;

      &.weixin {
        font-size: 32px;
        text-indent: -2px;
      }
    }
  }

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }

  .pop {
    position: absolute;
    left: 0;
    bottom: 35px;

    padding: 10px 15px;
    background-color: #fff;
    border-radius: 5px;

    // transform: scaleY(0);
    transform-origin: center bottom;
    transition: 0.5s;

    &::after {
      content: "";
      width: 8px;
      height: 8px;
      position: absolute;
      left: 50%;
      bottom: -4px;
      background-color: #fff;
      transform: translateX(-50%) rotate(45deg);
    }
  }
}
</style>