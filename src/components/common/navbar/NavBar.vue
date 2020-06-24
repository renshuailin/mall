<template>
  <!-- 设置插槽 -->
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavBar"
};
</script>
<style scoped>
/* 设置导航条样式 */
.nav-bar {
  display: flex;
  line-height: 44px;
  height: 44px;
  text-align: center;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.1);
}
.left,
.right {
  width: 60px;
  /* background-color: aquamarine; */
}
.center {
  flex: 1;
  /* background-color: skyblue; */
}
</style>