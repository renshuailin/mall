<template>
  <div class="tab">
    <div
      v-for="(item,index) in title"
      :key="index"
      :class="{active:index===currentIndex}"
      @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "tabControl",
  data() {
    return {
      currentIndex: 0
    };
  },
  props: {
    title: {
      type: Array
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabclick", index);
    }
  }
};
</script>
<style scoped>
.tab {
  display: flex;
  text-align: center;
}
.tab > div {
  flex: 1;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  background-color: #fff;
}
.active {
  color: pink;
  border-bottom: 4px solid pink;
}
</style>