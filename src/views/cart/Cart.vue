<template>
  <div class="cart">
    <!-- //导航 -->
    <app-NavBar class="navbar">
      <h3 slot="center">购物车({{cartLength}})</h3>
    </app-NavBar>
    <!-- //商品列表 -->
    <app-CartList />
    <!-- 商品总价 -->
    <app-CartTotal class="total" />
  </div>
</template>

<script>
//引入导航
import NavBar from "../../components/common/navbar/NavBar";

//引入商品列表
import CartList from "./Child/CartList";

//引入商品总价
import CartTotal from "./Child/CartTotal";
import { mapGetters } from "vuex";
export default {
  name: "Cart",
  components: {
    "app-NavBar": NavBar,
    "app-CartList": CartList,
    "app-CartTotal": CartTotal
  },
  computed: {
    ...mapGetters(["cartList"]),
    cartLength() {
      return this.cartList.filter(item => item.checked).length;
    }
  }
};
</script>

<style scoped>
.cart {
  height: 100vh;
}
.navbar {
  background-color: pink;
  /* font-weight: bold; */
  color: #fff;
}
.total {
  box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.1);
}
</style>
