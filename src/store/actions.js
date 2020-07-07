export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = null;
      for (const item of context.state.cartList) {
        if (item.id === payload.id) {
          oldProduct = item;
        }
      }
      if (oldProduct) {
        // oldProduct.count += 1;
        context.commit("addCount", oldProduct);
        resolve("当前数量+1");
      } else {
        payload.count = 1;
        // context.state.cartList.push(payload);
        context.commit("addToCart", payload);
        resolve("商品已添加至购物车");
      }
    });
  },
};
