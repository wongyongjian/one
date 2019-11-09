<template>
<div>
  <detnav></detnav>
  id:{{$route.query.id}}
  price:{{$route.query.price}}
  <div class="detail">
    <div class="detail-bar">店铺</div>
    <div class="detail-bar">收藏</div>
    <div class="detail-bar carbtn" @click="carbtnclick">加入购物车</div>
    <div class="detail-bar paybtn">立即购买</div>
  </div>
</div>
  
</template>

<script>
import detnav from 'components/navbar/detailnav.vue'
export default {

  data(){
    return{
      
    }
  },
  methods:{
    carbtnclick(){
      const goodsmsg = {}
        goodsmsg.id = this.$route.query.id;
        goodsmsg.price = this.$route.query.price;
        goodsmsg.count = this.$route.query.count;
        goodsmsg.ischeck = this.$route.query.ischeck;
      this.$store.commit('addcar',goodsmsg)
      
    }
  },
  components:{
    detnav
  }

}
</script>

<style scoped>


.detail{
  width: 100%;
  height: 49px;
  background-color: #eee;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
}
.detail-bar{
  flex: 1;
  text-align: center;
  line-height: 49px;
}
.carbtn{
  background-color: orange;
  color: aliceblue;
}
.paybtn{
  background-color: crimson;
  color: aliceblue
}


</style>>
