<template>
  <Navbar class="carnav">

      <template #center>
          <div>购物车（{{carlist.length}}）</div>
      </template>

  </Navbar>
</template>

<script>
import Navbar from './navbar.vue'
import {mapGetters} from 'vuex'
export default {
    components:{
        Navbar
    },
    computed:{
    ...mapGetters(['carlist'])
  }

}
</script>

<style>
.carnav{
    background-color: crimson;
    color: #fff;
}

</style>