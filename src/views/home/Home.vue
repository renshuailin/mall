<template>
  <div id="home">
    <nav-bar class="home-nav">
      <h3 slot="center">123</h3>
    </nav-bar>
    <app-swiper :banner="banner" />
    <app-rmd :recommend="recommend" />
  </div>
</template>

<script>
//添加导航条
import NavBar from "components/common/navbar/NavBar";

//添加轮播图模块
import homeswiper from "./Child/Homeswiper";

//添加推荐模块
import recommend from "./Child/recommend";

//获取network/home axios请求
import { getHomeData } from "network/home";
export default {
  name: "Home",
  components: {
    NavBar,
    "app-swiper": homeswiper,
    "app-rmd": recommend
  },
  data() {
    return {
      banner: [],
      recommend: []
    };
  },
  created() {
    getHomeData().then(res => {
      console.log(res);

      this.banner = res.data.data.banner.list;
      this.recommend = res.data.data.recommend.list;
    });
  }
};
</script>

<style scoped>
.home-nav {
  background-color: pink;
  color: #fff;
}
</style>
