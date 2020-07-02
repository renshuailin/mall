<template>
  <div class="checkButton" :class="{active:isActive}">
    <img src="~assets/img/cart/tick.svg" />
  </div>
</template>
<script>
export default {
  name: "CheckBuuton",
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  methods: {}
};
</script>
<style  scoped>
.checkButton {
  border: 1px solid #333;
}
.active {
  border: 1px solid pink;
  background-color: pink;
}
</style>