<template>
  <!-- 抽离轮播图组件 -->
  <Swiper>
    <SwiperItem v-for="(item,index) in banner" :key="index">
      <a :href="item.link">
        <img :src="item.image" @load="imgLoad" />
      </a>
    </SwiperItem>
  </Swiper>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  name: "Homeswiper",
  data() {
    return {
      isLoad: false
    };
  },
  props: {
    banner: {
      type: Array
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imgLoad() {
      if (!this.isLoad) {
        this.$emit("swiperImgLoad");
        this.isLoad = true;
      }
    }
  }
};
</script>