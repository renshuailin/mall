<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item,index) in Carousel" :key="index">
      <a :href="item.link">
        <img :src="item" alt />
      </a>
    </swiper-item>
  </swiper>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  name: "detailSwiper",
  props: {
    Carousel: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: { Swiper, SwiperItem }
};
</script>
<style  scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>