<template>
<div id="app">
  <router-view></router-view>
  <tab-bar>
    <tab-item path="/home" activeColor="pink">
      <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="./assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-item>
    <tab-item path="/category" activeColor="pink">
      <img slot="item-icon" src="./assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="./assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-item>
    <tab-item path="/cart" activeColor="pink">

      <img slot="item-icon" src="./assets/img/tabbar/shopcart.svg" alt="">
      <img slot="item-icon-active" src="./assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-item>
    <tab-item path="/profile" activeColor="pink">
      <img slot="item-icon" src="./assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="./assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-item>


  </tab-bar>
</div>
</template>

<script>

import TabBar from "./components/common/tabar/TabBar";
import TabItem from "./components/common/tabar/TabarItem";
export default {
  name: 'App',
  components: {
    TabBar,
    TabItem
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
