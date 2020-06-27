<template>
  <div class="good">
    <!-- 把数据传到goodlist组件    -->
    <good-item v-for="(item,index) in goods" :key="index" :gooditem="item" />
    <!-- <div>{{goods}}</div> -->
  </div>
</template>
<script>
import gooditem from "./gooditem";
export default {
  name: "goodlist",
  props: {
    goods: {
      type: Array
    }
  },
  components: {
    "good-item": gooditem
  }
};
</script>
<style scoped>
.good {
  display: flex;
  flex-wrap: wrap;
  padding: 0 5px;
  justify-content: space-around;
}
</style>