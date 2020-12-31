<!--  -->
<template>
  <div class="tab-bar-item" @click="btnClick">
      <!-- <slot></slot> -->
      <slot v-if="!isActive" name="item-icon"></slot>
      <div v-else><slot name="item-icon-active"></slot></div>
      <!-- <div :class="{active:isActive}"><slot name="item-text"></slot></div> -->
      <div :style="activeStyle"><slot name="item-text"></slot></div>
      <!-- <img src="../../assets/img/home.svg" alt=""> -->
  </div>
</template>

<script>
export default {
data() {
  return {
    // isActive:true
  }
},
props:{
  path:String,
  activeColor:{
    title:String,
    default:'#1afa29'
  }
},
computed:{
  isActive(){
    return this.$route.path.indexOf(this.path) !== -1
  },
  activeStyle() {
    return this.isActive ? {color:this.activeColor}:{}
  }
},
methods:{
  btnClick() {
    this.$router.push(this.path);
  }
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style scoped>
/* @import url(); 引入css类 */

.tab-bar-item {
  /* flex: 1;
  text-align: center; */
  height: 49px;
  /* display: inline-block; */
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  position: relative;
  left: 4px;
  top: 4px;
}
.tab-bar-item img:nth-child(3) {
  left: 8px;
}
.tab-bar-item div {
  margin-top: -1px;
}
/* .active {
  color:#1afa29;
} */
</style>