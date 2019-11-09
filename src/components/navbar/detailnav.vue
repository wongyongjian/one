<template>
  <Navbar>
      <template #left>
        <div class="icon" @click="iconclick">
              <img src="~assets/image/tabbar/back.png" alt="">
        </div>
      </template>
      <template #center>
          <div class="center">
              <div v-for="(item,index) in titles" :key="index" 
              @click="titleclick(index)"
              :class="{active:cindex == index}"
              class="centeri">{{item}}</div>
          </div>
      </template>
  </Navbar>
</template>

<script>
import Navbar from './navbar.vue'
export default {
    data(){
        return{
            titles:['商品','评价','热门'],
            cindex:0
        }
    },
    methods:{
        iconclick(){
            this.$router.back()
        },
        titleclick(index){
            this.cindex = index
        }

    },
    components:{
        Navbar
    }

}
</script>

<style scoped>
.icon{
    width: 60px;
    height: 44px;
}
.icon img{
    width: 20px;
    height: 20px;
    margin-top: 13px
    
}
.center{
    display: flex
}
.centeri{
    flex: 1
}
.active{
    color: crimson
}
</style>>

