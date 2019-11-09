<template>
  <div>
    <carnav></carnav>
    <div v-for="(item,i) in carlist" :key="i" class="context">
      <input type="checkbox" class="checkbtn" :checked="item.ischeck" @click="checkcon(item)">
      <div class="context-item">id:{{item.id}}</div>
      <div class="context-item">价格:{{item.price}}</div>
      <div class="context-item">数量:{{item.count}}</div>
    </div>
    <div class="carbar">
      <div class="carbtn">
        <div>
        <input type="checkbox" class="check1" 
        :checked="isselectall"
        @click="selectall">全选
        </div>
        </div>
      <div class="carbtn">合计:{{totalprice}}</div>
      <div class="carbtn btnitem">购买</div>
      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'//使用计算属性
import carnav from 'components/navbar/carnav.vue'
export default {
  data(){
    return {
      
      }
  },
  methods:{
    checkcon(item){
      item.ischeck = !item.ischeck
    },
    selectall(){
      if(this.isselectall){
        this.carlist.forEach(item => item.ischeck = false)
      }else{
        this.carlist.forEach(item => item.ischeck = true)
      }
    }
  },
  components:{
    carnav
  },
  computed:{
    ...mapGetters(['carlist']),
    totalprice(){
      return this.$store.state.car.filter(item => {
        return item.ischeck
      }).reduce((preValue,item) => {
        return item.price * item.count + preValue
      },0).toFixed(2)
    },
    isselectall(){
      //return !(this.carlist.filter(item => !item.ischeck).length);
      if(this.carlist == 0){
        return false
      }
        return !(this.carlist.find(item => !item.ischeck))
      
      
    }
    
  }
}
</script>

<style scoped>
.checkbtn{
  width: 20px;
  height: 20px;
  margin-top: 40px;
  border: 1px solid red;
  border-radius: 50%
}
.check1{
  width: 20px;
  height: 20px;
  
  }
.context{
  background-color: #eee;
  width: 100%;
  height: 100px;
  display: flex;
}
.context-item{
  flex: 1;
  line-height: 100px;
  text-align: center
}
.carbar{
  height: 40px;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 49px;
}
.carbtn{
  flex: 1;
  line-height: 40px;
  text-align: center
}
.btnitem{
  background-color: orange;
  color: #fff;
}
</style>
