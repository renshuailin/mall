export const itemMixin = {
  //解决上拉卡顿
  mounted() {
    this.$bus.$on("itemImgLoad", () => {
      this.$refs.scroll.scroll.refresh();
    })
    console.log(123123123);

  },
}

import backTop from "components/content/backTop/backTop";
export const backtoTop = {
  components: {
    "app-backTop": backTop
  },
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    backtop() {
      this.$refs.scroll.scrollTo(0, 0);
      // console.log(this.$refs.scroll);
    }
  },
}