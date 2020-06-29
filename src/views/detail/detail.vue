<template>
  <div id="detail">
    <app-detailNavBar class="detailNav" />
    <app-Scroll class="content" ref="scroll">
      <app-detailSwiper :Carousel="Carousel" />
      <app-detailInfo :goods="Goods" />
      <app-detailShop :shop="shop" />
      <app-detailGoodInfo :detailInfo="detailInfo" @imageLoad="imageLoad" />
      <app-detailParam :paramInfo="detailParam" />
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
        <li>31</li>
        <li>32</li>
        <li>33</li>
        <li>34</li>
        <li>35</li>
        <li>36</li>
        <li>37</li>
        <li>38</li>
        <li>39</li>
        <li>40</li>
        <li>41</li>
        <li>42</li>
        <li>43</li>
        <li>44</li>
        <li>45</li>
        <li>46</li>
        <li>47</li>
        <li>48</li>
        <li>49</li>
        <li>50</li>
        <li>51</li>
        <li>52</li>
        <li>53</li>
        <li>54</li>
        <li>55</li>
        <li>56</li>
        <li>57</li>
        <li>58</li>
        <li>59</li>
        <li>60</li>
        <li>61</li>
        <li>62</li>
        <li>63</li>
        <li>64</li>
        <li>65</li>
        <li>66</li>
        <li>67</li>
        <li>68</li>
        <li>69</li>
        <li>70</li>
        <li>71</li>
        <li>72</li>
        <li>73</li>
        <li>74</li>
        <li>75</li>
        <li>76</li>
        <li>77</li>
        <li>78</li>
        <li>79</li>
        <li>80</li>
        <li>81</li>
        <li>82</li>
        <li>83</li>
        <li>84</li>
        <li>85</li>
        <li>86</li>
        <li>87</li>
        <li>88</li>
        <li>89</li>
        <li>90</li>
        <li>91</li>
        <li>92</li>
        <li>93</li>
        <li>94</li>
        <li>95</li>
        <li>96</li>
        <li>97</li>
        <li>98</li>
        <li>99</li>
        <li>100</li>
      </ul>
    </app-Scroll>
  </div>
</template>
<script>
import detailSwiper from "./Child/detailSwiper";
import detailNavBar from "./Child/detailNavBar";
import {
  getDetailData,
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

//引入better-scroll
import Scroll from "components/common/scroll/Scroll";
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
      detailParam: {}
    };
  },
  components: {
    "app-Scroll": Scroll,
    "app-detailNavBar": detailNavBar,
    "app-detailSwiper": detailSwiper,
    "app-detailInfo": detailInfo,
    "app-detailShop": detailShop,
    "app-detailGoodInfo": detailGoodInfo,
    "app-detailParam": detailParam
  },
  created() {
    // console.log(123);

    // console.log(this.$route.params.id);
    //使用动态路由把商品的id传过来，源为gooditem
    this.id = this.$route.params.id;

    getDetailData(this.id).then(res => {
      console.log(res);
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
    });
    //根据id
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.scroll.refresh();
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
  height: calc(100% - 44px);
}
</style>