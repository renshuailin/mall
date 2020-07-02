export default {
  addCart(context, payload) {
    let oldProduct = null;
    for (const item of context.state.cartList) {
      if (item.id === payload.id) {
        oldProduct = item;
      }
    }
    if (oldProduct) {
      // oldProduct.count += 1;
      context.commit("addCount", oldProduct);
    } else {
      payload.count = 1;
      // context.state.cartList.push(payload);
      context.commit("addToCart", payload);
    }
  },
};
