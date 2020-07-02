<template>
  <!-- 封装better-scroll -->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "BScroll",
  data() {
    return {
      scroll: null
    };
  },
  props: {
    //区分实时监听
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    //实例化better-scroll
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true
    });
    // console.log(this.scroll);

    //监听滚动事件
    this.scroll.on("scroll", position => {
      // console.log(position);
      //发出监听事件
      this.$emit("scroll", position);
    });
    //上拉加载更多
    this.scroll.on("pullingUp", () => {
      // console.log("123123");
      this.$emit("pullingUp");
    });
    // this.scroll.scrollTo(0, 0);
  },
  methods: {
    //封装scrollTo方法 参数由home提供
    scrollTo(x, y, time = 1000) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    currentY() {
      return this.scroll.y ? this.scroll.y : 0;
    }
  }
};
</script>
<style scoped></style>
