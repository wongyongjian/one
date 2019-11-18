<template>
    <div  class="tab-bar-item" @click="itemClick">
        <div v-if="!isactive"><slot name="icon"></slot></div>
        <div v-else><slot name="icon-active"></slot></div>
        <div :class={active:isactive}><slot name="world"></slot></div>
    </div>
</template>
<style lang="css">
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  
}
.tab-bar-item img{
    width: 24px;
    height: 24px;
}
.active{
    color:palevioletred
}

</style>
<script>
export default {
    props:{
       path:String
    },
    data(){
        return{
            //isactive:true
        }
    },
    computed:{
        isactive(){
            return this.$route.path.indexOf(this.path) != -1
        }

    },
    methods:{
        itemClick(){
            if(this.$route.path!=this.path){
            this.$router.replace(this.path)
            }
        }

    }
}
</script>