<template>
  <div ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import bscroll from 'better-scroll'
export default {
    props:{
        probeType:{
            type:Number,
            default:0}
    },
    data(){
        return{
            scroll:null
        }
    },
    methods:{
        scrollTo(x,y,time){
            this.scroll.scrollTo(x,y,time)
        }
    },
    mounted(){
        this.scroll = new bscroll(this.$refs.wrapper,{
            probeType:this.probeType,
            click:true
            })
        this.scroll.on('scroll',(position) => {
            //console.log(position)
            this.$emit('scroll',position)
        })
    }
}
</script>

<style>


</style>