<!--
 * @Description: Learning Record
 * @Version: 1.0
 * @Author: bx.m
 * @Date: 2021-09-02 15:22:43
 * @LastEditors: bx.m
 * @LastEditTime: 2021-09-04 14:37:41
-->

<template>
  <form
    @submit.prevent="handleSubmit"
    class="data-form-container"
    ref="form"
    id="data-form-container"
  >
    <!-- 用户名 -->
    <div class="form-item">
      <div class="input-area">
        <input
          type="text"
          placeholder="用户昵称"
          maxlength="10"
          v-model="formData.nickname"
        />
        <span class="tip">{{ formData.nickname.length }}/10</span>
      </div>

      <div class="error">{{ error.nickname }}</div>
    </div>
    <!-- 留言 -->
    <div class="form-item">
      <div class="input-area">
        <textarea
          placeholder="输入内容"
          maxlength="300"
          v-model="formData.content"
        />
        <span class="tip">{{ formData.nickname.length }}/300</span>
      </div>

      <div class="error">{{ error.content }}</div>
    </div>

    <!-- 按钮 -->
    <div class="form-item">
      <div class="button-area">
        <button :disabled="isSubmiting">
          {{ isSubmiting ? "提交中..." : "提交" }}
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        nickname: "",
        content: "",
      },
      error: {
        nickname: "",
        content: "",
      },
      isSubmiting: false,
    };
  },
  methods: {
    handleSubmit() {
      this.error.nickname = this.formData.nickname ? "" : "请填写昵称";
      this.error.content = this.formData.content ? "" : "请填写内容";

      if (this.error.nickname || this.error.content) {
        return;
      }
      this.isSubmiting = true;

      this.$emit(
        "submit",
        {
          nickname: this.formData.nickname,
          content: this.formData.content,
        },
        (successMsg) => {
          this.$showMessage({
            message: successMsg,
            type: "success",
            duration: 1000,
            container: this.$refs.form,
          });

          this.isSubmiting = false;
          this.formData.nickname = "";
          this.formData.content = "";
        }
      );
    },
  },
};
</script>
<style lang="less" scoped>
@import "~@/styles/var.less";
.data-form-container {
  margin-bottom: 20px;
  overflow: hidden;
}
.form-item {
  margin-bottom: 8px;
}
.input-area {
  width: 50%;
  position: relative;
}
.text-area {
  position: relative;
}
.tip {
  position: absolute;
  right: 5px;
  bottom: 5px;
  color: #b4b8bc;
  font-size: 12px;
}
input,
textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  border: 1px dashed @gray;
  outline: none;
  color: @words;
  font-size: 14px;
  border-radius: 4px;
  &:focus {
    border-color: @primary;
  }
}
input {
  padding: 0 15px;
  height: 40px;
}
textarea {
  resize: none;
  padding: 8px 15px;
  height: 120px;
}
.error {
  margin-top: 6px;
  color: @danger;
  font-size: 14px;
  height: 20px;
  line-height: 20px;
}
button {
  position: relative;
  cursor: pointer;
  border: none;
  outline: none;
  width: 100px;
  height: 34px;
  color: #fff;
  border-radius: 4px;
  background: @primary;
  &:hover {
    background: darken(@primary, 10%);
  }
  &:disabled {
    background: lighten(@primary, 20%);
    cursor: not-allowed;
  }
}
</style>