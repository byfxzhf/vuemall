<template>
<div id="home" >
  <nav-bar class="home-nav">
    <div slot="center">购物街</div>
  </nav-bar>
  <home-swiper :banners="banners"></home-swiper>
  <home-recommend-view :recommends="recommends"></home-recommend-view>
  <feature-view></feature-view>
  <tab-control  :titles="['流行','新款','精选']" class="home-tab-control"></tab-control>
<!--  <ul>-->
<!--    <li>111</li>-->
<!--    <li>111</li>-->
<!--    <li>111</li>-->
<!--    <li>111</li>-->
<!--    <li>111</li>-->
<!--    <li>111</li>-->
<!--    <li>111</li>-->
<!--    <li>111</li>-->
<!--    <li>111</li>-->
<!--  </ul>-->
</div>
</template>

<script>

import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import HomeRecommendView from "@/views/home/childComps/HomeRecommendView";
import FeatureView from "@/views/home/childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl";



import {getHomeMultidata} from "@/network/home";

export default {
  name: "Home",
  components:{
    HomeSwiper,
    HomeRecommendView,
    FeatureView,

    NavBar,
    TabControl
  },
  data(){
    return{
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'news':{page:0,list:[]},
        'sell':{page:0,list:[]}
      }
    }
  },
  created() {
    //1.请求多个数据
    getHomeMultidata().then(res=>{
      console.log(res);
      this.banners=res.data.banner.list;
      this.recommends=res.data.recommend.list
    })
  }
}
</script>

<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color:#fff;

  position: fixed;
  left: 0;
  right:0;
  top: 0;
  z-index: 9;

}

.home-tab-control{
  /*两个要混合使用*/
  position: sticky;
  top: 43px;/*顶部navbar的高度*/
  z-index: 9;
}

</style>
