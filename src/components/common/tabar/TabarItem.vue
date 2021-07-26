<template>
<div class="tab-bar-item"  @click="itemClick()">
  <div  v-if="!isActive">
    <slot name="item-icon">

    </slot>
  </div>
  <div v-else>
    <slot name="item-icon-active">

    </slot>
  </div>
  <div :class="activeStyle">
    <slot name="item-text"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: "TabaItem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:"red"
    }
  },
  data(){
    return{
      //isActive:true
    }
  },methods:{
    itemClick(){
      this.$router.replace(this.path).catch(error=>{error})
    }
  },
  computed:{
    isActive(){
      //console.log(this.$route.path.indexOf(this.path));
      return this.$route.path.indexOf(this.path)!==-1
    },
    activeStyle(){
      //  console.log(this.activeColor)
      return this.isActive?{color:this.activeColor}:{}
    }
  }
}
</script>

<style scoped>
.tab-bar-item{
  text-align: center;
  height: 49px;
  flex: 1;
  font-size: 14px;
  margin-bottom: 2px;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
.active{
  color: red;
}
</style>
