<template>
  <!-- 推荐模块 -->
  <div class="recommend">
    <div v-for="(item,index) in recommend" :key="index" class="item">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "recommend",
  props: {
    recommend: {
      type: Array
    }
  }
};
</script>
<style scoped>
.recommend {
  display: flex;
  width: 100%;
  /* overflow: hidden; */
  /* justify-content: center; */
  /* align-items: center; */
  font-size: 12px;
  text-align: center;
  padding: 10px 0 20px;
  border-bottom: 5px solid #eee;
}
.recommend > .item {
  flex: 1;
}
.recommend > .item img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>