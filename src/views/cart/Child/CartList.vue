<template>
  <div class="cartlist">
    <app-Scroll class="content" ref="scroll">
      <app-CartItem v-for="(item,index) in cartList" :key="index" :itemInfo="item" />
    </app-Scroll>
  </div>
</template>
<script>
//引入better-scroll
import Scroll from "components/common/scroll/Scroll";
//引入商品详情
import CartItem from "./CartItem";
import { mapGetters } from "vuex";
export default {
  name: "CartList",
  computed: {
    ...mapGetters(["cartList"])
  },
  components: {
    "app-Scroll": Scroll,
    "app-CartItem": CartItem
  },
  activated() {
    this.$refs.scroll.scroll.refresh();
  }
};
</script>
<style scoped>
.cartlist {
  height: calc(100% - 44px - 49px - 50px);
}
.content {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>