<template>
  <app-navbar>
    <div slot="left" @click="back">
      <img src="../../../assets/img/common/back.svg" alt />
    </div>
    <div slot="center" class="title">
      <div
        v-for="(item,index) in title"
        :key="index"
        :class="{active:index===currenIndex}"
        @click="titleClick(index)"
      >{{item}}</div>
    </div>
  </app-navbar>
</template>
<script>
import NavBar from "../../../components/common/navbar/NavBar";
export default {
  name: "detailNavBar",
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currenIndex: 0
    };
  },
  components: {
    "app-navbar": NavBar
  },
  methods: {
    titleClick(index) {
      this.currenIndex = index;
    },
    back() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
.title {
  display: flex;
  justify-content: space-around;
  font-size: 14px;
}
.active {
  color: red;
}
img {
  margin-top: 10px;
}
</style>