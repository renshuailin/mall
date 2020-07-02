<template>
  <div class="total">
    <div class="check">
      <div class="checkAll">
        <app-CheckButtom class="checkBtn" />
        <span>全选</span>
      </div>
      <div class="total">合计:￥{{totalPrice}}</div>
      <div class="settlement">结算({{totalLength}})</div>
    </div>
  </div>
</template>
<script>
import CheckButtom from "components/content/checkButtom/CheckButtom";
import { mapGetters } from "vuex";
export default {
  name: "CartTotal",
  components: {
    "app-CheckButtom": CheckButtom
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      //过滤
      return this.cartList
        .filter(item => item.checked)
        .reduce((value, item) => value + item.count * item.price, 0)
        .toFixed(2);
    },
    totalLength() {
      return this.cartList.filter(item => item.checked).length;
    }
  }
};
</script>
<style scoped>
.total {
  height: 50px;
  position: relative;

  background-color: #fff;
  display: flex;
  /* padding: 0 30px; */
  align-items: center;

  line-height: 50px;
  text-align: center;
  position: relative;
}
.check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.checkAll {
  width: 90px;
  display: flex;
  align-items: center;
  margin-left: 30px;
}
.checkBtn {
  margin-right: 10px;
  width: 20px;
  height: 20px;
  padding-left: 1px;
  padding-top: 1px;
  display: flex;
}
.total {
  padding: 0 20px;
  /* */
  /* flex: 1; */
  /* width: 200px; */
}
.settlement {
  width: 150px;
  height: 50px;
  background-color: orange;
  position: absolute;
  right: 0;
  font-size: 20px;
}
</style>