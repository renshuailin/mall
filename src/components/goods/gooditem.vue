<template>
  <div class="gooditem">
    <img :src="gooditem.show.img" alt />
    <div class="goodinfo">
      <p>{{gooditem.title}}</p>
      <span class="price">￥{{gooditem.price}}</span>
      <span class="collection">{{gooditem.cfav}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "gooditem",
  props: {
    gooditem: {
      type: Object
    }
  }
};
</script>
<style scoped>
.gooditem {
  padding-bottom: 40px;
  position: relative;
  width: 45%;
}
.gooditem img {
  width: 100%;
  border-radius: 5px;
  display: block;
}
.goodinfo {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goodinfo p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goodinfo .price {
  color: brown;
  margin-right: 20px;
}
.goodinfo .collection {
  position: relative;
}
.goodinfo .collection:before {
  content: "";
  position: absolute;
  left: -13px;
  top: -1px;
  width: 14px;
  height: 14px;
  display: block;
  background: url("../../assets/img/common/collect.svg") 0 0/14px 14px no-repeat;
}
</style>