<template>
  <div id="home">
    <nav-bar class="home-nav">
      <h3 slot="center">123</h3>
    </nav-bar>

    <!-- 做一个假的tabcontrol -->
    <app-tabControl
      :title="['流行', '新款', '精选']"
      @tabclick="tabclick"
      ref="faketabControl"
      class="fakeTab"
      v-show="isTabFixed"
    />

    <app-scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @scroll="contentScroll"
      :pullUpLoad="true"
      @pullingUp="load"
    >
      <app-swiper :banner="banner" @swiperImgLoad="swiperImgLoad" />
      <app-rmd :recommend="recommend" />
      <app-weekpop />
      <app-tabControl
        :title="['流行', '新款', '精选']"
        @tabclick="tabclick"
        ref="tabControl"
        :class="{ fixed: isTabFixed }"
      />
      <app-goodlist :goods="goods[current].list" />
    </app-scroll>
    <app-backTop @click.native="backtop" v-show="isShow" />
  </div>
</template>

<script>
//添加导航条
import NavBar from "components/common/navbar/NavBar";

//添加轮播图模块
import homeswiper from "./Child/Homeswiper";

//添加推荐模块
import recommend from "./Child/recommend";

//添加每周流行模块
import weekpop from "./Child/weekpop";

//添加菜单选项卡模块
import tabControl from "components/content/tabControl/tabControl";

//添加商品列表模块
import goodlist from "components/goods/goodlist";

//获取network/home axios请求
import { getHomeData, getGoods } from "network/home";
//引入封装better-scroll
import Scroll from "components/common/scroll/Scroll";
//引入[mixin]backto(返回顶部)按钮
import { backtoTop } from "common/mixin";
export default {
  name: "Home",
  components: {
    NavBar,
    "app-swiper": homeswiper,
    "app-rmd": recommend,
    "app-weekpop": weekpop,
    "app-tabControl": tabControl,
    "app-goodlist": goodlist,
    "app-scroll": Scroll
  },
  mixins: [backtoTop],
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      current: "pop",

      taboffsetTop: 0,
      isTabFixed: false,
      saveY: 0
    };
  },
  created() {
    this.HomeData();
    this.HomeGoods("pop");
    this.HomeGoods("new");
    this.HomeGoods("sell");
  },
  mounted() {
    //获取tabcontrol组件元素
    //监听img加载完成
    this.$bus.$on("itemImgLoad", () => {
      // console.log(321321);
      //
      this.$refs.scroll.scroll.refresh();
    });
  },
  methods: {
    //监听轮播图加载
    swiperImgLoad() {
      this.taboffsetTop = this.$refs.tabControl.$el.offsetTop;
    },

    //home上拉加载更多
    load() {
      this.HomeGoods(this.current);
      // this.$refs.scroll.scroll.refresh();
    },
    //home滚动事件
    contentScroll(position) {
      //判断标签是佛显示
      // console.log(position.y);
      this.isShow = -position.y > 1000;

      //判断tabControl是否吸顶
      this.isTabFixed = -position.y > this.taboffsetTop;
    },
    //tab栏事件监听
    tabclick(index) {
      switch (index) {
        case 0:
          this.current = "pop";
          break;
        case 1:
          this.current = "new";
          break;
        case 2:
          this.current = "sell";
          break;
      }
      this.$refs.tabControl.currentIndex = index;
      this.$refs.faketabControl.currentIndex = index;
    },
    //backtop监听 点击回到y0

    //网络
    //封装home的数据请求
    HomeData() {
      getHomeData().then(res => {
        // console.log(res);

        this.banner = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
      });
    },
    //封装goods的数据请求 接收实参（type）
    HomeGoods(type) {
      const page = this.goods[type].page + 1;
      getGoods(type, page).then(res => {
        // console.log(res.data.data.list);

        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
        //调用better-scroll finishPullUp() 以便多次上拉加载
        this.$refs.scroll.scroll.finishPullUp();
      });
    }
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.currentY();
    //取消事件
    this.$bus.$off("itemImgLoad", () => {
      this.$refs.scroll.scroll.refresh();
    });
    console.log(this.saveY);
  }
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: pink;
  color: #fff;
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9; */
}
/* .fixed {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
} */
.fakeTab {
  position: relative;
  z-index: 9;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}
</style>
