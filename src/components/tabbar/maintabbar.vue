<template>

  <tabbar>
  <tabbari path='/home'>
    <img slot="icon" src="~assets/image/tabbar/shouye.png" alt="">
    <img slot="icon-active" src="~assets/image/tabbar/shouye1.png" alt="">
    <div slot="world">首页</div>
  </tabbari>
  <tabbari path='/category'>
    <img slot="icon" src="~assets/image/tabbar/feilei.png" alt="">
    <img slot="icon-active" src="~assets/image/tabbar/feilei1.png" alt="">
    <div slot="world">分类</div>
  </tabbari>
  <tabbari path='/cart'>
    <img slot="icon" src="~assets/image/tabbar/gouwuche.png" alt="">
    <img slot="icon-active" src="~assets/image/tabbar/gouwuche1.png" alt="">
    <div slot="world">购物车</div>
  </tabbari>
  <tabbari path='/profile'>
    <img slot="icon" src="~assets/image/tabbar/wode.png" alt="">
    <img slot="icon-active" src="~assets/image/tabbar/wode1.png" alt="">
    <div slot="world">我的</div>
  </tabbari>
</tabbar>

</template>

<script>
import tabbar from "./tabbar.vue"
import tabbari from "./tabbaritem.vue"
export default {
    components:{
        tabbar,
        tabbari

    }

}
</script>

<style>

</style>