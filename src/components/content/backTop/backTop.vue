<template>
  <div class="backtop">
    <img src="~assets/img/common/top.png" alt="" />
  </div>
</template>
<script>
export default {
  name: "backTop",
};
</script>
<style scoped>
.backtop {
  position: fixed;
  right: 10px;
  bottom: 60px;
}
.backtop img {
  display: block;
  width: 50px;
  height: 50px;
}
</style>
