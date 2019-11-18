<template>
<div>
    <keep-alive>
    <router-view></router-view>
    </keep-alive>

<mtabbar></mtabbar>
</div>
</template>

<script>
import mtabbar from 'components/tabbar/maintabbar.vue'
export default {
  name: 'app',
  components: {
    mtabbar
  },
  
}
</script>

<style>
@import "./assets/css/base.css";
</style>
