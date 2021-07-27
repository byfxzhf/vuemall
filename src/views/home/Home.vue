<template>
<div id="home" >
  <nav-bar class="home-nav">
    <div slot="center">购物街</div>
  </nav-bar>
  <home-swiper :banners="banners"></home-swiper>
  <home-recommend-view :recommends="recommends"></home-recommend-view>
  <feature-view></feature-view>
</div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import HomeRecommendView from "@/views/home/childComps/HomeRecommendView";
import {getHomeMultidata} from "@/network/home";
import FeatureView from "@/views/home/childComps/FeatureView";


export default {
  name: "Home",
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView
  },
  data(){
    return{
      banners:[],
      recommends:[],
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
#home{
  padding-top: 44px;
}
.home-nav{
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
</style>
