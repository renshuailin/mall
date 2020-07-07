<template>
  <div id="profile">
    <app-NavBar class="nav-bar">
      <h3 slot="center">我的信息</h3>
    </app-NavBar>
    <app-UserInfo />
    <app-AccountInfo />
    <app-NormalListViews :list-data="orderList" />
    <app-NormalListViews :list-data="serviceList" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import UserInfo from "./Child/UserInfo";
import AccountInfo from "./Child/AccountInfo";
import NormalListView from "./Child/NormalListView";
export default {
  name: "Profile",
  components: {
    "app-NavBar": NavBar,
    "app-UserInfo": UserInfo,
    "app-AccountInfo": AccountInfo,
    "app-NormalListViews": NormalListView
  },
  data() {
    return {
      orderList: [
        { icon: "message.svg", info: "我的消息" },
        { icon: "pointer.svg", info: "积分商城" },
        { icon: "vip.svg", info: "会员卡" }
      ],
      serviceList: [
        { icon: "cart.svg", info: "我的购物车" },
        { icon: "shopping.svg", info: "下载购物APP" }
      ]
    };
  }
};
</script>

<style scoped>
#profile {
  background-color: #f2f2f2;
}

.nav-bar {
  background-color: pink;
  color: #fff;
}
</style>
