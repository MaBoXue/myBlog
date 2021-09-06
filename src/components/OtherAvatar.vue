
<template>
  <div>
    <img :src="url" alt="" :style="{ width: size, height: size }" />
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "头像1",
    };
  },
  props: {
    url: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: "100px",
    },
  },
};
</script>

<style>
</style>