import {
  request
} from "./request";
export function getDetailData(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

//推荐
export function getRecommend() {
  return request({
    url: '/recommend',
  })
}

//整合多个数据 价格
export class DetailGood {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.lowNowPrice = itemInfo.lowNowPrice
  }
}
//详情
export class DetailShop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.count = shopInfo.cGoods
  }
}
//尺寸
export class DetailParam {
  constructor(info, rule) {
    this.image = info.image ? info.image[0] : ''
    this.infos = info.set
    this.size = rule.tables
  }
}