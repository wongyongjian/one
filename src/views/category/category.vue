<template>
<div>
  <div v-for="(item,i) in results" :key="i"><img :src="item.img" alt=""></div>
</div>

</template>

<script>
import homenav from 'components/navbar/homenav.vue'
import {request} from 'network/request.js'
export default {
  data(){
    return{
      results:[]
    }
  },
  components:{
    homenav
  },
 created(){
  request({
    url:"/ball"
  }).then(res =>{
    this.results.push(...res.data.footballs)
  }).catch(err =>{
      console.log(err);
  })
 }
  
//  mounted(){

//         axios.get('www.text.com').then(res=>{

//             // this.data1 = res.data;

//             console.log(res);

//         })

//     }

}
</script>

<style>

</style>