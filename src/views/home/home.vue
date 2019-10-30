<template>
  <div>
  <navbar class="nav-home">
    <p slot="center">首页</p>
  </navbar>
  <h1>首页</h1>
  </div>
</template>

<script>
import navbar from 'components/navbar/navbar.vue'
export default {
  components:{
    navbar
  }

}
</script>

<style>
.nav-home{
  background-color: crimson;
  color: aliceblue;
}

</style>