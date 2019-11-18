<template>
  <div class="home">
    
  <navbar class="nav-home">
    <template v-slot:center><p>首页</p></template>
    <!--v-slot 就是用template v-slot（简写#）包裹填充的内容-->
  </navbar>
  <homenav ref="homenav1" class="hnav" v-show="isshowhomenav" @clicktitle="clicktitle"></homenav>
  <BScroll class="warpper" ref="scroll" :probe-type="3" @scroll="conscroll" >
    <img src="~assets/image/tabbar/tianchong.jpg" alt="" class="imgs">
    <homenav ref="homenav2" v-show="!isshowhomenav" @clicktitle="clicktitle"></homenav>
    <div class="goodslist">
      <div v-for="(box,i) in 100" :key="i" class="goods" @click="imgclick(i)" >
      <img v-lazy="imgurl" alt="" @load="imgload">
      </div>
      </div>
  </BScroll>
  <Backtop @click.native="backtopclick" v-show="isshow"></Backtop>
  </div>
</template>

<script>
import BScroll from 'components/scroll/scroll.vue'
import navbar from 'components/navbar/navbar.vue'
import homenav from 'components/navbar/homenav.vue'
import Backtop from 'components/backtop/backtop.vue'
import { log } from 'util'

export default {
  data(){
    return{
     isshow:false,
     homenavH:0,
     isshowhomenav:false,
     imgurl:require("assets/image/tabbar/workspaces.jpg"),
    }
  },
  components:{
    navbar,
    BScroll,
    Backtop,
    homenav
  },
  methods:{
    //返回顶部
    //this.$refs.scroll拿到组件，使用组件中的方法
    backtopclick(){
      this.$refs.scroll.scrollTo(0,0,1000)
    },
    //判断返回顶部是否消失
    conscroll(position){
      this.isshow = -position.y > 600
      this.isshowhomenav = -position.y > this.homenavH

    },
    clicktitle(index){
      //console.log(index);
      switch (index) {
        case 0:
          this.imgurl = require("assets/image/tabbar/workspaces.jpg")
          break;
          case 1:
          this.imgurl = require("assets/image/tabbar/room.jpg")
          break;
          case 2:
          this.imgurl = require("assets/image/tabbar/cheer.jpg")
          break;
          case 3:
          this.imgurl = require("assets/image/tabbar/zuozi.jpg")
          break;
      }
      this.$refs.homenav1.currentindex = index;
      this.$refs.homenav2.currentindex = index

    },
    imgclick(i){
      
      this.$router.push({
        path:'/detail',
        query:{
          id:i,
          price:(i*2),
          count:0,
          ischeck:true
        }
      })
      
    },
    imgload(){
      this.$refs.scroll.refresh
    }
  },

  mounted(){
    this.homenavH = this.$refs.homenav2.$el.offsetTop
    //组件没有offsetTop方法，通过$el获取组件内部的元素的offsetTop（高度）
  },

}
</script>

<style>
.home{
  position: relative;
  height: 100vh;
}
.nav-home{
  background-color: crimson;
  color: aliceblue;
}
.warpper{
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.hnav{
  z-index: 9;
  position: relative;
  background-color: aliceblue
}
.goodslist{
  display: flex;
  flex-wrap: wrap;
  
}
.goods{
  
  margin: 5px;
  flex: 1
}
.goods img{
  width: 177.5px;
  height: 200px;
}
.imgs{
  width: 100%;
  height: 200px;
}

</style>