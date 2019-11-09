<template>
  <Navbar>
        <template #center>
            <div class="nav">
                <div v-for="(item,index) in titles" :key="item" 
                class="titlesitem"
                :class="{active:index == currentindex }" 
                @click="clicktitle(index)">
                {{item}}
                </div>
            </div>
        </template>
  </Navbar>
</template>

<script>
import Navbar from './navbar.vue'
import { log } from 'util';
export default {
    data(){
        return{
            titles:['one','two','three','four'],
            currentindex:0

        }
    },
    methods:{
        clicktitle(index){
            this.currentindex = index;
            this.$emit('clicktitle', index)
        },

    },
    components:{
        Navbar
    }

}
</script>

<style scoped>

.nav{
    /*flex布局*/
    display: flex
}
.titlesitem{
    flex: 1
}
.active{
    color: crimson
}
.backimg img{
    margin-top: 12px;
   width: 20px;

}
</style>>


