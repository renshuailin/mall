<template>
  <div class="toast" v-show="isShow">
    <div>{{msg}}</div>
  </div>
</template>
<script>
export default {
  props: {
    msg: {
      type: String
    },
    isShow: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style  scoped>
.toast {
  position: fixed;
  /* width: 200px; */
  /* height: 200px; */
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  transform: translateX(-50%);
  padding: 10px 20px;
  border-radius: 5px;
  top: 50%;
  left: 50%;
}
</style>