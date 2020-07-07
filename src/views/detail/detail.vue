<template>
  <div id="detail">
    <app-detailNavBar class="detailNav" @titleClick="titleClick" ref="nav" />
    <app-Scroll class="content" ref="scroll" @scroll="detailscroll" :probeType="3">
      <app-detailSwiper :Carousel="Carousel" />
      <app-detailInfo :goods="Goods" />
      <app-detailShop :shop="shop" />
      <app-detailGoodInfo :detailInfo="detailInfo" @imageLoad="imageLoad" />
      <app-detailParam :paramInfo="detailParam" ref="detailParam" />
      <app-detailComments :commentInfo="comments" ref="comments" />
      <app-goodlist :goods="recommend" ref="recommend" />
    </app-Scroll>
    <app-backTop @click.native="backtop" v-show="isShow" />
    <app-detailCart @detailCart="detailCart" />
    <app-toast :msg="msg" :isShow="show" />
  </div>
</template>
<script>
import detailSwiper from "./Child/detailSwiper";
import detailNavBar from "./Child/detailNavBar";
import {
  getDetailData,
  getRecommend,
  DetailGood,
  DetailShop,
  DetailParam
} from "network/detail";
//引入商品信息
import detailInfo from "./Child/detailInfo";

//引入商铺信息
import detailShop from "./Child/detailShop";

//引入商品详情
import detailGoodInfo from "./Child/detailGoodInfo";

//引入商品详情
import detailParam from "./Child/detailParam";

//引入商品评论
import detailComments from "./Child/detailComments";

//引入公共组件goodlist
import goodlist from "components/goods/goodlist";

//引入better-scroll
import Scroll from "components/common/scroll/Scroll";

//引入底部购物车
import detailCart from "./Child/detailCart";

//
import toast from "components/common/toast/toast";

//引入mixin
import { itemMixin, backtoTop } from "common/mixin";
export default {
  name: "detail",
  data() {
    return {
      id: null,
      Carousel: [],
      Goods: {},
      shop: {},
      //直接获取详情
      detailInfo: {},
      //尺寸
      detailParam: {},
      //评论
      comments: {},
      //推荐
      recommend: [],
      //点击滚动
      themeTop: [],
      //保存滚动y值
      positionY: 0,
      //toast文字
      msg: "",
      //toast显示
      show: false
    };
  },
  mixins: [itemMixin, backtoTop],
  components: {
    "app-Scroll": Scroll,
    "app-detailNavBar": detailNavBar,
    "app-detailSwiper": detailSwiper,
    "app-detailInfo": detailInfo,
    "app-detailShop": detailShop,
    "app-detailGoodInfo": detailGoodInfo,
    "app-detailParam": detailParam,
    "app-detailComments": detailComments,
    "app-goodlist": goodlist,
    "app-detailCart": detailCart,
    "app-toast": toast
  },
  created() {
    // console.log(123);

    // console.log(this.$route.params.id);
    //使用动态路由把商品的id传过来，源为gooditem
    this.id = this.$route.params.id;
    //请求详情数据
    getDetailData(this.id).then(res => {
      console.log(res);
      //获取轮播图
      this.Carousel = res.data.result.itemInfo.topImages;
      //从封装类中获取价格相关信息
      this.Goods = new DetailGood(
        res.data.result.itemInfo,
        res.data.result.columns,
        res.data.result.shopInfo.services
      );
      //从封装类中获取商铺相关信息
      this.shop = new DetailShop(res.data.result.shopInfo);
      //直接获取详情
      this.detailInfo = res.data.result.detailInfo;
      //从封装中获取尺寸信息
      this.detailParam = new DetailParam(
        res.data.result.itemParams.info,
        res.data.result.itemParams.rule
      );
      //评论信息
      if (res.data.result.rate.cRate != 0) {
        this.comments = res.data.result.rate.list[0];
      }
      this.$nextTick(() => {});
    });
    //请求推荐数据
    getRecommend().then(res => (this.recommend = res.data.data.list));
  },
  mounted() {
    //解决上拉卡顿 抽离mixin
    // this.$bus.$on("itemImgLoad", () => {
    //   this.$refs.scroll.scroll.refresh();
    // });
  },

  destroyed() {
    this.$bus.$off("itemImgLoad", () => {
      this.$refs.scroll.scroll.refresh();
    });
  },
  methods: {
    backtop() {
      this.$refs.scroll.scrollTo(0, 0);
      // console.log(this.$refs.scroll);
    },
    //加入购物车
    detailCart() {
      //数据打包 发送至购物车
      const product = {};
      product.img = this.Carousel[0];
      product.title = this.Goods.title;
      product.desc = this.Goods.desc;
      product.price = this.Goods.lowNowPrice;
      product.id = this.id;

      this.$store.dispatch("addCart", product).then(res => {
        this.msg = res;
        this.show = true;
        setTimeout(() => {
          this.show = false;
        }, 1000);
      });
      // console.log(product);
    },
    imageLoad() {
      this.$refs.scroll.scroll.refresh();

      //点击滚动指点位置
      this.themeTop = [];
      this.themeTop.push(0);
      this.themeTop.push(this.$refs.detailParam.$el.offsetTop);
      this.themeTop.push(this.$refs.comments.$el.offsetTop);
      this.themeTop.push(this.$refs.recommend.$el.offsetTop);
      this.themeTop.push(Number.MAX_VALUE);
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTop[index], 200);
    },
    detailscroll(position) {
      this.isShow = -position.y > 1000;
      const positionY = -position.y;
      for (let i = 0; i < this.themeTop.length - 1; i++) {
        if (positionY >= this.themeTop[i] && positionY < this.themeTop[i + 1]) {
          this.$refs.nav.currenIndex = i;
        }
      }
    }
  }
};
</script>
<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}

.detailNav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.content {
  height: calc(100% - 44px - 60px);
}
</style>
